import { useRef } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  WindowScroller,
} from "react-virtualized";

type VirtualizedProps = {
  dataLength: number;
  onRender: (index: number) => React.ReactElement;
};

export function Virtualized(props: VirtualizedProps) {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  return (
    <WindowScroller>
      {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <div ref={registerChild}>
              <List
                autoHeight
                width={width}
                height={height}
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                rowCount={props.dataLength}
                scrollTop={scrollTop}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                overscanRowCount={5}
                rowRenderer={({ key, index, style, parent }) => (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>{props.onRender(index)}</div>
                  </CellMeasurer>
                )}
              />
            </div>
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
}
