window.config = {
  elements: [
    {
      component: 'form',
      columns: 3,
      labelWidth: '200px',
      children: [
        {
          component: 'textfield',
          label: '商品名称'
        },
        {
          component: 'textfield',
          label: 'Alias'
        },
        {
          component: 'textfield',
          label: '店铺名称'
        },
        {
          component: 'textfield',
          label: 'kdtId'
        },
        {
          component: 'combobox',
          label: '商品分组'
        }
      ]
    },
    {
      component: 'hbox',
      children: [
        {
          component: 'button',
          text: '查询',
          events: [{
            type: 'click',
            action: 'event',
            event: 'dataset.query',
            targetId: 'table1'
          }]
        }
      ]
    },
    {
      component: 'table',
      bindDataSet: 'table1',
      children: [
        {
          component: 'column',
          title: '商品名称',
          name: 'title'
        },
        {
          component: 'column',
          title: 'Alias',
          name: 'alias'
        },
        {
          component: 'column',
          title: '分组',
          name: 'category'
        },
        {
          component: 'column',
          title: '操作',
          template: '<a href="javascript:;" class="js-add">添加</a>'
        }
      ]
    }
  ]
}
