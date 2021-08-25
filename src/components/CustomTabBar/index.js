import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';

const Index = (props) => {
  const { data = [] } = props;
  const [selectTab, setSelectTab] = useState(data[0].title || '');

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', paddingBottom: '10px', backgroundColor: '#fff' }}>
      <TabBar
        tintColor={'rgb(234 61 76)'}
        unselectedTintColor={'#999999'}
      >
        {
          data.length && data.map((item, index) => {
            return (
              <TabBar.Item
                key={index}
                title={item.title}
                selected={item.title === selectTab}
                icon={<img src={item.icon} alt='' style={{ width: '22px', height: '22px' }} />}
                selectedIcon={<img src={item.selectedIcon} alt='' style={{ width: '22px', height: '22px' }} />}
                onPress={() => {
                  setSelectTab(item.title);
                }}
              >
                {props.children}
              </TabBar.Item>
            );
          })
        }
      </TabBar>
    </div>

  );
};

export default Index;
