
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/chat/index","pages/chat/message","pages/chat/message/group_qrcode","pages/chat/message/details","pages/chat/message/reduce","pages/chat/message/hand","pages/chat/message/hand_lei","pages/chat/message/hand_pin","pages/friend/index","pages/push/game","pages/friend/index_list","pages/friend/phone-search","pages/friend/apply-list","pages/friend/chat-group-apply","pages/friend/group_chat","pages/friend/add","pages/friend/apply","pages/friend/remarks","pages/push/index","pages/push/circle","pages/push/circle_user","pages/push/circle_details","pages/push/circle_chat_details","pages/my/index","pages/chat/videoCall","pages/my/details","pages/my/qrcode","pages/details/index","pages/details/more","pages/details/more_details","pages/in/login","pages/in/reg","pages/set/frozen","pages/in/forget","pages/push/circle/send","pages/push/game_site","pages/push/web","pages/set/index","pages/chat/message/more","pages/set/user","pages/set/photo","pages/set/group_photo","pages/set/message_more","pages/set/password","pages/set/group_admin","pages/my/wallet/index","pages/my/wallet/charge","pages/my/wallet/withdraw","pages/my/wallet/capital","pages/my/wallet/trade_password","pages/my/set/set_trade_password","pages/my/set/forget_trade_password","pages/my/set/edit_trade_password","pages/my/wallet/alipay_set","pages/my/set/add_account","pages/my/pay/pay","pages/my/pay/pay_out","pages/my/pay/set_money","pages/my/pay/user_pay","pages/chat/message/input_password","pages/my/pay/collect_amount","pages/my/pay/pay_success","pages/in/test","pages/chat/message/card_list","pages/pay/collect_money","pages/order/order","pages/order/detail","pages/my/hongbao_setting","pages/my/foget_trade_password","pages/my/input_trade_password","pages/chat/group_list","pages/chat/message/group_nickname","pages/set/group_trans","pages/set/copy_group","pages/set/copy_tips","pages/chat/message/red_list","pages/my/wallet/capital2","pages/chat/message/qun_manage","pages/in/web","pages/article/article","pages/article/detail","pages/my/store","pages/my/store_info","pages/my/store_detail","pages/my/store_item_info","pages/my/trans_index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"white","backgroundColor":"#eeeef0"},"tabBar":{"color":"#2c2c2c","selectedColor":"#2c2c2c","borderStyle":"black","backgroundColor":"#ffffff","fontSize":"13px","list":[{"pagePath":"pages/chat/index","iconPath":"static/theme/default/tabBar/1_0.png","selectedIconPath":"static/theme/default/tabBar/1_1.png","text":"新聊"},{"pagePath":"pages/friend/index","iconPath":"static/theme/default/tabBar/2_0.png","selectedIconPath":"static/theme/default/tabBar/2_1.png","text":"通讯录"},{"pagePath":"pages/push/game","iconPath":"static/theme/default/tabBar/3_0.png","selectedIconPath":"static/theme/default/tabBar/3_1.png","text":"探索"},{"pagePath":"pages/my/index","iconPath":"static/theme/default/tabBar/4_0.png","selectedIconPath":"static/theme/default/tabBar/4_1.png","text":"我的"}]},"networkTimeout":{"request":6000,"connectSocket":10000,"uploadFile":60000,"downloadFile":6000},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"富农通讯","compilerVersion":"2.9.8","entryPagePath":"pages/chat/index"};
var __uniRoutes = [{"path":"/pages/chat/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"新聊","enablePullDownRefresh":true,"bounce":"none","titleNView":{"buttons":[{"text":" ","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"20px"}]}}},{"path":"/pages/chat/message","meta":{},"window":{"navigationBarTitleText":"","softinputMode":"adjustResize","titleNView":{"buttons":[{"text":"","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"23.5px"}]}}},{"path":"/pages/chat/message/group_qrcode","meta":{},"window":{"navigationBarTitleText":"群二维码"}},{"path":"/pages/chat/message/details","meta":{},"window":{"navigationBarBackgroundColor":"#cf3c35","navigationBarTextStyle":"white","navigationBarTitleText":"红包","backgroundColorTop":"#cf3c35","backgroundColorBottom":"#fff"}},{"path":"/pages/chat/message/reduce","meta":{},"window":{"navigationBarTitleText":"移除群成员","titleNView":{"buttons":[{"text":"","color":"#1AAD19","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"17px"}]}}},{"path":"/pages/chat/message/hand","meta":{},"window":{"navigationBarBackgroundColor":"#cf3c35","navigationBarTextStyle":"white","navigationBarTitleText":"发红包","backgroundColorTop":"#cf3c35","backgroundColorBottom":"#fff","softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/message/hand_lei","meta":{},"window":{"navigationBarBackgroundColor":"#cf3c35","navigationBarTextStyle":"white","navigationBarTitleText":"多雷红包","backgroundColorTop":"#cf3c35","backgroundColorBottom":"#fff","softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/message/hand_pin","meta":{},"window":{"navigationBarBackgroundColor":"#cf3c35","navigationBarTextStyle":"white","navigationBarTitleText":"拼手气红包","backgroundColorTop":"#cf3c35","backgroundColorBottom":"#fff","softinputNavBar":"none","bounce":"none"}},{"path":"/pages/friend/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"通讯录","titleNView":{"buttons":[{"text":" ","color":"#4591ff","fontSrc":"/static/fonts/im-iconfont.ttf","fontSize":"25px"}]}}},{"path":"/pages/push/game","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"通讯录","titleNView":{}}},{"path":"/pages/friend/index_list","meta":{},"window":{"navigationBarTitleText":"请选择好友","titleNView":{"buttons":[{"text":"确定","color":"black","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"16px"}]}}},{"path":"/pages/friend/phone-search","meta":{},"window":{"navigationBarTitleText":"搜索联系人"}},{"path":"/pages/friend/apply-list","meta":{},"window":{"navigationBarTitleText":"新的朋友"}},{"path":"/pages/friend/chat-group-apply","meta":{},"window":{"navigationBarTitleText":"群认证消息"}},{"path":"/pages/friend/group_chat","meta":{},"window":{"navigationBarTitleText":"我的群聊"}},{"path":"/pages/friend/add","meta":{},"window":{"navigationBarTitleText":"添加好友"}},{"path":"/pages/friend/apply","meta":{},"window":{"navigationBarTitleText":"朋友验证"}},{"path":"/pages/friend/remarks","meta":{},"window":{"navigationBarTitleText":"设置备注","titleNView":{"buttons":[{"text":"","color":"#1AAD19","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"17px"}]}}},{"path":"/pages/push/index","meta":{},"window":{"navigationBarTitleText":"发现"}},{"path":"/pages/push/circle","meta":{},"window":{"navigationBarTitleText":"生活圈","navigationBarBackgroundColor":"#ffffff","enablePullDownRefresh":true,"softinputMode":"adjustResize","titleNView":{"type":"transparent","buttons":[{"text":"","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"23.5px"}]}}},{"path":"/pages/push/circle_user","meta":{},"window":{"navigationBarTitleText":"我的动态","navigationBarBackgroundColor":"#ffffff","enablePullDownRefresh":true,"softinputMode":"adjustResize","titleNView":{"type":"transparent","buttons":[{"text":"","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"23.5px"}]}}},{"path":"/pages/push/circle_details","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"","enablePullDownRefresh":true,"softinputMode":"adjustResize","titleNView":{"type":"transparent","buttons":[]}}},{"path":"/pages/push/circle_chat_details","meta":{},"window":{"navigationBarTitleText":"我的消息","softinputMode":"adjustResize","titleNView":{"buttons":[]}}},{"path":"/pages/my/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","titleNView":false}},{"path":"/pages/chat/videoCall","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#424242","titleNView":false}},{"path":"/pages/my/details","meta":{},"window":{"navigationBarTitleText":"个人信息","backgroundColor":"#4ba198","navigationBarTextStyle":"black"}},{"path":"/pages/my/qrcode","meta":{},"window":{"navigationBarTitleText":"我的二维码"}},{"path":"/pages/details/index","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","titleNView":{"buttons":[{"text":"","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"23.5px"}]}}},{"path":"/pages/details/more","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","titleNView":{"buttons":[{"text":"","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"23.5px"}]}}},{"path":"/pages/details/more_details","meta":{},"window":{"navigationBarTitleText":"资料设置"}},{"path":"/pages/in/login","meta":{},"window":{"navigationBarTitleText":"登 录","titleNView":false}},{"path":"/pages/in/reg","meta":{},"window":{"navigationBarTitleText":"","titleNView":{}}},{"path":"/pages/set/frozen","meta":{},"window":{"navigationBarTitleText":"冻结帐号"}},{"path":"/pages/in/forget","meta":{},"window":{"navigationBarTitleText":"密码找回","titleNView":{"buttons":[]}}},{"path":"/pages/push/circle/send","meta":{},"window":{"navigationBarTitleText":"发布我的动态","titleNView":{"buttons":[{"text":"","color":"#1AAD19","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"17px"}]}}},{"path":"/pages/push/game_site","meta":{},"window":{"navigationBarTitleText":"资讯","titleNView":{"buttons":[{"text":"","fontSrc":"/static/fonts/im-iconfont.ttf","fontSize":"17px","float":"left"}]}}},{"path":"/pages/push/web","meta":{},"window":{"navigationBarTitleText":"网址","titleNView":{"buttons":[{"text":"","fontSrc":"/static/fonts/im-iconfont.ttf","fontSize":"19px","width":"50px"},{"text":"","fontSrc":"/static/fonts/im-iconfont.ttf","fontSize":"17px"},{"text":"","fontSrc":"/static/fonts/im-iconfont.ttf","fontSize":"17px","float":"left"}]}}},{"path":"/pages/set/index","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/chat/message/more","meta":{},"window":{"navigationBarTitleText":"聊天信息"}},{"path":"/pages/set/user","meta":{},"window":{"navigationBarTitleText":"基本资料设置","titleNView":{"buttons":[{"text":"","color":"#1AAD19","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"17px"}]}}},{"path":"/pages/set/photo","meta":{},"window":{"navigationBarTitleText":"个人头像"}},{"path":"/pages/set/group_photo","meta":{},"window":{"navigationBarTitleText":"群聊头像"}},{"path":"/pages/set/message_more","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"","color":"#5693ee","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"17px"}]}}},{"path":"/pages/set/password","meta":{},"window":{"navigationBarTitleText":"密码修改","titleNView":{"buttons":[{"text":"","color":"#1AAD19","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"17px"}]}}},{"path":"/pages/set/group_admin","meta":{},"window":{"navigationBarTitleText":"设置群管理员","titleNView":{"buttons":[{"text":"","color":"#1AAD19","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"17px"}]}}},{"path":"/pages/my/wallet/index","meta":{},"window":{"navigationBarTitleText":"我的钱包","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#5693ee","titleNView":{}}},{"path":"/pages/my/wallet/charge","meta":{},"window":{"navigationBarTitleText":"充值","titleNView":{}}},{"path":"/pages/my/wallet/withdraw","meta":{},"window":{"navigationBarTitleText":"提现","titleNView":{}}},{"path":"/pages/my/wallet/capital","meta":{},"window":{"navigationBarTitleText":"账单明细","navigationBarBackgroundColor":"#eeeeee","enablePullDownRefresh":true}},{"path":"/pages/my/wallet/trade_password","meta":{},"window":{"navigationBarTitleText":"交易密码"}},{"path":"/pages/my/set/set_trade_password","meta":{},"window":{}},{"path":"/pages/my/set/forget_trade_password","meta":{},"window":{}},{"path":"/pages/my/set/edit_trade_password","meta":{},"window":{}},{"path":"/pages/my/wallet/alipay_set","meta":{},"window":{"navigationBarTitleText":"添加支付宝账号"}},{"path":"/pages/my/set/add_account","meta":{},"window":{"backgroundColor":"white","navigationBarTitleText":"添加支付宝账号"}},{"path":"/pages/my/pay/pay","meta":{},"window":{"backgroundColor":"#4ba198","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#4ba198","navigationBarTitleText":"收付款"}},{"path":"/pages/my/pay/pay_out","meta":{},"window":{"backgroundColor":"#5691cb","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#5691cb","navigationBarTitleText":"二维码收款"}},{"path":"/pages/my/pay/set_money","meta":{},"window":{"navigationBarTitleText":"设置金额"}},{"path":"/pages/my/pay/user_pay","meta":{},"window":{"navigationBarTitleText":"付款"}},{"path":"/pages/chat/message/input_password","meta":{},"window":{}},{"path":"/pages/my/pay/collect_amount","meta":{},"window":{"navigationBarTitleText":"收款"}},{"path":"/pages/my/pay/pay_success","meta":{},"window":{}},{"path":"/pages/in/test","meta":{},"window":{}},{"path":"/pages/chat/message/card_list","meta":{},"window":{"titleNView":{"buttons":[{"text":"确定","color":"black","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"16px"}]}}},{"path":"/pages/pay/collect_money","meta":{},"window":{}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"订单中心"}},{"path":"/pages/order/detail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages/my/hongbao_setting","meta":{},"window":{"navigationBarTitleText":"红包设置"}},{"path":"/pages/my/foget_trade_password","meta":{},"window":{"navigationBarTitleText":"忘记交易密码","backgroundColor":"#ffffff"}},{"path":"/pages/my/input_trade_password","meta":{},"window":{"navigationBarTitleText":"忘记交易密码","backgroundColor":"#ffffff"}},{"path":"/pages/chat/group_list","meta":{},"window":{"navigationBarTitleText":"选择提醒的人","backgroundColor":"#ffffff"}},{"path":"/pages/chat/message/group_nickname","meta":{},"window":{"navigationBarTitleText":"我在本群中的昵称","backgroundColor":"#ffffff","titleNView":{"buttons":[{"text":"保存","color":"#9b9b9b","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"16px"}]}}},{"path":"/pages/set/group_trans","meta":{},"window":{"navigationBarTitleText":"转让群","backgroundColor":"#ffffff","titleNView":{"buttons":[{"text":"确认转让","color":"#9b9b9b","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"16px"}]}}},{"path":"/pages/set/copy_group","meta":{},"window":{"navigationBarTitleText":"一键复制群群主选择","backgroundColor":"#ffffff","titleNView":{"buttons":[{"text":"确认","color":"#9b9b9b","fontSrc":"/static/fonts/iconfont.ttf","fontSize":"16px"}]}}},{"path":"/pages/set/copy_tips","meta":{},"window":{"navigationBarTitleText":"一键复制新群","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/chat/message/red_list","meta":{},"window":{"navigationBarTitleText":"未领取红包列表","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/my/wallet/capital2","meta":{},"window":{"navigationBarBackgroundColor":"#eeeeee","enablePullDownRefresh":true,"navigationBarTitleText":"账单明细","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/chat/message/qun_manage","meta":{},"window":{"navigationBarTitleText":"群管理","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/in/web","meta":{},"window":{"navigationBarTitleText":"使用条款和隐私政策","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/article/article","meta":{},"window":{"navigationBarTitleText":"帮助中心","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/article/detail","meta":{},"window":{}},{"path":"/pages/my/store","meta":{},"window":{"navigationBarTitleText":"我的收藏","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/my/store_info","meta":{},"window":{}},{"path":"/pages/my/store_detail","meta":{},"window":{"navigationBarTitleText":"收藏数据","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/my/store_item_info","meta":{},"window":{"navigationBarTitleText":"详情","backgroundColor":"#ffffff","titleNView":{}}},{"path":"/pages/my/trans_index","meta":{},"window":{"navigationBarTitleText":"会话","backgroundColor":"#ffffff","titleNView":{}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
