import React from 'react';
import {Tabs,ListView} from 'antd-mobile'
import ClientCard from './ClientCard/index'

const tabs = [
  {title:'全部客户'},
  {title:'最近联系'},
  {title:'新客户'},
]

const Index = (props) => {
  return (
    <div>
      <Tabs
        tabs={tabs}
        onTabClick={()=>{

        }}
      >
        <ListView>
          
        </ListView>
        <ClientCard />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </div>
  );
};

export default Index;
