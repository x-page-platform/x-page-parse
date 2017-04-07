window.config = {
  elements: [
    {
      component: 'form',
      labelWidth: '120px',
      children: [
        {
          component: 'hbox',
          children: [
            {
              component: 'col',
              children: [{
                label: '商铺名称：',
                component: 'textfield'
              }]
            },
            {
              component: 'col',
              children: [{
                label: '创建时间：',
                component: 'textfield'
              }]
            },
            {
              component: 'col',
              children: [{
                label: '类目：',
                component: 'textfield'
              }]
            }
          ]
        },
        {
          component: 'hbox',
          children: [
            {
              component: 'col',
              colspan: 1,
              children: [{
                component: 'radiofield',
                label: '店铺状态：',
                items: [{
                  value: 'all',
                  label: '全部'
                }, {
                  value: '1',
                  label: '正常'
                }, {
                  value: '2',
                  label: '锁定'
                }]
              }]
            },
            {
              component: 'col',
              colspan: 2,
              children: [{
                label: '来源：',
                component: 'comboboxfield',
                items: [{
                  value: 'all',
                  label: '全部'
                }, {
                  value: '1',
                  label: '正常'
                }, {
                  value: '2',
                  label: '锁定'
                }]
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
                label: 'alias：',
                component: 'textfield'
              }]
            },
            {
              component: 'col',
              colspan: 2,
              children: [{
                label: 'alias：',
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
