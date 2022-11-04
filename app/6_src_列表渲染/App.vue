<template>
  <div>
    <!-- 
        v-for 作用：渲染某个标签
        1：item 声明的变量 作用域：当前标签以及子标签
        2：in关键字
        3：5 循环执行的次数

        key：作用：优化diff算法，告诉vue，使用一个模板，遍历每个模板的数据不一样，请更新视图
            性能：优化diff算法 
     -->
    <p v-for="item in 5" :key="item">{{ item }}</p>

    <ul>
      <li v-for="item in shopList" :key="item.id">
        <div>商品名称：{{ item.title }}</div>
        <div>商品价格：{{ item.price }}</div>
        <div>商品id：{{ item.id }}</div>
        <div>
          <img :src="item.img" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopList: [
        {
          id: 973,
          title: "安踏可口可乐联名款女帆布鞋",
          sub_title: null,
          brand_id: 1,
          category_id: 139,
          spg_id: 139,
          img: "https://img.fishfay.com/shopgoods/1/122028656/zt-122028656.jpg",
          create_time: null,
          last_update_time: null,
          store_id: 1,
          price: 398,
          special_price: 349,
          is_special: 1,
          sale: "716",
          verifyIndex: null,
        },
        {
          id: 982,
          title: "安踏女鞋硫化鞋休闲鞋",
          sub_title: null,
          brand_id: 1,
          category_id: 139,
          spg_id: 139,
          img: "https://img.fishfay.com/shopgoods/1/122028613/zt-122028613/1d2eaea6577ae367c563a5a6e07ab5f4.jpg",
          create_time: null,
          last_update_time: null,
          store_id: 1,
          price: 219,
          special_price: 129,
          is_special: 1,
          sale: "2290",
          verifyIndex: null,
        },
        {
          id: 1016,
          title: "安踏女鞋硫化鞋帆布鞋小白鞋",
          sub_title: null,
          brand_id: 1,
          category_id: 139,
          spg_id: 139,
          img: "https://img.fishfay.com/shopgoods/4/122038661/zt-122038661/6eac32a7b16b823ab06dac2a4b91f618.jpg",
          create_time: null,
          last_update_time: null,
          store_id: 1,
          price: 239,
          special_price: 149,
          is_special: 1,
          sale: "556",
          verifyIndex: null,
        },
        {
          id: 1081,
          title: "安踏男鞋硫化鞋小白鞋",
          sub_title: null,
          brand_id: 1,
          category_id: 139,
          spg_id: 139,
          img: "https://img.fishfay.com/shopgoods/4/112038661/zt-112038661/ab6c46b9f9786ae422adb88361de55c8.jpg",
          create_time: null,
          last_update_time: null,
          store_id: 1,
          price: 239,
          special_price: 149,
          is_special: 1,
          sale: "556",
          verifyIndex: null,
        },
      ],
    };
  },
};
</script>

<style></style>
