import React from 'react';
import { Table, Layout, Typography } from '@douyinfe/semi-ui';
import '@douyinfe/semi-ui/dist/css/semi.min.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const columns = [
  { title: '管理番号', dataIndex: 'asset_id' },
  { title: '品名', dataIndex: 'type' },
  { title: '状態', dataIndex: 'status' },
  { title: '購入日', dataIndex: 'purchase_date' },
];

const data = [
  { asset_id: 'A001', type: 'パソコン', status: '使用中', purchase_date: '2024-05-01' },
  { asset_id: 'A002', type: 'モニター', status: '修理中', purchase_date: '2023-11-15' },
];

function App() {
  return (
    <Layout style={{ padding: '24px' }}>
      <Header>
        <Title heading={2}>資産管理システム</Title>
      </Header>
      <Content style={{ marginTop: '24px' }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Content>
    </Layout>
  );
}

export default App;
