//index.js
const app = getApp()

Page({
  data: {
    totalCost: 0,
    click: false, //是否显示弹窗内容
    option: false, //显示弹窗或关闭弹窗的操作动画
    list1:[
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but1',
        minusButtonName: 'But1',
        q: 0,
      },
      {
        price: 30,
        name: '冰沙 smoothie',
        coverPath:'../images/drink2.jpg',
        kind: 'smoothie',
        addButtonName: 'but2',
        minusButtonName: 'But2',
        q:0,
      },{
        price: 25,
        name: '咖啡 coffee',
        coverPath:'../images/drink3.jpg',
        kind: 'coffee',
        addButtonName: 'but3',
        minusButtonName: 'But3',
        q:0,
      },{
        price: 15,
        name: '奶茶 milk tea',
        coverPath:'../images/drink4.jpg',
        kind:'tea',
        addButtonName: 'but4',
        minusButtonName: 'But4',
        q:0,
      },{
        price: 10,
        name: '果汁 juice',
        coverPath:'../images/drink5.jpg',
        kind: 'juice',
        addButtonName: 'but5',
        minusButtonName: 'But5',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but6',
        minusButtonName: 'But6',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but7',
        minusButtonName: 'But7',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but8',
        minusButtonName: 'But8',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but9',
        minusButtonName: 'But9',
        q:0,
      }
    ],
    list2:[
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but1',
        minusButtonName: 'But1',
        q:0,
      },
      {
        price: 30,
        name: '冰沙 smoothie',
        coverPath:'../images/drink2.jpg',
        kind: 'smoothie',
        addButtonName: 'but2',
        minusButtonName: 'But2',
        q:0,
      },{
        price: 25,
        name: '咖啡 coffee',
        coverPath:'../images/drink3.jpg',
        kind: 'coffee',
        addButtonName: 'but3',
        minusButtonName: 'But3',
        q:0,
      },{
        price: 15,
        name: '奶茶 milk tea',
        coverPath:'../images/drink4.jpg',
        kind:'tea',
        addButtonName: 'but4',
        minusButtonName: 'But4',
        q:0,
      },{
        price: 10,
        name: '果汁 juice',
        coverPath:'../images/drink5.jpg',
        kind: 'juice',
        addButtonName: 'but5',
        minusButtonName: 'But5',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but6',
        minusButtonName: 'But6',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but7',
        minusButtonName: 'But7',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but8',
        minusButtonName: 'But8',
        q:0,
      },
      {
        price: 20,
        name: '冰沙 smoothie',
        coverPath:'../images/drink1.jpg',
        kind: 'smoothie',
        addButtonName: 'but9',
        minusButtonName: 'But9',
        q:0,
      }
    ],
    list3 : [],
  },

  coffee: function(){
    this.onfilter('coffee')
  },
  juice: function(){
    this.onfilter('juice')
  },
  tea: function(){
    this.onfilter('tea')
  },
  all: function(){
    this.onfilter('all')
  },
  smoothies: function(){
    this.onfilter('smoothie')
  },

  onfilter: function(type) {
    let data = this.data.list2;
    let newData2 = [];
    let i = 0;
    let len = data.length;
    for(;i<len;i++){
      if(type == 'coffee'){
        if (data[i].kind == 'coffee'){
          newData2.push(data[i]);
        }
      }else if (type == 'juice'){
        if(data[i].kind == 'juice'){
          newData2.push(data[i]);
        }
      }else if (type == 'smoothie'){
        if(data[i].kind == 'smoothie'){
          newData2.push(data[i]);
        }
      }else if (type == 'tea'){
        if(data[i].kind == 'tea'){
          newData2.push(data[i]);
        }
      }else if (type == 'all'){
        newData2.push(data[i]);
      }
    }
    this.setData({
      list1: newData2
    })
    
  },
  but1: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but1'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but1'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but2: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but2'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but2'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but3: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but3'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but3'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but4: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but4'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but4'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but5: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but5'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but5'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but6: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but6'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but6'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but7: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but7'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but7'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but8: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but8'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but8'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  but9: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost
    for(;i<len;i++){
      if (n[i].addButtonName == 'but9'){
        n[i].q = n[i].q + 1
        l = n[i].q
        totalcost = totalcost + n[i].price
        }
      }
    for(;h<x.length;h++){
      if (x[h].addButtonName == 'but9'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost: totalcost
    })
  },
  But1: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But1'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But1'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But2: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But2'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But2'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But3: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But3'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But3'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But4: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But4'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But4'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But5: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But5'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But5'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But6: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But6'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But6'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But7: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But7'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But7'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But8: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But8'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But8'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  },
  But9: function(){
    let n = this.data.list1;
    let x = this.data.list2;
    let i = 0;
    let l = 0;
    let h = 0;
    let len = n.length;
    let totalcost = this.data.totalCost;
    for(;i<len;i++){
      if (n[i].minusButtonName == 'But9'){
        if (n[i].q > 0){
          n[i].q = n[i].q - 1
          l = n[i].q
          totalcost = totalcost - n[i].price
        }
      }
    }
    for(;h<x.length;h++){
      if (x[h].minusButtonName == 'But9'){
        x[h].q = l
      }
    }
    this.setData({
      list1: n,
      list2: x,
      totalCost:totalcost
    })
  }, 
  
  clickPup: function() {
    let _that = this;
    if (!_that.data.click) {
      _that.setData({
        click: true,
      })
    }

    if (_that.data.option) {
      _that.setData({
        option: false,
      })

      // 关闭显示弹窗动画的内容，不设置的话会出现：点击任何地方都会出现弹窗，就不是指定位置点击出现弹窗了
      setTimeout(() => {
        _that.setData({
          click: false,
        })
      }, 500)


    } else {
      _that.setData({
        option: true
      })
    }
    let data = this.data.list2
    let i = 0;
    let newData4 = [];
    let len = this.data.list2.length;
    let q = 0;
    for(;i<len;i++){
      if(data[i].q > 0){
        newData4.push(data[i])
      }
    }
    for(;q<newData4.length;q++){
      newData4[q].total = newData4[q].q * newData4[q].price
    }

    this.setData({
      list3: newData4,
    })
  }
})

