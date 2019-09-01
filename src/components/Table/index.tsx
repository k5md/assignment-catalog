import React from 'react';
import { Column, Table as VirtualizedTable, AutoSizer } from 'react-virtualized';

export interface CellRendererProps {
	cellData,
	dataKey,
}

export interface TableProps {
	items: Array<Object>,
	headers: Array<string>,
	cellRenderer?: React.FC<CellRendererProps>
}

export const Table = ({ items, headers, cellRenderer }: TableProps) => {
	const rowGetter = ({ index }) => items[index];
	return (
		<AutoSizer>
			{({width, height}) => (
				<VirtualizedTable
					width={width}
					height={height}
					headerHeight={36}
					rowHeight={36}
					rowCount={items.length}
					rowGetter={rowGetter}
				>
					{headers.map((header, index)=> (
						<Column
							key={index}
							label={header}
							dataKey={header}
							width={width}
							cellDataGetter={({ rowData }) => rowData[header]}
							cellRenderer={cellRenderer}
						/>
					))}
				</VirtualizedTable>
			)}
		</AutoSizer>
	);
};
