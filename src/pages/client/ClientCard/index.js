import React from 'react';
import styles from './index.less';
import { Flex, Tag, WhiteSpace } from 'antd-mobile';

const Index = (props) => {
  const { chart, phone, tagList=['123',456,789,'uuu'] } = props;
  return (
    <div className={styles.cardWarp}>
      <Flex justify={'between'}>
        <Flex>
          <img
            className={styles.avator}
            src='' srcSet={require('@/assets/img/default-avatar.png')} alt='' />
          <Flex.Item className={styles.name} >name</Flex.Item>
          <CustomerTag/>
        </Flex>
        <Flex>
          <Flex className={styles.chatButton}>
            <img className={styles.chatButton__wechat} src={require('@/assets/img/wechat@2x.png')} alt='' />
            <div className={styles.chatButton__name}>Fawixin</div>
          </Flex>
          <Flex className={styles.chatButton}>
            <img className={styles.chatButton__wechat} src={require('@/assets/img/phone@2x.png')} alt='' />
            <div className={styles.chatButton__name}>Fawixin</div>
          </Flex>
        </Flex>
      </Flex>
      <div className={styles.tags}>
        {
          tagList.map((i,index)=>(<span className={styles.tagItem} key={index}>{i }</span>))
        }
      </div>
    </div>
  );
};

export default Index;

//用户标签组件
function CustomerTag(props) {
  const {
    type = false,
    flag = false,
    phone = false,
    positiveWord = '已认证',
    negativeWord = '未认证',
    interviewAlready = '已面访',
    interviewNo = '未面访',
    phoneAlready = '已电访',
    phoneNo = '未电访',
  } = props;
  let word;
  switch (flag) {
    case false:
      switch (type) {
        case false:
          word = negativeWord;
          break;
        default:
          word = positiveWord;
      }
      break;
    default:
      switch (phone) {
        case false:
          switch (type) {
            case false:
              word = interviewNo;
              break;
            default:
              word = interviewAlready;
          }
          break;
        default:
          switch (type) {
            case false:
              word = phoneNo;
              break;
            default:
              word = phoneAlready;
          }
      }
  }
  return (
    <div className={`${styles.customerTag} ${ (word === positiveWord || word === interviewAlready || word === phoneAlready) ? styles.customerTagPositive : null}`}>
      { word }
    </div>
  )
}
