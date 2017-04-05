window.config = {
  elements: [
    {
      component: 'form',
      labelWidth: '200px',
      children: [
        {
          component: 'hbox',
          children: [
            {
              comoponent: 'col',
              children: [{
                label: '商品名称',
                component: 'textfield'
              }]
            },
            {
              comoponent: 'col',
              children: [{
                label: '商品编码',
                component: 'textfield'
              }]
            },
            {
              comoponent: 'col',
              children: [{
                label: 'alias',
                component: 'textfield'
              }]
            }
          ]
        },
        {
          comoponent: 'hbox',
          children: [
            {
              component: 'col',
              colspan: 2,
              children: [{
                label: 'alias',
                component: 'textfield'
              }]
            },
            {
              component: 'col',
              colspan: 1,
              children: [{
                label: 'alias',
                component: 'textfield'
              }]
            }
          ]
        },
        {
          component: 'hbox',
          children: [
            {
              component: 'vbox',
              colspan: 1,
              children: [{
                label: 'alias',
                component: 'textfield'
              }]
            },
            {
              component: 'col',
              colspan: 2,
              children: [{
                label: 'alias',
                component: 'textfield'
              }]
            }
          ]
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
