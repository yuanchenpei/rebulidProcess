import React from 'react';
import { WingBlank, WhiteSpace, Grid, TabBar } from 'antd-mobile';
import CustomTabBar from '../../components/CustomTabBar';
import { topCardOption, menuOption, homeTabBar } from './menuOption';
import styles from './index.less';

const Index = (props) => {
  return (
    <div>
      <WhiteSpace size='md' />
      <Grid
        data={topCardOption}
        columnNum={2}
        hasLine={false}
        square={false}
        renderItem={dataItem => {
          return (
            <div>
              <div>
                <span>{dataItem.title}</span>
              </div>
              <img src={dataItem.imgUrl} alt='' style={{ width: '52px', height: '52px' }} />
            </div>
          );
        }}
      />
      <WhiteSpace size='md' />
      <div className={styles.menuBox}>
        <Grid
          data={menuOption}
          columnNum={4}
          hasLine={false}
          renderItem={dataItem => {
            return (
              <div>
                <img src={dataItem.imgUrl} alt='' style={{ width: '52px', height: '52px' }} />
                <div>
                  <span>{dataItem.title}</span>
                </div>
              </div>
            );
          }}
        />
      </div>
      <CustomTabBar
        data={homeTabBar}
      />
    </div>
  );
};

export default Index;
