import React from "react";
import { List, Avatar, Icon } from "antd";
import axios from "axios";
import Like from "../components/Like";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Units = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 4
      }}
      dataSource={props.data}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="star-o" text={<Like filmID={item.id} />} />,
            <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/units/${item.id}`}>{item.title}</a>}
            description={item.description}
            likes={item.likes}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Units;
