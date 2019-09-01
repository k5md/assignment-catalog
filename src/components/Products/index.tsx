import React from 'react';
import { Table, CellRendererProps } from '../';

const headers = ['id', 'name', 'type', 'color', 'size', 'inStock', 'dateReceipt'];

const cellRenderer: React.FC<CellRendererProps> = ({
	cellData,
	dataKey,
}) => (
	<div style={{backgroundColor: dataKey === 'color' ? cellData : 'unset'}}>
		{cellData.toString()}
	</div>
);

export const Products = ({ items }) => (
	<Table items={items} headers={headers} cellRenderer={cellRenderer} />
);
