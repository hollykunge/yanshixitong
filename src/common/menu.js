const menuData = [{
  name: '主控面板',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: '数据分析',
    path: 'analysis',
  }, {
    name: '状态监控',
    path: 'monitor',
  }, {
    name: '工作台',
    path: 'workplace',
    // hideInMenu: true,
  }],
}, {
  name: '表单页',
  icon: 'form',
  path: 'form',
  children: [{
    name: '基础表单',
    path: 'basic-form',
  }, {
    name: '分步表单',
    path: 'step-form',
  }, {
    name: '高级表单',
    path: 'advanced-form',
  }],
}, {
  name: '我的项目',
  icon: 'book',
  path: 'list',
  children: [{
    name: '全部项目',
    path: 'table-list',
  }, {
    name: '全部任务',
    path: 'basic-list',
  }, {
    name: '归档项目',
    path: 'card-list',
  }, {
    name: '知识管理',
    path: 'search',
    children: [{
      name: '问题列表',
      path: 'articles',
    }, {
      name: '知识列表',
      path: 'projects',
    }
    // , {
    //   name: '搜索列表（应用）',
    //   path: 'applications',
    // }
  ],
  }],
}, {
  name: '详情页',
  icon: 'profile',
  path: 'profile',
  children: [{
    name: '基础详情页',
    path: 'basic',
  }, {
    name: '高级详情页',
    path: 'advanced',
  }],
}, {
  name: '数据仓库',
  icon: 'database',
  path: '#1',
  children: [{
    name: '项目数据',
    path: 'project',
  }, {
    name: '模型数据',
    path: 'model',
  }, {
    name: '文件数据',
    path: 'file',
  }],
}, {
  name: '团队管理',
  icon: 'team',
  path: '#2',
  children: [{
    name: '基础详情页',
    path: 'basic',
  }, {
    name: '高级详情页',
    path: 'advanced',
  }],
}, {
  name: '工具仓库',
  icon: 'tool',
  path: '#3',
  children: [{
    name: '基础详情页',
    path: 'basic',
  }, {
    name: '高级详情页',
    path: 'advanced',
  }],
}, {
  name: '结果页',
  icon: 'check-circle-o',
  path: 'result',
  children: [{
    name: '成功',
    path: 'success',
  }, {
    name: '失败',
    path: 'fail',
  }],
}, {
  name: '异常页',
  icon: 'warning',
  path: 'exception',
  children: [{
    name: '403',
    path: '403',
  }, {
    name: '404',
    path: '404',
  }, {
    name: '500',
    path: '500',
  }, {
    name: '触发异常',
    path: 'trigger',
  }],
}, {
  name: '账户',
  icon: 'user',
  path: 'user',
  children: [{
    name: '登录',
    path: 'login',
  }, {
    name: '注册',
    path: 'register',
  }, {
    name: '注册结果',
    path: 'register-result',
  }],
}, {
  name: '使用文档',
  icon: 'book',
  path: 'http://pro.ant.design/docs/getting-started',
  target: '_blank',
}];

function formatter(data, parentPath = '') {
  return data.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
