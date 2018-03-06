---
order: 0
title: 演示
---

各种数据文案的展现方式。

````jsx
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import numeral from 'numeral';

ReactDOM.render(
  <div>
    <NumberInfo
      subTitle={<span>Visited this week</span>}
      total={numeral(12321).format('0,0')}
      status="up"
      subTotal={17.1}
    />
  </div>
, mountNode);
````
