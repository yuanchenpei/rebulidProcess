import React, { useEffect, useState } from 'react';
import { List, WingBlank, Radio, Button, WhiteSpace } from 'antd-mobile';
import { request } from 'umi';

const Index = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    const questionList = await request('/api/questionList');
    setList(questionList.question.map(i => {
      i.value = null;
      return i;
    }));
  }

  function onSubmit() {
    const answer = list.map(i => {
      return {
        [i.id]: i.value,
      };
    });
    console.log(answer);
  }

  function onReset() {
    const reset = list.map(i => {
      i.value = null;
      return i;
    });
    setList(reset);
  }

  return (
    <div>
      <WingBlank>
        <List>
          {
            list.map((item, index) => {
              return (
                <List.Item key={index}>
                  {index + 1}、{item.title}
                  <List.Item.Brief key={index}>
                    {
                      item.option.map((i, ind) => {
                        return (
                          <Radio.RadioItem
                            key={index + '-' + ind}
                            checked={item.value === i.value}
                            onChange={() => {
                              item.value = i.value;
                              setList(Array.from(new Set([...list, item])));
                            }}
                          >
                            {i.value}、{i.label}
                          </Radio.RadioItem>
                        );
                      })
                    }
                  </List.Item.Brief>
                </List.Item>
              );
            })
          }
          <List.Item>
            <WhiteSpace />
            <Button type='primary' size='small' onClick={onSubmit}>Submit</Button>
            <WhiteSpace />
            <Button size='small' style={{ marginLeft: '2.5px' }} onClick={onReset}>Reset</Button>
          </List.Item>
        </List>
      </WingBlank>
    </div>
  );
};

export default Index;
