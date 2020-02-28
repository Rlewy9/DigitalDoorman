let List = [
  [{
      num: 1,
      icon: [require('../img/home/home_personal_1.png')],
      desc: ['访客通行'],
      navigate: ['/passphrase']
    },
    {
      num: 1,
      icon: [require('../img/home/home_personal_2.png')],
      desc: ['出入记录'],
      navigate: ['/accessRecords']
    },
    {
      num: 2,
      icon: [require('../img/home/home_personal_3.png'), require('../img/home/home_personal_4.png')],
      desc: ['到访预约', '通行证'],
      navigate: ['3', '/passRecords']
    },
    {
      num: 2,
      icon: [require('../img/home/home_personal_5.png'), require('../img/home/home_personal_6.png')],
      desc: ['个人信息', '消息通知'],
      navigate: ['5', '6']
    }
  ],
  [{
      num: 1,
      icon: [require('../img/home/home_p1_1.png')],
      desc: ['扫一扫'],
      navigate: ['1']
    },
    {
      num: 1,
      icon: [require('../img/home/home_p1_2.png')],
      desc: ['值班表'],
      navigate: ['2']
    },
    {
      num: 1,
      icon: [require('../img/home/home_p1_3.png'), require('../img/home/home_p1_4.png')],
      desc: ['访客出入记录'],
      navigate: ['3']
    },
    {
      num: 1,
      icon: [require('../img/home/home_p1_5.png')],
      desc: ['个人信息'],
      navigate: ['5']
    }
  ],
  [{
      num: 1,
      icon: [require('../img/home/home_p2_1.png')],
      desc: ['访客出入记录'],
      navigate: ['1']
    },
    {
      num: 1,
      icon: [require('../img/home/home_p2_2.png')],
      desc: ['值班管理'],
      navigate: ['2']
    },
    {
      num: 2,
      icon: [require('../img/home/home_p2_3.png'), require('../img/home/home_p2_4.png')],
      desc: ['白名单管理', '门卫管理'],
      navigate: ['3', '4']
    },
    {
      num: 2,
      icon: [require('../img/home/home_p2_5.png'), require('../img/home/home_p2_6.png')],
      desc: ['个人信息', '消息通知'],
      navigate: ['5', '6']
    }
  ]
]
let bgList = ['background-image: url("../assets/img/home/bg1.png");','background-image: url("../assets/img/home/bg2.png");','background-image: url("../assets/img/home/bg3.png");']



export default {
  List,bgList
}