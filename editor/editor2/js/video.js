/ **
 * @执照
 * Video.js 6.2.7 <http://videojs.com/>
 *版权所有Brightcove，Inc. <https://www.brightcove.com/>
 *在Apache许可证版本2.0下可用
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 *包括vtt.js <https://github.com/mozilla/vtt.js>
 *在Apache许可证版本2.0下可用
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 * /

（function（global，factory）{
	typeof exports ==='object'&& typeof module！=='undefined'？module.exports = factory（）：
	typeof define ==='function'&& define.amd？define（factory）：
	（global.videojs = factory（））;
}（this，（function（）{

var version =“6.2.7”;

var commonjsGlobal = typeof window！=='undefined'？window：typeof global！=='undefined'？global：typeof self！=='undefined'？self：{};





函数createCommonjsModule（fn，module）{
	return module = {exports：{}}，fn（module，module.exports），module.exports;
}

无名胜

if（typeof window！==“undefined”）{
    win = window;
} else if（typeof commonjsGlobal！==“undefined”）{
    win = commonjsGlobal;
} else if（typeof self！==“undefined”）{
    win = self;
} else {
    win = {};
}

var window_1 = win;

var empty = {};


var empty $ 1 =（Object.freeze || Object）（{
	'default'：空
}）;

var minDoc =（empty $ 1 && empty）|| 空$ 1;

var topLevel = typeof commonjsGlobal！=='undefined'？commonjs全球：
    typeof window！=='undefined'？窗口：{};


var doccy;

if（typeof document！=='undefined'）{
    doccy =文件;
} else {
    doccy = topLevel ['__ GLOBAL_DOCUMENT_CACHE @ 4'];

    if（！doccy）{
        doccy = topLevel ['__ GLOBAL_DOCUMENT_CACHE @ 4'] = minDoc;
    }
}

var document_1 = doccy;

/ **
 * @file browser.js
 * @module浏览器
 * /
var USER_AGENT = window_1.navigator && window_1.navigator.userAgent || '';
var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT）;
var appleWebkitVersion = webkitVersionMap？parseFloat（webkitVersionMap.pop（））：null;

/ *
 *设备是iPhone
 *
 * @type {Boolean}
 * @不变
 * @私人的
 * /
var IS_IPAD = /iPad/i.test(USER_AGENT）;

// Facebook应用的UIWebView既可识别为iPhone和iPad也可
//识别iPhone，我们需要排除iPad。
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
var IS_IPHONE = /iPhone/i.test(USER_AGENT）&&！！IS_IPAD;
var IS_IPOD = /iPod/i.test(USER_AGENT）;
var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

var IOS_VERSION = function（）{
  var match = USER_AGENT.match（/ OS（\ d +）_ / i）;

  if（match && match [1]）{
    返回匹配[1];
  }
  返回null;
}（）;

var IS_ANDROID = /Android/i.test(USER_AGENT）;
var ANDROID_VERSION = function（）{
  //这匹配了Android Major.Minor.Patch版本
  // ANDROID_VERSION是Major.Minor为Number，如果Minor不可用，则只返回Major
  var match = USER_AGENT.match（/ Android（\ d +）（？：\。（\ d +））？（？：\。（\ d +））* / i）;

  if（！match）{
    返回null;
  }

  var major = match [1] && parseFloat（match [1]）;
  var minor = match [2] && parseFloat（match [2]）;

  if（major && minor）{
    return parseFloat（match [1] +'。'+ match [2]）;
  } else if（major）{
    返回专业
  }
  返回null;
}（）;

//旧版Android定义为2.3以前的版本，并且需要安装Android浏览器的webkit版本
var IS_OLD_ANDROID = IS_ANDROID && /webkit/i.test(USER_AGENT）&& ANDROID_VERSION <2.3;
var IS_NATIVE_ANDROID = IS_ANDROID && ANDROID_VERSION <5 && appleWebkitVersion <537;

var IS_FIREFOX = /Firefox/i.test(USER_AGENT）;
var IS_EDGE = /Edge/i.test(USER_AGENT）;
var IS_CHROME =！IS_EDGE && /Chrome/i.test(USER_AGENT）;
var CHROME_VERSION = function（）{
  var match = USER_AGENT.match（/ Chrome \ /（\ d +）/）;

  if（match && match [1]）{
    return parseFloat（match [1]）;
  }
  返回null;
}（）;
var IS_IE8 = /MSIE\s8\.0/.test(USER_AGENT）;
var IE_VERSION = function（）{
  var result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT）;
  var version = result && parseFloat（result [1]）;

  if（！version && /Trident\/7.0/i.test(USER_AGENT）&& /rv:11.0/.test(USER_AGENT））{
    // IE 11具有与其他IE版本不同的用户代理字符串
    版本= 11.0;
  }

  返回版本;
}（）;

var IS_SAFARI = /Safari/i.test(USER_AGENT）&&！IS_CHROME &&！IS_ANDROID &&！IS_EDGE;
var IS_ANY_SAFARI = IS_SAFARI || IS_IOS;

var TOUCH_ENABLED = isReal（）&&（'onuchstart'in window_1 || window_1.DocumentTouch && window_1.document instanceof window_1.DocumentTouch）;

var BACKGROUND_SIZE_SUPPORTED = isReal（）&&'backgroundSize'in window_1.document.createElement（'video'）。style;

var browser =（Object.freeze || Object）（{
	IS_IPAD：IS_IPAD，
	IS_IPHONE：IS_IPHONE，
	IS_IPOD：IS_IPOD，
	IS_IOS：IS_IOS，
	IOS_VERSION：IOS_VERSION，
	IS_ANDROID：IS_ANDROID，
	ANDROID_VERSION：ANDROID_VERSION，
	IS_OLD_ANDROID：IS_OLD_ANDROID，
	IS_NATIVE_ANDROID：IS_NATIVE_ANDROID，
	IS_FIREFOX：IS_FIREFOX，
	IS_EDGE：IS_EDGE，
	IS_CHROME：IS_CHROME，
	CHROME_VERSION：CHROME_VERSION，
	IS_IE8：IS_IE8，
	IE_VERSION：IE_VERSION，
	IS_SAFARI：IS_SAFARI，
	IS_ANY_SAFARI：IS_ANY_SAFARI，
	TOUCH_ENABLED：TOUCH_ENABLED，
	BACKGROUND_SIZE_SUPPORTED：BACKGROUND_SIZE_SUPPORTED
}）;

var _typeof = typeof Symbol ===“function”&& typeof Symbol.iterator ===“symbol”？function（obj）{
  return typeof obj;
}：function（obj）{
  return obj && typeof Symbol ===“function”&& obj.constructor === Symbol && obj！== Symbol.prototype？“symbol”：typeof obj;
};











var classCallCheck = function（instance，Constructor）{
  if（！（instance instanceof Constructor））{
    抛出新的TypeError（“不能调用类作为函数”）;
  }
};











var inherits = function（subClass，superClass）{
  if（typeof superClass！==“function”&& superClass！== null）{
    抛出新的TypeError（“超级表达式必须为null或一个函数，而不是”+ typeof superClass）;
  }

  subClass.prototype = Object.create（superClass && superClass.prototype，{
    构造函数：{
      值：subClass，
      可枚举：虚假，
      可写：真，
      可配置：true
    }
  }）;
  if（superClass）Object.setPrototypeOf？Object.setPrototypeOf（subClass，superClass）：subClass .__ proto__ = superClass;
};











var possibleConstructorReturn = function（self，call）{
  if（！self）{
    抛出新的ReferenceError（“这没有被初始化 - 没有被调用超（）”）;
  }

  return call &&（typeof call ===“object”|| typeof call ===“function”）？打电话：自我
};











var taggedTemplateLiteralLoose = function（strings，raw）{
  strings.raw = raw;
  返回字符串;
};

/ **
 * @file obj.js
 * @module obj
 * /

/ **
 * @callback obj：EachCallback
 *
 * @param {Mixed}值
 *正在迭代的对象的当前键。
 *
 * @param {string}键
 *正在迭代的对象的当前键值
 * /

/ **
 * @callback obj：ReduceCallback
 *
 * @param {Mixed} accum
 *在reduce循环中积累的值。
 *
 * @param {Mixed}值
 *正在迭代的对象的当前键。
 *
 * @param {string}键
 *正在迭代的对象的当前键值
 *
 * @return {Mixed}
 *新的累积值。
 * /
var toString = Object.prototype.toString;

/ **
 *获取对象的键
 *
 * @param {Object}
 *从中获取密钥的对象
 *
 * @return {string []}
 *来自对象的键的数组。如果返回一个空数组
 *传入的对象无效或没有密钥。
 *
 * @私人的
 * /
var keys = function keys（object）{
  返回isObject（object）？Object.keys（object）：[];
};

/ **
 *对象的数组式迭代。
 *
 * @param {Object}对象
 *要迭代的对象
 *
 * @param {obj：EachCallback} fn
 *对象中每个键调用的回调函数。
 * /
function each（object，fn）{
  keys（object）.forEach（function（key）{
    return fn（object [key]，key）;
  }）;
}

/ **
 *对象类似减少数组。
 *
 * @param {Object}对象
 *要减少的对象。
 *
 * @param {Function} fn
 *对象中每个键调用的回调函数。它
 *接收累积值和每个迭代值和密钥
 *作为参数。
 *
 * @param {Mixed} [initial = 0]
 *起始值
 *
 * @return {Mixed}
 *最终积累的价值。
 * /
function reduce（object，fn）{
  var initial = arguments.length> 2 && arguments [2]！== undefined？参数[2]：0;

  return keys（object）.reduce（function（accum，key）{
    return fn（accum，object [key]，key）;
  }，初始）;
}

/ **
 * Object.assign样式对象浅合并/扩展。
 *
 * @param {Object}目标
 * @param {Object} ...来源
 * @return {Object}
 * /
函数assign（target）{
  for（var _len = arguments.length，sources = Array（_len> 1？_len  -  1：0），_key = 1; _key <_len; _key ++）{
    来源[_key  -  1] =参数[_key];
  }

  if（Object.assign）{
    return Object.assign.apply（Object，[target] .concat（sources））;
  }

  sources.forEach（function（source）{
    if（！source）{
      返回;
    }

    each（source，function（value，key）{
      target [key] = value;
    }）;
  }）;

  回报目标
}

/ **
 *返回值是否是任何类型的对象 - 包括DOM节点，
 *数组，正则表达式等。
 *
 *这避免了在`null`值上使用`typeof`的getcha
 *导致“对象”。
 *
 * @param {Object}值
 * @return {Boolean}
 * /
function isObject（value）{
  return !! value &&（typeof value ==='undefined'？'undefined'：_typeof（value））==='object';
}

/ **
 *返回对象是否看起来是一个“普通”对象 - 也就是a
 *直接的`Object`实例。
 *
 * @param {Object}值
 * @return {Boolean}
 * /
function isPlain（value）{
  return isObject（value）&& toString.call（value）==='[object Object]'&& value.constructor === Object;
}

/ **
 * @file log.js
 * @module日志
 * /
var log = void 0;

//这是记录级别的私人跟踪变量。
var level ='all';

//这是记录历史的私人跟踪变量。
var history = [];

/ **
 *根据消息的类型将消息记录到控制台和历史记录
 *
 * @私人的
 * @param {string}类型
 *要使用的控制台方法的名称。
 *
 * @param {Array} args
 *传递给匹配控制台方法的参数。
 *
 * @param {boolean} [stringify]
 *默认情况下，只有旧的IE应该得到控制台参数的字符串化，
 *但这是作为一个参数暴露以方便测试。
 * /
var logByType = function logByType（type，args）{
  var stringify = arguments.length> 2 && arguments [2]！== undefined？参数[2]：!! IE_VERSION && IE_VERSION <11;

  var lvl = log.levels [level];
  var lvlRegExp = new RegExp（'^（'+ lvl +'）$'）;

  if（type！=='log'）{

    //当消息不是“日志”时，将类型添加到消息的前端。
    args.unshift（type.toUpperCase（）+'：'）;
  }

  //此时添加一个args的克隆到历史记录。
  if（history）{
    history.push（[]的concat（参数）。）;
  }

  //添加到历史记录后添加控制台前缀。
  args.unshift（ 'VIDEOJS：'）;

  //如果没有控制台，那么不要尝试输出消息，但他们会
  //仍然存储在历史记录中。
  //
  //将这些一次设置在此函数之外，但包含它们
  //在函数中，可以更容易地测试控制台不存在的情况
  //模块执行时
  var fn = window_1.console && window_1.console [type];

  //如果没有控制台，或者如果不允许此类型，则保密
  //当前日志记录级别。
  if（！fn ||！lvl ||！lvlRegExp.test（type））{
    返回;
  }

  // IE之前的11个日志对象无用为“[object Object]”; 所以，JSONify
  //这些能力较差的浏览器的对象和数组。
  if（stringify）{
    args = args.map（function（a）{
      if（isObject（a）|| Array.isArray（a））{
        尝试{
          返回JSON.stringify（a）;
        } catch（x）{
          return String（a）;
        }
      }

      //加入之前转换为字符串，所以我们明确地得到null和undefined
      //包含在输出中（就像我们在现代控制台中一样）。
      return String（a）;
    }）。join（''）;
  }

  //旧的IE版本不允许.apply（）的控制台方法（他们是
  //报告为对象而不是函数）。
  if（！fn.apply）{
    FN（参数）;
  } else {
    fn [Array.isArray（args））'apply'：'call']（window_1.console，args）;
  }
};

/ **
 *记录普通调试消息。类似于`console.log`。
 *
 * @class
 * @param {Mixed []} args
 *应记录的一个或多个消息或对象。
 * /
log = function log（）{
  for（var _len = arguments.length，args = Array（_len），_key = 0; _key <_len; _key ++）{
    args [_key] =参数[_key];
  }

  logByType（'log'，args）;
};

/ **
 *枚举可用的日志记录级别，其中键是级别名称
 *，值为`|` - 包含记录方法的分离字符串
 *在该日志记录级别。这些字符串用于创建正则表达式
 *匹配被调用的函数名。
 *
 * video.js提供的级别是：
 *
 *  - `off`：没有电话匹配。任何可以转换为“false”的值都可以
 *这个效果。最严格的
 *  - `all`（默认）：仅匹配Video.js提供的函数（`log`，
 *`log.warn`和`log.error`）。
 *  - `warn`：匹配`log.warn`和`log.error`调用。
 *  - `error`：仅匹配`log.error`调用。
 *
 * @type {Object}
 * /
log.levels = {
  全部：'log | warn | error'，
  错误：'error'，
  关：''
  警告：'warn | error'，
  默认的水平
};

/ **
 *获取或设置当前日志记录级别。如果一个匹配一个键的字符串
 * {@link log.levels}被提供，充当设置者。无论争论，
 *返回当前日志记录级别。
 *
 * @param {string} [lvl]
 *通过设置新的日志记录级别。
 *
 * @return {string}
 *当前记录级别。
 * /
log.level = function（lvl）{
  if（typeof lvl ==='string'）{
    if（！log.levels.hasOwnProperty（lvl））{
      抛出新的错误（'''+ lvl +'“不在有效的日志级别'）;
    }
    level = lvl;
  }
  回报水平;
};

/ **
 *返回一个包含已记录到历史记录中的所有数组的数组。
 *
 *这个数组是内部历史记录的浅克隆。但是，它的
 *内容是_not_克隆的; 所以，这个数组中的变体对象会
 *在历史上突变他们。
 *
 * @return {Array}
 * /
log.history = function（）{
  返回历史？[] .concat（history）：[];
};

/ **
 *清除内部历史跟踪，但不会阻止进一步的历史记录
 *追踪。
 * /
log.history.clear = function（）{
  if（history）{
    history.length = 0;
  }
};

/ **
 *禁用历史记录跟踪，如果当前已启用。
 * /
log.history.disable = function（）{
  if（history！== null）{
    history.length = 0;
    history = null;
  }
};

/ **
 *如果当前被禁用，启用历史记录跟踪。
 * /
log.history.enable = function（）{
  if（history === null）{
    history = [];
  }
};

/ **
 *记录错误消息。类似于`console.error`。
 *
 * @param {Mixed []} args
 *应记录为错误的一个或多个消息或对象
 * /
log.error = function（）{
  for（var _len2 = arguments.length，args = Array（_len2），_key2 = 0; _key2 <_len2; _key2 ++）{
    args [_key2] = arguments [_key2];
  }

  return logByType（'error'，args）;
};

/ **
 *记录警告消息。类似于`console.warn`。
 *
 * @param {Mixed []} args
 *应记录为警告的一个或多个消息或对象。
 * /
log.warn = function（）{
  for（var _len3 = arguments.length，args = Array（_len3），_key3 = 0; _key3 <_len3; _key3 ++）{
    args [_key3] = arguments [_key3];
  }

  return logByType（'warn'，args）;
};

var log $ 1 = log;

功能clean（s）{
  返回s.replace（/ \ n \ r？\ s * / g，''）
}


var tsml = function tsml（sa）{
  var s =''
    ，i = 0;

  for（; i <arguments.length; i ++）
    s + = clean（sa [i]）+（arguments [i + 1] ||''）;

  回来
};

/ **
 * @file computed-style.js
 * @module计算式
 * /
/ **
 *安全的getComputedStyle与IE8回退。
 *
 *这是必需的，因为在Firefox中，如果播放器加载在iframe中
 *`display：none`，那么`getComputedStyle`返回`null`，所以我们做一个空的检查
 *确保在这些情况下播放器不会中断。
 *
 * @param {Element} el
 *您想要的计算样式的元素
 *
 * @param {string} prop
 *你想要的属性名称
 *
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 *
 * @静态的
 * @康斯特
 * /
function computedStyle（el，prop）{
  if（！el ||！prop）{
    返回''
  }

  if（typeof window_1.getComputedStyle ==='function'）{
    var cs = window_1.getComputedStyle（el）;

    返回cs？cs [prop]：'';
  }

  return el.currentStyle [prop] || '';
}

var _templateObject = taggedTemplateLiteralLoose（['设置createEl（）\ n的第二个参数中的属性已被弃用，请改用第三个参数。\ n createEl（type，properties，attributes）尝试将'，'设置为'，' 。']，['在createEl（）\ n的第二个参数中设置属性已被弃用，请改用第三个参数。\ n createEl（type，properties，attributes）。尝试将'，'设置为'，'。 “]）;

/ **
 * @file dom.js
 * @module dom
 * /
/ **
 *检测值是否是具有任何非空格字符的字符串。
 *
 * @param {string} str
 *要检查的字符串
 *
 * @return {boolean}
 *  - 如果字符串不为空，则为真
 *  - 否则为虚假
 *
 * /
函数isNonBlankString（str）{
  return typeof str ==='string'&& /\S/.test(str）;
}

/ **
 *如果传递的字符串有空格，则会抛出错误。这被使用
 *类方法与classList API相对一致。
 *
 * @param {string} str
 *检查空格的字符串。
 *
 * @throws {错误}
 *如果字符串中有空格，则会抛出错误。
 *
 * /
function throwIfWhitespace（str）{
  if（/\s/.test(str））{
    抛出新的错误（'class has illegal whitespace characters'）;
  }
}

/ **
 *生成用于匹配元素className中的className的正则表达式。
 *
 * @param {string} className
 * className来生成RegExp。
 *
 * @return {RegExp}
 * RegExp将检查元素中的特定`className`
 * 班级名称。
 * /
function classRegExp（className）{
  返回新的RegExp（'（^ | \\ s）'+ className +'（$ | \\ s）'）;
}

/ **
 *当前的DOM接口是否看起来是真实的。
 *
 * @return {Boolean}
 * /
函数isReal（）{
  返回（

    //由于“全局”，文档和窗口都不会被定义为未定义。
    document_1 === window_1.document &&

    //在IE <9中，DOM方法返回“object”作为它们的类型，所以我们可以
    //自信地检查是否存在。
    typeof document_1.createElement！=='undefined'
  ）;
}

/ **
 *通过鸭子打字确定值是否为DOM元素。
 *
 * @param {Mixed}值
 *要检查的东西
 *
 * @return {boolean}
 *  - 如果是DOM元素，则为真
 *  - 否则为虚假
 * /
函数isEl（value）{
  return isObject（value）&& value.nodeType === 1;
}

/ **
 *使用给定的方法创建查询DOM的函数。
 *
 * @param {string}方法
 *用...创建查询的方法。
 *
 * @return {Function}
 *查询方法
 * /
function createQuerier（method）{
  返回函数（selector，context）{
    if（！isNonBlankString（selector））{
      return document_1 [method]（null）;
    }
    if（isNonBlankString（context））{
      context = document_1.querySelector（context）;
    }

    var ctx = isEl（context）？上下文：document_1;

    返回ctx [method] && ctx [method]（selector）;
  };
}

/ **
 *创建元素并应用属性。
 *
 * @param {string} [tagName ='div']
 *要创建的标签名称。
 *
 * @param {Object} [properties = {}]
 *要应用的元素属性。
 *
 * @param {Object} [attributes = {}]
 *要应用的元素属性。
 *
 * @param {String | Element | TextNode | Array | Function} [content]
 *元素的内容（参见：{@link dom：normalizeContent}）
 *
 * @return {Element}
 *创建的元素。
 * /
function createEl（）{
  var tagName = arguments.length> 0 && arguments [0]！== undefined？参数[0]：'div';
  var properties = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
  var attributes = arguments.length> 2 && arguments [2]！== undefined？参数[2]：{};
  var content = arguments [3];

  var el = document_1.createElement（tagName）;

  Object.getOwnPropertyNames（properties）.forEach（function（propName）{
    var val = properties [propName];

    //见＃2176
    //我们原来同时接受属性和属性
    //同一个对象，但这不行。
    if（propName.indexOf（'aria-'）！== -1 || propName ==='role'|| propName ==='type'）{
      log $ 1.warn（tsml（_templateObject，propName，val））;
      el.setAttribute（propName，val）;

      //处理textContent，因为它不受支持，我们有一个
      //它的方法
    } else if（propName ==='textContent'）{
      textContent（el，val）;
    } else {
      el [propName] = val;
    }
  }）;

  Object.getOwnPropertyNames（attributes）.forEach（function（attrName）{
    el.setAttribute（attrName，attributes [attrName]）;
  }）;

  if（content）{
    appendContent（el，content）;
  }

  回报
}

/ **
 *将文本注入元素，完全替换任何现有内容。
 *
 * @param {Element} el
 *添加文本内容的元素
 *
 * @param {string}文字
 *要添加的文字内容。
 *
 * @return {Element}
 *添加文本内容的元素。
 * /
function textContent（el，text）{
  if（typeof el.textContent ==='undefined'）{
    el.innerText = text;
  } else {
    el.textContent = text;
  }
  回报
}

/ **
 *插入一个元素作为另一个的第一个子节点
 *
 * @param {Element}小孩
 *要插入的元素
 *
 * @param {Element}父项
 *插入孩子的元素
 * /
function prependTo（child，parent）{
  if（parent.firstChild）{
    parent.insertBefore（child，parent.firstChild）;
  } else {
    parent.appendChild（孩子）;
  }
}

/ **
 *检查一个元素是否有CSS类
 *
 * @param {Element}元素
 *要检查的元素
 *
 * @param {string} classToCheck
 *要检查的类名
 *
 * @return {boolean}
 *  - 如果元素有类，则为真
 *  - 否则为虚假。
 *
 * @throws {错误}
 *如果`classToCheck`有空格，会抛出错误。
 * /
函数hasClass（element，classToCheck）{
  throwIfWhitespace（classToCheck）;
  if（element.classList）{
    return element.classList.contains（classToCheck）;
  }
  return classRegExp（classToCheck）.test（element.className）;
}

/ **
 *向元素添加CSS类名称
 *
 * @param {Element}元素
 *元素添加类名。
 *
 * @param {string} classToAdd
 *要添加的类名。
 *
 * @return {Element}
 *添加了类名的dom元素。
 * /
function addClass（element，classToAdd）{
  if（element.classList）{
    element.classList.add（classToAdd）;

    //这里不需要`throwIfWhitespace`，因为`hasElClass`会这样做
    //在classList的情况下不被支持。
  } else if（！hasClass（element，classToAdd））{
    element.className =（element.className +''+ classToAdd）.trim（）;
  }

  返回元素
}

/ **
 *从元素中删除一个CSS类名称
 *
 * @param {Element}元素
 *元素从中删除类名。
 *
 * @param {string} classToRemove
 *要删除的类名
 *
 * @return {Element}
 *删除了类名的dom元素。
 * /
function removeClass（element，classToRemove）{
  if（element.classList）{
    element.classList.remove（classToRemove）;
  } else {
    throwIfWhitespace（classToRemove）;
    element.className = element.className.split（/ \ s + /）。filter（function（c）{
      返回c！== classToRemove;
    }）。join（''）;
  }

  返回元素
}

/ **
 * toggleElClass的回调定义。
 *
 * @callback Dom〜PredicateCallback
 * @param {Element}元素
 *组件的DOM元素。
 *
 * @param {string} classToToggle
 *想要切换的`className`
 *
 * @return {boolean | undefined}
 *  - 如果为true，`classToToggle`将被添加到`element'。
 *  - 如果为false，`classToToggle`将从`element'移除。
 *  - 如果未定义，此回调将被忽略
 * /

/ **
 *根据可选项在元素上添加或删除CSS类名称
 *条件或类名的存在/不存在。
 *
 * @param {Element}元素
 *打开类名的元素。
 *
 * @param {string} classToToggle
 *应该切换的班级
 *
 * @param {boolean | PredicateCallback} [谓词]
 *请参阅{@link Dom〜PredicateCallback}的返回值
 *
 * @return {Element}
 *具有已被切换的类的元素。
 * /
function toggleClass（element，classToToggle，predicate）{

  //这不能在内部使用`classList`，因为IE不支持
  //第二个参数到`classList.toggle（）`方法！哪个是好的，因为
  //“classList”将被add / remove函数使用。
  var has = hasClass（element，classToToggle）;

  if（typeof predicate ==='function'）{
    谓词=谓词（element，classToToggle）;
  }

  if（typeof predicate！=='boolean'）{
    谓词=！has
  }

  //如果必要的类操作匹配当前的状态
  //元素，不需要动作。
  if（predicate === has）{
    返回;
  }

  if（谓词）{
    addClass（element，classToToggle）;
  } else {
    removeClass（element，classToToggle）;
  }

  返回元素
}

/ **
 *将属性应用于HTML元素。
 *
 * @param {Element} el
 *要添加属性的元素。
 *
 * @param {Object} [attributes]
 *要应用的属性。
 * /
function setAttributes（el，attributes）{
  Object.getOwnPropertyNames（attributes）.forEach（function（attrName）{
    var attrValue = attributes [attrName];

    if（attrValue === null || typeof attrValue ==='undefined'|| attrValue === false）{
      el.removeAttribute（attrName）;
    } else {
      el.setAttribute（attrName，attrValue === true？''：attrValue）;
    }
  }）;
}

/ **
 *获取元素的属性值，如HTML标签中定义的
 *属性与属性不同。它们在标签上定义
 *或使用setAttribute（不应与HTML一起使用）
 *这将为布尔属性返回true或false。
 *
 * @param {Element}标签
 *从中获取标签属性的元素。
 *
 * @return {Object}
 *元素的所有属性。
 * /
function getAttributes（tag）{
  var obj = {};

  //已知布尔属性
  //我们可以检查匹配的布尔属性，但较老的浏览器
  //不知道我们仍然读取的HTML5布尔属性
  var knownBooleans ='，'+'autoplay，controls，playsinline，loop，muted，default，defaultMuted'+'，';

  if（tag && tag.attributes && tag.attributes.length> 0）{
    var attrs = tag.attributes;

    for（var i = attrs.length  -  1; i> = 0; i--）{
      var attrName = attrs [i] .name;
      var attrVal = attrs [i] .value;

      //检查已知的布尔值
      //匹配的元素属性将返回typeof的值
      if（typeof tag [attrName] ==='boolean'|| knownBooleans.indexOf（'，'+ attrName +'，'）！== -1）{
        //所包含的布尔属性的值通常为空
        // string（''），如果我们只是检查一个false值，那将等于false。
        //我们也不希望支持不好的代码，如autoplay ='false'
        attrVal = attrVal！== null？真假;
      }

      obj [attrName] = attrVal;
    }
  }

  返回obj;
}

/ **
 *获取元素属性的值
 *
 * @param {Element} el
 * DOM元素
 *
 * @param {string}属性
 *属性获取值
 *
 * @return {string}
 *属性的值
 * /
function getAttribute（el，attribute）{
  return el.getAttribute（attribute）;
}

/ **
 *设置元素属性的值
 *
 * @param {Element} el
 * DOM元素
 *
 * @param {string}属性
 *属性设置
 *
 * @param {string}值
 *设置属性的值
 * /
function setAttribute（el，attribute，value）{
  el.setAttribute（attribute，value）;
}

/ **
 *删除元素的属性
 *
 * @param {Element} el
 * DOM元素
 *
 * @param {string}属性
 *要删除的属性
 * /
function removeAttribute（el，attribute）{
  el.removeAttribute（属性）;
}

/ **
 *尝试阻止在拖动控件时选择文本的功能
 * /
function blockTextSelection（）{
  document_1.body.focus（）;
  document_1.onselectstart = function（）{
    返回假;
  };
}

/ **
 *关闭文本选择屏蔽
 * /
function unblockTextSelection（）{
  document_1.onselectstart = function（）{
    返回真
  };
}

/ **
 *与本机的“getBoundingClientRect”函数相同，但确保了这一点
 *该方法是完全支持的（在我们声称支持的所有浏览器中）
 *并且元素在继续之前在DOM中。
 *
 *这个包装函数也可以垫补某些不提供的属性
 *旧版浏览器（即IE8）。
 *
 *另外，一些浏览器不支持向a添加属性
 *`ClientRect` /`DOMRect`对象; 所以我们用标准浅层复制它
 *属性（不被广泛支持的“x”和“y”除外）。这有帮助
 *避免键不可枚举的实现。
 *
 * @param {Element} el
 *我们要计算的“ClientRect”元素
 *
 * @return {Object | undefined}
 *总是返回一个平原
 * /
function getBoundingClientRect（el）{
  if（el && el.getBoundingClientRect && el.parentNode）{
    var rect = el.getBoundingClientRect（）;
    var result = {};

    ['bottom'，'height'，'left'，'right'，'top'，'width'] forEach（function（k）{
      if（rect [k]！== undefined）{
        result [k] = rect [k];
      }
    }）;

    if（！result.height）{
      result.height = parseFloat（computedStyle（el，'height'））;
    }

    if（！result.width）{
      result.width = parseFloat（computedStyle（el，'width'））;
    }

    返回结果;
  }
}

/ **
 *页面上DOM元素的位置。
 *
 * @typedef {Object}模块：dom〜Position
 *
 * @property {number}左
 *左边的像素
 *
 * @property {number}顶部
 *顶部的像素
 * /

/ **
 *左偏。
 * getBoundingClientRect技术
 * John Resig
 *
 * @see http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @param {Element} el
 *从中获得偏移的元素
 *
 * @return {module：dom〜Position}
 *传入的元素的位置。
 * /
function findPosition（el）{
  var box = void 0;

  if（el.getBoundingClientRect && el.parentNode）{
    box = el.getBoundingClientRect（）;
  }

  if（！box）{
    返回{
      左：0，
      顶部：0
    };
  }

  var docEl = document_1.documentElement;
  var body = document_1.body;

  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = window_1.pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft  -  clientLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = window_1.pageYOffset || body.scrollTop;
  var top = box.top + scrollTop  -  clientTop;

  // Android有时返回稍微关闭十进制值，所以需要轮到
  返回{
    左：Math.round（左），
    顶部：Math.round（顶部）
  };
}

/ **
 *用于dom元素或鼠标指针的x和y坐标
 *
 * @typedef {Object} Dom〜坐标
 *
 * @property {number} x
 * x坐标，以像素为单位
 *
 * @property {number} y
 * y坐标，以像素为单位
 * /

/ **
 *获取元素中的指针位置
 *返回一个x和y坐标的对象。
 *坐标上的基数是元素的左下角。
 *
 * @param {Element} el
 *要获取指针位置的元素
 *
 * @param {EventTarget〜Event}事件
 *事件对象
 *
 * @return {Dom〜Coordinates}
 *对应于鼠标位置的坐标对象。
 *
 * /
function getPointerPosition（el，event）{
  var position = {};
  var box = findPosition（el）;
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;

  var boxY = box.top;
  var boxX = box.left;
  var pageY = event.pageY;
  var pageX = event.pageX;

  if（event.changedTouches）{
    pageX = event.changedTouches [0] .pageX;
    pageY = event.changedTouches [0] .pageY;
  }

  position.y = Math.max（0，Math.min（1，（boxY  -  pageY + boxH）/ boxH））;
  position.x = Math.max（0，Math.min（1，（pageX-boxX）/ box））;

  返回位置
}

/ **
 *通过鸭子打字确定值是否为文本节点。
 *
 * @param {Mixed}值
 *检查此值是否为文本节点。
 *
 * @return {boolean}
 *  - 如果是文本节点，则为真
 *  - 否则为虚假
 * /
函数isTextNode（value）{
  return isObject（value）&& value.nodeType === 3;
}

/ **
 *清空元素的内容。
 *
 * @param {Element} el
 *清除孩子的元素
 *
 * @return {Element}
 *没有孩子的元素
 * /
function emptyEl（el）{
  while（el.firstChild）{
    el.removeChild（el.firstChild）;
  }
  回报
}

/ **
 *规范化内容，最终插入到DOM中。
 *
 *这允许广泛的内容定义方法，但保护
 *从简单写入“innerHTML”的陷阱陷入陷阱
 * XSS关注
 *
 *元素的内容可以以多种类型传递
 *组合，其行为如下：
 *
 * @param {String | Element | TextNode | Array | Function}内容
 *  -  String：归一化为文本节点。
 *  - 元素/文本节点：通过。
 *  -  Array：字符串，元素，节点或函数的一维数组
 *（返回单个字符串，元素或节点）。
 *  - 功能：如果唯一的参数，预计会产生一个字符串，元素，
 *节点或阵列。
 *
 * @return {Array}
 *所有通过标准化的内容。
 * /
function normalizeContent（content）{

  //首先，如果它是一个函数，则调用内容。如果它产生一个数组，
  //需要在规范化之前发生。
  if（typeof content ==='function'）{
    content = content（）;
  }

  //接下来，规范化到一个数组，所以一个或多个项目可以被归一化，
  //过滤并返回。
  return（Array.isArray（content）？content：[content]）。map（function（value）{

    //首先，如果它是一个产生新值的函数，则调用值，
    //将随后将其归一化为某种节点。
    if（typeof value ==='function'）{
      value = value（）;
    }

    if（isEl（value）|| isTextNode（value））{
      返回值
    }

    if（typeof value ==='string'&& /\S/.test(value））{
      return document_1.createTextNode（value）;
    }
  }）。filter（function（value）{
    返回值
  }）;
}

/ **
 *规范化并附加内容到元素。
 *
 * @param {Element} el
 *要附加标准化内容的元素。
 *
 *
 * @param {String | Element | TextNode | Array | Function}内容
 *见{@link dom：normalizeContent}的`content`参数
 *
 * @return {Element}
 *附加标准化内容的元素。
 * /
function appendContent（el，content）{
  normalizeContent（content）.forEach（function（node）{
    return el.appendChild（node）;
  }）;
  回报
}

/ **
 *规范化并将内容插入到元素中; 这是相同的
 *`appendContent（）`，除了它首先清空元素。
 *
 * @param {Element} el
 *元素将标准化内容插入。
 *
 * @param {String | Element | TextNode | Array | Function}内容
 *见{@link dom：normalizeContent}的`content`参数
 *
 * @return {Element}
 *插入标准化内容的元素。
 *
 * /
function insertContent（el，content）{
  return appendContent（emptyEl（el），content）;
}

/ **
 *在可选项内找到匹配`selector`的单个DOM元素
 另一个DOM元素的`context'（默认为`document`）。
 *
 * @param {string}选择器
 *一个有效的CSS选择器，将被传递给`querySelector`。
 *
 * @param {Element | String} [context = document]
 *要查询的DOM元素。也可以是选择器
 *字符串，在这种情况下将使用第一个匹配元素
 *作为上下文。如果缺少（或没有元素匹配选择器），则会下降
 *回到`document`。
 *
 * @return {Element | null}
 *找到的元素或null。
 * /
var $ = createQuerier（'querySelector'）;

/ **
 *在可选内容中找到与`selector`匹配的所有DOM元素
 另一个DOM元素的`context'（默认为`document`）。
 *
 * @param {string}选择器
 *一个有效的CSS选择器，它将被传递给`querySelectorAll`。
 *
 * @param {Element | String} [context = document]
 *要查询的DOM元素。也可以是选择器
 *字符串，在这种情况下将使用第一个匹配元素
 *作为上下文。如果缺少（或没有元素匹配选择器），则会下降
 *回到`document`。
 *
 * @return {NodeList}
 *找到元素的元素列表。如果没有找到，将为空。
 *
 * /
var $$ = createQuerier（'querySelectorAll'）;



var Dom =（Object.freeze || Object）（{
	isReal：isReal，
	isEl：isEl，
	createEl：createEl，
	textContent：textContent，
	prependTo：prependTo，
	hasClass：hasClass，
	addClass：addClass，
	removeClass：removeClass，
	toggleClass：toggleClass，
	setAttributes：setAttributes，
	getAttributes：getAttributes，
	getAttribute：getAttribute，
	setAttribute：setAttribute，
	removeAttribute：removeAttribute，
	blockTextSelection：blockTextSelection，
	unblockTextSelection：unblockTextSelection，
	getBoundingClientRect：getBoundingClientRect，
	findPosition：findPosition，
	getPointerPosition：getPointerPosition，
	isTextNode：isTextNode，
	emptyEl：emptyEl，
	normalizeContent：normalizeContent，
	appendContent：appendContent，
	insertContent：insertContent，
	$：$，
	$$：$$
}）;

/ **
 * @file guid.js
 * @module guid
 * /

/ **
 *元素或功能的唯一ID
 * @type {Number}
 * /
var _guid = 1;

/ **
 *以前没有返回过的号码，获得一个唯一的自动递增ID。
 *
 * @return {number}
 *新的唯一ID。
 * /
function newGUID（）{
  返回_guid ++;
}

/ **
 * @file dom-data.js
 * @module dom数据
 * /
/ **
 *元素数据存储。
 *
 *允许将数据绑定到元素而不将其直接放在
 *元素。防爆。事件侦听器存储在这里。
 *（也从jsninja.com，稍微修改和更新为关闭编译器）
 *
 * @type {Object}
 * @私人的
 * /
var elData = {};

/ *
 *唯一的属性名称用于存储元素的guid
 *
 * @type {String}
 * @不变
 * @私人的
 * /
var elIdAttr ='vdata'+ new Date（）。getTime（）;

/ **
 *返回存储元素数据的缓存对象
 *
 * @param {Element} el
 *元素存储数据。
 *
 * @return {Object}
 *传入的el的缓存对象。
 * /
function getData（el）{
  var id = el [elIdAttr];

  if（！id）{
    id = el [elIdAttr] = newGUID（）;
  }

  if（！elData [id]）{
    elData [id] = {};
  }

  返回elData [id];
}

/ **
 *返回元素是否缓存数据
 *
 * @param {Element} el
 *检查此元素是否已缓存数据。
 *
 * @return {boolean}
 *  - 如果DOM元素具有缓存数据，则为true。
 *  - 否则为虚假。
 * /
函数hasData（el）{
  var id = el [elIdAttr];

  if（！id）{
    返回假;
  }

  return !! Object.getOwnPropertyNames（elData [id]）。length;
}

/ **
 *从缓存中删除元素的数据，并从getElementById中删除guid attr的数据
 *
 * @param {Element} el
 *删除此元素的缓存数据。
 * /
function removeData（el）{
  var id = el [elIdAttr];

  if（！id）{
    返回;
  }

  //删除所有存储的数据
  删除elData [id];

  //从DOM节点中删除elIdAttr属性
  尝试{
    删除el [elIdAttr];
  } catch（e）{
    if（el.removeAttribute）{
      el.removeAttribute（elIdAttr）;
    } else {
      // IE不会在文档元素上支持removeAttribute
      el [elIdAttr] = null;
    }
  }
}

/ **
 * @file events.js。事件系统（John Resig  -  JS Ninja的秘密http://jsninja.com/）
 *（原书版本不完全可用，所以固定了一些东西，使Closure Compiler兼容）
 *这应该非常类似于jQuery的事件，但是它是基于不是的版本
 *强大的jquery的，所以可能有一些差异。
 *
 * @module事件
 * /

/ **
 *清理侦听缓存和调度程序
 *
 * @param {Element | Object} elem
 *元素清理
 *
 * @param {string}类型
 *要清理的事件类型
 * /
函数_cleanUpEvents（elem，type）{
  var data = getData（elem）;

  //如果没有，请删除特定类型的事件
  if（data.handlers [type] .length === 0）{
    删除data.handlers [type];
    // data.handlers [type] = null;
    //设置为null导致data.handlers的错误

    //从元素中删除元处理程序
    if（elem.removeEventListener）{
      elem.removeEventListener（type，data.dispatcher，false）;
    } else if（elem.detachEvent）{
      elem.detachEvent（'on'+ type，data.dispatcher）;
    }
  }

  //如果没有类型，则删除事件对象
  if（Object.getOwnPropertyNames（data.handlers）.length <= 0）{
    删除data.handlers;
    删除data.dispatcher;
    删除data.disabled;
  }

  //如果没有数据，最后删除元素数据
  if（Object.getOwnPropertyNames（data）.length === 0）{
    removeData（ELEM）;
  }
}

/ **
 *通过一系列事件类型循环，并为每个类型调用所请求的方法。
 *
 * @param {Function} fn
 *我们要使用的事件方法。
 *
 * @param {Element | Object} elem
 *将侦听器绑定到的元素或对象
 *
 * @param {string}类型
 *要绑定的事件的类型。
 *
 * @param {EventTarget〜EventListener}回调
 *事件侦听器
 * /
function _handleMultipleEvents（fn，elem，types，callback）{
  types.forEach（function（type）{
    //调用每个类型的事件方法
    fn（elem，type，callback）;
  }）;
}

/ **
 *修正本机事件以具有标准属性值
 *
 * @param {Object}事件
 *修复事件对象。
 *
 * @return {Object}
 *固定事件对象。
 * /
function fixEvent（event）{

  function returnTrue（）{
    返回真
  }

  function returnFalse（）{
    返回假;
  }

  //测试是否需要固定
  //用于检查是否！event.stopPropagation而不是isPropagationStopped
  //但是native事件对stopPropagation返回true，但是没有
  //其他预期的方法，如isPropagationStopped。似乎是一个问题
  //与Javascript忍者代码。所以我们现在只是压倒一切事件。
  if（！event ||！event.isPropagationStopped）{
    var old = event || window_1.event;

    event = {};
    //克隆旧对象，以便我们可以修改值event = {};
    // IE8不喜欢当你混乱本机事件属性
    // Firefox为event.hasOwnProperty（'type'）和其他道具返回false
    //这使复制更困难。
    // TODO：可能最好创建一个事件道具的白名单
    for（var key in old）{
      // Safari 6.0.3会警告您是否尝试复制已弃用的layerX / Y
      //如果您尝试复制已弃用的keyboardEvent.keyLocation，Chrome会警告您
      //和webkitMovementX / Y
      if（key！=='layerX'&& key！=='layerY'&& key！=='keyLocation'&& key！=='webkitMovementX'&& key！=='webkitMovementY'）{
        // Chrome 32+警告，如果您尝试复制已弃用的returnValue，但是
        //我们仍然希望如果preventDefault不受支持（IE8）。
        if（！（key ==='returnValue'&& old.preventDefault））{
          event [key] = old [key];
        }
      }
    }

    //该元素发生事件
    if（！event.target）{
      event.target = event.srcElement || document_1;
    }

    //处理与事件相关的其他元素
    if（！event.relatedTarget）{
      event.relatedTarget = event.fromElement === event.target？event.toElement：event.fromElement;
    }

    //停止默认浏览器操作
    event.preventDefault = function（）{
      if（old.preventDefault）{
        old.preventDefault（）;
      }
      event.returnValue = false;
      old.returnValue = false;
      event.defaultPrevented = true;
    };

    event.defaultPrevented = false;

    //停止事件冒泡
    event.stopPropagation = function（）{
      if（old.stopPropagation）{
        old.stopPropagation（）;
      }
      event.cancelBubble = true;
      old.cancelBubble = true;
      event.isPropagationStopped = returnTrue;
    };

    event.isPropagationStopped = returnFalse;

    //停止事件冒泡并执行其他处理程序
    event.stopImmediatePropagation = function（）{
      if（old.stopImmediatePropagation）{
        old.stopImmediatePropagation（）;
      }
      event.isImmediatePropagationStopped = returnTrue;
      event.stopPropagation（）;
    };

    event.isImmediatePropagationStopped = returnFalse;

    //处理鼠标位置
    if（event.clientX！== null && event.clientX！== undefined）{
      var doc = document_1.documentElement;
      var body = document_1.body;

      event.pageX = event.clientX +（doc && doc.scrollLeft || body && body.scrollLeft || 0） - （doc && doc.clientLeft || body && body.clientLeft || 0）;
      event.pageY = event.clientY +（doc && doc.scrollTop || body && body.scrollTop || 0） - （doc && doc.clientTop || body && body.clientTop || 0）;
    }

    //处理按键
    event.which = event.charCode || event.keyCode;

    //修复鼠标点击的按钮：
    // 0 == left; 1 ==中 2 ==对
    if（event.button！== null && event.button！== undefined）{

      //以下是禁用的，因为它不通过videojs-standard
      //和... yikes。
      / * eslint-disable * /
      event.button = event.button＆1？0：event.button＆4？1：event.button＆2？2：0;
      / * eslint-enable * /
    }
  }

  //返回固定实例
  返回事件
}

/ **
 *是否支持被动事件侦听器
 * /
var _supportsPassive = false;

（function（）{
  尝试{
    var opts = Object.defineProperty（{}，'passive'，{
      get：function get（）{
        _supportsPassive = true;
      }
    }）;

    window_1.addEventListener（'test'，null，opts）;
  } catch（e）{
    //忽略
  }
}）（）;

/ **
 Chrome触摸事件希望被动
 * /
var passiveEvents = ['touchstart'，'touchmove'];

/ **
 *向元素添加事件侦听器
 *它将处理函数存储在单独的缓存对象中
 *并向元素的事件添加通用处理程序，
 *以及元素的唯一ID（guid）。
 *
 * @param {Element | Object} elem
 *将侦听器绑定到的元素或对象
 *
 * @param {string | string []}类型
 *要绑定的事件的类型。
 *
 * @param {EventTarget〜EventListener} fn
 *事件侦听器
 * /
函数on（elem，type，fn）{
  if（Array.isArray（type））{
    return _handleMultipleEvents（on，elem，type，fn）;
  }

  var data = getData（elem）;

  //我们需要一个地方来存储我们所有的处理程序数据
  if（！data.handlers）{
    data.handlers = {};
  }

  if（！data.handlers [type]）{
    data.handlers [type] = [];
  }

  if（！fn.guid）{
    fn.guid = newGUID（）;
  }

  data.handlers [类型] .push（FN）;

  if（！data.dispatcher）{
    data.disabled = false;

    data.dispatcher = function（event，hash）{

      if（data.disabled）{
        返回;
      }

      event = fixEvent（event）;

      var handlers = data.handlers [event.type];

      if（处理程序）{
        //复制处理程序，所以如果在处理过程中添加/删除处理程序，它不会抛出一切。
        var handlersCopy = handlers.slice（0）;

        for（var m = 0，n = handlersCopy.length; m <n; m ++）{
          if（event.isImmediatePropagationStopped（））{
            打破;
          } else {
            尝试{
              handlersCopy [m] .call（elem，event，hash）;
            } catch（e）{
              登录$。错误（E）;
            }
          }
        }
      }
    };
  }

  if（data.handlers [type] .length === 1）{
    if（elem.addEventListener）{
      var options = false;

      if（_supportsPassive && passiveEvents.indexOf（type）> -1）{
        options = {passive：true};
      }
      elem.addEventListener（type，data.dispatcher，options）;
    } else if（elem.attachEvent）{
      elem.attachEvent（'on'+ type，data.dispatcher）;
    }
  }
}

/ **
 *从元素中删除事件侦听器
 *
 * @param {Element | Object} elem
 *从中删除侦听器的对象。
 *
 * @param {string | string []} [type]
 *要删除的侦听器类型。不包括从元素中删除所有事件。
 *
 * @param {EventTarget〜EventListener} [fn]
 *具体监听器删除。不包括删除事件的侦听器
 *类型。
 * /
功能关闭（elem，type，fn）{
  //如果不需要，不要通过getElData添加缓存对象
  if（！hasData（elem））{
    返回;
  }

  var data = getData（elem）;

  //如果没有事件存在，则无法解除绑定
  if（！data.handlers）{
    返回;
  }

  if（Array.isArray（type））{
    return _handleMultipleEvents（off，elem，type，fn）;
  }

  //实用功能
  var removeType = function removeType（t）{
    data.handlers [t] = [];
    _cleanUpEvents（elem，t）;
  };

  我们是否删除所有绑定的事件？
  if（！type）{
    for（vart in data.handlers）{
      removeType（T）;
    }
    返回;
  }

  var handlers = data.handlers [type];

  //如果没有处理程序存在，则无法解除绑定
  if（！handlers）{
    返回;
  }

  //如果没有提供监听器，请删除类型的所有侦听器
  if（！fn）{
    removeType（类型）;
    返回;
  }

  //我们只是删除一个处理程序
  if（fn.guid）{
    for（var n = 0; n <handlers.length; n ++）{
      if（handlers [n] .guid === fn.guid）{
        handlers.splice（n--，1）;
      }
    }
  }

  _cleanUpEvents（elem，type）;
}

/ **
 *触发元素的事件
 *
 * @param {Element | Object} elem
 *元素触发事件
 *
 * @param {EventTarget〜Event | string}事件
 *字符串（类型）或具有type属性的事件对象
 *
 * @param {Object} [hash]
 *数据散列与事件一起传递
 *
 * @return {boolean | undefined}
 *  - 如果默认被阻止，返回与“defaultPrevented”相反的
 *  - 否则返回未定义
 * /
函数触发器（elem，event，hash）{
  //获取元素数据和对父项的引用（用于冒泡）。
  //不想为每个父项添加数据对象进行缓存，
  //所以首先检查hasElData。
  var elemData = hasData（elem）？getData（elem）：{};
  var parent = elem.parentNode || elem.ownerDocument;
  // type = event.type || 事件，
  //处理程序

  //如果一个事件名称作为字符串传递，则创建一个事件
  if（typeof event ==='string'）{
    event = {type：event，target：elem};
  }
  //规范化事件属性。
  event = fixEvent（event）;

  //如果已传递的元素具有调度程序，则执行已建立的处理程序。
  if（elemData.dispatcher）{
    elemData.dispatcher.call（elem，event，hash）;
  }

  //除非明确停止或事件不起泡（例如媒体事件）
  //递归地调用这个函数来使事件向上浮动。
  if（parent &&！event.isPropagationStopped（）&& event.bubbles === true）{
    trigger.call（null，parent，event，hash）;

    //如果在DOM的顶部，触发默认操作，除非禁用。
  } else if（！parent &&！event.defaultPrevented）{
    var targetData = getData（event.target）;

    //检查目标是否有此事件的默认操作。
    if（event.target [event.type]）{
      //暂时禁用目标上的事件分派，因为我们已经执行了处理程序。
      targetData.disabled = true;
      //执行默认动作。
      if（typeof event.target [event.type] ==='function'）{
        event.target [event.type]（）;
      }
      //重新启用事件调度。
      targetData.disabled = false;
    }
  }

  //通知返回false可以防止默认值
  return！event.defaultPrevented;
}

/ **
 *仅为事件触发一次侦听器
 *
 * @param {Element | Object} elem
 *要绑定的元素或对象。
 *
 * @param {string | string []}类型
 *名称/事件类型
 *
 * @param {Event〜EventListener} fn
 *事件监听功能
 * /
函数一（elem，type，fn）{
  if（Array.isArray（type））{
    return _handleMultipleEvents（one，elem，type，fn）;
  }
  var func = function func（）{
    关（elem，type，func）;
    fn.apply（this，arguments）;
  };

  //将guid复制到新功能，以便可以使用原始功能的ID进行删除
  func.guid = fn.guid = fn.guid || newGUID（）;
  on（elem，type，func）;
}

var Events =（Object.freeze || Object）（{
	fixEvent：fixEvent，
	上：上，
	关：关，
	触发：触发，
	一一
}）;

/ **
 * @file setup.js  - 没有设置播放器的功能
 *基于视频标签的数据设置“属性”的用户交互。
 *
 * @module设置
 * /
var _windowLoaded = false;
var videojs $ 2 = void 0;

/ **
 *设置播放器启动时具有数据设置“属性”的任何标签。
 * /
var autoSetup = function autoSetup（）{

  //防止非浏览器环境中的破坏。
  if（！isReal（））{
    返回;
  }

  //有一天，当我们停止支持IE8时，回到这一点，但在此期间... * hack hack hack *
  // var vids = Array.prototype.slice.call（document.getElementsByTagName（'video'））;
  // var audios = Array.prototype.slice.call（document.getElementsByTagName（'audio'））;
  // var mediaEls = vids.concat（audios）;

  //因为IE8不支持在节点列表上调用slice，我们需要循环
  //通过每个元素列表来构建一个新的组合的元素列表。
  var vids = document_1.getElementsByTagName（'video'）;
  var audios = document_1.getElementsByTagName（'audio'）;
  var mediaEls = [];

  if（vids && vids.length> 0）{
    for（var i = 0，e = vids.length; i <e; i ++）{
      mediaEls.push（VIDS [I]）;
    }
  }

  if（audios && audios.length> 0）{
    for（var _i = 0，_e = audios.length; _i <_e; _i ++）{
      mediaEls.push（音频[_i]）;
    }
  }

  //检查是否存在媒体元素
  if（mediaEls && mediaEls.length> 0）{

    for（var _i2 = 0，_e2 = mediaEls.length; _i2 <_e2; _i2 ++）{
      var mediaEl = mediaEls [_i2];

      //检查元素是否存在，具有getAttribute功能。
      // IE似乎考虑了typeof el.getAttribute =='object'而不是
      //'function'like expected，至少在加载播放器时。
      if（mediaEl && mediaEl.getAttribute）{

        //确保此播放器尚未设置。
        if（mediaEl.player === undefined）{
          var options = mediaEl.getAttribute（'data-setup'）;

          //检查是否存在data-setup attr。
          //如果已经添加了数据设置attr，我们只能自动设置。
          if（options！== null）{
            //创建新的video.js实例。
            videojs $ 2（mediaEl）;
          }
        }

        //如果没有定义getAttribute，我们需要等待DOM。
      } else {
        autoSetupTimeout（1）;
        打破;
      }
    }

    //没有找到视频，所以保持循环，除非页面加载完成。
  } else if（！_windowLoaded）{
    autoSetupTimeout（1）;
  }
};

/ **
 *在运行autoSetup之前等待页面加载。这将被调用
 * autoSetup如果`hasLoaded`返回false。
 *
 * @param {number}等待
 *以ms为单位等待多长时间
 *
 * @param {module：videojs} [vjs]
 * videojs库函数
 * /
function autoSetupTimeout（wait，vjs）{
  if（vjs）{
    videojs $ 2 = vjs;
  }

  window_1.setTimeout（autoSetup，wait）;
}

if（isReal（）&& document_1.readyState ==='complete'）{
  _windowLoaded = true;
} else {
  / **
   *在window上收听load事件，并将_windowLoaded设置为true。
   *
   * @静音加载
   * /
  one（window_1，'load'，function（）{
    _windowLoaded = true;
  }）;
}

/ **
 * @file stylesheet.js
 * @module样式表
 * /
/ **
 *为它创建一个给定一个className的DOM syle元素。
 *
 * @param {string} className
 *要添加到创建的样式元素的className。
 *
 * @return {Element}
 *创建的元素。
 * /
var createStyleElement = function createStyleElement（className）{
  var style = document_1.createElement（'style'）;

  style.className = className;

  回归风格;
};

/ **
 *向DOM元素添加文本。
 *
 * @param {Element} el
 *要添加文本内容的元素。
 *
 * @param {string}内容
 *要添加到元素的文本。
 * /
var setTextContent = function setTextContent（el，content）{
  if（el.styleSheet）{
    el.styleSheet.cssText = content;
  } else {
    el.textContent = content;
  }
};

/ **
 * @file fn.js
 * @module fn
 * /
/ **
 *绑定（也称代理或上下文）。一种改变函数上下文的简单方法
 *它还在函数上存储一个唯一的ID，因此可以轻松地从事件中删除。
 *
 * @param {Mixed}上下文
 *要作为范围绑定的对象。
 *
 * @param {Function} fn
 *绑定到作用域的函数。
 *
 * @param {number} [uid]
 *要设置的功能的可选唯一ID
 *
 * @return {Function}
 *将绑定到上下文中的新函数
 * /
var bind = function bind（context，fn，uid）{
  //确保该函数具有唯一的ID
  if（！fn.guid）{
    fn.guid = newGUID（）;
  }

  //创建改变上下文的新函数
  var bound = function bound（）{
    return fn.apply（context，arguments）;
  };

  //允许个性化此功能的能力
  //在多个对象可能共享相同原型的情况下需要
  //如果两个项目都添加了一个具有相同功能的事件监听器，那么您尝试仅删除一个
  //它会同时删除它们，因为它们都具有相同的guid。
  //当使用它时，您还需要使用bind方法，当您删除监听器。
  //目前在文字轨道中使用
  bound.guid = uid？uid +'_'+ fn.guid：fn.guid;

  返回界限
};

/ **
 *使用一个仅调用“fn”的新函数包装给定函数`fn`
 *每个等待几毫秒最多一次。
 *
 * @param {Function} fn
 *要节流的功能。
 *
 * @param {Number}等待
 *节奏的毫秒数。
 *
 * @return {Function}
 * /
var throttle =功能节气门（fn，wait）{
  var last = Date.now（）;

  var throttled = function throttled（）{
    var now = Date.now（）;

    if（now  -  last> = wait）{
      fn.apply（undefined，arguments）;
      最后=现在
    }
  };

  返回节流
};

/ **
 * @file src / js / event-target.js
 * /
/ **
 *`EventTarget`是一个可以和DOM“EventTarget”具有相同API的类。它
 *增加了包含冗长功能的缩写功能。例如：
 *````函数是一个围绕`addEventListener`的包装器。
 *
 * @see [EventTarget Spec] {@ link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget}
 * @class EventTarget
 * /
var EventTarget = function EventTarget（）{};

/ **
 *自定义DOM事件。
 *
 * @typedef {Object} EventTarget〜Event
 * @see [属性] {@ link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent}
 * /

/ **
 *所有事件侦听器应遵循以下格式。
 *
 * @callback EventTarget〜EventListener
 * @this {EventTarget}
 *
 * @param {EventTarget〜Event}事件
 *触发此功能的事件
 *
 * @param {Object} [hash]
 *事件发送的数据散列
 * /

/ **
 *将包含事件名称作为键和布尔值的对象作为值。
 *
 *>注意：如果事件名称设置为true值{@link EventTarget＃trigger}
 *将具有额外的功能。有关更多信息，请参阅该功能。
 *
 * @property EventTarget.prototype.allowedEvents_
 * @私人的
 * /
EventTarget.prototype.allowedEvents_ = {};

/ **
 *将Event事件侦听器添加到EventTarget的一个实例中。“事件侦听器”是一个
 *当具有某个名称的事件被触发时，该函数将被调用。
 *
 * @param {string | string []}类型
 *事件名称或事件名称数组。
 *
 * @param {EventTarget〜EventListener} fn
 *用`EventTarget`s调用的函数
 * /
EventTarget.prototype.on = function（type，fn）{
  //在调用Events.on之前删除addEventListener别名
  //所以我们不会进入无限类型的循环
  var ael = this.addEventListener;

  this.addEventListener = function（）{};
  on（this，type，fn）;
  this.addEventListener = ael;
};

/ **
 * {@link EventTarget＃on}的别名。允许`EventTarget`模拟
 *标准DOM API。
 *
 * @功能
 * @see {@link EventTarget＃on}
 * /
EventTarget.prototype.addEventListener = EventTarget.prototype.on;

/ **
 *从EventTarget的实例中删除特定事件的“事件侦听器”。
 *这样做使得事件侦听器不再被调用的时候
 *命名事件发生。
 *
 * @param {string | string []}类型
 *事件名称或事件名称数组。
 *
 * @param {EventTarget〜EventListener} fn
 *删除的功能。
 * /
EventTarget.prototype.off = function（type，fn）{
  关（此，类型，fn）;
};

/ **
 * {@link EventTarget＃off}的别名。允许`EventTarget`模拟
 *标准DOM API。
 *
 * @功能
 * @see {@link EventTarget＃off}
 * /
EventTarget.prototype.removeEventListener = EventTarget.prototype.off;

/ **
 *此函数将添加一个仅被触发一次的“事件侦听器”。之后
 *首先触发它会被删除。这就像添加一个`event listener'
 *与{@link EventTarget＃on}一起调用{@link EventTarget＃off}。
 *
 * @param {string | string []}类型
 *事件名称或事件名称数组。
 *
 * @param {EventTarget〜EventListener} fn
 *为每个事件名称调用一次的函数。
 * /
EventTarget.prototype.one = function（type，fn）{
  //删除addEventListener alialing Events.on
  //所以我们不会进入无限类型的循环
  var ael = this.addEventListener;

  this.addEventListener = function（）{};
  一个（这个，类型，fn）;
  this.addEventListener = ael;
};

/ **
 *此功能会导致事件发生。这将导致任何“事件侦听器”
 *正在等待这个事件，被叫。如果没有“事件侦听器”
 *一个事件，那么什么都不会发生。
 *
 *如果正在触发的“Event”的名称在“EventTarget.allowedEvents_”中。
 * Trigger也会调用`on` +`uppercaseEventName`函数。
 *
 *示例：
 *'点击'在'EventTarget.allowedEvents_`中，所以触发器会尝试调用
 *`onClick`如果存在。
 *
 * @param {string | EventTarget〜Event | Object}事件
 *事件的名称，一个“事件”，或者一个键类型设置为的对象
 *事件名称。
 * /
EventTarget.prototype.trigger = function（event）{
  var type = event.type || 事件;

  if（typeof event ==='string'）{
    event = {type：type};
  }
  event = fixEvent（event）;

  if（this.allowedEvents_ [type] && this ['on'+ type]）{
    这个['on'+ type]（event）;
  }

  触发器（this，event）;
};

/ **
 * {@link EventTarget＃trigger}的别名。允许`EventTarget`模拟
 *标准DOM API。
 *
 * @功能
 * @see {@link EventTarget＃trigger}
 * /
EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger;

/ **
 * @file mixins / evented.js
 * @module事件
 * /
/ **
 *返回对象是否已应用了事件mixin。
 *
 * @param {Object}对象
 *要测试的对象
 *
 * @return {boolean}
 *该对象是否似乎被事件发生。
 * /
var isEvented = function isEvented（object）{
  返回EventTarget对象的实例|| !! object.eventBusEl_ && ['on'，'one'，'off'，'trigger']。every（function（k）{
    return typeof object [k] ==='function';
  }）;
};

/ **
 *值是否为有效的事件类型 - 非空字符串或数组。
 *
 * @私人的
 * @param {string | Array}类型
 *要测试的类型值。
 *
 * @return {boolean}
 *该类型是否为有效的事件类型。
 * /
var isValidEventType = function isValidEventType（type）{
  返回（
    //这里的正则表达式验证'type'包含至少一个非 - 
    //空格字符
    typeof type ==='string'&& /\S/.test(type）|| Array.isArray（type）&& !! type.length
  ）;
};

/ **
 *验证一个值以确定它是否是有效的事件目标。抛出如果没有。
 *
 * @私人的
 * @throws {错误}
 *如果目标不是有效的事件目标。
 *
 * @param {Object}目标
 *要测试的对象
 * /
var validateTarget = function validateTarget（target）{
  if（！target.nodeName &&！isE​​vented（target））{
    抛出新的错误（'无效的目标;必须是DOM节点或事件对象。
  }
};

/ **
 *验证一个值以确定它是否是有效的事件目标。抛出如果没有。
 *
 * @私人的
 * @throws {错误}
 *如果类型看起来不是有效的事件类型。
 *
 * @param {string | Array}类型
 *要测试的类型
 * /
var validateEventType = function validateEventType（type）{
  if（！isValidEventType（type））{
    抛出新的错误（'无效的事件类型;必须是一个非空字符串或数组。
  }
};

/ **
 *验证一个值以确定它是否是有效的侦听器。抛出如果没有。
 *
 * @私人的
 * @throws {错误}
 *如果侦听器不是一个函数。
 *
 * @param {Function}侦听器
 *听众测试。
 * /
var validateListener = function validateListener（listener）{
  if（typeof listener！=='function'）{
    抛出新的错误（'无效的侦听器;必须是一个函数。
  }
};

/ **
 *提供给on（）或`one（）`的参数数组，验证它们
 *将它们归一化为一个对象。
 *
 * @私人的
 * @param {Object} self
 *调用`on（）`或`one（）`的事件对象。这个
 *对象将被绑定为侦听器的“this”值。
 *
 * @param {Array} args
 *传递给`on（）`或`one（）`的参数数组。
 *
 * @return {Object}
 *包含`on（）`或`one（）`调用的有用值的对象。
 * /
var normalizeListenArgs = function normalizeListenArgs（self，args）{

  //如果参数数小于3，则该对象始终为
  //事件对象本身。
  var isTargetingSelf = args.length <3 || args [0] === self || args [0] === self.eventBusEl_;
  var target = void 0;
  var type = void 0;
  var listener = void 0;

  if（isTargetingSelf）{
    target = self.eventBusEl_;

    //处理我们有3个参数的情况，但是我们还在听
    //事件对象本身。
    if（args.length> = 3）{
      args.shift（）;
    }

    type = args [0];
    listener = args [1];
  } else {
    target = args [0];
    type = args [1];
    listener = args [2];
  }

  validateTarget（目标）;
  validateEventType（类型）;
  validateListener（收听）;

  listener = bind（self，listener）;

  return {isTargetingSelf：isTargetingSelf，target：target，type：type，listener：listener};
};

/ **
 *将侦听器添加到目标上的事件类型，进行规范化
 *目标的类型。
 *
 * @私人的
 * @param {Element | Object}目标
 * DOM节点或事件对象。
 *
 * @param {string}方法
 *要使用的事件绑定方法（“on”或“one”）。
 *
 * @param {string | Array}类型
 *一个或多个事件类型。
 *
 * @param {Function}侦听器
 *听众功能。
 * /
var listen = function listen（target，method，type，listener）{
  validateTarget（目标）;

  if（target.nodeName）{
    事件[方法]（目标，类型，侦听器）;
  } else {
    target [method]（type，listener）;
  }
};

/ **
 *包含为传递的对象提供事件功能的方法
 *到{@link module：evented | evented}。
 *
 * @mixin EventedMixin
 * /
var EventedMixin = {

  / **
   *将一个侦听器添加到此对象上的事件（或事件）或另一个事件中
   *对象。
   *
   * @param {string | Array | Element | Object} targetOrType
   *如果这是一个字符串或数组，它表示事件类型
   *将触发监听器。
   *
   *另一个事件对象可以在这里传递，这将会
   *使侦听器侦听_that_对象上的事件。
   *
   *在任一情况下，监听器的“this”值将被绑定
   *这个对象。
   *
   * @param {string | Array | Function} typeOrListener
   *如果第一个参数是字符串或数组，则应该是
   *监听功能。否则，这是一个字符串或数组的事件
   *类型。
   *
   * @param {Function} [listener]
   *如果第一个参数是另一个事件对象，这将是
   *听众功能。
   * /
  on：function on $$ 1（）{
    var _this = this;

    for（var _len = arguments.length，args = Array（_len），_key = 0; _key <_len; _key ++）{
      args [_key] =参数[_key];
    }

    var _normalizeListenArgs = normalizeListenArgs（this，args），
        isTargetingSelf = _normalizeListenArgs.isTargetingSelf，
        target = _normalizeListenArgs.target，
        type = _normalizeListenArgs.type，
        listener = _normalizeListenArgs.listener;

    listen（target，'on'，type，listener）;

    //如果此对象正在侦听另一个事件对象。
    if（！isTargetingSelf）{

      //如果处理此对象，请删除侦听器。
      var removeListenerOnDispose = function removeListenerOnDispose（）{
        return _this.off（target，type，listener）;
      };

      //使用与侦听器相同的功能ID，以便稍后将其删除
      //使用原始侦听器的ID。
      removeListenerOnDispose.guid = listener.guid;

      //将侦听器添加到目标的处理事件中。这确保
      //如果目标在此对象之前处理，我们删除
      //刚刚添加的删除监听器。否则，我们创建一个内存泄漏。
      var removeRemoverOnTargetDispose = function removeRemoverOnTargetDispose（）{
        return _this.off（'dispose'，removeListenerOnDispose）;
      };

      //使用与侦听器相同的功能ID，以便稍后将其删除
      //它使用原始侦听器的ID。
      removeRemoverOnTargetDispose.guid = listener.guid;

      listen（this，'on'，'dispose'，removeListenerOnDispose）;
      listen（target，'on'，'dispose'，removeRemoverOnTargetDispose）;
    }
  }，


  / **
   *将一个侦听器添加到此对象上的事件（或事件）或另一个事件中
   *对象。侦听器只会被调用一次然后删除。
   *
   * @param {string | Array | Element | Object} targetOrType
   *如果这是一个字符串或数组，它表示事件类型
   *将触发监听器。
   *
   *另一个事件对象可以在这里传递，这将会
   *使侦听器侦听_that_对象上的事件。
   *
   *在任一情况下，监听器的“this”值将被绑定
   *这个对象。
   *
   * @param {string | Array | Function} typeOrListener
   *如果第一个参数是字符串或数组，则应该是
   *监听功能。否则，这是一个字符串或数组的事件
   *类型。
   *
   * @param {Function} [listener]
   *如果第一个参数是另一个事件对象，这将是
   *听众功能。
   * /
  one：function one $$ 1（）{
    var _this2 = this;

    for（var _len2 = arguments.length，args = Array（_len2），_key2 = 0; _key2 <_len2; _key2 ++）{
      args [_key2] = arguments [_key2];
    }

    var _normalizeListenArgs2 = normalizeListenArgs（this，args），
        isTargetingSelf = _normalizeListenArgs2.isTargetingSelf，
        target = _normalizeListenArgs2.target，
        type = _normalizeListenArgs2.type，
        listener = _normalizeListenArgs2.listener;

    //定位此事件对象。


    if（isTargetingSelf）{
      listen（target，'one'，type，listener）;

      //定位另一个事件对象。
    } else {
      var wrapper = function wrapper（）{
        for（var _len3 = arguments.length，largs = Array（_len3），_key3 = 0; _key3 <_len3; _key3 ++）{
          largs [_key3] =参数[_key3];
        }

        _this2.off（target，type，wrapper）;
        listener.apply（null，largs）;
      };

      //使用与侦听器相同的功能ID，以便稍后将其删除
      //它使用原始侦听器的ID。
      wrapper.guid = listener.guid;
      listen（target，'one'，type，wrapper）;
    }
  }，


  / **
   *从事件对象上的事件中删除侦听器。
   *
   * @param {string | Array | Element | Object} [targetOrType]
   *如果这是一个字符串或数组，它表示事件类型。
   *
   *另一个事件对象可以在这里传递，在这种情况下
   * ALL 3个参数是_required_。
   *
   * @param {string | Array | Function} [typeOrListener]
   *如果第一个参数是字符串或数组，这可能是
   *监听功能。否则，这是一个字符串或数组的事件
   *类型。
   *
   * @param {Function} [listener]
   *如果第一个参数是另一个事件对象，这将是
   *听众功能; 否则，_all_监听器绑定到
   *事件类型将被删除。
   * /
  off：function off $$ 1（targetOrType，typeOrListener，listener）{

    //定位此事件对象。
    if（！targetOrType || isValidEventType（targetOrType））{
      off（this.eventBusEl_，targetOrType，typeOrListener）;

      //定位另一个事件对象。
    } else {
      var target = targetOrType;
      var type = typeOrListener;

      //失败快速，有意义的方式！
      validateTarget（目标）;
      validateEventType（类型）;
      validateListener（收听）;

      //确保至少有一个guid，即使没有使用该函数
      listener = bind（this，listener）;

      //删除给定的事件对象上的处理侦听器
      //与on（）中的事件监听器相同的guid。
      this.off（'dispose'，listener）;

      if（target.nodeName）{
        关闭（目标，类型，侦听器）;
        关闭（目标，“处置”，听众）;
      } else if（isEvented（target））{
        target.off（type，listener）;
        target.off（'dispose'，listener）;
      }
    }
  }，


  / **
   *在此事件对象上触发一个事件，导致侦听器被调用。
   *
   * @param {string | Object}事件
   *事件类型或具有type属性的对象。
   *
   * @param {Object} [hash]
   *另一个对象传递给听众。
   *
   * @returns {boolean}
   *是否阻止默认行为。
   * /
  trigger：function trigger $ 1（event，hash）{
    return trigger（this.eventBusEl_，event，hash）;
  }
};

/ **
 *将{@link module：evented〜EventedMixin | EventedMixin}应用于目标对象。
 *
 * @param {Object}目标
 *添加事件方法的对象。
 *
 * @param {Object} [options = {}]
 *定制mixin行为的选项。
 *
 * @param {String} [options.eventBusKey]
 *默认情况下，向目标对象添加一个“eventBusEl_”DOM元素，
 *用作事件总线。如果目标对象已经有一个
 *应该使用的DOM元素，在此处传递它的键。
 *
 * @return {Object}
 *目标对象。
 * /
function evented（target）{
  var options = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
  var eventBusKey = options.eventBusKey;

  //设置或创建eventBusEl_。

  if（eventBusKey）{
    if（！target [eventBusKey] .nodeName）{
      抛出新的错误（'EventBusKey''+ eventBusKey +'“不引用元素。
    }
    target.eventBusEl_ = target [eventBusKey];
  } else {
    target.eventBusEl_ = createEl（'span'，{className：'vjs-event-bus'}）;
  }

  assign（target，EventedMixin）;

  //处理任何事件对象时，将删除其所有侦听器。
  target.on（'dispose'，function（）{
    return target.off（）;
  }）;

  回报目标
}

/ **
 * @file mixins / stateful.js
 * @module状态
 * /
/ **
 *包含为传递的对象提供状态的方法
 *到{@link module：stateful}。
 *
 * @mixin StatefulMixin
 * /
var StatefulMixin = {

  / **
   *包含任意键的哈希值和表示状态的值
   * 物体。
   *
   * @type {Object}
   * /
  状态：{}，

  / **
   *通过变更对象来设定对象的状态
   * {@link module：stateful〜StatefulMixin.state | state}对象就位。
   *
   * @fires模块：stateful〜StatefulMixin＃statechanged
   * @param {Object | Function} stateUpdates
   *一组新的属性，浅层并入插件状态。
   *可以是普通对象或返回一个普通对象的函数。
   *
   * @returns {Object | undefined}
   *包含发生的更改的对象。如果没有变化
   *发生，返回`undefined`。
   * /
  setState：function setState（stateUpdates）{
    var _this = this;

    //支持提供“stateUpdates”状态作为一个功能。
    if（typeof stateUpdates ==='function'）{
      stateUpdates = stateUpdates（）;
    }

    var changes = void 0;

    each（stateUpdates，function（value，key）{

      //如果值与该值不同，则记录更改
      // 当前状态。
      if（_this.state [key]！== value）{
        change = changes || {};
        更改[key] = {
          来自：_this.state [key]，
          到：值
        };
      }

      _this.state [key] = value;
    }）;

    //只有触发“statechange”，如果有更改，我们有一个触发器
    //函数。这允许我们不要求目标对象是一个
    //事件对象。
    if（changes && isEvented（this））{

      / **
       *两个对象上触发的事件
       * {@link module：stateful | stateful}和{@link module：evented | evented}
       *表示其状态发生变化。
       *
       * @event模块：stateful〜StatefulMixin＃statechanged
       * @type {Object}
       * @property {Object}更改
       *包含已更改的属性的哈希值
       *他们被改变的值``````````
       * /
      this.trigger（{
        变化：变化，
        类型：'statechanged'
      }）;
    }

    返回变化;
  }
};

/ **
 *将{@link module：stateful〜StatefulMixin | StatefulMixin}应用于目标
 *对象。
 *
 *如果目标对象是{@link module：evented | evented}并具有
 *`handleStateChanged`方法，该方法将被自动绑定到
 *“statechanged”事件本身。
 *
 * @param {Object}目标
 *要对待的状态。
 *
 * @param {Object} [defaultState]
 *默认的一组属性来填充新的状态对象
 *`state`属性。
 *
 * @returns {Object}
 *返回`target'。
 * /
function state（target，defaultState）{
  assign（target，statefulMixin）;

  //这是在混合后发生的，因为我们需要替换`state'
  //在该步骤中添加
  target.state = assign（{}，target.state，defaultState）;

  //自动绑定目标对象的`handleStateChanged`方法（如果存在）。
  if（typeof target.handleStateChanged ==='function'&& isEvented（target））{
    target.on（'statechanged'，target.handleStateChanged）;
  }

  回报目标
}

/ **
 * @file to-title-case.js
 * @module to-title-case
 * /

/ **
 *大写字符串的第一个字母。
 *
 * @param {string}字符串
 *要上位的字符串
 *
 * @return {string}
 *具有上面第一个字母的字符串
 * /
函数toTitleCase（string）{
  if（typeof string！=='string'）{
    返回字符串;
  }

  return string.charAt（0）.toUpperCase（）+ string.slice（1）;
}

/ **
 *比较两个字符串的TitleCase版本是否相等。
 *
 * @param {string} str1
 *第一个要比较的字符串
 *
 * @param {string} str2
 *第二个字符串进行比较
 *
 * @return {boolean}
 * TitleCase版本的字符串是否相等
 * /
function titleCaseEquals（str1，str2）{
  返回toTitleCase（str1）=== toTitleCase（str2）;
}

/ **
 * @file merge-options.js
 * @module merge-options
 * /
/ **
 *深度合并一个或多个选项对象，递归合并**仅** plain
 *对象属性。
 *
 * @param {Object []}来源
 *一个或多个对象合并成一个新对象。
 *
 * @returns {Object}
 *所有来源的合并结果的新对象。
 * /
function mergeOptions（）{
  var result = {};

  for（var _len = arguments.length，sources = Array（_len），_key = 0; _key <_len; _key ++）{
    来源[_key] =参数[_key];
  }

  sources.forEach（function（source）{
    if（！source）{
      返回;
    }

    each（source，function（value，key）{
      if（！isPlain（value））{
        result [key] = value;
        返回;
      }

      if（！isPlain（result [key]））{
        result [key] = {};
      }

      result [key] = mergeOptions（result [key]，value）;
    }）;
  }）;

  返回结果;
}

/ **
 * Player组件 - 所有UI对象的基类
 *
 * @file component.js
 * /
/ **
 *所有UI组件的基类。
 *组件是表示JavaScript对象和元素的UI对象
 *在DOM中 他们可以是其他组件的孩子，可以有
 *孩子自己
 *
 *组件也可以使用{@link EventTarget}中的方法
 * /

var Component = function（）{

  / **
   *组件准备就绪时调用的回调函数。没有任何
   *参数和任何回调值将被忽略。
   *
   * @callback Component〜ReadyCallback
   * @这个组件
   * /

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   *
   * @param {Object []} [options.children]
   *一个数组的子对象来初始化这个组件。儿童对象有
   *一个名称属性，如果同一类型的多个组件需要，将被使用
   * 添加。
   *
   * @param {Component〜ReadyCallback} [ready]
   *当“Component”准备就绪时被调用的函数。
   * /
  功能组件（播放器，选项，就绪）{
    classCallCheck（this，Component）;


    //该组件可能是播放器本身，我们不能将`this`传递给超级
    if（！player && this.play）{
      this.player_ = player = this; // eslint-disable-line
    } else {
      this.player_ = player;
    }

    //创建一个prototype.options_的副本以防止覆盖默认值
    this.options_ = mergeOptions（{}，this.options_）;

    //更新选项与提供的选项
    options = this.options_ = mergeOptions（this.options_，options）;

    //如果提供了选项或选项元素，则获取ID
    this.id_ = options.id || options.el && options.el.id;

    //如果选项中没有ID，则生成一个
    if（！this.id_）{
      //在模拟玩家的情况下，不要求播放器ID功能
      var id = player && player.id && player.id（）|| 'no_player';

      this.id_ = id +'_component_'+ newGUID（）;
    }

    this.name_ = options.name || 空值;

    //如果在选项中未提供元素，则创建元素
    if（options.el）{
      this.el_ = options.el;
    } else if（options.createEl！== false）{
      this.el_ = this.createEl（）;
    }

    //使它成为一个事件对象，并使用'el_`（如果可用）作为它的事件总线
    evented（this，{eventBusKey：this.el_？'el_'：null}）;
    stateful（this，this.constructor.defaultState）;

    this.children_ = [];
    this.childIndex_ = {};
    this.childNameIndex_ = {};

    //在选项中添加任何子组件
    if（options.initChildren！== false）{
      this.initChildren（）;
    }

    this.ready（准备好）;
    //不想在这里触发准备，否则在init之前实际上是这样的
    //为所有运行此构造函数的子代完成

    if（options.reportTouchActivity！== false）{
      this.enableTouchActivity（）;
    }
  }

  / **
   *处理“组件”和所有子组件。
   *
   * @fires组件＃处理
   * /


  Component.prototype.dispose = function dispose（）{

    / **
     *处理“组件”时触发。
     *
     * @event组件＃处理
     * @type {EventTarget〜Event}
     *
     * @property {boolean} [bubbles = false]
     *设置为false，以使close事件不发生
     * 冒泡
     * /
    this.trigger（{type：'dispose'，bubbles：false}）;

    //处理所有的孩子。
    if（this.children_）{
      for（var i = this.children_.length  -  1; i> = 0; i--）{
        if（this.children_ [i] .dispose）{
          this.children_ [I] .dispose（）;
        }
      }
    }

    //删除子引用
    this.children_ = null;
    this.childIndex_ = null;
    this.childNameIndex_ = null;

    if（this.el_）{
      //从DOM中删除元素
      if（this.el_.parentNode）{
        this.el_.parentNode.removeChild（this.el_）;
      }

      removeData（this.el_）;
      this.el_ = null;
    }
  };

  / **
   *返回“Component”附加到的{@link Player}。
   *
   * @return {播放器}
   *这个“Component”所附加的播放器。
   * /


  Component.prototype.player = function player（）{
    返回this.player_;
  };

  / **
   *使用新选项深入合并选项对象。
   *>注意：当`obj`和`options`都包含其值为对象的属性时。
   *这两个属性使用{@link module：mergeOptions}合并
   *
   * @param {Object} obj
   *包含新选项的对象。
   *
   * @return {Object}
   *`this.options_`和`obj`的新对象合并在一起。
   *
   *自版本5以来已被删除
   * /


  Component.prototype.options = function options（obj）{
    log $ 1.warn（'this.options（）已被弃用，将被移动到6.0中的构造函数）;

    if（！obj）{
      return this.options_;
    }

    this.options_ = mergeOptions（this.options_，obj）;
    return this.options_;
  };

  / **
   *获取“Component”的DOM元素
   *
   * @return {Element}
   *这个“Component”的DOM元素。
   * /


  Component.prototype.el = function el（）{
    返回this.el_;
  };

  / **
   *创建“Component”的DOM元素。
   *
   * @param {string} [tagName]
   *元素的DOM节点类型。例如'div'
   *
   * @param {Object} [属性]
   *应设置属性的对象。
   *
   * @param {Object} [attributes]
   *应该设置的属性对象。
   *
   * @return {Element}
   *创建的元素。
   * /


  Component.prototype.createEl = function createEl $$ 1（tagName，properties，attributes）{
    返回createEl（tagName，properties，attributes）;
  };

  / **
   *本地化一个字符串给英文字符串。
   *
   *如果提供令牌，它将尝试在提供的字符串上运行一个简单的令牌替换。
   *令牌看起来像“{1}”，索引被索引到令牌数组中。
   *
   *如果提供了一个`defaultValue`，它会使用``````
   *如果在提供的语言文件中找不到值。
   *如果您想要具有令牌替换的描述性密钥，这将非常有用
   *但是具有简洁的本地化字符串，并且不需要包含`en.json'。
   *
   *目前，它用于进度条的定时。
   *```js
   * {
   *“进度条时间：currentTime = {1} duration = {2}”：“{1} {2}”
   *}
   *```
   *然后使用如下：
   *```js
   * this.localize（'进度条时间：currentTime = {1} duration {2}'，
   * [this.player_.currentTime（），this.player_.duration（）]，
   *'{1} of {2}'）;
   *```
   *
   *输出如下：“01:23 of 24：56”。
   *
   *
   * @param {string}字符串
   *本地化的字符串和在语言文件中查找的键。
   * @param {string []} [令牌]
   *如果当前项目具有令牌替换，请在此处提供令牌。
   * @param {string} [defaultValue]
   *默认为`string`。可以作为令牌替换的默认值
   *如果查找键需要分开。
   *
   * @return {string}
   *本地化字符串或如果没有本地化存在英文字符串。
   * /


  Component.prototype.localize = function localize（string，tokens）{
    var defaultValue = arguments.length> 2 && arguments [2]！== undefined？参数[2]：string;

    var code = this.player_.language && this.player_.language（）;
    var languages = this.player_.languages && this.player_.languages（）;
    var language = languages && languages [code];
    var primaryCode = code && code.split（' - '）[0];
    var primaryLang = languages && languages [primaryCode];

    var localizedString = defaultValue;

    if（language && language [string]）{
      localizedString = language [string];
    } else if（primaryLang && primaryLang [string]）{
      localizedString = primaryLang [string];
    }

    if（令牌）{
      localizedString = localizedString.replace（/ \ {（\ d +）\} / g，function（match，index）{
        var value = tokens [index-1];
        var ret = value;

        if（typeof value ==='undefined'）{
          ret = match
        }

        返回
      }）;
    }

    return localizedString;
  };

  / **
   *返回“Component”的DOM元素。这是孩子们插入的地方。
   *通常与{@link Component＃el}中返回的元素相同。
   *
   * @return {Element}
   *这个“Component”的内容元素。
   * /


  Component.prototype.contentEl = function contentEl（）{
    返回this.contentEl_ || this.el_;
  };

  / **
   *获取这个“组件”的ID
   *
   * @return {string}
   *这个“Component”的id
   * /


  Component.prototype.id = function id（）{
    返回this.id_;
  };

  / **
   *获取“组件”的名称。该名称用于引用“Component”
   *注册时设定。
   *
   * @return {string}
   *这个“组件”的名称。
   * /


  Component.prototype.name = function name（）{
    返回this.name_;
  };

  / **
   *获取所有子组件的数组
   *
   * @return {Array}
   * 这些孩子
   * /


  Component.prototype.children = function children（）{
    返回this.children_;
  };

  / **
   *返回带有给定“id”的子组件。
   *
   * @param {string} id
   *孩子的组成部分的id。
   *
   * @return {Component | undefined}
   *具有给定“id”或未定义的小孩“组件”。
   * /


  Component.prototype.getChildById = function getChildById（id）{
    返回this.childIndex_ [id];
  };

  / **
   *返回带有给定“name”的子组件。
   *
   * @param {string}名称
   *要获取的小孩“组件”的名称。
   *
   * @return {Component | undefined}
   *孩子`Component`与给定的`name`或未定义。
   * /


  Component.prototype.getChild = function getChild（name）{
    if（！name）{
      返回;
    }

    name = toTitleCase（name）;

    return this.childNameIndex_ [name];
  };

  / **
   *在当前的“组件”内添加一个“组件”。
   *
   *
   * @param {string | Component}小孩
   *要添加的小孩的名称或实例。
   *
   * @param {Object} [options = {}]
   *将传递给孩子的选项的键/值存储
   *小孩
   *
   * @param {number} [index = this.children_.length]
   *尝试添加孩子的索引。
   *
   * @return {Component}
   *作为小孩添加的“组件”。当使用字符串时
   *这个过程将创建'Component'。
   * /


  Component.prototype.addChild = function addChild（child）{
    var options = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
    var index = arguments.length> 2 && arguments [2]！== undefined？参数[2]：this.children_.length;

    var component = void 0;
    var componentName = void 0;

    //如果child是一个字符串，创建具有选项的组件
    if（typeof child ==='string'）{
      componentName = toTitleCase（child）;

      var componentClassName = options.componentClass || 组件名称;

      //通过选项设置名称
      options.name = componentName;

      //为此控件集创建一个新对象和元素
      //如果没有.player_，这是一个播放器
      var ComponentClass = Component.getComponent（componentClassName）;

      if（！ComponentClass）{
        抛出新的错误（'Component'+ componentClassName +'不存在'）;
      }

      //直接存储在videojs对象上的数据可能是
      //误认为要保留的组件
      //向后兼容4.x. 检查以确保
      //组件类可以实例化。
      if（typeof ComponentClass！=='function'）{
        返回null;
      }

      component = new ComponentClass（this.player_ || this，options）;

      // child是组件实例
    } else {
      component = child;
    }

    this.children_.splice（index，0，component）;

    if（typeof component.id ==='function'）{
      this.childIndex_ [component.id（）] = component;
    }

    //如果没有使用名称来创建组件，请检查是否可以使用
    //组件的名称函数
    componentName = componentName || component.name && toTitleCase（component.name（））;

    if（componentName）{
      this.childNameIndex_ [componentName] = component;
    }

    //将UI对象的元素添加到容器div（框）
    //不需要元素
    if（typeof component.el ==='function'&& component.el（））{
      var childNodes = this.contentEl（）。
      var refNode = childNodes [index] || 空值;

      this.contentEl（）。insertBefore（component.el（），refNode）;
    }

    //返回，如果需要，它可以存储在父对象上。
    返回组件;
  };

  / **
   *从这个“组件”的子项列表中删除一个小孩“组件”。也删除
   *这个`Component`s元素的子元素`Component`s元素。
   *
   * @param {Component}组件
   *要移除的小孩“组件”。
   * /


  Component.prototype.removeChild = function removeChild（component）{
    if（typeof component ==='string'）{
      component = this.getChild（component）;
    }

    if（！component ||！this.children_）{
      返回;
    }

    var childFound = false;

    for（var i = this.children_.length  -  1; i> = 0; i--）{
      if（this.children_ [i] === component）{
        childFound = true;
        this.children_.splice（i，1）;
        打破;
      }
    }

    if（！childFound）{
      返回;
    }

    this.childIndex_ [component.id（）] = null;
    this.childNameIndex_ [component.name（）] = null;

    var compEl = component.el（）;

    if（compEl && compEl.parentNode === this.contentEl（））{
      this.contentEl（）removeChild之（component.el（））。
    }
  };

  / **
   *根据选项添加和初始化默认的“组件”。
   * /


  Component.prototype.initChildren = function initChildren（）{
    var _this = this;

    var children = this.options_.children;

    if（children）{
      //`this`是`parent`
      var parentOptions = this.options_;

      var handleAdd = function handleAdd（child）{
        var name = child.name;
        var opts = child.opts;

        //允许将子项设置为父选项
        // eg videojs（id，{controlBar：false}）;
        //而不是videojs（id，{children：{controlBar：false}）;
        if（parentOptions [name]！== undefined）{
          opts = parentOptions [name];
        }

        //允许禁用默认组件
        // eg options ['children'] ['posterImage'] = false
        if（opts === false）{
          返回;
        }

        //如果没有配置，允许将选项作为一个简单的布尔值传递
        // 是必要的。
        if（opts === true）{
          opts = {};
        }

        //我们也想通过原来的玩家选项
        //对每个组件，所以他们不需要
        //以后再回到玩家的选项。
        opts.playerOptions = _this.options_.playerOptions;

        //创建并添加子组件。
        //在父实例上按名称添加对子代的直接引用。
        //如果使用两个相同的组件，则应提供不同的名称
        //每一个
        var newChild = _this.addChild（name，opts）;

        if（newChild）{
          _this [name] = newChild;
        }
      };

      //允许在选项中传递一系列子节点的细节
      var workingChildren = void 0;
      var Tech = Component.getComponent（'Tech'）;

      if（Array.isArray（children））{
        workingChildren = children;
      } else {
        workingChildren = Object.keys（children）;
      }

      workingChildren
      //在this.options_中的孩子，而且在workingChildren中会
      //给我们额外的孩子，我们不想要。所以，我们要过滤掉它们。
      .concat（Object.keys（this.options _）。filter（function（child）{
        return！workingChildren.some（function（wchild）{
          if（typeof wchild ==='string'）{
            返回孩子=== wchild;
          }
          返回小孩=== wchild.name;
        }）;
      }））。map（function（child）{
        var name = void 0;
        var opts = void 0;

        if（typeof child ==='string'）{
          姓=孩子
          opts = children [name] || _this.options_ [name] || {};
        } else {
          name = child.name;
          opts = child;
        }

        return {name：name，opts：opts};
      }）。filter（function（child）{
        //我们必须确保child.name不在techOrder中
        //技术注册为组件，但不能兼容
        //参见https://github.com/videojs/video.js/issues/2772
        var c = Component.getComponent（child.opts.componentClass || toTitleCase（child.name））;

        返回c &&！Tech.isTech（c）;
      }）的forEach（handleAdd）;
    }
  };

  / **
   *构建默认的DOM类名。应由子组件覆盖。
   *
   * @return {string}
   *此对象的DOM类名称。
   *
   * @abstract
   * /


  Component.prototype.buildCSSClass = function buildCSSClass（）{
    //子类可以包括一个函数：
    // return'CLASS NAME'+ this._super（）;
    返回''
  };

  / **
   *将侦听器绑定到组件的就绪状态。
   *与事件侦听器不同的是，如果ready事件已经发生
   *它将立即触发该功能。
   *
   * @return {Component}
   *返回本身; 方法可以链接。
   * /


  Component.prototype.ready = function ready（fn）{
    var sync = arguments.length> 1 && arguments [1]！== undefined？参数[1]：假;

    if（fn）{
      if（this.isReady_）{
        if（sync）{
          fn.call（本）;
        } else {
          //默认情况下异步调用函数以保持一致性
          this.setTimeout（fn，1）;
        }
      } else {
        this.readyQueue_ = this.readyQueue_ || [];
        this.readyQueue_.push（FN）;
      }
    }
  };

  / **
   *触发此“Component”的所有准备侦听器。
   *
   * @fires组件＃就绪
   * /


  Component.prototype.triggerReady = function triggerReady（）{
    this.isReady_ = true;

    //确保准备好异​​步触发
    this.setTimeout（function（）{
      var readyQueue = this.readyQueue_;

      //重新启动队列
      this.readyQueue_ = [];

      if（readyQueue && readyQueue.length> 0）{
        readyQueue.forEach（function（fn）{
          fn.call（本）;
        }， 这个）;
      }

      //允许使用事件侦听器
      / **
       *当组件准备就绪时触发。
       *
       * @event组件＃准备好了
       * @type {EventTarget〜Event}
       * /
      this.trigger（ '准备就绪'）;
    }，1）;
  };

  / **
   *查找一个与`selector`匹配的DOM元素。这可以在“组件”内
   *`contentEl（）`或其他自定义上下文。
   *
   * @param {string}选择器
   *一个有效的CSS选择器，将被传递给`querySelector`。
   *
   * @param {Element | string} [context = this.contentEl（）]
   *要查询的DOM元素。也可以是一个选择器字符串
   *哪种情况下第一个匹配元素将被用作上下文。如果
   *缺少`this.contentEl（）`被使用。如果`this.contentEl（）`返回
   *没有什么可以回到`文件'。
   *
   * @return {Element | null}
   *找到的dom元素，或null
   *
   * @see [关于CSS选择器的信息]（https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors）
   * /


  Component.prototype $ = function $$$ 1（selector，context）{
    return $（selector，context || this.contentEl（））;
  };

  / **
   *查找与“selector”匹配的所有DOM元素。这可以在“组件”内
   *`contentEl（）`或其他自定义上下文。
   *
   * @param {string}选择器
   *一个有效的CSS选择器，它将被传递给`querySelectorAll`。
   *
   * @param {Element | string} [context = this.contentEl（）]
   *要查询的DOM元素。也可以是一个选择器字符串
   *哪种情况下第一个匹配元素将被用作上下文。如果
   *缺少`this.contentEl（）`被使用。如果`this.contentEl（）`返回
   *没有什么可以回到`文件'。
   *
   * @return {NodeList}
   *找到的dom元素列表
   *
   * @see [关于CSS选择器的信息]（https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors）
   * /


  Component.prototype。$$ = function $$$$ 1（selector，context）{
    return $$（selector，context || this.contentEl（））;
  };

  / **
   *检查组件的元素是否具有CSS类名称。
   *
   * @param {string} classToCheck
   *要检查的CSS类名。
   *
   * @return {boolean}
   *  - 如果“组件”有类，则为真。
   *  - 如果“Component”没有该类，则为False
   * /


  Component.prototype.hasClass = function hasClass $$ 1（classToCheck）{
    return hasClass（this.el_，classToCheck）;
  };

  / **
   *将一个CSS类名添加到“Component”元素中。
   *
   * @param {string} classToAdd
   *添加CSS类名
   * /


  Component.prototype.addClass = function addClass $$ 1（classToAdd）{
    addClass（this.el_，classToAdd）;
  };

  / **
   *从`Component`s元素中删除一个CSS类名。
   *
   * @param {string} classToRemove
   *要删除的CSS类名称
   * /


  Component.prototype.removeClass = function removeClass $$ 1（classToRemove）{
    removeClass（this.el_，classToRemove）;
  };

  / **
   *从组件的元素添加或删除CSS类名称。
   *  - 当{@link Component＃hasClass}返回false时，会添加`classToToggle`。
   *  - 当{@link Component＃hasClass}返回true时，`classToToggle`将被删除。
   *
   * @param {string} classToToggle
   *根据（@link Component＃hasClass}添加或删除的类
   *
   * @param {boolean | Dom〜predicate} [predicate]
   *一个{@link Dom〜predicate}函数或一个布尔值
   * /


  Component.prototype.toggleClass = function toggleClass $$ 1（classToToggle，predicate）{
    toggleClass（this.el_，classToToggle，谓词）;
  };

  / **
   *如果通过删除，则显示“Component”元素
   *'vjs-hidden'类名称。
   * /


  Component.prototype.show = function show（）{
    this.removeClass（ 'VJS隐藏'）;
  };

  / **
   *如果当前通过添加显示，则隐藏“Component”元素
   *'vjs-hidden`类名。
   * /


  Component.prototype.hide = function hide（）{
    this.addClass（ 'VJS隐藏'）;
  };

  / **
   *通过添加“vjs-lock-displays”将“Component”元素锁定在可见状态
   *类名称。在淡入/淡出时使用。
   *
   * @私人的
   * /


  Component.prototype.lockShowing = function lockShowing（）{
    this.addClass（ 'VJS锁-表示'）;
  };

  / **
   *通过删除'vjs-lock-displays'将'Component`s元素从可见状态解锁
   *来自它的类名。在淡入/淡出时使用。
   *
   * @私人的
   * /


  Component.prototype.unlockShowing = function unlockShowing（）{
    this.removeClass（ 'VJS锁-表示'）;
  };

  / **
   *获取“Component”元素上的属性值。
   *
   * @param {string}属性
   *获取值的属性名称。
   *
   * @return {string | null}
   *  - 要求的属性的值。
   *  - 如果该属性不存在，则可能是某些浏览器上的空字符串
   *或没有价值
   *  - 如果attibute不存在或者没有，大多数浏览器将返回null
   * 没有价值。
   *
   * @see [DOM API] {@ link https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute}
   * /


  Component.prototype.getAttribute = function getAttribute $$ 1（attribute）{
    return getAttribute（this.el_，attribute）;
  };

  / **
   *设置“Component”元素上的属性值
   *
   * @param {string}属性
   *要设置的属性的名称。
   *
   * @param {string}值
   *设置属性的值。
   *
   * @see [DOM API] {@ link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute}
   * /


  Component.prototype.setAttribute = function setAttribute $$ 1（attribute，value）{
    setAttribute（this.el_，attribute，value）;
  };

  / **
   *从“Component”元素中删除一个属性。
   *
   * @param {string}属性
   *要删除的属性的名称。
   *
   * @see [DOM API] {@ link https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute}
   * /


  Component.prototype.removeAttribute = function removeAttribute $$ 1（attribute）{
    removeAttribute（this.el_，attribute）;
  };

  / **
   *根据CSS样式获取或设置组件的宽度。
   *有关更多详细信息，请参阅{@link组件＃维度}。
   *
   * @param {number | string} [num]
   *您想要设置的“％”，“px”或没有任何内容的宽度。
   *
   * @param {boolean} [skipListeners]
   *跳过componentresize事件触发器
   *
   * @return {number | string}
   *获得时的宽度，如果没有宽度，则为零。可以是一个字符串
   *后缀为'％'或'px'。
   * /


  Component.prototype.width = function width（num，skipListeners）{
    return this.dimension（'width'，num，skipListeners）;
  };

  / **
   *根据CSS样式获取或设置组件的高度。
   *有关更多详细信息，请参阅{@link组件＃维度}。
   *
   * @param {number | string} [num]
   *要设置为'％'，'px'或没有任何东西设置的高度。
   *
   * @param {boolean} [skipListeners]
   *跳过componentresize事件触发器
   *
   * @return {number | string}
   *获得时的宽度，如果没有宽度，则为零。可以是一个字符串
   *后缀为'％'或'px'。
   * /


  Component.prototype.height = function height（num，skipListeners）{
    return this.dimension（'height'，num，skipListeners）;
  };

  / **
   *同时设置“Component”元素的宽度和高度。
   *
   * @param {number | string} width
   *宽度设置“Component”的元素。
   *
   * @param {number | string} height
   *设置“Component”元素的高度。
   * /


  Component.prototype.dimensions = function dimensions（width，height）{
    //跳过componentresize listeners的宽度进行优化
    this.width（width，true）;
    this.height（高度）;
  };

  / **
   获取或设置“Component”元素的宽度或高度。这是共享代码
   *为{@link组件＃宽度}和{@link组件＃高度}。
   *
   *事情要知道：
   *  - 如果一个数字的宽度或高度，这将返回与'px'后缀的数字。
   *  - 如果宽度/高度是百分比，这将返回后缀“％”的百分比
   *  - 隐藏的元素的宽度为0，带有“window.getComputedStyle”。这个功能
   *默认为“Component”的style.width`，并返回到“window.getComputedStyle”。
   *参见[this] {@ link http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/}
   * 了解更多信息
   *  - 如果要计算组件的样式，请使用{@link Component＃currentWidth}
   *和{@link {Component＃currentHeight}
   *
   * @fires组件＃componentresize
   *
   * @param {string} widthOrHeight
   8'宽'或'高'
   *
   * @param {number | string} [num]
   8新维度
   *
   * @param {boolean} [skipListeners]
   *跳过componentresize事件触发器
   *
   * @return {number}
   *得到时的尺寸，如果未设置，则为0
   * /


  Component.prototype.dimension = function dimension（widthOrHeight，num，skipListeners）{
    if（num！== undefined）{
      //如果为null或字面上设置为零NaN（NaN！== NaN）
      if（num === null || num！== num）{
        num = 0;
      }

      //检查是否使用css width / height（％或px）并进行调整
      if（（''+ num）.indexOf（'％'）！== -1 ||（''+ num）.indexOf（'px'）！== -1）{
        this.el_.style [widthOrHeight] = num;
      } else if（num ==='auto'）{
        this.el_.style [widthOrHeight] ='';
      } else {
        this.el_.style [widthOrHeight] = num +'px';
      }

      // skipListeners允许我们在设置width和height时避免触发resize事件
      if（！skipListeners）{
        / **
         *当组件调整大小时触发。
         *
         * @event Component＃componentresize
         * @type {EventTarget〜Event}
         * /
        this.trigger（ 'componentresize'）;
      }

      返回;
    }

    //不设置值，所以得到它
    //确保元素存在
    if（！this.el_）{
      返回0;
    }

    //从样式获取维度值
    var val = this.el_.style [widthOrHeight];
    var pxIndex = val.indexOf（'px'）;

    if（pxIndex！== -1）{
      //返回没有'px'的像素值
      返回parseInt（val.slice（0，pxIndex），10）;
    }

    //没有px，所以使用％或者没有样式被设置，所以回落到offsetWidth / height
    //如果组件显示：none，则offset将返回0
    // TODO：handle display：none，而不使用px的维度样式
    return parseInt（this.el _ ['offset'+ toTitleCase（widthOrHeight）]，10）;
  };

  / **
   *获取“Component”元素计算样式的宽度或高度。用途
   *`window.getComputedStyle`。
   *
   * @param {string} widthOrHeight
   *包含'width'或'height'的字符串。无论你想要什么。
   *
   * @return {number}
   *要求的维度，如果没有设置，则为0
   *为该维度。
   * /


  Component.prototype.currentDimension = function currentDimension（widthOrHeight）{
    var computedWidthOrHeight = 0;

    if（widthOrHeight！=='width'&& widthOrHeight！=='height'）{
      抛出新的错误（'currentDimension只接受宽度或高度值'）;
    }

    if（typeof window_1.getComputedStyle ==='function'）{
      var computedStyle = window_1.getComputedStyle（this.el_）;

      computedWidthOrHeight = computedStyle.getPropertyValue（widthOrHeight）|| computedStyle [widthOrHeight];
    }

    //从变量中删除'px'并解析为整数
    computedWidthOrHeight = parseFloat（computedWidthOrHeight）;

    //如果计算值仍为0，则浏览器可能正在撒谎
    //我们要检查偏移值。
    //这个代码也运行在IE8上，而且getComputedStyle不存在的地方。
    if（calculatedWidthOrHeight === 0）{
      var rule ='offset'+ toTitleCase（widthOrHeight）;

      computedWidthOrHeight = this.el_ [rule];
    }

    return computedWidthOrHeight;
  };

  / **
   *包含“Component”的宽度和高度值的对象
   *计算风格。使用`window.getComputedStyle`。
   *
   * @typedef {Object} Component〜DimensionObject
   *
   * @property {number}宽度
   *组件的计算样式的宽度。
   *
   * @property {number}高度
   *组件的计算风格的高度。
   * /

  / **
   *获取包含“Component”的宽度和高度值的对象
   *计算风格。
   *
   * @return {Component〜DimensionObject}
   *组件元素的尺寸
   * /


  Component.prototype.currentDimensions = function currentDimensions（）{
    返回{
      width：this.currentDimension（'width'），
      height：this.currentDimension（'height'）
    };
  };

  / **
   *获取“Component”计算样式的宽度。使用`window.getComputedStyle`。
   *
   * @return {number} width
   *组件的计算样式的宽度。
   * /


  Component.prototype.currentWidth = function currentWidth（）{
    return this.currentDimension（'width'）;
  };

  / **
   *获取“Component”计算样式的高度。使用`window.getComputedStyle`。
   *
   * @return {number} height
   *组件的计算风格的高度。
   * /


  Component.prototype.currentHeight = function currentHeight（）{
    return this.currentDimension（'height'）;
  };

  / **
   *将焦点设置到此组件
   * /


  Component.prototype.focus = function focus（）{
    this.el_.focus（）;
  };

  / **
   *从该组件中删除焦点
   * /


  Component.prototype.blur = function blur（）{
    this.el_.blur（）;
  };

  / **
   *检测到触摸事件支持时，发出“点击”事件。这习惯了
   *支持通过点击视频来切换控件。他们被启用
   *因为每个子组件都会有额外的开销。
   *
   * @私人的
   * @fires组件＃点击
   * @listens组件＃touchstart
   * @listens组件＃touchmove
   * @listens组件＃touchleave
   * @listens组件＃touchcancel
   * @listens组件＃touchend
    * /


  Component.prototype.emitTapEvents = function emitTapEvents（）{
    //跟踪开始时间，以便我们可以确定触摸持续时间
    var touchStart = 0;
    var firstTouch = null;

    //触摸事件期间允许的最大移动仍然被认为是水龙头
    //其他流行的库可以使用从2（hammer.js）到15的任何地方，
    //所以10似乎是一个不错的，圆的数字。
    var tapMovementThreshold = 10;

    //触摸的最大长度仍然被认为是水龙头
    var touchTimeThreshold = 200;

    var canBeTap = void 0;

    this.on（'touchstart'，function（event）{
      //如果多于一个手指，不要考虑将其视为点击
      if（event.touches.length === 1）{
        //从对象复制pageX / pageY
        firstTouch = {
          pageX：event.touches [0] .pageX，
          pageY：event.touches [0] .pageY
        };
        //记录开始时间，以便我们可以检测到水龙头与“触摸并按住”
        touchStart = new Date（）。getTime（）;
        //重置canBeTap跟踪
        canBeTap = true;
      }
    }）;

    this.on（'touchmove'，function（event）{
      //如果多于一个手指，不要考虑将其视为点击
      if（event.touches.length> 1）{
        canBeTap = false;
      } else if（firstTouch）{
        //有些设备会为所有的轻轻敲击敲击所有的设备。
        //所以，如果我们只移动一小段距离，这仍然是一个水龙头
        var xdiff = event.touches [0] .pageX  -  firstTouch.pageX;
        var ydiff = event.touches [0] .pageY  -  firstTouch.pageY;
        var touchDistance = Math.sqrt（xdiff * xdiff + ydiff * ydiff）;

        if（touchDistance> tapMovementThreshold）{
          canBeTap = false;
        }
      }
    }）;

    var noTap = function noTap（）{
      canBeTap = false;
    };

    // TODO：听原始目标。http://youtu.be/DujfpXOKUp8?t=13m8s
    this.on（'touchleave'，noTap）;
    this.on（'touchcancel'，noTap）;

    //触摸结束时，测量需要多长时间并触发相应的操作
    //事件
    this.on（'touchend'，function（event）{
      firstTouch = null;
      //仅当touchmove / leave / cancel事件没有发生时才继续
      if（couldBeTap === true）{
        //测量触摸持续时间
        var touchTime = new Date（）。getTime（） -  touchStart;

        //确保触摸小于阈值以被认为是水龙头
        if（touchTime <touchTimeThreshold）{
          //不要让浏览器将其点击
          event.preventDefault（）;
          / **
           *当“组件”被点击时触发。
           *
           * @event组件＃点击
           * @type {EventTarget〜Event}
           * /
          this.trigger（ '抽头'）;
          //可以复制touchend事件对象并更改
          //如果其他事件属性不精确，则键入以点按
          // Events.fixEvent running（例如event.target）
        }
      }
    }）;
  };

  / **
   *当触摸事件发生时，此功能报告用户活动。这可以得到
   *由任何需要触摸事件的子组件以另一种方式执行关闭。
   *
   *触发事件发生时举报用户触摸活动。用户活动习惯了
   *确定控件何时显示/隐藏。鼠标很简单
   *事件，因为任何鼠标事件应显示控件。所以我们捕捉鼠标
   *发生在玩家身上的事件，并在活动中报告活动。
   *触摸事件并不像“touchstart”和“touchend”切换播放器那么容易
   *控件。所以触摸事件也无法帮助我们。
   *
   *用户活动被异步检查。所以可能发生的事情是一个水龙头事件
   *在视频上关闭控件。然后，“touchend”事件泡沫起来
   * 玩家。哪个，如果它报告用户的活动，将把控件权利
   回来了 我们也不想完全阻止触摸事件冒泡。
   *此外，“touchmove”事件和除了水龙头之外的任何事情都不应该转动
   *控制回来。
   *
   * @listens组件＃touchstart
   * @listens组件＃touchmove
   * @listens组件＃touchend
   * @listens组件＃touchcancel
   * /


  Component.prototype.enableTouchActivity = function enableTouchActivity（）{
    //如果根播放器不支持报告用户活动，请不要继续
    if（！this.player（）||！this.player（）。reportUserActivity）{
      返回;
    }

    //用于报告用户处于活动状态的侦听器
    var report = bind（this.player（），this.player（）。reportUserActivity）;

    var touchHolding = void 0;

    this.on（'touchstart'，function（）{
      报告（）;
      //只要他们触摸设备或将鼠标放下，
      //我们认为它们是活跃的，即使他们没有移动他们的手指或鼠标。
      //所以我们想继续更新它们是活动的
      this.clearInterval（touchHolding）;
      //以与activityCheck相同的间隔进行报告
      touchHolding = this.setInterval（report，250）;
    }）;

    var touchEnd = function touchEnd（event）{
      报告（）;
      //如果触摸持续，请停止维护活动的间隔
      this.clearInterval（touchHolding）;
    };

    this.on（'touchmove'，report）;
    this.on（'touchend'，touchEnd）;
    this.on（'touchcancel'，touchEnd）;
  };

  / **
   *没有参数并被绑定到“组件”上下文中的回调。
   *
   * @callback Component〜GenericCallback
   * @这个组件
   * /

  / **
   *创建一个在“x”毫秒超时后运行的函数。这个功能是一个
   *包装围绕`window.setTimeout`。有一些理由使用这个
   *而是：
   * 1.当通过{@link组件＃clearTimeout}清除
   * {@link组件＃dispose}被调用。
   * 2.函数回调将变成{@link Component〜GenericCallback}
   *
   *>注意：您可以对此函数返回的id使用“window.clearTimeout”。这个
   *将使其处理听众不被清理！请用
   * {@link Component＃clearTimeout}或{@link Component＃dispose}。
   *
   * @param {Component〜GenericCallback} fn
   *将在“timeout”之后运行的函数。
   *
   * @param {number}超时
   *在执行指定功能之前超时延迟（以毫秒为单位）。
   *
   * @return {number}
   *返回用于标识超时的超时ID。也可以
   *在{@link组件＃clearTimeout}中使用，以清除超时
   *被设置。
   *
   * @listens组件＃处理
   * @see [类似于] {@ link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout}
   * /


  Component.prototype.setTimeout = function setTimeout（fn，timeout）{
    fn = bind（this，fn）;

    var timeoutId = window_1.setTimeout（fn，timeout）;
    var disposeFn = function disposeFn（）{
      this.clearTimeout（timeoutId）;
    };

    disposeFn.guid ='vjs-timeout-'+ t imeoutId;

    this.on（'dispose'，disposeFn）;

    返回timeoutId;
  };

  / **
   *清除通过`window.setTimeout`创建的超时
   * {@link Component＃setTimeout}。如果您通过{@link组件＃setTimeout}设置超时
   *使用这个功能而不是`window.clearTimout`。如果你不配置
   *听众在{@link组件＃处置}之前不会被清理！
   *
   * @param {number} timeoutId
   *要清除的超时的ID。的返回值
   * {@link Component＃setTimeout}或`window.setTimeout`。
   *
   * @return {number}
   *返回清除的超时ID。
   *
   * @see [类似于] {@ link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout}
   * /


  Component.prototype.clearTimeout = function clearTimeout（timeoutId）{
    window_1.clearTimeout（timeoutId）;

    var disposeFn = function disposeFn（）{};

    disposeFn.guid ='vjs-timeout-'+ timeoutId;

    this.off（'dispose'，disposeFn）;

    返回timeoutId;
  };

  / **
   *创建一个运行每个`x`毫秒的函数。这个功能是一个包装器
   *围绕`window.setInterval`。有一些原因可以使用这个。
   * 1.通过{@link Component＃clearInterval}清空
   * {@link组件＃dispose}被调用。
   * 2.函数回调将是一个{@link Component〜GenericCallback}
   *
   * @param {Component〜GenericCallback} fn
   *运行每个“x”秒的功能。
   *
   * @param {number}间隔
   *每x个毫秒执行指定的函数。
   *
   * @return {number}
   *返回可用于标识间隔的ID。它也可以用于
   * {@link Component＃clearInterval}清除间隔。
   *
   * @listens组件＃处理
   * @see [类似于] {@ link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval}
   * /


  Component.prototype.setInterval = function setInterval（fn，interval）{
    fn = bind（this，fn）;

    var intervalId = window_1.setInterval（fn，interval）;

    var disposeFn = function disposeFn（）{
      this.clearInterval（intervalId）;
    };

    disposeFn.guid ='vjs-interval-'+ intervalId;

    this.on（'dispose'，disposeFn）;

    return intervalId;
  };

  / **
   *清除通过`window.setInterval`创建的间隔
   * {@link Component＃setInterval}。如果通过{@link Component＃setInterval}设置一个整数
   *使用这个功能而不是`window.clearInterval`。如果你不配置
   *听众在{@link组件＃处置}之前不会被清理！
   *
   * @param {number} intervalId
   *要清除的间隔的ID。的返回值
   * {@link Component＃setInterval}或`window.setInterval`。
   *
   * @return {number}
   *返回清除的间隔ID。
   *
   * @see [类似于] {@ link https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval}
   * /


  Component.prototype.clearInterval = function clearInterval（intervalId）{
    window_1.clearInterval（intervalId）;

    var disposeFn = function disposeFn（）{};

    disposeFn.guid ='vjs-interval-'+ intervalId;

    this.off（'dispose'，disposeFn）;

    return intervalId;
  };

  / **
   *将一个回调排队传递给requestAnimationFrame（rAF），但是
   *加上一些额外的奖金：
   *
   *  - 支持不支持rAF的浏览器
   * {@link Component＃setTimeout}。
   *
   *  - 回调变成{@link Component〜GenericCallback}（即
   *绑定到组件）。
   *
   *  - 如果组件自动取消rAF回调
   *在被调用之前被处理。
   *
   * @param {Component〜GenericCallback} fn
   *将绑定到此组件并执行的函数
   *在浏览器的下一次重绘之前。
   *
   * @return {number}
   *返回用于标识超时的rAF ID。它可以
   *也可以在{@link Component＃cancelAnimationFrame}中使用来取消
   *动画帧回调。
   *
   * @listens组件＃处理
   * @see [类似于] {@ link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame}
   * /


  Component.prototype.requestAnimationFrame = function requestAnimationFrame（fn）{
    var _this2 = this;

    if（this.supportsRaf_）{
      fn = bind（this，fn）;

      var id = window_1.requestAnimationFrame（fn）;
      var disposeFn = function disposeFn（）{
        return _this2.cancelAnimationFrame（id）;
      };

      disposeFn.guid ='vjs-raf-'+ id;
      this.on（'dispose'，disposeFn）;

      返回id
    }

    //回到使用定时器。
    return this.setTimeout（fn，1000/60）;
  };

  / **
   *取消传递给{@link Component＃requestAnimationFrame}的排队回调
   *（rAF）。
   *
   *如果您通过{@link组件＃requestAnimationFrame}排队rAF回调，
   *使用这个函数而不是`window.cancelAnimationFrame`。如果没有，
   * {@link Component＃dispose}！你的处置监听器不会被清理！
   *
   * @param {number} id
   *要清除的rAF ID。{@link Component＃requestAnimationFrame}的返回值。
   *
   * @return {number}
   *返回清除的rAF ID。
   *
   * @see [类似于] {@ link https://developer.mozilla.org/en-US/docs/Web/API/window/cancelAnimationFrame}
   * /


  Component.prototype.cancelAnimationFrame = function cancelAnimationFrame（id）{
    if（this.supportsRaf_）{
      window_1.cancelAnimationFrame（ID）;

      var disposeFn = function disposeFn（）{};

      disposeFn.guid ='vjs-raf-'+ id;

      this.off（'dispose'，disposeFn）;

      返回id
    }

    //回到使用定时器。
    return this.clearTimeout（id）;
  };

  / **
   *给出名称和组件的`videojs`注册一个`Component`。
   *
   *>注意：{@link Tech}不应该被注册为“组件”。{@link Tech} s
   *应使用{@link Tech.registerTech}或
   * {@link videojs：videojs.registerTech}。
   *
   *>注意：这个功能也可以在videojs上看到
   * {@link videojs：videojs.registerComponent}。
   *
   * @param {string}名称
   *要注册的“Component”的名称。
   *
   * @param {Component} ComponentToRegister
   *要注册的“Component”类。
   *
   * @return {Component}
   *已注册的“组件”。
   * /


  Component.registerComponent = function registerComponent（name，ComponentToRegister）{
    if（typeof name！=='string'||！name）{
      抛出新的错误（'非法组件名称''+名称+'“;必须是一个非空字符串。
    }

    var Tech = Component.getComponent（'Tech'）;

    //我们需要确保这个检查只有在Tech已经注册的情况下才能完成。
    var isTech = Tech && Tech.isTech（ComponentToRegister）;
    var isComp = Component === ComponentToRegister || Component.prototype.isPrototypeOf（ComponentToRegister.prototype）;

    if（isTech ||！isComp）{
      var reason = void 0;

      if（isTech）{
        reason ='techs必须使用Tech.registerTech（）注册;
      } else {
        reason ='必须是组件子类';
      }

      抛出新的错误（'非法组件'，'+名称+'“;'+原因+'。
    }

    name = toTitleCase（name）;

    if（！Component.components_）{
      Component.components_ = {};
    }

    var Player = Component.getComponent（'Player'）;

    if（name ==='Player'&& Player && Player.players）{
      var players = Player.players;
      var playerNames = Object.keys（players）;

      //如果我们有球员被处置，那么他们的名字仍然是
      //在Players.players。所以，我们必须循环并验证该值
      //每个项目不为空。这允许注册播放器组件
      //所有玩家被处理完之后，或任何人被创造之前。
      if（players && playerNames.length> 0 && playerNames.map（function（pname）{
        返回玩家[pname];
      }）。every（Boolean））{
        抛出新的错误（“播放器创建后无法注册播放器组件”）;
      }
    }

    Component.components_ [name] = ComponentToRegister;

    返回ComponentToRegister;
  };

  / **
   *根据注册的名称获取“组件”。
   *
   * @param {string}名称
   *要获取的组件的名称。
   *
   * @return {Component}
   *以给定名称注册的“组件”。
   *
   * @deprecated在`videojs` 6中，这不会返回不是的组件
   *使用{@link Component.registerComponent}注册。目前我们
   *检查全局`videojs`对象的“Component”名称和
   *返回，如果它存在。
   * /


  Component.getComponent = function getComponent（name）{
    if（！name）{
      返回;
    }

    name = toTitleCase（name）;

    if（Component.components_ && Component.components_ [name]）{
      返回Component.components_ [name];
    }
  };

  返回组件;
}（）;

/ **
 *这个组件是否支持`requestAnimationFrame`。
 *
 *这主要用于测试目的。
 *
 * @私人的
 * @type {Boolean}
 * /


Component.prototype.supportsRaf_ = typeof window_1.requestAnimationFrame ==='function'&& typeof window_1.cancelAnimationFrame ==='function';

Component.registerComponent（'Component'，Component）;

/ **
 * @file time-ranges.js
 * @module时间范围
 * /

/ **
 *返回指定索引在开头或结尾的时间
 *的TimeRange对象。
 *
 * @function time-range：indexFunction
 *
 * @param {number} [index = 0]
 *返回时间范围数。
 *
 * @return {number}
 *指定索引偏移的时间。
 *
 * @depricated index必须设置为一个值，以后这将抛出一个错误。
 * /

/ **
 *由于各种原因，包含时间范围的对象。
 *
 * @typedef {Object} TimeRange
 *
 * @property {number}长度
 *此对象表示的时间范围数
 *
 * @property {time-ranges：indexFunction}开始
 *返回指定时间范围开始的时间偏移量。
 *
 * @property {time-ranges：indexFunction}结束
 *返回指定时间范围开始的时间偏移量。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges
 * /

/ **
 *检查任何时间范围是否超过最大索引。
 *
 * @param {string} fnName
 *用于记录的函数名称
 *
 * @param {number} index
 *要检查的索引
 *
 * @param {number} maxIndex
 *最大可能的索引
 *
 * @throws {Error}如果提供的timeRanges超过maxIndex
 * /
function rangeCheck（fnName，index，maxIndex）{
  if（typeof index！=='number'|| index <0 || index> maxIndex）{
    抛出新的错误（'Failed to execute \''+ fnName +'\'on \'TimeRanges \'：提供的索引（'+ index +'）是非数字或超出界限（0-'+ maxIndex + ）'）。
  }
}

/ **
 *检查任何时间范围是否超过最大索引。
 *
 * @param {string} fnName
 *用于记录的函数名称
 *
 * @param {string} valueIndex
 *应该用来得到时间的主意。应该是'开始'或'结束'
 *
 * @param {Array}范围
 *一系列时间范围
 *
 * @param {Array} [rangeIndex = 0]
 *开始搜索的索引
 *
 * @return {number}
 *指定索引偏移的时间。
 *
 *
 * @depricated rangeIndex必须设置为一个值，以后这将抛出一个错误。
 * @throws {Error}如果rangeIndex超出范围的长度
 * /
function getRange（fnName，valueIndex，ranges，rangeIndex）{
  rangeCheck（fnName，rangeIndex，ranges.length  -  1）;
  返回范围[rangeIndex] [valueIndex];
}

/ **
 *创建时间范围对象时间范围。
 *
 * @param {Array} [范围]
 *一系列时间范围。
 * /
function createTimeRangesObj（ranges）{
  if（ranges === undefined || ranges.length === 0）{
    返回{
      长度：0，
      start：function start（）{
        抛出新的错误（'此TimeRanges对象为空'）;
      }，
      end：function end（）{
        抛出新的错误（'此TimeRanges对象为空'）;
      }
    };
  }
  返回{
    length：ranges.length，
    start：getRange.bind（null，'start'，0，范围），
    end：getRange.bind（null，'end'，1，范围）
  };
}

/ **
 *应该创建一个模仿HTML5时间范围实例的假的“TimeRange”对象。
 *
 * @param {number | Array}开始
 *单个范围或数组范围的开始
 *
 * @param {number} end
 *单一范围的结束。
 *
 * @私人的
 * /
function createTimeRanges（start，end）{
  if（Array.isArray（start））{
    return createTimeRangesObj（start）;
  } else if（start === undefined || end === undefined）{
    return createTimeRangesObj（）;
  }
  return createTimeRangesObj（[[start，end]]）;
}

/ **
 * @file buffer.js
 * @module缓冲区
 * /
/ **
 *计算已缓冲的介质的百分比。
 *
 * @param {TimeRange}缓冲
 *当前的“TimeRange”对象表示缓冲的时间范围
 *
 * @param {number}持续时间
 *媒体总时间
 *
 * @return {number}
 *以十进制格式累计持续时间的百分比。
 * /
function bufferedPercent（buffered，duration）{
  var bufferedDuration = 0;
  var start = void 0;
  var end = void 0;

  if（！duration）{
    返回0;
  }

  if（！buffered ||！buffered.length）{
    buffered = createTimeRanges（0，0）;
  }

  for（var i = 0; i <buffered.length; i ++）{
    start = buffered.start（i）;
    end = buffered.end（i）;

    //缓冲结束可以比持续时间大很多
    if（end> duration）{
      结束=持续时间;
    }

    bufferedDuration + = end-start;
  }

  返回bufferedDuration / duration;
}

/ **
 * @file fullscreen-api.js
 * @module fullscreen-api
 * @私人的
 * /
/ **
 *存储针对全屏API的浏览器特定方法。
 *
 * @type {Object}
 * @see [规格] {@ link https://fullscreen.spec.whatwg.org}
 * @see [来自Screenfull.js的Map Approach] {@ link https://github.com/sindresorhus/screenfull.js}
 * /
var FullscreenApi = {};

//浏览器API方法
var apiMap = [['requestFullscreen'，'exitFullscreen'，'fullscreenElement'，'fullscreenEnabled'，'fullscreenchange'，'fullscreenerror']，
// WebKit
['webkitRequestFullscreen'，'webkitExitFullscreen'，'webkitFullscreenElement'，'webkitFullscreenEnabled'，'webkitfullscreenchange'，'webkitfullscreenerror']，
// Old WebKit（Safari 5.1）
['webkitRequestFullScreen'，'webkitCancelFullScreen'，'webkitCurrentFullScreenElement'，'webkitCancelFullScreen'，'webkitfullscreenchange'，'webkitfullscreenerror']，
// Mozilla
['mozRequestFullScreen'，'mozCancelFullScreen'，'mozFullScreenElement'，'mozFullScreenEnabled'，'mozfullscreenchange'，'mozfullscreenerror']，
//微软
['msRequestFullscreen'，'msExitFullscreen'，'msFullscreenElement'，'msFullscreenEnabled'，'MSFullscreenChange'，'MSFullscreenError']];

var specApi = apiMap [0];
var browserApi = void 0;

//确定支持的函数集
for（var i = 0; i <apiMap.length; i ++）{
  //检查exitFullscreen功能
  if（apiMap [i] [1] in document_1）{
    browserApi = apiMap [i];
    打破;
  }
}

//将浏览器API名称映射到规范API名称
if（browserApi）{
  for（var _i = 0; _i <browserApi.length; _i ++）{
    FullscreenApi [specApi [_i]] = browserApi [_i];
  }
}

/ **
 * @file media-error.js
 * /
/ **
 *自定义的“MediaError”类，它模仿标准的HTML5“MediaError”类。
 *
 * @param {number | string | Object | MediaError}的值
 *这可以是多种类型：
 *  - 号码：应该是一个标准的错误代码
 *  -  string：一条错误消息（代码将为0）
 *  - 对象：任意属性
 *  - `MediaError`（native）：用于填充video.js`MediaError`对象
 *  - `MediaError`（video.js）：如果已经是
 * video.js`MediaError`对象。
 *
 * @see [MediaError Spec] {@ link https://dev.w3.org/html5/spec-author-view/video.html#mediaerror}
 * @see [Encrypted MediaError Spec] {@ link https://www.w3.org/TR/2013/WD-encrypted-media-20130510/#error-codes}
 *
 * @class MediaError
 * /
function MediaError（value）{

  //允许对此构造函数的多余调用以避免使用“instanceof”
  //检查周围的代码。
  if（Value instanceof MediaError）{
    返回值
  }

  if（typeof value ==='number'）{
    this.code = value;
  } else if（typeof value ==='string'）{
    //默认代码为零，所以这是一个自定义错误
    this.message = value;
  } else if（isObject（value））{

    //我们手工分配`code`属性，因为本地的`MediaError`对象
    //不要将其暴露为对象的自己/可枚举属性。
    if（typeof value.code ==='number'）{
      this.code = value.code;
    }

    assign（this，value）;
  }

  if（！this.message）{
    this.message = MediaError.defaultMessages [this.code] || '';
  }
}

/ **
 *引用两个定义的“MediaError”类型的错误代码
 *
 * @type {Number}
 * /
MediaError.prototype.code = 0;

/ **
 *显示错误的可选消息。消息不是HTML5的一部分
 *视频规范，但允许更多的信息自定义错误。
 *
 * @type {String}
 * /
MediaError.prototype.message ='';

/ **
 *可以由插件设置的可选状态代码，以便更详细地了解
 * 错误。例如，一个插件可能会提供一个特定的HTTP状态代码和一个
 *该代码的错误消息。那么当插件得到这个错误时，这个类会
 *知道如何显示错误信息。这允许显示自定义消息
 *播放器上的错误覆盖。
 *
 * @type {Array}
 * /
MediaError.prototype.status = null;

/ **
 *由W3C标准索引的错误。订单**无法更改**！见
 *规范列在{@link MediaError}下，以获取更多信息。
 *
 * @enum {array}
 * @只读
 * @property {string} 0  -  MEDIA_ERR_CUSTOM
 * @property {string} 1  -  MEDIA_ERR_CUSTOM
 * @property {string} 2  -  MEDIA_ERR_ABORTED
 * @property {string} 3  -  MEDIA_ERR_NETWORK
 * @property {string} 4  -  MEDIA_ERR_SRC_NOT_SUPPORTED
 * @property {string} 5  -  MEDIA_ERR_ENCRYPTED
 * /
MediaError.errorTypes = ['MEDIA_ERR_CUSTOM'，'MEDIA_ERR_ABORTED'，'MEDIA_ERR_NETWORK'，'MEDIA_ERR_DECODE'，'MEDIA_ERR_SRC_NOT_SUPPORTED'，'MEDIA_ERR_ENCRYPTED'];

/ **
 *默认的“MediaError”消息基于{@link MediaError.errorTypes}。
 *
 * @type {Array}
 * @不变
 * /
MediaError.defaultMessages = {
  1：“你中止了媒体播放”，
  2：网络错误导致媒体下载失败，“
  3：“媒体播放由于损坏问题而中止，或因为媒体使用浏览器不支持的功能。”
  4：“无法加载媒体，因为服务器或网络失败或者格式不受支持。”
  5：“媒体被加密，我们没有密钥解密。”
};

//将类型添加为MediaError上的属性
//例如MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
for（var errNum = 0; errNum <MediaError.errorTypes.length; errNum ++）{
  MediaError [MediaError.errorTypes [errNum]] = errNum;
  //值应该可以在类和实例上访问
  MediaError.prototype [MediaError.errorTypes [errNum]] = errNum;
}

var tuple = SafeParseTuple;

函数SafeParseTuple（obj，reviver）{
    var json;
    var error = null;

    尝试{
        json = JSON.parse（obj，reviver）;
    } catch（err）{
        error = err;
    }

    返回[error，json]
}

/ **
 * @file text-track-list-converter.js用于捕获文本轨道状态的实用程序
 *基于捕获重新创建轨道。
 *
 * @module文本轨道列表转换器
 * /

/ **
 *检查一个{@link TextTrack}并返回一个JSON兼容的JavaScript对象
 *代表{@link TextTrack}的状态。
 *
 * @param {TextTrack}曲目
 *文字轨迹查询。
 *
 * @return {Object}
 * TextTrack的可序列化的JavaScript表示。
 * @私人的
 * /
var trackToJson_ = function trackToJson_（track）{
  var（= {'kind'，'label'，'language'，'id'，'inBandMetadataTrackDispatchType'，'mode'，'src'

    if（track [prop]）{
      acc [prop] = track [prop];
    }

    返回
  }，{
    提示：track.cues && Array.prototype.map.call（track.cues，function（cue）{
      返回{
        startTime：cue.startTime，
        endTime：cue.endTime，
        文字：cue.text，
        id：cue.id
      };
    }）
  }）;

  返回
};

/ **
 *检查{@link技术}并返回代表该JSON的兼容的JavaScript数组
 *当前配置的所有{@link TextTrack}的状态。返回数组是兼容的
 * {@link text-track-list-converter：jsonToTextTracks}。
 *
 * @param {Tech}技术
 *要查询的技术对象
 *
 * @return {Array}
 * {@link Tech}的可序列化JavaScript表示法
 * {@link TextTrackList}。
 * /
var textTracksToJson = function textTracksToJson（tech）{

  var trackEls = tech。$$（'track'）;

  var trackObjs = Array.prototype.map.call（trackEls，function（t）{
    返回t.track;
  }）;
  var tracks = Array.prototype.map.call（trackEls，function（trackEl）{
    var json = trackToJson_（trackEl.track）;

    if（trackEl.src）{
      json.src = trackEl.src;
    }
    返回json
  }）;

  return tracks.concat（Array.prototype.filter.call（tech.textTracks（），function（track）{
    return trackObjs.indexOf（track）=== -1;
  }）映射（trackToJson_））;
};

/ **
 *根据javascript数组，在{@link Tech}上创建一组远程{@link TextTrack}
 * object {@link TextTrack}表示。
 *
 * @param {Array} json
 *一个“TextTrack”表示对象的数组，就像那些
 *由`textTracksToJson'生成。
 *
 * @param {Tech}技术
 *“Tech”创建“TextTrack”。
 * /
var jsonToTextTracks = function jsonToTextTracks（json，tech）{
  json.forEach（function（track）{
    var addedTrack = tech.addRemoteTextTrack（track）.track;

    if（！track.src && track.cues）{
      track.cues.forEach（function（cue）{
        return addTrack.addCue（cue）;
      }）;
    }
  }）;

  return tech.textTracks（）;
};

var textTrackConverter = {textTracksToJson：textTracksToJson，jsonToTextTracks：jsonToTextTracks，trackToJson_：trackToJson_};

/ **
 * @file modal-dialog.js
 * /
var MODAL_CLASS_NAME ='vjs-modal-dialog';
var ESC = 27;

/ **
 *“ModalDialog”显示在视频及其控件上
 *与玩家的互动直到关闭。
 *
 *模态对话框包括一个“关闭”按钮，并将在该按钮关闭
 *被激活 - 或任何地方按下ESC。
 *
 * @extends组件
 * /

var ModalDialog = function（_Component）{
  inherit（ModalDialog，_Component）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   *
   * @param {Mixed} [options.content = undefined]
   *为此模式提供定制内容。
   *
   * @param {string} [options.description]
   *模态的文本描述，主要是可访问性。
   *
   * @param {boolean} [options.fillAlways = false]
   *通常情况下，模态仅在第一次自动填充
   * 他们打开。这告诉模态刷新其内容
   *每次打开
   *
   * @param {string} [options.label]
   *模态的文本标签，主要用于可访问性。
   *
   * @param {boolean} [options.temporary = true]
   *如果“true”，模态只能打开一次; 这将是
   *一旦关闭就处理。
   *
   * @param {boolean} [options.uncloseable = false]
   *如果为“true”，用户将无法关闭模态
   *通过UI以正常的方式。程序化关闭是
   *还是可能的
   * /
  function ModalDialog（player，options）{
    classCallCheck（this，ModalDialog）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.opened_ = _this.hasBeenOpened_ = _this.hasBeenFilled_ = false;

    _this.closeable（_ this.options_.uncloseable！）;
    _this.content（_this.options_.content）;

    //确保在初始化任何子项之后定义contentEl
    //因为我们只想在contentEl中的模态的内容
    //（不是像关闭按钮那样的UI元素）。
    _this.contentEl_ = createEl（'div'，{
      className：MODAL_CLASS_NAME +'-content'
    }，{
      角色：'文件'
    }）;

    _this.descEl_ = createEl（'p'，{
      className：MODAL_CLASS_NAME +'-description vjs-control-text'，
      id：_this.el（）。getAttribute（'aria-descriptby'）
    }）;

    textContent（_this.descEl_，_this.description（））;
    _this.el_.appendChild（_this.descEl_）;
    _this.el_.appendChild（_this.contentEl_）;
    返回_this;
  }

  / **
   *创建“ModalDialog”的DOM元素
   *
   * @return {Element}
   *创建的DOM元素。
   * /


  ModalDialog.prototype.createEl = function createEl $$ 1（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：this.buildCSSClass（），
      tabIndex：-1
    }，{
      'aria-descriptby'：this.id（）+'_description'，
      'aria-hidden'：'真'
      'aria-label'：this.label（），
      '角色'：'对话'
    }）;
  };

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。
   * /


  ModalDialog.prototype.buildCSSClass = function buildCSSClass（）{
    返回MODAL_CLASS_NAME +'vjs-hidden'+ _Component.prototype.buildCSSClass.call（this）;
  };

  / **
   *处理文件上的`keydown`事件，查找ESC，关闭
   *模态。
   *
   * @param {EventTarget〜Event} e
   *触发此事件的按键。
   *
   * @listens keydown
   * /


  ModalDialog.prototype.handleKeyPress = function handleKeyPress（e）{
    if（e.which === ESC && this.closeable（））{
      this.close（）;
    }
  };

  / **
   *返回此模态的标签字符串。主要用于可访问性。
   *
   * @return {string}
   *这种模式的本地化或原始标签。
   * /


  ModalDialog.prototype.label = function label（）{
    return this.localize（this.options_.label ||'Modal Window'）;
  };

  / **
   *返回此模态的描述字符串。主要用于
   *无障碍
   *
   * @return {string}
   *这种模式的本地化或原始描述。
   * /


  ModalDialog.prototype.description = function description（）{
    var desc = this.options_.description || this.localize（'这是一个模态窗口'）;

    //如果模态是可关闭的，则附加通用的可接受性消息。
    if（this.closeable（））{
      desc + =''+ this.localize（'可以通过按Esc键或激活关闭按钮来关闭此模态。
    }

    返回描述
  };

  / **
   *打开模态。
   *
   * @fires ModalDialog＃beforemodalopen
   * @fires ModalDialog＃modalopen
   * /


  ModalDialog.prototype.open = function open（）{
    if（！this.opened_）{
      var player = this.player（）;

      / **
        *在“ModalDialog”打开之前就被烧了。
        *
        * @event ModalDialog＃beforemodalopen
        * @type {EventTarget〜Event}
        * /
      this.trigger（ 'beforemodalopen'）;
      this.opened_ = true;

      //如果模态从未打开，则填写内容
      //从来没有填写过
      if（this.options_.fillAlways ||！this.hasBeenOpened_ &&！this.hasBeenFilled_）{
        this.fill（）;
      }

      //如果播放器正在播放，请暂停播放，并注意其以前的播放
      //播放状态
      this.wasPlaying_ =！player.paused（）;

      if（this.options_.pauseOnOpen && this.wasPlaying_）{
        player.pause（）;
      }

      if（this.closeable（））{
        this.on（this.el_.ownerDocument，'keydown'，bind（this，this.handleKeyPress））;
      }

      player.controls（假）;
      this.show（）;
      this.conditionalFocus_（）;
      this.el（）。setAttribute（'aria-hidden'，'false'）;

      / **
        *刚刚打开一个“ModalDialog”后就被烧了。
        *
        * @event ModalDialog＃modalopen
        * @type {EventTarget〜Event}
        * /
      this.trigger（ 'modalopen'）;
      this.hasBeenOpened_ = true;
    }
  };

  / **
   *如果“ModalDialog”当前是打开或关闭的。
   *
   * @param {boolean} [value]
   *如果给定，它将打开（`true`）或关闭（`false`）模态。
   *
   * @return {boolean}
   * modaldialog的当前开放状态
   * /


  ModalDialog.prototype.opened = function opened（value）{
    if（typeof value ==='boolean'）{
      这个[价值？'开关']（）;
    }
    返回this.opened_;
  };

  / **
   *关闭模态，如果“ModalDialog”是，则不执行任何操作
   * 没开。
   *
   * @fires ModalDialog＃beforemodalclose
   * @fires ModalDialog＃modalclose
   * /


  ModalDialog.prototype.close = function close（）{
    if（！this.opened_）{
      返回;
    }
    var player = this.player（）;

    / **
      *在“ModalDialog”关闭之前就被烧了。
      *
      * @event ModalDialog＃beforemodalclose
      * @type {EventTarget〜Event}
      * /
    this.trigger（ 'beforemodalclose'）;
    this.opened_ = false;

    if（this.wasPlaying_ && this.options_.pauseOnOpen）{
      player.play（）;
    }

    if（this.closeable（））{
      this.off（this.el_.ownerDocument，'keydown'，bind（this，this.handleKeyPress））;
    }

    player.controls（真）;
    this.hide（）;
    this.el（）。setAttribute（'aria-hidden'，'true'）;

    / **
      *在“ModalDialog”关闭之后被烧。
      *
      * @event ModalDialog＃modalclose
      * @type {EventTarget〜Event}
      * /
    this.trigger（ 'modalclose'）;
    this.conditionalBlur_（）;

    if（this.options_.temporary）{
      this.dispose（）;
    }
  };

  / **
   *检查`ModalDialog`是否可以通过UI关闭。
   *
   * @param {boolean} [value]
   *如果作为布尔值给出，它将设置“可关闭”选项。
   *
   * @return {boolean}
   *返回可关闭选项的最终值。
   * /


  ModalDialog.prototype.closeable = function closeable（value）{
    if（typeof value ==='boolean'）{
      var closeable = this.closeable_ = !! value;
      var close = this.getChild（'closeButton'）;

      //如果这是可关闭的，没有关闭按钮，添加一个。
      if（closeable &&！close）{

        //关闭按钮应该是模态的一个孩子 - 而不是它的
        // content element，所以暂时改变content元素。
        var temp = this.contentEl_;

        this.contentEl_ = this.el_;
        close = this.addChild（'closeButton'，{controlText：'Close Modal Dialog'}）;
        this.contentEl_ = temp;
        this.on（close，'close'，this.close）;
      }

      //如果这是不可关闭的，并且有一个关闭按钮，删除它。
      if（！closeable && close）{
        this.off（close，'close'，this.close）;
        this.removeChild（接近）;
        close.dispose（）;
      }
    }
    返回this.closeable_;
  };

  / **
   *使用模态的“内容”选项填充模态的内容元素。
   *在更改发生之前，内容元素将被清空。
   * /


  ModalDialog.prototype.fill = function fill（）{
    this.fillWith（this.content（））;
  };

  / **
   *使用任意内容填充模态的内容元素。
   *在更改发生之前，内容元素将被清空。
   *
   * @fires ModalDialog＃beforemodalfill
   * @fires ModalDialog＃modalfill
   *
   * @param {Mixed} [content]
   *适用于“内容”选项的相同规则适用于此。
   * /


  ModalDialog.prototype.fillWith = function fillWith（content）{
    var contentEl = this.contentEl（）;
    var parentEl = contentEl.parentNode;
    var nextSiblingEl = contentEl.nextSibling;

    / **
     *在“ModalDialog”被填满内容之前就被烧了。
     *
     * @event ModalDialog＃beforemodalfill
     * @type {EventTarget〜Event}
     * /
    this.trigger（ 'beforemodalfill'）;
    this.hasBeenFilled_ = true;

    //执行前从DOM中分离出内容元素
    //操作以避免多次修改live DOM。
    parentEl.removeChild（contentEl）;
    this.empty（）;
    insertContent（contentEl，content）;
    / **
     *刚刚在“ModalDialog”之后播放内容。
     *
     * @event ModalDialog＃modalfill
     * @type {EventTarget〜Event}
     * /
    this.trigger（ 'modalfill'）;

    //重新注入重新填充的内容元素。
    if（nextSiblingEl）{
      parentEl.insertBefore（contentEl，nextSiblingEl）;
    } else {
      parentEl.appendChild（contentEl）;
    }

    //确保关闭按钮在对话框DOM中是最后的
    var closeButton = this.getChild（'closeButton'）;

    if（closeButton）{
      parentEl.appendChild（closeButton.el_）;
    }
  };

  / **
   *清空内容元素。任何时候模态都会被填满。
   *
   * @fires ModalDialog＃beforemodalempty
   * @fires ModalDialog＃modalempty
   * /


  ModalDialog.prototype.empty = function empty（）{
    / **
     *在“ModalDialog”被清空之前就被烧了。
     *
     * @event ModalDialog＃beforemodalempty
     * @type {EventTarget〜Event}
     * /
    this.trigger（ 'beforemodalempty'）;
    emptyEl（this.contentEl（））;

    / **
     *在“ModalDialog”被清空之后被烧。
     *
     * @event ModalDialog＃modalempty
     * @type {EventTarget〜Event}
     * /
    this.trigger（ 'modalempty'）;
  };

  / **
   *获取或设置模态内容，它在被归一化之前被归一化
   *渲染到DOM中。
   *
   *这不更新DOM或填充模态，但它被调用
   *那个过程
   *
   * @param {Mixed} [value]
   *如果已定义，则设置要在其上使用的内部内容值
   *下一个电话给'fill'。该值在被归一化之前被归一化
   *插入。要“清除”内部内容值，请传递“null”。
   *
   * @return {Mixed}
   *模态对话框的当前内容
   * /


  ModalDialog.prototype.content = function content（value）{
    if（typeof value！=='undefined'）{
      this.content_ = value;
    }
    返回this.content_;
  };

  / **
   *有条件地聚焦模式对话框，如果焦点以前在播放器上。
   *
   * @私人的
   * /


  ModalDialog.prototype.conditionalFocus_ = function conditionalFocus_（）{
    var activeEl = document_1.activeElement;
    var playerEl = this.player_.el_;

    this.previouslyActiveEl_ = null;

    if（playerEl.contains（activeEl）|| playerEl === activeEl）{
      this.previouslyActiveEl_ = activeEl;

      this.focus（）;

      this.on（document_1，'keydown'，this.handleKeyDown）;
    }
  };

  / **
   *有条件地模糊元素并重新聚焦最后一个聚焦元素
   *
   * @私人的
   * /


  ModalDialog.prototype.conditionalBlur_ = function conditionalBlur_（）{
    if（this.previouslyActiveEl_）{
      this.previouslyActiveEl_.focus（）;
      this.previouslyActiveEl_ = null;
    }

    this.off（document_1，'keydown'，this.handleKeyDown）;
  };

  / **
   *键控处理程序 当模态集中时附加。
   *
   * @listens keydown
   * /


  ModalDialog.prototype.handleKeyDown = function handleKeyDown（event）{
    //如果它不是Tab键，则提早退出
    if（event.which！== 9）{
      返回;
    }

    var focusableEls = this.focusableEls_（）;
    var activeEl = this.el_.querySelector（'：focus'）;
    var focusIndex = void 0;

    for（var i = 0; i <focusableEls.length; i ++）{
      if（activeEl === focusableEls [i]）{
        focusIndex = i;
        打破;
      }
    }

    if（document_1.activeElement === this.el_）{
      focusIndex = 0;
    }

    if（event.shiftKey && focusIndex === 0）{
      focusableEls [focusableEls.length  -  1] .focus（）;
      event.preventDefault（）;
    } else if（！event.shiftKey && focusIndex === focusableEls.length  -  1）{
      focusableEls [0] .focus（）;
      event.preventDefault（）;
    }
  };

  / **
   *获取所有可焦点的元素
   *
   * @私人的
   * /


  ModalDialog.prototype.focusableEls_ = function focusableEls_（）{
    var allChildren = this.el_.querySelectorAll（'*'）;

    return Array.prototype.filter.call（allChildren，function（child）{
      return（child instanceof window_1.HTMLAnchorElement || child instanceof window_1.HTMLAreaElement）&& child.hasAttribute（'href'）|| （child instanceof window_1.HTMLInputElement || child instanceof window_1.HTMLSelectElement || child instanceof window_1.HTMLTextAreaElement || child instanceof window_1.HTMLButtonElement）&&！child.hasAttribute（'disabled'）|| child instanceof window_1.HTMLIFrameElement || 子实例window_1.HTMLObjectElement || 子实例window_1.HTMLEmbedElement || child.hasAttribute（'tabindex'）&& child.getAttribute（'tabindex'）！== -1 || child.hasAttribute（ 'CONTENTEDITABLE'）;
    }）;
  };

  return ModalDialog;
}（零件）;

/ **
 * ModalDialog默认选项的默认选项。
 *
 * @type {Object}
 * @私人的
 * /


ModalDialog.prototype.options_ = {
  pauseOnOpen：true，
  临时的：真的
};

Component.registerComponent（'ModalDialog'，ModalDialog）;

/ **
 * @file track-list.js
 * /
/ **
 * {@link TextTrackList}，{@link AudioTrackList}之间的通用功能
 * {@link VideoTrackList}
 *
 * @extends EventTarget
 * /

var TrackList = function（_EventTarget）{
  inherits（TrackList，_EventTarget）;

  / **
   *创建一个这个类的实例
   *
   * @param {Track []}曲目
   *用于初始化列表的曲目列表。
   *
   * @param {Object} [list]
   *为ie8手动完成继承的子对象。
   *
   * @abstract
   * /
  function TrackList（）{
    var tracks = arguments.length> 0 && arguments [0]！== undefined？参数[0]：[];

    var _ret

    var list = arguments.length> 1 && arguments [1]！== undefined？参数[1]：null;
    classCallCheck（this，TrackList）;

    var _this = possibleConstructorReturn（this，_EventTarget.call（this））;

    if（！list）{
      list = _this; // eslint-disable-line
      if（IS_IE8）{
        list = document_1.createElement（'custom'）;
        for（var track in TrackList.prototype）{
          if（prop！=='constructor'）{
            list [prop] = TrackList.prototype [prop];
          }
        }
      }
    }

    list.tracks_ = [];

    / **
     * @memberof TrackList
     * @member {number}长度
     *目前本轨道中的“Track”数量。
     * @instance
     * /
    Object.defineProperty（list，'length'，{
      get：function get $$ 1（）{
        return this.tracks_.length;
      }
    }）;

    for（var i = 0; i <tracks.length; i ++）{
      list.addTrack（音轨[I]）;
    }

    //必须返回对象，因为ie8不会是这个
    //但是对文档对象的引用
    return _ret = list，possibleConstructorReturn（_this，_ret）;
  }

  / **
   *添加一个{@link Track}到'TrackList'
   *
   * @param {Track}曲目
   *添加到列表中的音频，视频或文本轨道。
   *
   * @fires TrackList＃addtrack
   * /


  TrackList.prototype.addTrack = function addTrack（track）{
    var index = this.tracks_.length;

    if（！（''+ index in this））{
      Object.defineProperty（this，index，{
        get：function get $$ 1（）{
          return this.tracks_ [index];
        }
      }）;
    }

    //不要添加重复的曲目
    if（this.tracks_.indexOf（track）=== -1）{
      this.tracks_.push（轨道）;
      / **
       *当轨道添加到轨道列表时触发。
       *
       * @event TrackList＃addtrack
       * @type {EventTarget〜Event}
       * @property {Track}曲目
       *添加的追踪的引用。
       * /
      this.trigger（{
        轨道：轨道，
        输入：'addtrack'
      }）;
    }
  };

  / **
   *从“TrackList”中删除{@link Track}
   *
   * @param {Track} rtrack
   *从列表中删除的音频，视频或文本轨道。
   *
   * @fires TrackList＃removetrack
   * /


  TrackList.prototype.removeTrack = function removeTrack（rtrack）{
    var track = void 0;

    for（var i = 0，l = this.length; i <l; i ++）{
      if（this [i] === rtrack）{
        track = this [i];
        if（track.off）{
          track.off（）;
        }

        this.tracks_.splice（i，1）;

        打破;
      }
    }

    if（！track）{
      返回;
    }

    / **
     *当轨道从轨道列表中删除时触发。
     *
     * @event TrackList＃removetrack
     * @type {EventTarget〜Event}
     * @property {Track}曲目
     *已被删除的对追踪的引用。
     * /
    this.trigger（{
      轨道：轨道，
      键入：'removetrack'
    }）;
  };

  / **
   *通过曲目ID从TrackList获取曲目
   *
   * @param {String} id  - 要获取的曲目的ID
   * @method getTrackById
   * @return {Track}
   * @私人的
   * /


  TrackList.prototype.getTrackById = function getTrackById（id）{
    var result = null;

    for（var i = 0，l = this.length; i <l; i ++）{
      var track = this [i];

      if（track.id === id）{
        result = track
        打破;
      }
    }

    返回结果;
  };

  返回TrackList;
}（事件目标）;

/ **
 *当选择/启用不同的曲目时触发。
 *
 * @event TrackList＃更改
 * @type {EventTarget〜Event}
 * /

/ **
 *可以使用+ eventName调用的事件。请参阅{@link EventHandler}。
 *
 * @property {Object} TrackList＃allowedEvents_
 * @私人的
 * /


TrackList.prototype.allowedEvents_ = {
  改变：'变'
  addtrack：'addtrack'，
  移动链路
};

//模拟属性EventHandler支持以允许特征检测
for（var event in TrackList.prototype.allowedEvents_）{
  TrackList.prototype ['on'+ event] = null;
}

/ **
 * @file audio-track-list.js
 * /
/ **
 *我们称之为这个函数，我们从规范中分歧
 *因为我们一次只支持一个启用的录音机
 *
 * @param {AudioTrackList}列表
 *列表工作
 *
 * @param {AudioTrack}曲目
 *要跳过的曲目
 *
 * @私人的
 * /
var disableOthers = function disableOthers（list，track）{
  for（var i = 0; i <list.length; i ++）{
    if（！Object.keys（list [i]）。length || track.id === list [i] .id）{
      继续;
    }
    //启用另一个音轨，禁用它
    list [i] .enabled = false;
  }
};

/ **
 *媒体文件的{@link AudioTrack}的当前列表。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#audiotracklist}
 * @extends TrackList
 * /

var AudioTrackList = function（_TrackList）{
  继承（AudioTrackList，_TrackList）;

  / **
   *创建一个这个类的实例。
   *
   * @param {AudioTrack []} [tracks = []]
   *用于实例化列表的“AudioTrack”列表。
   * /
  functionTrackList（）{
    var _this，_ret;

    var tracks = arguments.length> 0 && arguments [0]！== undefined？参数[0]：[];
    classCallCheck（this，AudioTrackList）;

    var list = void 0;

    //确保仅启用1个轨道
    //从最后一个索引排序到第一个索引
    for（var i = tracks.length  -  1; i> = 0; i--）{
      if（tracks [i] .enabled）{
        disableOthers（tracks，tracks [i]）;
        打破;
      }
    }

    // IE8强制我们自己实现继承
    //因为它不正确地支持Object.defineProperty
    if（IS_IE8）{
      list = document_1.createElement（'custom'）;
      for（var track in TrackList.prototype）{
        if（prop！=='constructor'）{
          list [prop] = TrackList.prototype [prop];
        }
      }
      for（var _prop in AudioTrackList.prototype）{
        if（_prop！=='constructor'）{
          list [_prop] = AudioTrackList.prototype [_prop];
        }
      }
    }

    list =（_this = possibleConstructorReturn（this，_TrackList.call（this，tracks，list）），_this）;
    list.changing_ = false;

    return _ret = list，possibleConstructorReturn（_this，_ret）;
  }

  / **
   *添加一个{@link AudioTrack}到`AudioTrackList`。
   *
   * @param {AudioTrack}曲目
   *将AudioTrack添加到列表中
   *
   * @fires TrackList＃addtrack
   * /


  AudioTrackList.prototype.addTrack = function addTrack（track）{
    var _this2 = this;

    if（track.enabled）{
      disableOthers（this，track）;
    }

    _TrackList.prototype.addTrack.call（this，track）;
    //本机曲目没有这个
    if（！track.addEventListener）{
      返回;
    }

    / **
     * @listens AudioTrack＃enabledchange
     * @fires TrackList＃change
     * /
    track.addEventListener（'enabledchange'，function（）{
      //当我们禁用其他曲目（因为我们不支持）
      //一次一个以上的轨道），我们将设置change_
      //为true，以便我们不触发其他更改事件
      if（_this2.changing_）{
        返回;
      }
      _this2.changing_ = true;
      disableOthers（_this2，track）;
      _this2.changing_ = false;
      _this2.trigger（ '变更'）;
    }）;
  };

  返回AudioTrackList;
}（曲目）;

/ **
 * @file video-track-list.js
 * /
/ **
 *取消选择所有其他{@link VideoTrack}。
 *
 * @param {VideoTrackList}列表
 *列表工作
 *
 * @param {VideoTrack}曲目
 *要跳过的曲目
 *
 * @私人的
 * /
var disableOthers $ 1 = function disableOthers（list，track）{
  for（var i = 0; i <list.length; i ++）{
    if（！Object.keys（list [i]）。length || track.id === list [i] .id）{
      继续;
    }
    //启用另一个视频轨，禁用它
    list [i] .selected = false;
  }
};

/ **
 *视频的{@link VideoTrack}的当前列表。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#videotracklist}
 * @extends TrackList
 * /

var VideoTrackList = function（_TrackList）{
  继承（VideoTrackList，_TrackList）;

  / **
   *创建一个这个类的实例。
   *
   * @param {VideoTrack []} [tracks = []]
   *列出“VideoTrack”来实例化列表。
   * /
  function VideoTrackList（）{
    var _this，_ret;

    var tracks = arguments.length> 0 && arguments [0]！== undefined？参数[0]：[];
    classCallCheck（this，VideoTrackList）;

    var list = void 0;

    //确保仅启用1个轨道
    //从最后一个索引排序到第一个索引
    for（var i = tracks.length  -  1; i> = 0; i--）{
      if（tracks [i] .selected）{
        disableOthers $ 1（tracks，tracks [i]）;
        打破;
      }
    }

    // IE8强制我们自己实现继承
    //因为它不正确地支持Object.defineProperty
    if（IS_IE8）{
      list = document_1.createElement（'custom'）;
      for（var track in TrackList.prototype）{
        if（prop！=='constructor'）{
          list [prop] = TrackList.prototype [prop];
        }
      }
      for（var _prop in VideoTrackList.prototype）{
        if（_prop！=='constructor'）{
          list [_prop] = VideoTrackList.prototype [_prop];
        }
      }
    }

    list =（_this = possibleConstructorReturn（this，_TrackList.call（this，tracks，list）），_this）;
    list.changing_ = false;

    / **
     * @member {number} VideoTrackList＃selectedIndex
     *所选{@link VideoTrack`}的当前索引。
     * /
    Object.defineProperty（list，'selectedIndex'，{
      get：function get $$ 1（）{
        for（var _i = 0; _i <this.length; _i ++）{
          if（this [_i] .selected）{
            返回_i
          }
        }
        返回-1;
      }，
      set：function set $$ 1（）{}
    }）;

    return _ret = list，possibleConstructorReturn（_this，_ret）;
  }

  / **
   *添加{@link VideoTrack}到“VideoTrackList”。
   *
   * @param {VideoTrack}曲目
   *将VideoTrack添加到列表中
   *
   * @fires TrackList＃addtrack
   * /


  VideoTrackList.prototype.addTrack = function addTrack（track）{
    var _this2 = this;

    if（track.selected）{
      disableOthers $ 1（this，track）;
    }

    _TrackList.prototype.addTrack.call（this，track）;
    //本机曲目没有这个
    if（！track.addEventListener）{
      返回;
    }

    / **
     * @listens VideoTrack＃selectedchange
     * @fires TrackList＃change
     * /
    track.addEventListener（'selectedchange'，function（）{
      if（_this2.changing_）{
        返回;
      }
      _this2.changing_ = true;
      disableOthers $ 1（_this2，track）;
      _this2.changing_ = false;
      _this2.trigger（ '变更'）;
    }）;
  };

  返回VideoTrackList;
}（曲目）;

/ **
 * @file text-track-list.js
 * /
/ **
 *媒体文件的{@link TextTrack}的当前列表。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#texttracklist}
 * @extends TrackList
 * /

var TextTrackList = function（_TrackList）{
  继承（TextTrackList，_TrackList）;

  / **
   *创建一个这个类的实例。
   *
   * @param {TextTrack []} [tracks = []]
   *用于实例化列表的“TextTrack”列表。
   * /
  function TextTrackList（）{
    var _this，_ret;

    var tracks = arguments.length> 0 && arguments [0]！== undefined？参数[0]：[];
    classCallCheck（this，TextTrackList）;

    var list = void 0;

    // IE8强制我们自己实现继承
    //因为它不正确地支持Object.defineProperty
    if（IS_IE8）{
      list = document_1.createElement（'custom'）;
      for（var track in TrackList.prototype）{
        if（prop！=='constructor'）{
          list [prop] = TrackList.prototype [prop];
        }
      }
      for（var _prop in TextTrackList.prototype）{
        if（_prop！=='constructor'）{
          list [_prop] = TextTrackList.prototype [_prop];
        }
      }
    }

    list =（_this = possibleConstructorReturn（this，_TrackList.call（this，tracks，list）），_this）;
    return _ret = list，possibleConstructorReturn（_this，_ret）;
  }

  / **
   *添加一个{@link TextTrack}到`TextTrackList`
   *
   * @param {TextTrack}曲目
   *添加到列表的文本轨道。
   *
   * @fires TrackList＃addtrack
   * /


  TextTrackList.prototype.addTrack = function addTrack（track）{
    _TrackList.prototype.addTrack.call（this，track）;

    / **
     * @listens TextTrack＃modechange
     * @fires TrackList＃change
     * /
    track.addEventListener（'modechange'，bind（this，function（）{
      this.trigger（ '变更'）;
    }））;

    var nonLanguageTextTrackKind = ['metadata'，'chapters'];

    if（nonLanguageTextTrackKind.indexOf（track.kind）=== -1）{
      track.addEventListener（'modechange'，bind（this，function（）{
        this.trigger（ 'selectedlanguagechange'）;
      }））;
    }
  };

  返回TextTrackList;
}（曲目）;

/ **
 * @file html-track-element-list.js
 * /

/ **
 * {@link HtmlTrackElement}的当前列表。
 * /

var HtmlTrackElementList = function（）{

  / **
   *创建一个这个类的实例。
   *
   * @param {HtmlTrackElement []} [tracks = []]
   *用于实例化列表的“HtmlTrackElement”列表。
   * /
  函数HtmlTrackElementList（）{
    var trackElements = arguments.length> 0 && arguments [0]！== undefined？参数[0]：[];
    classCallCheck（this，HtmlTrackElementList）;

    var list = this; // eslint-disable-line

    if（IS_IE8）{
      list = document_1.createElement（'custom'）;

      for（var prop in HtmlTrackElementList.prototype）{
        if（prop！=='constructor'）{
          list [prop] = HtmlTrackElementList.prototype [prop];
        }
      }
    }

    list.trackElements_ = [];

    / **
     * @memberof HtmlTrackElementList
     * @member {number}长度
     *目前本轨道中的“Track”数量。
     * @instance
     * /
    Object.defineProperty（list，'length'，{
      get：function get $$ 1（）{
        return this.trackElements_.length;
      }
    }）;

    for（var i = 0，length = trackElements.length; i <length; i ++）{
      list.addTrackElement_（trackElements [I]）;
    }

    if（IS_IE8）{
      退货单
    }
  }

  / **
   *添加一个{@link HtmlTrackElement}到'HtmlTrackElementList'
   *
   * @param {HtmlTrackElement} trackElement
   *添加到列表中的轨道元素。
   *
   * @私人的
   * /


  HtmlTrackElementList.prototype.addTrackElement_ = function addTrackElement_（trackElement）{
    var index = this.trackElements_.length;

    if（！（''+ index in this））{
      Object.defineProperty（this，index，{
        get：function get $$ 1（）{
          return this.trackElements_ [index];
        }
      }）;
    }

    //不要添加重复元素
    if（this.trackElements_.indexOf（trackElement）=== -1）{
      this.trackElements_.push（trackElement）;
    }
  };

  / **
   *从“HtmlTrackElementList”获得一个{@link HtmlTrackElement}
   * {@link TextTrack}。
   *
   * @param {TextTrack}曲目
   *与轨道元素相关联的轨道。
   *
   * @return {HtmlTrackElement | undefined}
   *找到或未定义的轨道元素。
   *
   * @私人的
   * /


  HtmlTrackElementList.prototype.getTrackElementByTrack_ = function getTrackElementByTrack_（track）{
    var trackElement_ = void 0;

    for（var i = 0，length = this.trackElements_.length; i <length; i ++）{
      if（track === this.trackElements_ [i] .track）{
        trackElement_ = this.trackElements_ [i];

        打破;
      }
    }

    return trackElement_;
  };

  / **
   *从“HtmlTrackElementList”中删除{@link HtmlTrackElement}
   *
   * @param {HtmlTrackElement} trackElement
   *要从列表中删除的轨道元素。
   *
   * @私人的
   * /


  HtmlTrackElementList.prototype.removeTrackElement_ = function removeTrackElement_（trackElement）{
    for（var i = 0，length = this.trackElements_.length; i <length; i ++）{
      if（trackElement === this.trackElements_ [i]）{
        this.trackElements_.splice（i，1）;

        打破;
      }
    }
  };

  返回HtmlTrackElementList;
}（）;

/ **
 * @file text-track-cue-list.js
 * /
/ **
 * @typedef {Object} TextTrackCueList〜TextTrackCue
 *
 * @property {string} id
 *此文字轨道提示的唯一ID
 *
 * @property {number} startTime
 *此文字轨迹提示的开始时间
 *
 * @property {number} endTime
 *此文字轨迹提示的结束时间
 *
 * @property {boolean} pauseOnExit
 *如果达到结束时间，则暂停。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcue}
 * /

/ **
 * TextTrackCues列表。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackcuelist}
 * /

var TextTrackCueList = function（）{

  / **
   *创建这个类的一个实例
   *
   * @param {Array}提示
   *要初始化的线索列表
   * /
  函数TextTrackCueList（cues）{
    classCallCheck（this，TextTrackCueList）;

    var list = this; // eslint-disable-line

    if（IS_IE8）{
      list = document_1.createElement（'custom'）;

      for（var track in TextTrackCueList.prototype）{
        if（prop！=='constructor'）{
          list [prop] = TextTrackCueList.prototype [prop];
        }
      }
    }

    TextTrackCueList.prototype.setCues_.call（list，cues）;

    / **
     * @memberof TextTrackCueList
     * @member {number}长度
     * TextTrackCueList中当前的TextTrackCue数。
     * @instance
     * /
    Object.defineProperty（list，'length'，{
      get：function get $$ 1（）{
        返回this.length_;
      }
    }）;

    if（IS_IE8）{
      退货单
    }
  }

  / **
   *此列表中的提示的设置者。创造吸气
   *提示的索引。
   *
   * @param {Array}提示
   *要设置的提示数组
   *
   * @私人的
   * /


  TextTrackCueList.prototype.setCues_ = function setCues_（cues）{
    var oldLength = this.length || 0;
    var i = 0;
    var l = cues.length;

    this.cues_ =提示
    this.length_ = cues.length;

    var defineProp = function defineProp（index）{
      if（！（''+ index in this））{
        Object.defineProperty（this，''+ index，{
          get：function get $$ 1（）{
            return this.cues_ [index];
          }
        }）;
      }
    };

    if（oldLength <l）{
      i = oldLength;

      for（; i <l; i ++）{
        defineProp.call（this，i）;
      }
    }
  };

  / **
   *通过id获取当前位于“TextTrackCueList”中的“TextTrackCue”。
   *
   * @param {string} id
   *应该搜索的提示的id。
   *
   * @return {TextTrackCueList〜TextTrackCue | null}
   *单个提示或null（如果没有找到）。
   * /


  TextTrackCueList.prototype.getCueById = function getCueById（id）{
    var result = null;

    for（var i = 0，l = this.length; i <l; i ++）{
      var cue = this [i];

      if（cue.id === id）{
        结果=提示
        打破;
      }
    }

    返回结果;
  };

  返回TextTrackCueList;
}（）;

/ **
 * @file track-types.js
 * /

/ **
 *所有可能的“VideoTrackKind”
 *
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-videotrack-kind
 * @typedef VideoTrack〜Kind
 * @enum
 * /
var VideoTrackKind = {
  替代方案：'替代'，
  字幕：'字幕'，
  主要：“主”
  标志：'sign'，
  字幕：'subtitles'，
  评论：'评论'
};

/ **
 *所有可能的“AudioTrackKind”
 *
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-audiotrack-kind
 * @typedef AudioTrack〜Kind
 * @enum
 * /
var AudioTrackKind = {
  '替代'：'替代'，
  '描述'：'描述'，
  '主'：'主'，
  'main-desc'：'main-desc'，
  '翻译'：'翻译'
  '评论'：'评论'
};

/ **
 *所有可能的“TextTrackKind”
 *
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-texttrack-kind
 * @typedef TextTrack〜Kind
 * @enum
 * /
var TextTrackKind = {
  字幕：'subtitles'，
  字幕：'字幕'，
  描述：'描述'，
  章节：“章节”
  元数据：'元数据'
};

/ **
 *所有可能的“TextTrackMode”
 *
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#texttrackmode
 * @typedef TextTrack〜Mode
 * @enum
 * /
var TextTrackMode = {
  残疾人士：“残疾人”，
  隐藏：'隐藏'，
  显示：'显示'
};

/ **
 * @file track.js
 * /
/ **
 * Track类包含{@link AudioTrack}的所有常见功能，
 * {@link VideoTrack}和{@link TextTrack}。
 *
 *>注意：此类不应该直接使用
 *
 * @see {@link https://html.spec.whatwg.org/multipage/embedded-content.html}
 * @extends EventTarget
 * @abstract
 * /

var Track = function（_EventTarget）{
  inherits（Track，_EventTarget）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Object} [options = {}]
   *选项名称和值的对象
   *
   * @param {string} [options.kind ='']
   *您正在创建的曲目类型的有效类型。
   *
   * @param {string} [options.id ='vjs_track_'+ Guid.newGUID（）]
   *此AudioTrack的唯一ID。
   *
   * @param {string} [options.label ='']
   *此曲目的菜单标签。
   *
   * @param {string} [options.language ='']
   *有效的两个字符语言代码。
   *
   * @abstract
   * /
  功能Track（）{
    var _ret

    var options = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
    classCallCheck（this，Track）;

    var _this = possibleConstructorReturn（this，_EventTarget.call（this））;

    var track = _this; // eslint-disable-line

    if（IS_IE8）{
      track = document_1.createElement（'custom'）;
      for（var prop in Track.prototype）{
        if（prop！=='constructor'）{
          track [prop] = Track.prototype [prop];
        }
      }
    }

    var trackProps = {
      id：options.id || 'vjs_track_'+ newGUID（），
      kind：options.kind || '，
      label：options.label || '，
      language：options.language || “”
    };

    / **
     * @memberof Track
     * @member {string} id
     *这个轨道的id。创建后无法更改。
     * @instance
     *
     * @只读
     * /

    / **
     * @memberof Track
     * @member {string}种
     *这是一种轨道。创建后无法更改。
     * @instance
     *
     * @只读
     * /

    / **
     * @memberof Track
     * @member {string}标签
     *此曲目的标签。创建后无法更改。
     * @instance
     *
     * @只读
     * /

    / **
     * @memberof Track
     * @member {string}语言
     *这个轨道的两个字母的语言代码。不能改变
     *创作。
     * @instance
     *
     * @只读
     * /

    var _loop = function _loop（key）{
      Object.defineProperty（track，key，{
        get：function get $$ 1（）{
          return trackProps [key];
        }，
        set：function set $$ 1（）{}
      }）;
    };

    for（var key in trackProps）{
      _loop（键）;
    }

    return _ret = track，possibleConstructorReturn（_this，_ret）;
  }

  返回轨道
}（事件目标）;

/ **
 * @file url.js
 * @module url
 * /
/ **
 * @typedef {Object} url：URLObject
 *
 * @property {string}协议
 *解析的URL的协议。
 *
 * @property {string}主机名
 *解析的网址的主机名。
 *
 * @property {string}端口
 *解析的url的端口。
 *
 * @property {string}路径名
 *解析的URL的路径名。
 *
 * @property {string}搜索
 *已解析的网址的搜索查询。
 *
 * @property {string}哈希
 *解析的URL的哈希值。
 *
 * @property {string}主机
 *被解析的URL的主机。
 * /

/ **
 *解析并解析URL的元素。
 *
 * @param {String} url
 *解析的url
 *
 * @return {url：URLObject}
 * url的一个对象细节
 * /
var parseUrl = function parseUrl（url）{
  var props = ['protocol'，'hostname'，'port'，'pathname'，'search'，'hash'，'host'];

  //将网址添加到锚点，让浏览器解析URL
  var a = document_1.createElement（'a'）;

  a.href = url;

  // IE8（和9？）修复
  // ie8不正确解析URL，直到锚实际上
  //添加到body中，需要一个innerHTML来触发解析
  var addToBody = a.host ===''&& a.protocol！=='file：';
  var div = void 0;

  if（addToBody）{
    div = document_1.createElement（'div'）;
    div.innerHTML ='<a href="' + url +'"> </a>';
    a = div.firstChild;
    //防止div影响布局
    div.setAttribute（'style'，'display：none; position：absolute;'）;
    document_1.body.appendChild（DIV）;
  }

  //将特定URL属性复制到新对象
  //这也是IE8所必需的，因为锚失去了它
  //属性，当它从dom中删除
  var details = {};

  for（var i = 0; i <props.length; i ++）{
    细节[props [i]] = a [props [i]];
  }

  // IE9将端口添加到host属性，与其他人不同。如果
  //为标准端口添加端口标识符，将其剥离。
  if（details.protocol ==='http：'）{
    details.host = details.host.replace（/：80 $ /，''）;
  }

  if（details.protocol ==='https：'）{
    details.host = details.host.replace（/：443 $ /，''）;
  }

  if（addToBody）{
    document_1.body.removeChild（DIV）;
  }

  退货详情;
};

/ **
 *获取绝对版本的相对URL。用来告诉Flash正确的URL。
 *
 *
 * @param {string} url
 *做出绝对的URL
 *
 * @return {string}
 *绝对网址
 *
 * @see http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
 * /
var getAbsoluteURL = function getAbsoluteURL（url）{
  //检查绝对URL
  if（！url.match（/ ^ https？：\ / \ //））{
    //转换为绝对URL。托管在场外的Flash需要一个绝对的URL。
    var div = document_1.createElement（'div'）;

    div.innerHTML ='<a href="' + url +'"> x </a>';
    url = div.firstChild.href;
  }

  返回url;
};

/ **
 *返回传递的文件名的扩展名。它将返回一个空字符串
 *如果传递无效的路径。
 *
 * @param {string}路径
 * fileName路径像'/path/to/file.mp4'
 *
 * @returns {string}
 *扩展名为小写或空字符串，如果否
 *可以找到扩展名。
 * /
var getFileExtension = function getFileExtension（path）{
  if（typeof path ==='string'）{
    var splitPathRe = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/ ？\] +）））（？：？[\ /] * | [\] *）$ / I;
    var pathParts = splitPathRe.exec（path）;

    if（pathParts）{
      return pathParts.pop（）。toLowerCase（）;
    }
  }

  返回''
};

/ **
 *返回传递的网址是否是跨域请求。
 *
 * @param {string} url
 *要检查的URL。
 *
 * @return {boolean}
 *是否是跨域请求？
 * /
var isCrossOrigin = function isCrossOrigin（url）{
  var winLoc = window_1.location;
  var urlInfo = parseUrl（url）;

  // IE8协议相对urls将为协议返回'：'
  var srcProtocol = urlInfo.protocol ==='：'？winLoc.protocol：urlInfo.protocol;

  //检查url是否是另一个域/来源
  // IE8不知道location.origin，所以我们不会在这里依靠它
  var crossOrigin = srcProtocol + urlInfo.host！== winLoc.protocol + winLoc.host;

  返回十字架
};

var Url =（Object.freeze || Object）（{
	parseUrl：parseUrl，
	getAbsoluteURL：getAbsoluteURL，
	getFileExtension：getFileExtension，
	isCrossOrigin：isCrossOrigin
}）;

var isFunction_1 = isFunction;

var toString $ 1 = Object.prototype.toString;

function isFunction（fn）{
  var string = toString $ 1.call（fn）;
  返回字符串==='[object Function]'||
    （typeof fn ==='function'&& string！=='[object RegExp]'）||
    （typeof window！=='undefined'&&
     // IE8及以下
     （fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt））
}

var trim_1 = createCommonjsModule（function（module，exports）{
exports = module.exports = trim;

function trim（str）{
  return str.replace（/ ^ \ s * | \ s * $ / g，''）;
}

exports.left = function（str）{
  return str.replace（/ ^ \ s * /，''）;
};

exports.right = function（str）{
  return str.replace（/ \ s * $ /，''）;
};
}）;

var forEach_1 = forEach;

var toString $ 2 = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function forEach（list，iterator，context）{
    if（！isFunction_1（iterator））{
        抛出新的TypeError（'iterator必须是一个函数'）
    }

    if（arguments.length <3）{
        context = this;
    }
    
    if（toString $ 2.call（list）==='[object Array]'）
        forEachArray $ 1（list，iterator，context）;
    else if（typeof list ==='string'）
        forEachString（list，iterator，context）;
    其他
        forEachObject（list，iterator，context）;
}

function forEachArray $ 1（array，iterator，context）{
    for（var i = 0，len = array.length; i <len; i ++）{
        if（hasOwnProperty.call（array，i））{
            iterator.call（context，array [i]，i，array）;
        }
    }
}

function forEachString（string，iterator，context）{
    for（var i = 0，len = string.length; i <len; i ++）{
        //没有一个稀疏字符串的东西。
        iterator.call（context，string.charAt（i），i，string）;
    }
}

function forEachObject（object，iterator，context）{
    for（var k in object）{
        if（hasOwnProperty.call（object，k））{
            iterator.call（context，object [k]，k，object）;
        }
    }
}

var isArray = function（arg）{
      return Object.prototype.toString.call（arg）==='[object Array]';
    };

var parseHeaders = function（headers）{
  if（！headers）
    返回{}

  var result = {};

  forEach_1（
      trim_1（头）.split（ '\ n'）
    ，function（row）{
        var index = row.indexOf（'：'）
          ，key = trim_1（row.slice（0，index））。toLowerCase（）
          ，value = trim_1（row.slice（index + 1））;

        if（typeof（result [key]）==='undefined'）{
          result [key] = value;
        } else if（isArray（result [key]））{
          结果[键] .push（值）;
        } else {
          result [key] = [result [key]，value];
        }
      }
  ）;

  返回结果
};

var immutable = extend;

var hasOwnProperty $ 1 = Object.prototype.hasOwnProperty;

function extend（）{
    var target = {};

    for（var i = 0; i <arguments.length; i ++）{
        var source = arguments [i];

        for（var key in source）{
            if（hasOwnProperty $ 1.call（source，key））{
                target [key] = source [key];
            }
        }
    }

    返回目标
}

var xhr = createXHR;
createXHR.XMLHttpRequest = window_1.XMLHttpRequest || 空操作;
（new createXHR.XMLHttpRequest（））中的createXHR.XDomainRequest =“withCredentials”？createXHR.XMLHttpRequest：window_1.XDomainRequest;

forEachArray（[“get”，“put”，“post”，“patch”，“head”，“delete”]，function（method）{
    createXHR [method ===“delete”？“del”：method] = function（uri，options，callback）{
        options = initParams（uri，options，callback）;
        options.method = method.toUpperCase（）;
        返回_createXHR（选项）
    };
}）;

function forEachArray（array，iterator）{
    for（var i = 0; i <array.length; i ++）{
        迭代器（阵列[I]）;
    }
}

函数isEmpty（obj）{
    for（var i in obj）{
        if（obj.hasOwnProperty（i））返回false
    }
    返回真
}

函数initParams（uri，options，callback）{
    var params = uri;

    if（isFunction_1（options））{
        回调=选项;
        if（typeof uri ===“string”）{
            params = {uri：uri};
        }
    } else {
        params = immutable（options，{uri：uri}）;
    }

    params.callback = callback;
    返回参数
}

函数createXHR（uri，options，callback）{
    options = initParams（uri，options，callback）;
    返回_createXHR（选项）
}

函数_createXHR（options）{
    if（typeof options.callback ===“undefined”）{
        抛出新的错误（“回调参数缺失”）
    }

    var called = false;
    var callback = function cbOnce（err，response，body）{
        如果（！叫）{
            被称为=真
            options.callback（err，response，body）;
        }
    };

    function readystatechange（）{
        if（xhr.readyState === 4）{
            setTimeout（loadFunc，0）;
        }
    }

    function getBody（）{
        // Chrome with requestType = blob在测试访问responseText时抛出错误arround
        var body = undefined;

        if（xhr.response）{
            body = xhr.response;
        } else {
            body = xhr.responseText || 的getXML（XHR）;
        }

        if（isJson）{
            尝试{
                body = JSON.parse（body）;
            catch（e）{}
        }

        返回身体
    }

    function errorFunc（evt）{
        clearTimeout（timeoutTimer）;
        if（！（evt instanceof Error））{
            evt = new Error（“”+（evt ||“Unknown XMLHttpRequest Error”））;
        }
        evt.statusCode = 0;
        返回回调（evt，failureResponse）
    }

    //将加载数据并将响应处理在特殊响应对象中
    function loadFunc（）{
        如果（中止）返回
        var状态;
        clearTimeout（timeoutTimer）;
        if（options.useXDR && xhr.status === undefined）{
            // IE8 CORS GET成功响应没有状态字段，但是机身很好
            状态= 200;
        } else {
            status =（xhr.status === 1223？204：xhr.status）;
        }
        var response = failureResponse;
        var err = null;

        if（status！== 0）{
            response = {
                body：getBody（），
                statusCode：status，
                方法：方法，
                标题：{}，
                url：uri，
                rawRequest：xhr
            };
            if（xhr.getAllResponseHeaders）{//记住xhr实际上可以是IE中的CORD的XDR
                response.headers = parseHeaders（xhr.getAllResponseHeaders（））;
            }
        } else {
            err = new Error（“Internal XMLHttpRequest Error”）;
        }
        返回回调（err，response，response.body）
    }

    var xhr = options.xhr || 空值;

    if（！xhr）{
        if（options.cors || options.useXDR）{
            xhr = new createXHR.XDomainRequest（）;
        }其他{
            xhr = new createXHR.XMLHttpRequest（）;
        }
    }

    var键;
    var中止
    var uri = xhr.url = options.uri || options.url;
    var method = xhr.method = options.method || “得到”;
    var body = options.body || options.data;
    var headers = xhr.headers = options.headers || {};
    var sync = !! options.sync;
    var isJson = false;
    var timeoutTimer;
    var failureResponse = {
        身体：未定义，
        标题：{}，
        statusCode：0，
        方法：方法，
        url：uri，
        rawRequest：xhr
    };

    if（“json”in options && options.json！== false）{
        isJson = true;
        标题[“accept”] || 标题[“接受”] || （headers [“Accept”] =“application / json”）; //不要重写用户声明的现有接受头
        if（method！==“GET”&& method！==“HEAD”）{
            headers [“content-type”] || 标题[“Content-Type”] || （headers [“Content-Type”] =“application / json”）; //不要重写用户声明的现有接受头
            body = JSON.stringify（options.json === true？body：options.json）;
        }
    }

    xhr.onreadystatechange = readystatechange;
    xhr.onload = loadFunc;
    xhr.onerror = errorFunc;
    // IE9必须将onprogress设置为唯一的函数。
    xhr.onprogress = function（）{
        // IE必死
    };
    xhr.onabort = function（）{
        中止=真
    };
    xhr.ontimeout = errorFunc;
    xhr.open（method，uri，！sync，options.username，options.password）;
    //必须在开放之后
    if（！sync）{
        xhr.withCredentials = !! options.withCredentials;
    }
    //无法使用同步请求设置超时
    //没有在xhr对象上设置超时，因为旧的webkit不能正确处理
    // npm的请求和jquery 1.x都使用这种超时，所以这是一致的
    if（！sync && options.timeout> 0）{
        timeoutTimer = setTimeout（function（）{
            如果（中止）返回
            aborted = true; // IE9仍可调用readystatechange
            xhr.abort（ “超时”）;
            var e = new Error（“XMLHttpRequest timeout”）;
            e.code =“ETIMEDOUT”;
            errorFunc（E）;
        }，options.timeout）;
    }

    if（xhr.setRequestHeader）{
        for（键入标题）{
            如果（headers.hasOwnProperty（键））{
                xhr.setRequestHeader（key，headers [key]）;
            }
        }
    } else if（options.headers &&！isE​​mpty（options.headers））{
        抛出新的错误（“不能在XDomainRequest对象上设置标题”）
    }

    if（“responseType”在选项中）{
        xhr.responseType = options.responseType;
    }

    if（“beforeSend”in options &&
        typeof options.beforeSend ===“function”
    ）{
        options.beforeSend（XHR）;
    }

    //当发送以未定义的值调用时，Microsoft Edge浏览器发送“未定义”。
    // XMLHttpRequest规范说要将null作为body来表示没有body
    //参见https://github.com/naugtur/xhr/issues/100。
    xhr.send（body || null）;

    返回xhr


}

function getXml（xhr）{
    if（xhr.responseType ===“document”）{
        返回xhr.responseXML
    }
    var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName ===“parsererror”;
    if（xhr.responseType ===“”&&！firefoxBugTakenEffect）{
        返回xhr.responseXML
    }

    返回null
}

function noop（）{}

/ **
 * @file text-track.js
 * /
/ **
 *获取一个webvtt文件内容并将其解析为提示
 *
 * @param {string} srcContent
 * webVTT文件内容
 *
 * @param {TextTrack}曲目
 * TextTrack来添加提示。线索来自srcContent。
 *
 * @私人的
 * /
var parseCues = function parseCues（srcContent，track）{
  var parser = new window_1.WebVTT.Parser（window_1，window_1.vttjs，window_1.WebVTT.StringDecoder（））;
  var errors = [];

  parser.oncue = function（cue）{
    track.addCue（线索）;
  };

  parser.onparsingerror = function（error）{
    errors.push（误差）;
  };

  parser.onflush = function（）{
    track.trigger（{
      键入：'loadeddata'，
      目标：轨道
    }）;
  };

  parser.parse（srcContent）;
  if（errors.length> 0）{
    if（window_1.console && window_1.console.groupCollapsed）{
      window_1.console.groupCollapsed（'+ track.src'的Text Track解析错误）;
    }
    errors.forEach（function（error）{
      return log $ 1.error（error）;
    }）;
    if（window_1.console && window_1.console.groupEnd）{
      window_1.console.groupEnd（）;
    }
  }

  parser.flush（）;
};

/ **
 *从指定的URL中加载一个`TextTrack`。
 *
 * @param {string} src
 *网址加载轨道。
 *
 * @param {TextTrack}曲目
 跟踪添加提示。来自“url”结尾处的内容。
 *
 * @私人的
 * /
var loadTrack = function loadTrack（src，track）{
  var opts = {
    uri：src
  };
  var crossOrigin = isCrossOrigin（src）;

  if（crossOrigin）{
    opts.cors = crossOrigin;
  }

  xhr（opts，bind（this，function（err，response，responseBody）{
    if（err）{
      return log $ 1.error（err，response）;
    }

    track.loaded_ = true;

    //确保vttjs已经加载，否则等到加载完毕
    //注意：这仅用于alt / video.novtt.js构建
    if（typeof window_1.WebVTT！=='function'）{
      if（track.tech_）{
        var loadHandler = function loadHandler（）{
          return parseCues（responseBody，track）;
        };

        track.tech_.on（'vttjsloaded'，loadHandler）;
        track.tech_.on（'vttjserror'，function（）{
          log $ 1.error（'vttjs加载失败，停止尝试处理'+ track.src）;
          track.tech_.off（'vttjsloaded'，loadHandler）;
        }）;
      }
    } else {
      parseCues（responseBody，track）;
    }
  }））;
};

/ **
 *单个“TextTrack”的表示。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#texttrack}
 * @extends Track
 * /

var TextTrack = function（_Track）{
  继承（TextTrack，_Track）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Object} options = {}
   *选项名称和值的对象
   *
   * @param {Tech} options.tech
   *提及拥有此TextTrack的技术。
   *
   * @param {TextTrack〜Kind} [options.kind ='subtitles']
   *有效的文字轨道种类。
   *
   * @param {TextTrack〜Mode} [options.mode ='disabled']
   *有效的文字跟踪模式。
   *
   * @param {string} [options.id ='vjs_track_'+ Guid.newGUID（）]
   *此TextTrack的唯一ID。
   *
   * @param {string} [options.label ='']
   *此曲目的菜单标签。
   *
   * @param {string} [options.language ='']
   *有效的两个字符语言代码。
   *
   * @param {string} [options.srclang ='']
   *有效的两个字符语言代码。一个替代方案，但是取得优先权
   * vesion的`options.language`
   *
   * @param {string} [options.src]
   *一个URL到TextTrack提示。
   *
   * @param {boolean} [options.default]
   *如果该曲目默认为开或关。
   * /
  function TextTrack（）{
    var _this，_ret;

    var options = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
    classCallCheck（this，TextTrack）;

    if（！options.tech）{
      抛出新的错误（'没有提供技术'）;
    }

    var settings = mergeOptions（options，{
      kind：TextTrackKind [options.kind] || “字幕”，
      language：options.language || options.srclang || “”
    }）;
    var mode = TextTrackMode [settings.mode] || “禁用”;
    var default_ = settings ['default'];

    if（settings.kind ==='metadata'|| settings.kind ==='chapters'）{
      mode ='hidden';
    }
    //在IE8上这将是一个文档元素
    //对于每个其他浏览器，这将是一个普通的对象
    var tt =（_this = possibleConstructorReturn（this，_Track.call（this，settings）），_this）;

    tt.tech_ = settings.tech;

    if（IS_IE8）{
      for（var track in TextTrack.prototype）{
        if（prop！=='constructor'）{
          tt [prop] = TextTrack.prototype [prop];
        }
      }
    }

    tt.cues_ = [];
    tt.activeCues_ = [];

    var cues = new TextTrackCueList（tt.cues_）;
    var activeCues = new TextTrackCueList（tt.activeCues_）;
    var changed = false;
    var timeupdateHandler = bind（tt，function（）{

      //访问this.activeCues以进行更新本身的副作用
      //因为它是大自然作为一个吸气功能。不要删除或提示意志
      //停止更新！
      / * eslint-disable no-unused-expressions * /
      this.activeCues;
      / * eslint-enable no-unused-expressions * /
      if（changed）{
        this.trigger（ 'cuechange'）;
        改变=假;
      }
    }）;

    if（mode！=='disabled'）{
      tt.tech_.ready（function（）{
        tt.tech_.on（'timeupdate'，timeupdateHandler）;
      }，true）;
    }

    / **
     * @memberof TextTrack
     * @member {boolean}默认值
     *如果此曲目默认设置为开或关。不能改变
     *创作。
     * @instance
     *
     * @只读
     * /
    Object.defineProperty（tt，'default'，{
      get：function get $$ 1（）{
        返回default_;
      }，
      set：function set $$ 1（）{}
    }）;

    / **
     * @memberof TextTrack
     * @member {string}模式
     *将此TextTrack的模式设置为有效的{@link TextTrack〜Mode}。将
     *如果设置为无效模式，则不设置。
     * @instance
     *
     * @fires TextTrack＃modechange
     * /
    Object.defineProperty（tt，'mode'，{
      get：function get $$ 1（）{
        返回模式;
      }，
      set：function set $$ 1（newMode）{
        var _this2 = this;

        if（！TextTrackMode [newMode]）{
          返回;
        }
        mode = newMode;
        if（mode ==='显示'）{

          this.tech_.ready（function（）{
            _this2.tech_.on（'timeupdate'，timeupdateHandler）;
          }，true）;
        }
        / **
         *模式在此轨道上更改时触发的事件。这允许
         *保存此轨道的TextTrackList相应地执行。
         *
         *>注意：这不是规范的一部分！
         *
         * @event TextTrack＃modechange
         * @type {EventTarget〜Event}
         * /
        this.trigger（ 'modechange'）;
      }
    }）;

    / **
     * @memberof TextTrack
     * @member {TextTrackCueList}提示
     *此TextTrack的文字曲目提示列表。
     * @instance
     * /
    Object.defineProperty（tt，'cues'，{
      get：function get $$ 1（）{
        if（！this.loaded_）{
          返回null;
        }

        回报线索
      }，
      set：function set $$ 1（）{}
    }）;

    / **
     * @memberof TextTrack
     * @member {TextTrackCueList} activeCues
     *此TextTrack当前处于活动状态的列表文本跟踪提示。
     * @instance
     * /
    Object.defineProperty（tt，'activeCues'，{
      get：function get $$ 1（）{
        if（！this.loaded_）{
          返回null;
        }

        // 没事做
        if（this.cues.length === 0）{
          返回activeCues;
        }

        var ct = this.tech_.currentTime（）;
        var active = [];

        for（var i = 0，l = this.cues.length; i <l; i ++）{
          var cue = this.cues [i];

          if（cue.startTime <= ct && cue.endTime> = ct）{
            active.push（线索）;
          } else if（cue.startTime === cue.endTime && cue.startTime <= ct && cue.startTime + 0.5> = ct）{
            active.push（线索）;
          }
        }

        改变=假;

        if（active.length！== this.activeCues_.length）{
          改变=真;
        } else {
          for（var _i = 0; _i <active.length; _i ++）{
            if（this.activeCues_.indexOf（active [_i]）=== -1）{
              改变=真;
            }
          }
        }

        this.activeCues_ = active;
        activeCues.setCues_（this.activeCues_）;

        返回activeCues;
      }，
      set：function set $$ 1（）{}
    }）;

    if（settings.src）{
      tt.src = settings.src;
      loadTrack（settings.src，tt）;
    } else {
      tt.loaded_ = true;
    }

    return _ret = tt，possibleConstructorReturn（_this，_ret）;
  }

  / **
   *在线索的内部列表中添加提示。
   *
   * @param {TextTrack〜Cue}提示
   *要添加到我们的内部列表的提示
   * /


  TextTrack.prototype.addCue = function addCue（originalCue）{
    var cue = originalCue;

    if（window_1.vttjs &&！（originalCue instanceof window_1.vttjs.VTTCue））{
      cue = new window_1.vttjs.VTTCue（originalCue.startTime，originalCue.endTime，originalCue.text）;

      for（var prop in originalCue）{
        if（！（prop in cue））{
          提示[prop] = originalCue [prop];
        }
      }

      //确保“id”被复制
      cue.id = originalCue.id;
      cue.originalCue_ = originalCue;
    }

    var tracks = this.tech_.textTracks（）;

    for（var i = 0; i <tracks.length; i ++）{
      if（tracks [i]！== this）{
        曲目[I] .removeCue（线索）;
      }
    }

    this.cues_.push（线索）;
    this.cues.setCues_（this.cues_）;
  };

  / **
   *从我们的内部列表中删除提示
   *
   * @param {TextTrack〜Cue} removeCue
   *从我们的内部列表中删除的提示
   * /


  TextTrack.prototype.removeCue = function removeCue（_removeCue）{
    var i = this.cues_.length;

    当我 - ） {
      var cue = this.cues_ [i];

      if（cue === _removeCue || cue.originalCue_ && cue.originalCue_ === _removeCue）{
        this.cues_.splice（i，1）;
        this.cues.setCues_（this.cues_）;
        打破;
      }
    }
  };

  返回TextTrack;
}（跟踪）;

/ **
 * cuechange  - 轨道中的一个或多个提示已激活或停止活动。
 * /


TextTrack.prototype.allowedEvents_ = {
  cuechange：'cuechange'
};

/ **
 *表示单个“AudioTrack”。如果它是{@link AudioTrackList}的一部分
 *一次只能启用一个“AudioTrack”列表。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#audiotrack}
 * @extends Track
 * /

var AudioTrack = function（_Track）{
  继承（AudioTrack，_Track）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Object} [options = {}]
   *选项名称和值的对象
   *
   * @param {AudioTrack〜Kind} [options.kind ='']
   *有效的音轨种类
   *
   * @param {string} [options.id ='vjs_track_'+ Guid.newGUID（）]
   *此AudioTrack的唯一ID。
   *
   * @param {string} [options.label ='']
   *此曲目的菜单标签。
   *
   * @param {string} [options.language ='']
   *有效的两个字符语言代码。
   *
   * @param {boolean} [options.enabled]
   *如果此曲目是当前播放的曲目。如果这个轨道是其中的一部分
   *一个{@link AudioTrackList}，只有一个{@link AudioTrack}将被启用。
   * /
  功能AudioTrack（）{
    var _this，_ret;

    var options = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
    classCallCheck（this，AudioTrack）;

    var settings = mergeOptions（options，{
      种类：AudioTrackKind [options.kind] || “”
    }）;
    //在IE8上这将是一个文档元素
    //对于每个其他浏览器，这将是一个普通的对象
    var track =（_this = possibleConstructorReturn（this，_Track.call（this，settings）），_this）;
    var enabled = false;

    if（IS_IE8）{
      for（var track in AudioTrack.prototype）{
        if（prop！=='constructor'）{
          track [prop] = AudioTrack.prototype [prop];
        }
      }
    }
    / **
     * @memberof AudioTrack
     * @member {boolean}已启用
     *如果这个“AudioTrack”启用或不启用 设置这个意志
     * fire {@link AudioTrack＃enabledchange}如果已启用的状态已更改。
     * @instance
     *
     * @fires VideoTrack＃selectedchange
     * /
    Object.defineProperty（track，'enabled'，{
      get：function get $$ 1（）{
        返回启用
      }，
      set：function set $$ 1（newEnabled）{
        //无效或不变的值
        if（typeof newEnabled！=='boolean'|| newEnabled === enabled）{
          返回;
        }
        enabled = newEnabled;

        / **
         *在此轨道上启用更改时触发的事件。这允许
         * AudioTrackList保持此轨道相应的行为。
         *
         *>注意：这不是规范的一部分！本地音轨将会做
         *内部没有事件。
         *
         * @event AudioTrack＃enabledchange
         * @type {EventTarget〜Event}
         * /
        this.trigger（ 'enabledchange'）;
      }
    }）;

    //如果用户将此轨道设置为所选
    //否则设置为该真值
    //我们保持虚假
    if（settings.enabled）{
      track.enabled = settings.enabled;
    }
    track.loaded_ = true;

    return _ret = track，possibleConstructorReturn（_this，_ret）;
  }

  返回AudioTrack;
}（跟踪）;

/ **
 *表示一个“VideoTrack”。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#videotrack}
 * @extends Track
 * /

var VideoTrack = function（_Track）{
  继承（VideoTrack，_Track）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Object} [options = {}]
   *选项名称和值的对象
   *
   * @param {string} [options.kind ='']
   *有效的{@link VideoTrack〜Kind}
   *
   * @param {string} [options.id ='vjs_track_'+ Guid.newGUID（）]
   *此AudioTrack的唯一ID。
   *
   * @param {string} [options.label ='']
   *此曲目的菜单标签。
   *
   * @param {string} [options.language ='']
   *有效的两个字符语言代码。
   *
   * @param {boolean} [options.selected]
   *如果此曲目是当前播放的曲目。
   * /
  功能VideoTrack（）{
    var _this，_ret;

    var options = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
    classCallCheck（这是VideoTrack）;

    var settings = mergeOptions（options，{
      种类：VideoTrackKind [options.kind] || “”
    }）;

    //在IE8上这将是一个文档元素
    //对于每个其他浏览器，这将是一个普通的对象
    var track =（_this = possibleConstructorReturn（this，_Track.call（this，settings）），_this）;
    var selected = false;

    if（IS_IE8）{
      for（var Track in VideoTrack.prototype）{
        if（prop！=='constructor'）{
          track [prop] = VideoTrack.prototype [prop];
        }
      }
    }

    / **
     * @memberof VideoTrack
     * @member {boolean}被选中
     *如果选择了“VideoTrack”，设置这个意志
     * fire {@link VideoTrack＃selectedchange}如果所选的状态发生变化。
     * @instance
     *
     * @fires VideoTrack＃selectedchange
     * /
    Object.defineProperty（track，'selected'，{
      get：function get $$ 1（）{
        返回选择;
      }，
      set：function set $$ 1（newSelected）{
        //无效或不变的值
        if（typeof newSelected！=='boolean'|| newSelected === selected）{
          返回;
        }
        selected = newSelected;

        / **
         *在这个轨道上选择更改时触发的事件。这允许
         * VideoTrackList保持此轨道相应的行为。
         *
         *>注意：这不是规范的一部分！本地音轨将会做
         *内部没有事件。
         *
         * @event VideoTrack＃selectedchange
         * @type {EventTarget〜Event}
         * /
        this.trigger（ 'selectedchange'）;
      }
    }）;

    //如果用户将此轨道设置为所选
    //否则设置为该真值
    //我们保持虚假
    if（settings.selected）{
      track.selected = settings.selected;
    }

    return _ret = track，possibleConstructorReturn（_this，_ret）;
  }

  返回VideoTrack;
}（跟踪）;

/ **
 * @file html-track-element.js
 * /

/ **
 * @memberof HTMLTrackElement
 * @typedef {HTMLTrackElement〜ReadyState}
 * @enum {number}
 * /
var NONE = 0;
var LOADING = 1;
var LOADED = 2;
var ERROR = 3;

/ **
 *在DOM中表示的单个曲目。
 *
 * @see [Spec] {@ link https://html.spec.whatwg.org/multipage/embedded-content.html#htmltrackelement}
 * @extends EventTarget
 * /

var HTMLTrackElement = function（_EventTarget）{
  inherited（HTMLTrackElement，_EventTarget）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Object} options = {}
   *选项名称和值的对象
   *
   * @param {Tech} options.tech
   *参考拥有此HTMLTrackElement的技术。
   *
   * @param {TextTrack〜Kind} [options.kind ='subtitles']
   *有效的文字轨道种类。
   *
   * @param {TextTrack〜Mode} [options.mode ='disabled']
   *有效的文字跟踪模式。
   *
   * @param {string} [options.id ='vjs_track_'+ Guid.newGUID（）]
   *此TextTrack的唯一ID。
   *
   * @param {string} [options.label ='']
   *此曲目的菜单标签。
   *
   * @param {string} [options.language ='']
   *有效的两个字符语言代码。
   *
   * @param {string} [options.srclang ='']
   *有效的两个字符语言代码。一个替代方案，但是取得优先权
   * vesion的`options.language`
   *
   * @param {string} [options.src]
   *一个URL到TextTrack提示。
   *
   * @param {boolean} [options.default]
   *如果该曲目默认为开或关。
   * /
  函数HTMLTrackElement（）{
    var options = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
    classCallCheck（this，HTMLTrackElement）;

    var _this = possibleConstructorReturn（this，_EventTarget.call（this））;

    var readyState = void 0;
    var trackElement = _this; // eslint-disable-line

    if（IS_IE8）{
      trackElement = document_1.createElement（'custom'）;

      for（varTrack in HTMLTrackElement.prototype）{
        if（prop！=='constructor'）{
          trackElement [prop] = HTMLTrackElement.prototype [prop];
        }
      }
    }

    var track = new TextTrack（options）;

    trackElement.kind = track.kind;
    trackElement.src = track.src;
    trackElement.srclang = track.language;
    trackElement.label = track.label;
    trackElement ['default'] = track ['default'];

    / **
     * @memberof HTMLTrackElement
     * @member {HTMLTrackElement〜ReadyState} readyState
     *轨道元素的当前就绪状态。
     * @instance
     * /
    Object.defineProperty（trackElement，'readyState'，{
      get：function get $$ 1（）{
        返回readyState;
      }
    }）;

    / **
     * @memberof HTMLTrackElement
     * @member {TextTrack}曲目
     *底层TextTrack对象。
     * @instance
     *
     * /
    Object.defineProperty（trackElement，'track'，{
      get：function get $$ 1（）{
        返回轨道
      }
    }）;

    readyState = NONE;

    / **
     * @listens TextTrack＃loadeddata
     * @fires HTMLTrackElement＃load
     * /
    track.addEventListener（'loadeddata'，function（）{
      readyState = LOADED;

      trackElement.trigger（{
        键入：'load'，
        target：trackElement
      }）;
    }）;

    if（IS_IE8）{
      var _ret

      return _ret = trackElement，possibleConstructorReturn（_this，_ret）;
    }
    返回_this;
  }

  返回HTMLTrackElement;
}（事件目标）;

HTMLTrackElement.prototype.allowedEvents_ = {
  负载：'负载'
};

HTMLTrackElement.NONE = NONE;
HTMLTrackElement.LOADING = LOADING;
HTMLTrackElement.LOADED = LOADED;
HTMLTrackElement.ERROR = ERROR;

/ *
 *此文件包含所有track属性
 * player.js，tech.js，html5.js以及未来的其他技术。
 * /

var NORMAL = {
  音频：{
    ListClass：AudioTrackList，
    TrackClass：AudioTrack，
    capitalName：'Audio'
  }，
  视频： {
    ListClass：VideoTrackList，
    TrackClass：VideoTrack，
    资本名称：'视频'
  }，
  文字：{
    ListClass：TextTrackList，
    TrackClass：TextTrack，
    capitalName：'Text'
  }
};

Object.keys（NORMAL）.forEach（function（type）{
  NORMAL [type] .getterName = type +'Tracks';
  NORMAL [type] .privateName = type +'Tracks_';
}）;

var REMOTE = {
  remoteText：{
    ListClass：TextTrackList，
    TrackClass：TextTrack，
    capitalName：'RemoteText'，
    getterName：'remoteTextTracks'，
    privateName：'remoteTextTracks_'
  }，
  remoteTextEl：{
    ListClass：HtmlTrackElementList，
    TrackClass：HTMLTrackElement，
    capitalName：'RemoteTextTrackEls'，
    getterName：'remoteTextTrackEls'，
    privateName：'remoteTextTrackEls_'
  }
};

var ALL = mergeOptions（NORMAL，REMOTE）;

REMOTE.names = Object.keys（REMOTE）;
NORMAL.names = Object.keys（NORMAL）;
ALL.names = [] .concat（REMOTE.names）.concat（NORMAL.names）;

/ **
 *版权所有2013 vtt.js贡献者
 *
 *根据Apache许可证版本2.0（“许可证”）许可;
 *除非符合许可证，否则您不得使用此文件。
 *您可以获得许可证的副本
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *除非适用法律要求或书面同意软件
 *根据许可证分发的“按原样”分发，
 *无明示或暗示的任何形式的担保或条件。
 *请参阅有关权限的特定语言的许可证
 *许可证下的限制。
 * /

/ *  -  *  - 模式：Java; tab-width：2; indent-tabs-mode：nil; c-basic-offset：2  -  *  -  * /
/ * vim：set shiftwidth = 2 tabstop = 2 autoindent cindent expandtab：* /
var _objCreate = Object.create || （function（）{
  函数F（）{}
  返回函数（o）{
    if（arguments.length！== 1）{
      抛出新的错误（'Object.create shim只接受一个参数'）;
    }
    F.prototype = o;
    返回新的F（）;
  };
}）（）;

//从errorData对象创建一个新的ParserError对象。errorData
//对象应具有默认代码和消息属性。默认消息
//属性可以通过传入一个消息参数来覆盖。
//参见下面的ParsingError.Errors可接受的错误。
函数ParsingError（errorData，message）{
  this.name =“ParsingError”;
  this.code = errorData.code;
  this.message = message || errorData.message;
}
ParsingError.prototype = _objCreate（Error.prototype）;
ParsingError.prototype.constructor = ParsingError;

// ParsingError metadata for acceptable pararsingErrors。
ParsingError.Errors = {
  BadSignature：{
    代码：0，
    消息：“格式错误的WebVTT签名”。
  }，
  BadTimeStamp：{
    代码：1，
    消息：“格式错误的时间戳”。
  }
};

//尝试将输入解析为时间戳。
函数parseTimeStamp（input）{

  函数computeSeconds（h，m，s，f）{
    返回（h | 0）* 3600 +（m | 0）* 60 +（s | 0）+（f | 0）/ 1000;
  }

  var m = input.match（/ ^（\ d +）：（\ d {2}）（：\ d {2}）？\。（\ d {3}）/）;
  if（！m）{
    返回null;
  }

  if（m [3]）{
    // Timestamp采用[hours]的形式：[minutes]：[seconds]。[milliseconds]
    返回computeSeconds（m [1]，m [2]，m [3] .replace（“：”，“”），m [4]）;
  } else if（m [1]> 59）{
    // Timestamp采用[hours]的形式：[minutes]。[milliseconds]
    //第一名是59岁以上的小时数。
    返回computeSeconds（m [1]，m [2]，0，m [4]）;
  } else {
    // Timestamp采用[minutes]的形式：[seconds]。[milliseconds]
    返回computeSeconds（0，m [1]，m [2]，m [4]）;
  }
}

//设置对象保存键/值对，并忽略除第一个之外的任何内容
//赋值给一个特定的键。
function Settings（）{
  this.values = _objCreate（null）;
}

Settings.prototype = {
  //只接受任何键的第一个赋值。
  set：function（k，v）{
    if（！this.get（k）&& v！==“”）{
      this.values [k] = v;
    }
  }，
  //返回一个键的值或一个默认值。
  //如果'defaultKey'被传递，那么'dflt'被假定为一个对象
  //一些可能的默认值作为属性，其中'defaultKey'是
  //将要选择的属性的关键字; 否则假定是
  //单个值。
  get：function（k，dflt，defaultKey）{
    if（defaultKey）{
      返回this.has（k）？this.values [k]：dflt [defaultKey];
    }
    返回this.has（k）？this.values [k]：dflt;
  }，
  //检查我们是否有一个键的值。
  has：function（k）{
    在此值中返回k;
  }，
  //接受设置，如果其中一个给定的替代方案。
  alt：function（k，v，a）{
    for（var n = 0; n <a.length; ++ n）{
      if（v === a [n]）{
        this.set（k，v）;
        打破;
      }
    }
  }，
  //接受一个设置，如果它是一个有效的（有符号的）整数。
  integer：function（k，v）{
    if（/^-?\d+$/.test(v））{// integer
      this.set（k，parseInt（v，10））;
    }
  }，
  //接受一个设置，如果它的有效百分比。
  percent：function（k，v）{
    var m
    if（（m = v.match（/ ^（[\ d] {1,3}）（\。[\ d] *）？％$ /）））{
      v = parseFloat（v）;
      if（v> = 0 && v <= 100）{
        this.set（k，v）;
        返回真
      }
    }
    返回假;
  }
};

// Helper函数将输入解析成由“groupDelim”分隔的组，
//将每个组作为由“keyValueDelim”分隔的键/值对进行插值。
函数parseOptions（input，callback，keyValueDelim，groupDelim）{
  var groups = groupDelim？input.split（groupDelim）：[input];
  for（var i in groups）{
    if（typeof groups [i]！==“string”）{
      继续;
    }
    var kv = groups [i] .split（keyValueDelim）;
    if（kv.length！== 2）{
      继续;
    }
    var k = kv [0];
    var v = kv [1];
    回调（k，v）;
  }
}

function parseCue（input，cue，regionList）{
  //记住原始输入，如果我们需要抛出一个错误。
  var oInput = input;
  // 4.1 WebVTT时间戳
  function consumeTimeStamp（）{
    var ts = parseTimeStamp（input）;
    if（ts === null）{
      抛出新的ParsingError（ParsingError.Errors.BadTimeStamp，
                            “格式错误的时间戳：”+ oInput）;
    }
    //从输入中删除时间戳。
    input = input.replace（/ ^ [^ \ sa-zA-Z  - ] + /，“”）;
    返回ts
  }

  // 4.4.2 WebVTT提示设置
  函数consumeCueSettings（input，cue）{
    var settings = new Settings（）;

    parseOptions（input，function（k，v）{
      开关（k）{
      案件“地区”：
        //找到我们用同一个区域ID解析的最后一个区域。
        for（var i = regionList.length  -  1; i> = 0; i--）{
          if（regionList [i] .id === v）{
            settings.set（k，regionList [i] .region）;
            打破;
          }
        }
        打破;
      案例“垂直”：
        settings.alt（k，v，[“rl”，“lr”]）;
        打破;
      案例“行”：
        var vals = v.split（“，”），
            vals0 = vals [0];
        settings.integer（k，vals0）;
        settings.percent（k，vals0）？settings.set（“snapToLines”，false）：null;
        settings.alt（k，vals0，[“auto”]）;
        if（vals.length === 2）{
          settings.alt（“lineAlign”，vals [1]，[“start”，“middle”，“end”]）;
        }
        打破;
      情况“位置”：
        vals = v.split（“，”）;
        settings.percent（k，vals [0]）;
        if（vals.length === 2）{
          settings.alt（“positionAlign”，vals [1]，[“start”，“middle”，“end”]）;
        }
        打破;
      case“size”：
        settings.percent（k，v）;
        打破;
      情况“对齐”：
        settings.alt（k，v，[“start”，“middle”，“end”，“left”，“right”]）;
        打破;
      }
    }，/：/，/ \ s /）;

    //为任何缺少的字段应用默认值。
    cue.region = settings.get（“region”，null）;
    cue.vertical = settings.get（“vertical”，“”）;
    cue.line = settings.get（“line”，“auto”）;
    cue.lineAlign = settings.get（“lineAlign”，“start”）;
    cue.snapToLines = settings.get（“snapToLines”，true）;
    cue.size = settings.get（“size”，100）;
    cue.align = settings.get（“align”，“middle”）;
    cue.position = settings.get（“position”，{
      开始：0，
      左：0，
      中间：50，
      结束：100，
      权利：100
    }，cue.align）;
    cue.positionAlign = settings.get（“positionAlign”，{
      开始：“开始”，
      左：“开始”，
      中间：“中间”
      结束：“结束”，
      右：“结束”
    }，cue.align）;
  }

  function skipWhitespace（）{
    input = input.replace（/ ^ \ s + /，“”）;
  }

  // 4.1 WebVTT提示时序。
  skipWhitespace（）;
  cue.startTime = consumeTimeStamp（）; //（1）收集提示开始时间
  skipWhitespace（）;
  if（input.substr（0，3）！==“ - >”）{//（3）下一个字符必须匹配“ - >”
    抛出新的ParsingError（ParsingError.Errors.BadTimeStamp，
                           “格式错误的时间戳（时间戳必须用' - >'分隔）：”+“
                           oInput）;
  }
  input = input.substr（3）;
  skipWhitespace（）;
  cue.endTime = consumeTimeStamp（）; //（5）收集提示结束时间

  // 4.1 WebVTT提示设置列表。
  skipWhitespace（）;
  consumeCueSettings（input，cue）;
}

var ESCAPE = {
  “＆amp;”：“＆”，
  “＆lt;”：“<”，
  “＆gt;”：“>”，
  “＆lrm;”：“\ u200e”，
  “＆rlm;”：“\ u200f”，
  “＆nbsp;”：“\ u00a0”
};

var TAG_NAME = {
  c：“span”，
  我：“我”，
  b：“b”
  你：“你”
  红宝石：“红宝石”，
  rt：“rt”
  v：“span”，
  朗：“跨”
};

var TAG_ANNOTATION = {
  v：“title”，
  郎：“郎”
};

var NEEDS_PARENT = {
  rt：“ruby”
};

//将内容解析为文档片段。
函数parseContent（window，input）{
  function nextToken（）{
    //检查字符串结尾。
    if（！input）{
      返回null;
    }

    //从输入中消耗'n'个字符。
    功能消耗（结果）{
      input = input.substr（result.length）;
      返回结果;
    }

    var m = input.match（/ ^（[^ <] *）（<[^>] +>？）？/）;
    //如果在下一个标记之前有一些文本，返回它，否则返回
    //标签
    返回消费（m [1]？m [1]：m [2]）;
  }

  // Unescape a string's'。
  function unescape1（e）{
    返回ESCAPE [e];
  }
  函数unescape（s）{
    while（（m = s.match（/＆（amp | lt | gt | lrm | rlm | nbsp）; /）））{
      s = s.replace（m [0]，unescape1）;
    }
    退货
  }

  function shouldAdd（current，element）{
    return！NEEDS_PARENT [element.localName] ||
           NEEDS_PARENT [element.localName] === current.localName;
  }

  //为此标签创建一个元素。
  function createElement（type，annotation）{
    var tagName = TAG_NAME [type];
    if（！tagName）{
      返回null;
    }
    var element = window.document.createElement（tagName）;
    element.localName = tagName;
    var name = TAG_ANNOTATION [type];
    if（name && annotation）{
      element [name] = annotation.trim（）;
    }
    返回元素
  }

  var rootDiv = window.document.createElement（“div”），
      current = rootDiv，
      T，
      tagStack = [];

  while（（t = nextToken（））！== null）{
    if（t [0] ==='<'）{
      if（t [1] ===“/”）{
        //如果结束标签匹配，请返回到父节点。
        if（tagStack.length &&
            tagStack [tagStack.length  -  1] === t.substr（2）.replace（“>”，“”））{
          tagStack.pop（）;
          current = current.parentNode;
        }
        //否则只是忽略结束标签。
        继续;
      }
      var ts = parseTimeStamp（t.substr（1，t.length  -  2））;
      var node;
      if（ts）{
        //时间戳也是引导节点。
        node = document.document.createProcessingInstruction（“timestamp”，ts）;
        current.appendChild（节点）;
        继续;
      }
      var m = t.match（/ ^ <（[^。\ s / 0-9>] +）（\。[^​​ \ s \\>] +）？（[^> \\] +） ？\）> $ /）;
      //如果我们无法解析标签，请跳到下一个标签。
      if（！m）{
        继续;
      }
      //尝试构造一个元素，如果我们不能，忽略该标签。
      node = createElement（m [1]，m [3]）;
      if（！node）{
        继续;
      }
      //确定是否应该根据它的上下文添加标签
      //放在cuetext中。
      if（！shouldAdd（current，node））{
        继续;
      }
      //设置类列表（作为列表，以空格分隔）。
      if（m [2]）{
        node.className = m [2] .substr（1）.replace（'。'，''）;
      }
      //将节点附加到当前节点，并输入新的节点
      //节点。
      tagStack.push（M [1]）;
      current.appendChild（节点）;
      current = node;
      继续;
    }

    //文本节点是叶节点。
    current.appendChild（window.document.createTextNode（UNESCAPE（T）））;
  }

  返回rootDiv;
}

//这是一个有强大的所有Unicode字符的列表
//从右到左的类别。这意味着这些字符是
//肯定写的从右到左。它是通过拉动所有的强力产生的
//从Unicode数据表中的从右到左的字符。那桌子可以
//在http://www.unicode.org/Public/UNIDATA/UnicodeData.txt找到
var strongRTLRanges = [[0x5be，0x5be]，[0x5c0，0x5c0]，[0x5c3，0x5c3]，[0x5c6，0x5c6]，
 [0x5d0，0x5ea]，[0x5f0，0x5f4]，[0x608,0x608]，[0x60b，0x60b]，[0x60d，0x60d]，
 [0x61b，0x61b]，[0x61e，0x64a]，[0x66d，0x66f]，[0x671，0x6d5]，[0x6e5，0x6e6]，
 [0x6ee，0x6ef]，[0x6fa，0x70d]，[0x70f，0x710]，[0x712，0x72f]，[0x74d，0x7a5]，
 [0x7b1，0x7b1]，[0x7c0，0x7ea]，[0x7f4，0x7f5]，[0x7fa，0x7fa]，[0x800,0x815]，
 [0x81a，0x81a]，[0x824,0x824]，[0x828,0x828]，[0x830,0x83e]，[0x840,0x858]，
 [0x85e，0x85e]，[0x8a0，0x8a0]，[0x8a2，0x8ac]，[0x200f，0x200f]，
 [0xfb1d，0xfb1d]，[0xfb1f，0xfb28]，[0xfb2a，0xfb36]，[0xfb38，0xfb3c]，
 [0xfb3e，0xfb3e]，[0xfb40，0xfb41]，[0xfb43，0xfb44]，[0xfb46，0xfbc1]，
 [0xfbd3，0xfd3d]，[0xfd50，0xfd8f]，[0xfd92，0xfdc7]，[0xfdf0，0xfdfc]，
 [0xfe70，0xfe74]，[0xfe76，0xfefc]，[0x10800，0x10805]，[0x10808，0x10808]，
 [0x1080a，0x10835]，[0x10837，0x10838]，[0x1083c，0x1083c]，[0x1083f，0x10855]，
 [0x10857，0x1085f]，[0x10900，0x1091b]，[0x10920,0x10939]，[0x1093f，0x1093f]，
 [0x10980,0x109b7]，[0x109be，0x109bf]，[0x10a00，0x10a00]，[0x10a10，0x10a13]，
 [0x10a15,0x10a17]，[0x10a19,0x10a33]，[0x10a40,0x10a47]，[0x10a50,0x10a58]，
 [0x10a60,0x10a7f]，[0x10b00，0x10b35]，[0x10b40，0x10b55]，[0x10b58,0x10b72]，
 [0x10b78，0x10b7f]，[0x10c00，0x10c48]，[0x1ee00，0x1ee03]，[0x1ee05,0x1ee1f]，
 [0x1ee21，0x1ee22]，[0x1ee24，0x1ee24]，[0x1ee27，0x1ee27]，[0x1ee29，0x1ee32]，
 [0x1ee34，0x1ee37]，[0x1ee39，0x1ee39]，[0x1ee3b，0x1ee3b]，[0x1ee42，0x1ee42]，
 [0x1ee47，0x1ee47]，[0x1ee49，0x1ee49]，[0x1ee4b，0x1ee4b]，[0x1ee4d，0x1ee4f]，
 [0x1ee51,0x1ee52]，[0x1ee54,0x1ee54]，[0x1ee57,0x1ee57]，[0x1ee59,0x1ee59]，
 [0x1ee5b，0x1ee5b]，[0x1ee5d，0x1ee5d]，[0x1ee5f，0x1ee5f]，[0x1ee61，0x1ee62]，
 [0x1ee64，0x1ee64]，[0x1ee67，0x1ee6a]，[0x1ee6c，0x1ee72]，[0x1ee74，0x1ee77]，
 [0x1ee79，0x1ee7c]，[0x1ee7e，0x1ee7e]，[0x1ee80，0x1ee89]，[0x1ee8b，0x1ee9b]，
 [0x1eea1，0x1eea3]，[0x1eea5,0x1eea9]，[0x1eeab，0x1eebb]，[0x10fffd，0x10fffd]];

function isStrongRTLChar（charCode）{
  for（var i = 0; i <strongRTLRanges.length; i ++）{
    var currentRange = strongRTLRanges [i];
    if（charCode> = currentRange [0] && charCode <= currentRange [1]）{
      返回真
    }
  }

  返回假;
}

函数determinBidi（cueDiv）{
  var nodeStack = []，
      text =“”，
      则charCode;

  if（！cueDiv ||！cueDiv.childNodes）{
    返回“ltr”;
  }

  function pushNodes（nodeStack，node）{
    for（var i = node.childNodes.length  -  1; i> = 0; i--）{
      nodeStack.push（node.childNodes [I]）;
    }
  }

  function nextTextNode（nodeStack）{
    if（！nodeStack ||！nodeStack.length）{
      返回null;
    }

    var node = nodeStack.pop（），
        text = node.textContent || node.innerText;
    if（text）{
      // TODO：这应该匹配所有unicode类型B字符（段落
      //分隔符）。参见问题＃115。
      var m = text.match（/^.*（\ n | \ r）/）;
      if（m）{
        nodeStack.length = 0;
        返回m [0];
      }
      返回文字;
    }
    if（node.tagName ===“ruby”）{
      return nextTextNode（nodeStack）;
    }
    if（node.childNodes）{
      pushNodes（nodeStack，node）;
      return nextTextNode（nodeStack）;
    }
  }

  pushNodes（nodeStack，cueDiv）;
  while（（text = nextTextNode（nodeStack）））{
    for（var i = 0; i <text.length; i ++）{
      charCode = text.charCodeAt（i）;
      if（isStrongRTLChar（charCode））{
        返回“rtl”;
      }
    }
  }
  返回“ltr”;
}

函数computeLinePos（cue）{
  if（typeof cue.line ===“number”&&
      （cue.snapToLines ||（cue.line> = 0 && cue.line <= 100）））{
    return cue.line;
  }
  if（！cue.track ||！cue.track.textTrackList ||
      ！cue.track.textTrackList.mediaElement）{
    返回-1;
  }
  var track = cue.track，
      trackList = track.textTrackList，
      count = 0;
  for（var i = 0; i <trackList.length && trackList [i]！== track; i ++）{
    if（trackList [i] .mode ===“显示”）{
      计数++;
    }
  }
  return ++ count * -1;
}

函数StyleBox（）{
}

//将样式应用于div。如果没有div通过，那么它默认为
// div on'this'。
StyleBox.prototype.applyStyles = function（styles，div）{
  div = div || this.div;
  for（var prop in styles）{
    if（styles.hasOwnProperty（prop））{
      div.style [prop] = style [prop];
    }
  }
};

StyleBox.prototype.formatStyle = function（val，unit）{
  return val === 0？0：val + unit;
};

//构造cue（a div）的计算显示状态。放置div
//进入覆盖层应该是一个块级元素（通常是一个div）。
函数CueStyleBox（window，cue，styleOptions）{
  var isIE8 =（/MSIE\s8\.0/).test(navigator.userAgent）;
  var color =“rgba（255，255，255，1）”;
  var backgroundColor =“rgba（0,0,0,0.8）”;

  if（isIE8）{
    color =“rgb（255，255，255）”;
    backgroundColor =“rgb（0，0，0）”;
  }

  StyleBox.call（本）;
  this.cue = cue;

  //将我们的提示的文本解析为基于“cueDiv”的DOM树。这个div会
  //有内联定位，将作为提示背景框。
  this.cueDiv = parseContent（window，cue.text）;
  var styles = {
    颜色：颜色，
    backgroundColor：backgroundColor，
    位置：“亲”，
    左：0，
    权利：0，
    顶部：0，
    底部：0，
    显示：“内联”
  };

  if（！isIE8）{
    styles.writingMode = cue.vertical ===“”？“水平-tb” 的
                                             ：cue.vertical ===“lr”？“垂直-LR”
                                                                     ：“vertical-rl”;
    styles.unicodeBidi =“plaintext”;
  }
  this.applyStyles（styles，this.cueDiv）;

  //创建一个绝对定位的div，用于定位提示
  // div。注意，所有WebVTT提示设置对齐方式都等同于CSS
  //它们的镜像除了CSS中的“中心”之外。
  this.div = window.document.createElement（“div”）;
  styles = {
    textAlign：cue.align ===“middle”？“center”：cue.align，
    font：styleOptions.font，
    whiteSpace：“pre-line”，
    职位：“绝对”
  };

  if（！isIE8）{
    styles.direction = determinBidi（this.cueDiv）;
    styles.writingMode = cue.vertical ===“”？“水平-tb” 的
                                             ：cue.vertical ===“lr”？“垂直-LR”
                                                                     ：“vertical-rl”。
    stylesunicodeBidi =“plaintext”;
  }

  this.applyStyles（样式）;

  this.div.appendChild（this.cueDiv）;

  //计算从视口的参考边缘到文本的距离
  //提示框的位置。参考边缘将在以后解决
  //应用框方向样式。
  var textPos = 0;
  switch（cue.positionAlign）{
  案例“开始”：
    textPos = cue.position;
    打破;
  案件“中间”：
    textPos = cue.position  - （cue.size / 2）;
    打破;
  案件“结束”：
    textPos = cue.position  -  cue.size;
    打破;
  }

  //水平方向 textPos是从左边缘的距离
  //区域到框的左边缘，cue.size是延伸到的距离
  //那边的权利
  if（cue.vertical ===“”）{
    this.applyStyles（{
      left：this.formatStyle（textPos，“％”），
      width：this.formatStyle（cue.size，“％”）
    }）;
  //垂直盒方向; textPos是距离顶部边缘的距离
  //区域到顶部边框，cue.size是高度延伸
  //从那里向下
  } else {
    this.applyStyles（{
      top：this.formatStyle（textPos，“％”），
      height：this.formatStyle（cue.size，“％”）
    }）;
  }

  this.move = function（box）{
    this.applyStyles（{
      top：this.formatStyle（box.top，“px”），
      bottom：this.formatStyle（box.bottom，“px”），
      左：this.formatStyle（box.left，“px”），
      右：this.formatStyle（box.right，“px”），
      height：this.formatStyle（box.height，“px”），
      width：this.formatStyle（box.width，“px”）
    }）;
  };
}
CueStyleBox.prototype = _objCreate（StyleBox.prototype）;
CueStyleBox.prototype.constructor = CueStyleBox;

//表示元素的坐标，方式可以很方便
//计算事物，如它与另一个元素重叠或相交。
//可以用StyleBox或另一个BoxPosition来初始化它。
function BoxPosition（obj）{
  var isIE8 =（/MSIE\s8\.0/).test(navigator.userAgent）;

  //传入一个BoxPosition，我们需要复制它或一个StyleBox
  //被传入，我们需要复制'getBoundingClientRect'的结果
  //因为返回的对象是只读的。所有坐标值都参考
  //到视口原点（左上角）。
  var lh，height，width，top;
  if（obj.div）{
    height = obj.div.offsetHeight;
    width = obj.div.offsetWidth;
    top = obj.div.offsetTop;

    var rects =（rects = obj.div.childNodes）&&（rects = rects [0]）&&
                rects.getClientRects && rects.getClientRects（）;
    obj = obj.div.getBoundingClientRect（）;
    //在某些情况下，outter div将略大于总和
    //内部div的行。这可能是由于某些平台上的粗体文本等。
    //在这种情况下，我们应该得到平均线高度并使用它。这会
    //导致所需的行为。
    lh = rects？Math.max（（rects [0] && rects [0] .height）|| 0，obj.height / rects.length）
               ：0;

  }
  this.left = obj.left;
  this.right = obj.right;
  this.top = obj.top || 最佳;
  this.height = obj.height || 高度;
  this.bottom = obj.bottom || （顶+（obj.height || height））;
  this.width = obj.width || 宽度;
  this.lineHeight = lh！== undefined？lh：obj.lineHeight;

  if（isIE8 &&！this.lineHeight）{
    this.lineHeight = 13;
  }
}

//沿着特定的轴移动框。可选地传递一个数量来移动
//该框。如果没有数量通过，则默认值为该行的行高
//框。
BoxPosition.prototype.move = function（axis，toMove）{
  toMove = toMove！== undefined？toMove：this.lineHeight;
  开关（轴）{
  case“+ x”：
    this.left + = toMove;
    this.right + = toMove;
    打破;
  case“-x”：
    this.left  -  = toMove;
    this.right  -  = toMove;
    打破;
  case“+ y”：
    this.top + = toMove;
    this.bottom + = toMove;
    打破;
  case“-y”：
    this.top  -  = toMove;
    this.bottom  -  = toMove;
    打破;
  }
};

//检查这个框是否与另一个框重叠，b2。
BoxPosition.prototype.overlaps = function（b2）{
  返回this.left <b2.right &&
         this.right> b2.left &&
         this.top <b2.bottom &&
         b.top;
};

//检查框是否与框中的任何其他框重叠。
BoxPosition.prototype.overlapsAny = function（boxes）{
  for（var i = 0; i <boxes.length; i ++）{
    if（this.overlaps（boxes [i]））{
      返回真
    }
  }
  返回假;
};

//检查此框是否在另一个框内。
BoxPosition.prototype.within = function（container）{
  return this.top> = container.top &&
         this.bottom <= container.bottom &&
         this.left> = container.left &&
         this.right <= container.right;
};

//检查此框是否完全在容器内或重叠
//在与轴方向相反的边缘通过。例如，如果“+ x”是
//通过，框在容器的左边缘重叠，然后
//返回true。
BoxPosition.prototype.overlapsOppositeAxis = function（container，axis）{
  开关（轴）{
  case“+ x”：
    return this.left <container.left;
  case“-x”：
    return this.right> container.right;
  case“+ y”：
    return this.top <container.top;
  case“-y”：
    return this.bottom> container.bottom;
  }
};

//找到该框与另一个框重叠的区域的百分比
//框。
BoxPosition.prototype.intersectPercentage = function（b2）{
  var x = Math.max（0，Math.min（this.right，b2.right） -  Math.max（this.left，b2.left）），
      y = Math.max（0，Math.min（this.bottom，b2.bottom） -  Math.max（this.top，b2.top）），
      intersectArea = x * y;
  return intersectArea /（this.height * this.width）;
};

//将此框中的位置转换为CSS兼容位置
//参考容器的位置。这必须要做，因为这样
//框的位置参考视口原点，而CSS
//值与其各自的边缘有关。
BoxPosition.prototype.toCSSCompatValues = function（reference）{
  返回{
    top：this.top  -  reference.top，
    bottom：reference.bottom  -  this.bottom，
    左：this.left  -  reference.left，
    右：reference.right  -  this.right，
    身高：this.height，
    width：this.width
  };
};

//获取一个表示框的位置的对象，没有任何额外的位置。
//可以传递一个StyleBox，HTMLElement或另一个BoxPositon。
BoxPosition.getSimpleBoxPosition = function（obj）{
  var height = obj.div？obj.div.offsetHeight：obj.tagName？obj.offsetHeight：0;
  var width = obj.div？obj.div.offsetWidth：obj.tagName？obj.offsetWidth：0;
  var top = obj.div？obj.div.offsetTop：obj.tagName？obj.offsetTop：0;

  obj = obj.div？obj.div.getBoundingClientRect（）：
                obj.tagName？obj.getBoundingClientRect（）：obj;
  var ret = {
    左：obj.left，
    右：obj.right，
    top：obj.top || 最佳，
    height：obj.height || 高度，
    bottom：obj.bottom || （top +（obj.height || height）），
    width：obj.width || 宽度
  };
  返回
};

//将StyleBox移动到其指定的或者最好的位置。containerBox
//是包含StyleBox的框，例如div。boxPositions是
// styleBox不能重叠的其他框的列表。
函数moveBoxToLinePosition（window，styleBox，containerBox，boxPositions）{

  //找到视频上的提示框b的最佳位置。轴参数
  //是轴的列表，它的顺序将移动框。例如：
  //传递[“+ x”，“-x”]将首先沿着x轴的正移动框
  //方向 如果它没有找到一个很好的位置，那么它将会移动
  //沿着x轴在负方向。
  function findBestPosition（b，axis）{
    var bestPosition，
        specifiedPosition = new BoxPosition（b），
        百分比= 1; //最高可能，所以我们得到的第一件事情是更好的。

    for（var i = 0; i <axis.length; i ++）{
      while（b.overlapsOppositeAxis（containerBox，axis [i]）||
             （b.within（containerBox）&& b.overlapsAny（boxPositions）））{
        b.move（轴[1]）;
      }
      //我们发现一个地方，我们不重叠任何东西。这是我们的
      //最佳位置
      if（b.within（containerBox））{
        返回b
      }
      var p = b.intersectPercentage（containerBox）;
      //如果我们在容器盒外面，那么我们最后一次尝试
      //然后记住这个位置是最好的位置。
      if（percentage> p）{
        bestPosition = new BoxPosition（b）;
        百分比= p;
      }
      //将框位置重置为指定位置。
      b = new BoxPosition（specifiedPosition）;
    }
    返回bestPosition || specifiedPosition;
  }

  var boxPosition = new BoxPosition（styleBox），
      cue = styleBox.cue，
      linePos = computeLinePos（cue），
      axis = [];

  //如果我们有一个行号来对齐提示。
  if（cue.snapToLines）{
    var大小;
    开关（cue.vertical）{
    案件 ””：
      axis = [“+ y”，“-y”];
      size =“height”;
      打破;
    case“rl”：
      axis = [“+ x”，“-x”];
      size =“width”;
      打破;
    case“lr”：
      axis = [“-x”，“+ x”];
      size =“width”;
      打破;
    }

    var step = boxPosition.lineHeight，
        position = step * Math.round（linePos），
        maxPosition = containerBox [size] + step，
        initialAxis = axis [0];

    //如果指定的初始位置大于最大位置
    //将盒子夹到框中需要的步骤数量
    //达到最大位置。
    if（Math.abs（position）> maxPosition）{
      position = position <0？-1：1;
      position * = Math.ceil（maxPosition / step）* step;
    }

    //如果计算的行位置返回为负，则行号为
    //相对于视频的底部，而不是顶部。所以我们
    //需要增加我们的初始位置的长度或宽度
    //视频，取决于写入方向，并反转我们的轴方向。
    if（linePos <0）{
      位置+ = cue.vertical ===“”？containerBox.height：containerBox.width;
      axis = axis.reverse（）;
    }

    //将框移动到指定的位置。这可能不是最好的
    //位置。
    boxPosition.move（initialAxis，position）;

  } else {
    //如果我们有线索值的百分比。
    var calculatedPercentage =（boxPosition.lineHeight / containerBox.height）* 100;

    switch（cue.lineAlign）{
    案件“中间”：
      linePos  -  =（calculatedPercentage / 2）;
      打破;
    案件“结束”：
      linePos  -  = calculatedPercentage;
      打破;
    }

    //将初始行位置应用于提示框。
    开关（cue.vertical）{
    案件 ””：
      styleBox.applyStyles（{
        top：styleBox.formatStyle（linePos，“％”）
      }）;
      打破;
    case“rl”：
      styleBox.applyStyles（{
        left：styleBox.formatStyle（linePos，“％”）
      }）;
      打破;
    case“lr”：
      styleBox.applyStyles（{
        right：styleBox.formatStyle（linePos，“％”）
      }）;
      打破;
    }

    axis = [“+ y”，“-x”，“+ x”，“-y”];

    //应用指定的定位后，再次获取框位置
    //到它
    boxPosition = new BoxPosition（styleBox）;
  }

  var bestPosition = findBestPosition（boxPosition，axis）;
  styleBox.move（bestPosition.toCSSCompatValues（containerBox））;
}

功能WebVTT $ 1（）{
  // 没有
}

//帮助器允许字符串被解码，而不是默认的二进制utf8数据。
WebVTT $ 1.StringDecoder = function（）{
  返回{
    decode：function（data）{
      if（！data）{
        返回“”;
      }
      if（typeof data！==“string”）{
        抛出新的错误（“错误 - 预期的字符串数据”）;
      }
      return decodeURIComponent（encodeURIComponent（data））;
    }
  };
};

WebVTT $ 1.convertCueToDOMTree = function（window，cuetext）{
  if（！window ||！cuetext）{
    返回null;
  }
  return parseContent（window，cuetext）;
};

var FONT_SIZE_PERCENT = 0.05;
var FONT_STYLE =“sans-serif”;
var CUE_BACKGROUND_PADDING =“1.5％”;

//在传递给它的线索和区域上运行处理模型。
// @param overlay所计算的线索的块级元素（通常为div）
//和区域将被放置。
WebVTT $ 1.processCues = function（window，cues，overlay）{
  if（！window ||！cues ||！overlay）{
    返回null;
  }

  //删除所有以前的孩子。
  while（overlay.firstChild）{
    overlay.removeChild（overlay.firstChild）;
  }

  var paddedOverlay = window.document.createElement（“div”）;
  paddedOverlay.style.position =“absolute”;
  paddedOverlay.style.left =“0”;
  paddedOverlay.style.right =“0”;
  paddedOverlay.style.top =“0”;
  paddedOverlay.style.bottom =“0”;
  paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
  overlay.appendChild（paddedOverlay）;

  //确定是否需要计算提示的显示状态。这可以
  //如果一个提示的状态自上次计算以来已经更改，或者是这样
  //如果尚未计算出来
  函数shouldCompute（cues）{
    for（var i = 0; i <cues.length; i ++）{
      if（cues [i] .hasBeenReset ||！cues [i] .displayState）{
        返回真
      }
    }
    返回假;
  }

  //我们不需要重新计算提示的显示状态。只需重用它们。
  if（！shouldCompute（cues））{
    for（var i = 0; i <cues.length; i ++）{
      paddedOverlay.appendChild（线索[I] .displayState）;
    }
    返回;
  }

  var boxPositions = []，
      containerBox = BoxPosition.getSimpleBoxPosition（paddedOverlay），
      fontSize = Math.round（containerBox.height * FONT_SIZE_PERCENT * 100）/ 100;
  var styleOptions = {
    font：fontSize +“px”+ FONT_STYLE
  };

  （function（）{
    var styleBox，cue;

    for（var i = 0; i <cues.length; i ++）{
      cue = cues [i];

      //计算cue div的初始位置和样式。
      styleBox = new CueStyleBox（window，cue，styleOptions）;
      paddedOverlay.appendChild（styleBox.div）;

      //将提示div移动到正确的行位置。
      moveBoxToLinePosition（window，styleBox，containerBox，boxPositions）;

      //记住计算的div，以便我们以后不需要重新计算
      //如果我们还没有
      cue.displayState = styleBox.div;

      boxPositions.push（BoxPosition.getSimpleBoxPosition（styleBox））;
    }
  }）（）;
};

WebVTT $ 1.Parser = function（window，vttjs，decoder）{
  if（！decoder）{
    decoder = vttjs;
    vttjs = {};
  }
  if（！vttjs）{
    vttjs = {};
  }

  this.window = window;
  this.vttjs = vttjs;
  this.state =“INITIAL”;
  this.buffer =“”;
  this.decoder = decoder || 新的TextDecoder（“utf8”）;
  this.regionList = [];
};

WebVTT $ 1.Parser.prototype = {
  //如果错误是ParsingError，然后将其报告给消费者
  //可能 如果它不是一个ParsingError，那么就像普通的那样抛出它。
  reportOrThrowError：function（e）{
    if（e instanceof ParsingError）{
      this.onparsingerror && this.onparsingerror（e）;
    } else {
      扔e
    }
  }，
  parse：function（data）{
    var self = this;

    //如果没有数据，那么我们不会解码它，但只会尝试解析
    //任何在缓冲区中已经存在 这可能发生在情况，因为
    //调用flush（）时的例子。
    if（data）{
      //尝试解码我​​们收到的数据。
      self.buffer + = self.decoder.decode（data，{stream：true}）;
    }

    function collectNextLine（）{
      var buffer = self.buffer;
      var pos = 0;
      while（pos <buffer.length && buffer [pos]！=='\ r'&& buffer [pos]！=='\ n'）{
        ++ POS;
      }
      var line = buffer.substr（0，pos）;
      //提前缓冲缓冲区，以防我们失败。
      if（buffer [pos] ==='\ r'）{
        ++ POS;
      }
      if（buffer [pos] ==='\ n'）{
        ++ POS;
      }
      self.buffer = buffer.substr（pos）;
      回程线
    }

    // 3.4 WebVTT区域和WebVTT区域设置语法
    function parseRegion（input）{
      var settings = new Settings（）;

      parseOptions（input，function（k，v）{
        开关（k）{
        case“id”：
          settings.set（k，v）;
          打破;
        case“width”：
          settings.percent（k，v）;
          打破;
        案例“线”：
          settings.integer（k，v）;
          打破;
        case“regionanchor”：
        案例“viewportanchor”：
          var xy = v.split（'，'）;
          if（xy.length！== 2）{
            打破;
          }
          //我们必须确保x和y解析，所以使用一个临时的
          //设置对象在这里。
          var anchor = new Settings（）;
          anchor.percent（“x”，xy [0]）;
          anchor.percent（“y”，xy [1]）;
          if（！anchor.has（“x”）||！anchor.has（“y”））{
            打破;
          }
          settings.set（k +“X”，anchor.get（“x”））;
          settings.set（k +“Y”，anchor.get（“y”））;
          打破;
        案例“滚动”：
          settings.alt（k，v，[“up”]）;
          打破;
        }
      }，/ = /，/ \ s /）;

      //创建区域，使用不是没有的值的默认值
      //指定。
      if（settings.has（“id”））{
        var region = new（self.vttjs.VTTRegion || self.window.VTTRegion）（）;
        region.width = settings.get（“width”，100）;
        region.lines = settings.get（“lines”，3）;
        region.regionAnchorX = settings.get（“regionanchorX”，0）;
        region.regionAnchorY = settings.get（“regionanchorY”，100）;
        region.viewportAnchorX = settings.get（“viewportanchorX”，0）;
        region.viewportAnchorY = settings.get（“viewportanchorY”，100）;
        region.scroll = settings.get（“scroll”，“”）;
        //注册该地区。
        self.onregion && self.onregion（region）;
        //记住VTTRegion以备以后，我们解析任何VTTCues
        //引用它
        self.regionList.push（{
          id：settings.get（“id”），
          区域：区域
        }）;
      }
    }

    // draft-pantos-http-live-streaming-20
    // https://tools.ietf.org/html/draft-pantos-http-live-streaming-20#section-3.5
    // 3.5 WebVTT
    函数parseTimestampMap（input）{
      var settings = new Settings（）;

      parseOptions（input，function（k，v）{
        开关（k）{
        情况“MPEGT”：
          settings.integer（k +'S'，v）;
          打破;
        案例“LOCA”：
          settings.set（k +'L'，parseTimeStamp（v））;
          打破;
        }
      }，/ [^ \ d]：/，/，/）;

      self.ontimestampmap && self.ontimestampmap（{
        “MPEGTS”：settings.get（“MPEGTS”），
        “LOCAL”：settings.get（“LOCAL”）
      }）;
    }

    // 3.2 WebVTT元数据头文件语法
    函数parseHeader（input）{
      if（input.match（/ X-TIMESTAMP-MAP /））{
        //此行包含HLS X-TIMESTAMP-MAP元数据
        parseOptions（input，function（k，v）{
          开关（k）{
          情况“X-TIMESTAMP-MAP”：
            parseTimestampMap（V）;
            打破;
          }
        }，/ = /）;
      } else {
        parseOptions（input，function（k，v）{
          开关（k）{
          案例“地区”：
            // 3.3 WebVTT区域元数据标题语法
            parseRegion（V）;
            打破;
          }
        }，/：/）;
      }

    }

    // 5.1 WebVTT文件解析
    尝试{
      var线;
      200新新新新旗新新旗新新旗旗新1992 200人200人1992 ChanolEC X-
        //我们无法开始解析，直到我们有第一行。
        if（！/ \ r \ n | \ n / .test（self.buffer））{
          回来
        }

        line = collectNextLine（）;

        var m = line.match（/ ^ WEBVTT（[\ t]。*）？$ /）;
        if（！m ||！m [0]）{
          抛出新的ParsingError（ParsingError.Errors.BadSignature）;
        }

        self.state =“HEADER”;
      }

      var alreadyCollectedLine = false;
      while（self.buffer）{
        //我们无法解析一行，直到我们有完整的行。
        if（！/ \ r \ n | \ n / .test（self.buffer））{
          回来
        }

        if（！alreadyCollectedLine）{
          line = collectNextLine（）;
        } else {
          alreadyCollectedLine = false;
        }

        switch（self.state）{
        案例“HEADER”：
          // 13-18  - 允许在WEBVTT行下的标题（元数据）。
          if（/:/.test(line））{
            parseHeader（线）;
          } else if（！line）{
            //空行终止标题并启动正文（提示）。
            self.state =“ID”;
          }
          继续;
        情况“注”：
          //忽略NOTE块。
          if（！line）{
            self.state =“ID”;
          }
          继续;
        病例“ID”：
          //检查NOTE块的开始。
          if（/ ^ NOTE （$ | [\ t]）/。test（line））{
            self.state =“注”;
            打破;
          }
          // 19-29  - 允许任意数量的行终止符，然后初始化新的提示值。
          if（！line）{
            继续;
          }
          self.cue = new（self.vttjs.VTTCue || self.window.VTTCue）（0，0，“”）;
          self.state =“CUE”;
          // 30-39  - 检查自行是否包含可选的标识符或时序数据。
          if（line.indexOf（“ - >”）=== -1）{
            self.cue.id = line;
            继续;
          }
          //处理行作为提示的开始。
          / *落在* /
        情况“CUE”：
          // 40  - 收集提示时间和设置。
          尝试{
            parseCue（line，self.cue，self.regionList）;
          } catch（e）{
            self.reportOrThrowError（E）;
            //如果出现错误，忽略其余的提示。
            self.cue = null;
            self.state =“BADCUE”;
            继续;
          }
          self.state =“CUETEXT”;
          继续;
        情况“CUETEXT”：
          var hasSubstring = line.indexOf（“ - >”）！== -1;
          // 34  - 如果我们有空行，那么报告提示。
          // 35  - 如果我们有特殊的子字符串' - >'报告提示，
          //但是不要收集行，因为我们需要处理当前的行
          //一个作为一个新的提示。
          if（！line || hasSubstring &&（alreadyCollectedLine = true））{
            //我们完成了解析自我提示。
            self.oncue && self.oncue（self.cue）;
            self.cue = null;
            self.state =“ID”;
            继续;
          }
          if（self.cue.text）{
            self.cue.text + =“\ n”;
          }
          self.cue.text + = line;
          继续;
        case“BADCUE”：// BADCUE
          // 54-62  - 收集并丢弃剩余的提示。
          if（！line）{
            self.state =“ID”;
          }
          继续;
        }
      }
    } catch（e）{
      self.reportOrThrowError（E）;

      //如果我们正在解析一个提示，请报告我们拥有的内容。
      if（self.state ===“CUETEXT”&& self.cue && self.oncue）{
        self.oncue（self.cue）;
      }
      self.cue = null;
      //如果标题没有正确解析，请输入BADWEBVTT状态否则
      //发生另一个异常，因此进入BADCUE状态。
      self.state = self.state ===“INITIAL”？“BADWEBVTT”：“BADCUE”;
    }
    回来
  }，
  flush：function（）{
    var self = this;
    尝试{
      //完成解码流。
      X- 20045 X- 20045 X- 20045 X- 20045 X- 20045 X- 20045 X- 20045 X- 20045
      //合成当前提示或区域的结尾。
      if（self.cue || self.state ===“HEADER”）{
        self.buffer + =“\ n \ n”;
        self.parse（）;
      }
      //如果我们已经刷新，解析，然后我们仍然处于INITIAL状态
      //这意味着我们没有足够的流来解析第一个
      //行。
      200新新新新旗新新旗新新旗旗新1992 200人200人1992 ChanolEC X-
        抛出新的ParsingError（ParsingError.Errors.BadSignature）;
      }
    } catch（e）{
      self.reportOrThrowError（E）;
    }
    self.onflush && self.onflush（）;
    回来
  }
};

var vtt $ 1 = WebVTT $ 1;

/ **
 *版权所有2013 vtt.js贡献者
 *
 *根据Apache许可证版本2.0（“许可证”）许可;
 *除非符合许可证，否则您不得使用此文件。
 *您可以获得许可证的副本
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *除非适用法律要求或书面同意软件
 *根据许可证分发的“按原样”分发，
 *无明示或暗示的任何形式的担保或条件。
 *请参阅有关权限的特定语言的许可证
 *许可证下的限制。
 * /

var autoKeyword =“auto”;
var directionSetting = {
  “”：真的，
  “lr”：真的，
  “rl”：true
};
var alignSetting = {
  “开始”：真的，
  “中间”：真，
  “结束”：真的，
  “左”：真，
  “对”：真
};

function findDirectionSetting（value）{
  if（typeof value！==“string”）{
    返回假;
  }
  var dir = directionSetting [value.toLowerCase（）];
  返回目录？value.toLowerCase（）：false;
}

function findAlignSetting（value）{
  if（typeof value！==“string”）{
    返回假;
  }
  var align = alignSetting [value.toLowerCase（）];
  返回对齐？value.toLowerCase（）：false;
}

函数扩展$ 1（obj）{
  var i = 1;
  for（; i <arguments.length; i ++）{
    var cobj = arguments [i];
    for（var p in cobj）{
      obj [p] = cobj [p];
    }
  }

  返回obj;
}

函数VTTCue（startTime，endTime，text）{
  var cue = this;
  var isIE8 =（/MSIE\s8\.0/).test(navigator.userAgent）;
  var baseObj = {};

  if（isIE8）{
    cue = document.createElement（'custom'）;
  } else {
    baseObj.enumerable = true;
  }

  / **
   * Shim实现具体属性。这些属性不在
   *规格
   * /

  //让我们知道VTTCue的数据何时以我们需要的方式发生变化
  //重新计算其显示状态。这使我们可以计算其显示状态
  //懒惰
  cue.hasBeenReset = false;

  / **
   * VTTCue和TextTrackCue属性
   * http://dev.w3.org/html5/webvtt/#vttcue-interface
   * /

  var _id =“”;
  var _pauseOnExit = false;
  var _startTime = startTime;
  var _endTime = endTime;
  var _text = text;
  var _region = null;
  var _vertical =“”;
  var _snapToLines = true;
  var _line =“auto”;
  var _lineAlign =“start”;
  var _position = 50;
  var _positionAlign =“middle”;
  var _size = 50;
  var _align =“middle”;

  Object.defineProperty（线索，
    “id”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_id;
      }，
      set：function（value）{
        _id =“”+ value;
      }
    }））;

  Object.defineProperty（线索，
    “pauseOnExit”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_pauseOnExit;
      }，
      set：function（value）{
        _pauseOnExit = !! value;
      }
    }））;

  Object.defineProperty（线索，
    “startTime”，扩展$ 1（{}，baseObj，{
      get：function（）{
        return _startTime;
      }，
      set：function（value）{
        if（typeof value！==“number”）{
          抛出新的TypeError（“开始时间必须设置为一个数字”）;
        }
        _startTime = value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “endTime”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_endTime;
      }，
      set：function（value）{
        if（typeof value！==“number”）{
          抛出新的TypeError（“结束时间必须设置为一个数字”）;
        }
        _endTime = value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “text”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_text;
      }，
      set：function（value）{
        _text =“”+ value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “region”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_区域
      }，
      set：function（value）{
        _region = value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “vertical”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_vertical;
      }，
      set：function（value）{
        var setting = findDirectionSetting（value）;
        //必须检查是否为false，因为设置为空字符串。
        if（setting === false）{
          200新新新新200新200新新旗新新200新新200新新200新200新新200新200新新200新200新200新新200新200新新200新新200新新200新新200新新新200新新200新新200新新新200新新旗新新款旗新旗新新
        }
        _vertical =设置;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “snapToLines”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_snapToLines;
      }，
      set：function（value）{
        _snapToLines = !! value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    新新新新新旗新新新新新新新新旗新新旗新新新新旗新新旗新新旗新新新新新新新新新名：
      get：function（）{
        返回_line;
      }，
      set：function（value）{
        if（typeof value！==“number”&& value！== autoKeyword）{
          抛出新的SyntaxError（“指定了无效的数字或非法字符串。”）;
        }
        _line = value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “lineAlign”，扩展$ 1（{}，baseObj，{
      get：function（）{
        return _lineAlign;
      }，
      set：function（value）{
        var setting = findAlignSetting（value）;
        if（！setting）{
          200新新新新200新200新新旗新新200新新200新新200新200新新200新200新新200新200新200新新200新200新新200新新200新新200新新200新新新200新新200新新200新新新200新新旗新新款旗新旗新新
        }
        _lineAlign =设置
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “position”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_position;
      }，
      set：function（value）{
        if（value <0 || value> 100）{
          抛出新的错误（“位置必须在0到100之间”）;
        }
        _position = value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “positionAlign”，扩展$ 1（{}，baseObj，{
      get：function（）{
        return _positionAlign;
      }，
      set：function（value）{
        var setting = findAlignSetting（value）;
        if（！setting）{
          200新新新新200新200新新旗新新200新新200新新200新200新新200新200新新200新200新200新新200新200新新200新新200新新200新新200新新新200新新200新新200新新新200新新旗新新款旗新旗新新
        }
        _positionAlign =设置;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “size”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_size;
      }，
      set：function（value）{
        if（value <0 || value> 100）{
          抛出新的错误（“大小必须在0到100之间”）;
        }
        _size = value;
        this.hasBeenReset = true;
      }
    }））;

  Object.defineProperty（线索，
    “align”，扩展$ 1（{}，baseObj，{
      get：function（）{
        返回_align
      }，
      set：function（value）{
        var setting = findAlignSetting（value）;
        if（！setting）{
          200新新新新200新200新新旗新新200新新200新新200新200新新200新200新新200新200新200新新200新200新新200新新200新新200新新200新新新200新新200新新200新新新200新新旗新新款旗新旗新新
        }
        _align =设置
        this.hasBeenReset = true;
      }
    }））;

  / **
   *其他<track>规范定义的属性
   * /

  // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
  cue.displayState = undefined;

  if（isIE8）{
    返回提示
  }
}

/ **
 * VTTCue方法
 * /

VTTCue.prototype.getCueAsHTML = function（）{
  //假设WebVTT.convertCueToDOMTree是全局的。
  返回WebVTT.convertCueToDOMTree（window，this.text）;
};

var vttcue = VTTCue;

/ **
 *版权所有2013 vtt.js贡献者
 *
 *根据Apache许可证版本2.0（“许可证”）许可;
 *除非符合许可证，否则您不得使用此文件。
 *您可以获得许可证的副本
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *除非适用法律要求或书面同意软件
 *根据许可证分发的“按原样”分发，
 *无明示或暗示的任何形式的担保或条件。
 *请参阅有关权限的特定语言的许可证
 *许可证下的限制。
 * /

var scrollSetting = {
  “”：真的，
  “上”：真
};

function findScrollSetting（value）{
  if（typeof value！==“string”）{
    返回假;
  }
  var scroll = scrollSetting [value.toLowerCase（）];
  返回滚动？value.toLowerCase（）：false;
}

函数isValidPercentValue（value）{
  return typeof value ===“number”&&（value> = 0 && value <= 100）;
}

// VTTRegion shim http://dev.w3.org/html5/webvtt/#vttregion-interface
函数VTTRegion（）{
  var _width = 100;
  var _lines = 3;
  var _regionAnchorX = 0;
  var _regionAnchorY = 100;
  var _viewportAnchorX = 0;
  var _viewportAnchorY = 100;
  var _scroll =“”;

  Object.defineProperties（this，{
    “width”：{
      可枚举：真，
      get：function（）{
        返回_width;
      }，
      set：function（value）{
        if（！isValidPercentValue（value））{
          抛出新的错误（“宽度必须在0到100之间”）;
        }
        _width = value;
      }
    }，
    “lines”：{
      可枚举：真，
      get：function（）{
        返回_lines;
      }，
      set：function（value）{
        if（typeof value！==“number”）{
          抛出新的TypeError（“Lines必须设置为一个数字”）;
        }
        _lines = value;
      }
    }，
    “regionAnchorY”：{
      可枚举：真，
      get：function（）{
        返回_regionAnchorY;
      }，
      set：function（value）{
        if（！isValidPercentValue（value））{
          抛出新的错误（“RegionAnchorX必须在0到100之间”）;
        }
        _regionAnchorY = value;
      }
    }，
    “regionAnchorX”：{
      可枚举：真，
      get：function（）{
        返回_regionAnchorX;
      }，
      set：function（value）{
        if（！isValidPercentValue（value））{
          抛出新错误（“RegionAnchorY必须在0到100之间”）;
        }
        _regionAnchorX = value;
      }
    }，
    “viewportAnchorY”：{
      可枚举：真，
      get：function（）{
        返回_viewportAnchorY;
      }，
      set：function（value）{
        if（！isValidPercentValue（value））{
          抛出新的错误（“ViewportAnchorY必须在0到100之间”）;
        }
        _viewportAnchorY = value;
      }
    }，
    “viewportAnchorX”：{
      可枚举：真，
      get：function（）{
        返回_viewportAnchorX;
      }，
      set：function（value）{
        if（！isValidPercentValue（value））{
          抛出新的错误（“ViewportAnchorX必须在0到100之间”）;
        }
        _viewportAnchorX = value;
      }
    }，
    “scroll”：{
      可枚举：真，
      get：function（）{
        返回_scroll;
      }，
      set：function（value）{
        var setting = findScrollSetting（value）;
        //必须检查false，因为空字符串是合法的值。
        if（setting === false）{
          200新新新新200新200新新旗新新200新新200新新200新200新新200新200新新200新200新200新新200新200新新200新新200新新200新新200新新新200新新200新新200新新新200新新旗新新款旗新旗新新
        }
        _scroll =设置;
      }
    }
  }）;
}

var vttregion = VTTRegion;

var browserIndex = createCommonjsModule（function（module）{
/ **
 *版权所有2013 vtt.js贡献者
 *
 *根据Apache许可证版本2.0（“许可证”）许可;
 *除非符合许可证，否则您不得使用此文件。
 *您可以获得许可证的副本
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *除非适用法律要求或书面同意软件
 *根据许可证分发的“按原样”分发，
 *无明示或暗示的任何形式的担保或条件。
 *请参阅有关权限的特定语言的许可证
 *许可证下的限制。
 * /

//节点的默认导出。导出扩展版本的VTTCue和
// VTTRegion in Node，因为我们可能希望能够转换回来
// JSON之间。如果我们不这样做，那我们就没有那么大的交易了
//关闭浏览器



var vttjs = module.exports = {
  WebVTT：vtt $ 1，
  VTTCue：vttcue，
  VTTRegion：vttregion
};

window_1.vttjs = vttjs;
window_1.WebVTT = vttjs.WebVTT;

var cueShim = vttjs.VTTCue;
var regionShim = vttjs.VTTRegion;
var nativeVTTCue = window_1.VTTCue;
var nativeVTTRegion = window_1.VTTRegion;

vttjs.shim = function（）{
  window_1.VTTCue = cueShim;
  window_1.VTTRegion = regionShim;
};

vttjs.restore = function（）{
  window_1.VTTCue = nativeVTTCue;
  window_1.VTTRegion = nativeVTTRegion;
};

if（！window_1.VTTCue）{
  vttjs.shim（）;
}
}）;

/ **
 * @file tech.js
 * /

/ **
 *一个包含如下结构的对象：`{src：'url'，键入：'mimetype'}`或字符串
 *只包含src url。
 * *`var SourceObject = {src：'http://ex.com/video.mp4'，键入：'video / mp4'};`
   *`var SourceString ='http：//example.com/some-video.mp4';`
 *
 * @typedef {Object | string} Tech〜SourceObject
 *
 * @property {string} src
 *来源的url
 *
 * @property {string}类型
 *源的MIME类型
 * /

/ **
 * {@link Tech}用于创建新的{@link TextTrack}的功能。
 *
 * @私人的
 *
 * @param {Tech} self
 * Tech类的一个实例。
 *
 * @param {string}种
 * TextTrack类（字幕，字幕，说明，章节或元数据）
 *
 * @param {string} [label]
 *标签识别文字轨道
 *
 * @param {string} [language]
 *两个字母的语言缩写
 *
 * @param {Object} [options = {}]
 *具有附加文本轨道选项的对象
 *
 * @return {TextTrack}
 *创建的文本轨道。
 * /
函数createTrackHelper（self，kind，label，language）{
  var options = arguments.length> 4 && arguments [4]！== undefined？参数[4]：{};

  var tracks = self.textTracks（）;

  options.kind = kind;

  if（label）{
    options.label = label;
  }
  if（language）{
    options.language = language;
  }
  options.tech = self;

  var track = new ALL.text.TrackClass（options）;

  tracks.addTrack（轨道）;

  返回轨道
}

/ **
 *这是媒体播放技术控制器的基础，如
 * {@link Flash}和{@link HTML5}
 *
 * @extends组件
 * /

var Tech = function（_Component）{
  继承（Tech，_Component）;

  / **
   *创建此Tech的实例。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   *
   * @param {Component〜ReadyCallback}就绪
   *当“HTML5”技术准备就绪时调用回调函数。
   * /
  function Tech（）{
    var options = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
    var ready = arguments.length> 1 && arguments [1]！== undefined？arguments [1]：function（）{};
    classCallCheck（this，Tech）;

    //我们不希望技术自动报告用户活动。
    //这是在addControlsListeners中手动完成的
    options.reportTouchActivity = false;

    //跟踪当前来源是否已经播放
    //实现一个非常有限的播放（）
    var _this = possibleConstructorReturn（this，_Component.call（this，null，options，ready））;

    _this.hasStarted_ = false;
    _this.on（'playing'，function（）{
      this.hasStarted_ = true;
    }）;
    _this.on（'loadstart'，function（）{
      this.hasStarted_ = false;
    }）;

    ALL.names.forEach（function（name）{
      var props = ALL [name];

      if（options && options [props.getterName]）{
        _this [props.privateName] = options [props.getterName];
      }
    }）;

    //手动跟踪浏览器/ Flash播放器不报告的进度。
    if（！_this.featuresProgressEvents）{
      _this.manualProgressOn（）;
    }

    //手动跟踪浏览器/ Flash播放器不报告的时间更新。
    if（！_this.featuresTimeupdateEvents）{
      _this.manualTimeUpdatesOn（）;
    }

    ['Text'，'Audio'，'Video']。forEach（function（track）{
      if（options ['native'+ track +'Tracks'] === false）{
        _this ['featuresNative'+ track +'Tracks'] = false;
      }
    }）;

    if（options.nativeCaptions === false || options.nativeTextTracks === false）{
      _this.featuresNativeTextTracks = false;
    } else if（options.nativeCaptions === true || options.nativeTextTracks === true）{
      _this.featuresNativeTextTracks = true;
    }

    if（！_this.featuresNativeTextTracks）{
      _this.emulateTextTracks（）;
    }

    _this.autoRemoteTextTracks_ = new ALL.text.ListClass（）;

    _this.initTrackListeners（）;

    //仅当不使用本地控件时才打开组件点击事件
    if（！options.nativeControlsForTouch）{
      _this.emitTapEvents（）;
    }

    if（_this.constructor）{
      _this.name_ = _this.constructor.name || 未知技术
    }
    返回_this;
  }

  / *不支持的事件类型的回退
  ================================================== *

  / **
   *为本机不支持的浏览器对“进度”事件进行扩充。
   *
   * @see {@link Tech＃trackProgress}
   * /


  Tech.prototype.manualProgressOn = function manualProgressOn（）{
    this.on（'durationchange'，this.onDurationChange）;

    this.manualProgress = true;

    //当进程开始加载时触发进度观察
    this.one（'ready'，this.trackProgress）;
  };

  / **
   *关闭在其中创建的进度事件的polyfill
   * {@link Tech＃manualProgressOn}
   * /


  Tech.prototype.manualProgressOff = function manualProgressOff（）{
    this.manualProgress = false;
    this.stopTrackingProgress（）;

    this.off（'durationchange'，this.onDurationChange）;
  };

  / **
   *当缓冲百分比变化时，这用于触发“进度”事件。它
   *设置一个间隔函数，每500毫秒将被调用以检查是否
   *缓冲区结束百分比已更改。
   *
   *>此功能由{@link Tech＃manualProgressOn}调用
   *
   * @param {EventTarget〜Event}事件
   *导致运行的“ready”事件。
   *
   * @listens Tech＃准备好了
   * @fires Tech＃进度
   * /


  Tech.prototype.trackProgress = function trackProgress（event）{
    this.stopTrackingProgress（）;
    this.progressInterval = this.setInterval（bind（this，function（）{
      //除非缓冲量大于上次，否则不要触发

      var numBufferedPercent = this.bufferedPercent（）;

      if（this.bufferedPercent_！== numBufferedPercent）{
        / **
         *参见{@link Player＃progress}
         *
         * @event技术＃进度
         * @type {EventTarget〜Event}
         * /
        this.trigger（ '进步'）;
      }

      this.bufferedPercent_ = numBufferedPercent;

      if（numBufferedPercent === 1）{
        this.stopTrackingProgress（）;
      }
    }），500）;
  };

  / **
   *通过调用在“durationchange”事件中更新内部持续时间
   * {@link技术＃持续时间}。
   *
   * @param {EventTarget〜Event}事件
   *导致运行的“durationchange”事件。
   *
   * @listens Tech＃durationchange
   * /


  Tech.prototype.onDurationChange = function onDurationChange（event）{
    this.duration_ = this.duration（）;
  };

  / **
   *获取并创建一个“TimeRange”对象进行缓冲。
   *
   * @return {TimeRange}
   *创建的时间范围对象。
   * /


  Tech.prototype.buffered = function buffered（）{
    返回createTimeRanges（0，0）;
  };

  / **
   *获取当前缓存的当前视频的百分比。
   *
   * @return {number}
   *从0到1的数字，表示的小数百分比
   *缓冲的视频。
   *
   * /


  Tech.prototype.bufferedPercent = function bufferedPercent $$ 1（）{
    return bufferedPercent（this.buffered（），this.duration_）;
  };

  / **
   *关闭在其中创建的进度事件的polyfill
   * {@link Tech＃manualProgressOn}
   *通过清除设置的间隔来停止手动跟踪进度事件
   * {@link Tech＃trackProgress}。
   * /


  Tech.prototype.stopTrackingProgress = function stopTrackingProgress（）{
    this.clearInterval（this.progressInterval）;
  };

  / **
   *为不支持浏览器的“timeupdate”事件进行Polyfill。
   *
   * @see {@link Tech＃trackCurrentTime}
   * /


  Tech.prototype.manualTimeUpdatesOn = function manualTimeUpdatesOn（）{
    this.manualTimeUpdates = true;

    this.on（'play'，this.trackCurrentTime）;
    this.on（'pause'，this.stopTrackingCurrentTime）;
  };

  / **
   *关闭在其中创建的`timeupdate`事件的polyfill
   * {@link Tech＃manualTimeUpdatesOn}
   * /


  Tech.prototype.manualTimeUpdatesOff = function manualTimeUpdatesOff（）{
    this.manualTimeUpdates = false;
    this.stopTrackingCurrentTime（）;
    this.off（'play'，this.trackCurrentTime）;
    this.off（'pause'，this.stopTrackingCurrentTime）;
  };

  / **
   *设置一个间隔函数来跟踪当前时间，并触发`timeupdate`
   * 250毫秒。
   *
   * @listens Tech＃play
   * @triggers Tech＃timeupdate
   * /


  Tech.prototype.trackCurrentTime = function trackCurrentTime（）{
    if（this.currentTimeInterval）{
      this.stopTrackingCurrentTime（）;
    }
    this.currentTimeInterval = this.setInterval（function（）{
      / **
       *以250ms的间隔触发，表示时间正在传送到视频中。
       *
       * @event Tech＃timeupdate
       * @type {EventTarget〜Event}
       * /
      this.trigger（{type：'timeupdate'，target：this，manualTriggered：true}）;

      // 42 = 24 fps // 250是Webkit使用的// FF使用15
    }，250）;
  };

  / **
   *停止在{@link Tech＃trackCurrentTime}中创建的间隔函数，以便
   *`timeupdate`事件不再被触发。
   *
   * @listens {Tech＃pause}
   * /


  Tech.prototype.stopTrackingCurrentTime = function stopTrackingCurrentTime（）{
    this.clearInterval（this.currentTimeInterval）;

    //＃1002  - 如果视频在下一次更新之前结束，
    //进度条不会一直到最后
    this.trigger（{type：'timeupdate'，target：this，manualTriggered：true}）;
  };

  / **
   *关闭所有事件聚合物，清除`Tech`s {@link AudioTrackList}，
   * {@link VideoTrackList}和{@link TextTrackList}，并处理此技术。
   *
   * @fires组件＃处理
   * /


  Tech.prototype.dispose = function dispose（）{

    //清除所有轨道，因为我们无法在技术之间重新使用它们
    this.clearTracks（NORMAL.names）;

    //关闭任何手动进度或时间更新跟踪
    if（this.manualProgress）{
      this.manualProgressOff（）;
    }

    if（this.manualTimeUpdates）{
      this.manualTimeUpdatesOff（）;
    }

    _Component.prototype.dispose.call（本）;
  };

  / **
   *清除一个单独的“TrackList”或一个“TrackLists”的数组。
   *
   *>注意：没有源处理程序的技术应该在`video`的源之间调用
   *＆`audio`音轨。你不想在曲目之间使用它们！
   *
   * @param {string [] | string}类型
   * TrackList名称清除，有效名称为`video`，`audio`和
   *`文本'。
   * /


  Tech.prototype.clearTracks = function clearTracks（types）{
    var _this2 = this;

    types = [] .concat（types）;
    //清除所有轨道，因为我们无法在技术之间重新使用它们
    types.forEach（function（type）{
      var list = _this2 [type +'Tracks']（）|| [];
      var i = list.length;

      当我 - ） {
        var track = list [i];

        if（type ==='text'）{
          _this2.removeRemoteTextTrack（轨道）;
        }
        list.removeTrack（轨道）;
      }
    }）;
  };

  / **
   *删除通过addRemoteTextTrack添加的任何TextTracks
   *标记为自动垃圾收集
   * /


  Tech.prototype.cleanupAutoTextTracks = function cleanupAutoTextTracks（）{
    var list = this.autoRemoteTextTracks_ || [];
    var i = list.length;

    当我 - ） {
      var track = list [i];

      this.removeRemoteTextTrack（轨道）;
    }
  };

  / **
   *重置技术，这将删除所有来源并重置内部的readyState。
   *
   * @abstract
   * /


  Tech.prototype.reset = function reset（）{};

  / **
   *在Tech上获取或设置错误。
   *
   * @param {MediaError} [err]
   *在Tech上设置错误
   *
   * @return {MediaError | null}
   * tech上的当前错误对象，如果没有，则返回null。
   * /


  Tech.prototype.error = function error（err）{
    if（err！== undefined）{
      this.error_ = new MediaError（err）;
      this.trigger（ '错误'）;
    }
    返回this.error_;
  };

  / **
   *返回当前来源播放的“TimeRange”。
   *
   *>注意：此实现不完整。它不跟踪播放的“TimeRange”。
   *它只检查来源是否完全发挥。
   *
   * @return {TimeRange}
   *  - 如果此视频播放，则为单个时间范围
   *  - 如果没有，则为空的一组范围。
   * /


  Tech.prototype.played = function playing（）{
    if（this.hasStarted_）{
      返回createTimeRanges（0，0）;
    }
    return createTimeRanges（）;
  };

  / **
   *如果{@link技术＃manualTimeUpdatesOn}是手动时间更新，将会发生
   *以前叫。
   *
   * @fires Tech＃timeupdate
   * /


  Tech.prototype.setCurrentTime = function setCurrentTime（）{
    //提高手动时间更新的准确性
    if（this.manualTimeUpdates）{
      / **
       *手动“timeupdate”事件。
       *
       * @event Tech＃timeupdate
       * @type {EventTarget〜Event}
       * /
      this.trigger（{type：'timeupdate'，target：this，manualTriggered：true}）;
    }
  };

  / **
   *打开{@link VideoTrackList}的听众，{@link {AudioTrackList}}
   * {@link TextTrackList}事件。
   *
   *这将为“addtrack”和“removetrack”添加{@link EventTarget〜EventListeners}。
   *
   * @fires Tech＃audiotrackchange
   * @fires Tech＃videotrackchange
   * @fires Tech＃texttrackchange
   * /


  Tech.prototype.initTrackListeners = function initTrackListeners（）{
    var _this3 = this;

    / **
     *当Tech {@link AudioTrackList}添加或删除曲目时触发
     *
     * @event Tech＃audiotrackchange
     * @type {EventTarget〜Event}
     * /

    / **
     *当Tech {@link VideoTrackList}添加或删除曲目时触发
     *
     * @event Tech＃videotrackchange
     * @type {EventTarget〜Event}
     * /

    / **
     *当Tech {@link TextTrackList}添加或删除曲目时触发
     *
     * @event Tech＃texttrackchange
     * @type {EventTarget〜Event}
     * /
    NORMAL.names.forEach（function（name）{
      var props = NORMAL [name];
      var trackListChanges = function trackListChanges（）{
        _this3.trigger（name +'trackchange'）;
      };

      var tracks = _this3 [props.getterName]（）;

      tracks.addEventListener（'removetrack'，trackListChanges）;
      tracks.addEventListener（'addtrack'，trackListChanges）;

      _this3.on（'dispose'，function（）{
        tracks.removeEventListener（'removetrack'，trackListChanges）;
        tracks.removeEventListener（'addtrack'，trackListChanges）;
      }）;
    }）;
  };

  / **
   *如果需要，使用vtt.js模拟TextTracks
   *
   * @fires Tech＃vttjsloaded
   * @fires Tech＃vttjserror
   * /


  Tech.prototype.addWebVttScript_ = function addWebVttScript_（）{
    var _this4 = this;

    if（window_1.WebVTT）{
      返回;
    }

    //最初，Tech.el_是一个dummy-div的小孩，直到组件系统
    //表示Tech准备好了什么时候Tech.el_是DOM的一部分
    //插入WebVTT脚本之前
    if（document_1.body.contains（this.el（）））{

      // load via require if（可用）和vtt.js脚本位置未传入
      //作为选项。novtt构建将把上述要求调用成一个空对象
      //如果检查总是失败会导致这种情况。
      if（！this.options _ ['vtt.js'] && isPlain（browserIndex）&& Object.keys（browserIndex）.length> 0）{
        this.trigger（ 'vttjsloaded'）;
        返回;
      }

      //通过脚本位置选项加载vtt.js或没有位置的cdn
      //传入
      var script = document_1.createElement（'script'）;

      script.src = this.options _ ['vtt.js'] || 'https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js';
      script.onload = function（）{
        / **
         *加载vtt.js时发生。
         *
         * @event技术＃vttjsloaded
         * @type {EventTarget〜Event}
         * /
        _this4.trigger（ 'vttjsloaded'）;
      };
      script.onerror = function（）{
        / **
         *当vtt.js由于错误而没有加载时发生
         *
         * @event技术＃vttjsloaded
         * @type {EventTarget〜Event}
         * /
        _this4.trigger（ 'vttjserror'）;
      };
      this.on（'dispose'，function（）{
        script.onload = null;
        script.onerror = null;
      }）;
      //但是还没有加载，我们将它设置为true，然后再进行注入
      //我们不会覆盖注入的窗口.WebVTT如果它立即加载
      window_1.WebVTT = true;
      。this.el（）parentNode.appendChild（脚本）;
    } else {
      this.ready（this.addWebVttScript_）;
    }
  };

  / **
   *模拟文字曲目
   *
   * /


  Tech.prototype.emulateTextTracks = function emulateTextTracks（）{
    var _this5 = this;

    var tracks = this.textTracks（）;
    var remoteTracks = this.remoteTextTracks（）;
    var handleAddTrack = function handleAddTrack（e）{
      return tracks.addTrack（e.track）;
    };
    var handleRemoveTrack = function handleRemoveTrack（e）{
      return tracks.removeTrack（e.track）;
    };

    remoteTracks.on（'addtrack'，handleAddTrack）;
    remoteTracks.on（'removetrack'，handleRemoveTrack）;

    this.ad dWebVttScript_（）;

    var updateDisplay = function updateDisplay（）{
      return _this5.trigger（'texttrackchange'）;
    };

    var textTracksChanges = function textTracksChanges（）{
      updateDisplay（）;

      for（var i = 0; i <tracks.length; i ++）{
        var track = tracks [i];

        track.removeEventListener（'cuechange'，updateDisplay）;
        if（track.mode ==='显示'）{
          track.addEventListener（'cuechange'，updateDisplay）;
        }
      }
    };

    textTracksChanges（）;
    tracks.addEventListener（'change'，textTracksChanges）;
    tracks.addEventListener（'addtrack'，textTracksChanges）;
    tracks.addEventListener（'removetrack'，textTracksChanges）;

    this.on（'dispose'，function（）{
      remoteTracks.off（'addtrack'，handleAddTrack）;
      remoteTracks.off（'removetrack'，handleRemoveTrack）;
      tracks.removeEventListener（'change'，textTracksChanges）;
      tracks.removeEventListener（'addtrack'，textTracksChanges）;
      tracks.removeEventListener（'removetrack'，textTracksChanges）;

      for（var i = 0; i <tracks.length; i ++）{
        var track = tracks [i];

        track.removeEventListener（'cuechange'，updateDisplay）;
      }
    }）;
  };

  / **
   *创建并返回一个远程的{@link TextTrack}对象。
   *
   * @param {string}种
   * TextTrack类（字幕，字幕，说明，章节或元数据）
   *
   * @param {string} [label]
   *标签识别文字轨道
   *
   * @param {string} [language]
   *两个字母的语言缩写
   *
   * @return {TextTrack}
   *创建的TextTrack。
   * /


  Tech.prototype.addTextTrack = function addTextTrack（kind，label，language）{
    if（！kind）{
      抛出新的错误（'TextTrack类是必需的，但没有提供'）;
    }

    return createTrackHelper（this，kind，label，language）;
  };

  / **
   *创建一个模拟的TextTrack，供addRemoteTextTrack使用
   *
   *这是由继承的类覆盖
   * Tech以创建本地或自定义的TextTracks。
   *
   * @param {Object}选项
   *该对象应包含用于初始化TextTrack的选项。
   *
   * @param {string} [options.kind]
   * TextTrack类（字幕，字幕，说明，章节或元数据）。
   *
   * @param {string} [options.label]。
   *标签识别文字轨道
   *
   * @param {string} [options.language]
   *两个字母的语言缩写。
   *
   * @return {HTMLTrackElement}
   *创建的轨道元素。
   * /


  Tech.prototype.createRemoteTextTrack = function createRemoteTextTrack（options）{
    var track = mergeOptions（options，{
      技术：这个
    }）;

    返回新的REMOTE.remoteTextEl.TrackClass（track）;
  };

  / **
   *创建一个远程文本轨道对象并返回一个html轨道元素。
   *
   *>注意：这可以是一个模拟的{@link HTMLTrackElement}或一个本机的。
   *
   * @param {Object}选项
   *有关详细的属性，请参阅{@link Tech＃createRemoteTextTrack}。
   *
   * @param {boolean} [manualCleanup = true]
   *  - 如果为false：TextTrack将自动从视频中删除
   *元素每当源更改
   *  - 如果True：TextTrack必须手动清理
   *
   * @return {HTMLTrackElement}
   *一个Html轨道元素
   *
   * @deprecated此功能的默认功能将是等效的
   *到将来的“manualCleanup = false”。manualCleanup参数将会
   *也被删除。
   * /


  Tech.prototype.addRemoteTextTrack = function addRemoteTextTrack（）{
    var _this6 = this;

    var options = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
    var manualCleanup = arguments [1];

    var htmlTrackElement = this.createRemoteTextTrack（options）;

    if（manualCleanup！== true && manualCleanup！== false）{
      //弃用警告
      log $ 1.warn（'将addRemoteTextTrack调用而不显式地将“manualCleanup”参数设置为“true”，已被弃用，在将来版本的video.js中默认为false）;
      manualCleanup = true;
    }

    //将HTMLTrackElement和TextTrack存储到远程列表
    。this.remoteTextTrackEls（）addTrackElement_（htmlTrackElement）;
    。this.remoteTextTracks（）addTrack（htmlTrackElement.track）;

    if（manualCleanup！== true）{
      //创建TextTrackList（如果不存在）
      this.ready（function（）{
        return _this6.autoRemoteTextTracks_.addTrack（htmlTrackElement.track）;
      }）;
    }

    返回htmlTrackElement;
  };

  / **
   *从远程“TextTrackList”中删除远程文本轨道。
   *
   * @param {TextTrack}曲目
   *`TextTrack`从`TextTrackList`中删除
   * /


  Tech.prototype.removeRemoteTextTrack = function removeRemoteTextTrack（track）{
    var trackElement = this.remoteTextTrackEls（）。getTrackElementByTrack_（track）;

    //从远程列表中删除HTMLTrackElement和TextTrack
    。this.remoteTextTrackEls（）removeTrackElement_（trackElement）;
    this.remoteTextTracks（）removeTrack（轨道）。
    this.autoRemoteTextTracks_.removeTrack（轨道）;
  };

  / **
   *获取W3C媒体指定的可用媒体播放质量指标
   *播放质量API。
   *
   * @see [Spec] {@ link https://wicg.github.io/media-playback-quality}
   *
   * @return {Object}
   *支持媒体播放质量指标的对象
   *
   * @abstract
   * /


  Tech.prototype.getVideoPlaybackQuality = function getVideoPlaybackQuality（）{
    return {};
  };

  / **
   *从“技术”设置海报的方法。
   *
   * @abstract
   * /


  Tech.prototype.setPoster = function setPoster（）{};

  / **
   *检查'playinine'<video>属性的存在的方法。
   *
   * @abstract
   * /


  Tech.prototype.playsinline = function playsinline（）{};

  / **
   *设置或取消设置“playinine”<video>属性的方法。
   *
   * @abstract
   * /


  Tech.prototype.setPlaysinline = function setPlaysinline（）{};

  / *
   *检查技术可以支持给定的MIME类型。
   *
   *基础技术不支持任何类型，但源处理程序可能
   *覆盖这个。
   *
   * @param {string}类型
   *检查支持的mimetype
   *
   * @return {string}
   *'可能'，'也许'或空字符串
   *
   * @see [Spec] {@ link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType}
   *
   * @abstract
   * /


  Tech.prototype.canPlayType = function canPlayType（）{
    返回''
  };

  / **
   *检查此技术是否支持该类型。
   *
   *基础技术不支持任何类型，但源处理程序可能
   *覆盖这个。
   *
   * @param {string}类型
   *要检查的媒体类型
   * @return {string}返回原生视频元素的响应
   * /


  Tech.canPlayType = function canPlayType（）{
    返回''
  };

  / **
   *检查技术是否可以支持给定的来源
   * @param {Object} srcObj
   *源对象
   * @param {Object}选项
   *选择传递给科技
   * @return {string}'可能'，'也许'或''（空字符串）
   * /


  Tech.canPlaySource = function canPlaySource（srcObj，options）{
    返回Tech.canPlayType（srcObj.type）;
  };

  / *
   *返回参数是否为Tech。
   *可以传递类似“Html5”的类或像“player.tech_”这样的实例
   *
   * @param {Object}组件
   *要检查的项目
   *
   * @return {boolean}
   无论是科技还是技术？
   *  - 如果是科技，就是真的
   *  - 如果不是，则为假
   * /


  Tech.isTech = function isTech（component）{
    返回component.prototype instanceof Tech || Tech ||的组件实例 组件===技术;
  };

  / **
   *将`Tech`注册到videojs的共享列表中。
   *
   * @param {string}名称
   *技术注册名称。
   *
   * @param {Object}技术
   *技术类注册。
   * /


  Tech.registerTech = function registerTech（name，tech）{
    if（！Tech.techs_）{
      Tech.techs_ = {};
    }

    if（！Tech.isTech（tech））{
      抛出新的错误（'Tech'+ name +'必须是Tech'）;
    }

    if（！Tech.canPlayType）{
      抛出新的错误（'Techs必须有静态canPlayType方法'）;
    }
    if（！Tech.canPlaySource）{
      抛出新的错误（'Techs必须有静态canPlaySource方法）
    }

    name = toTitleCase（name）;

    Tech.techs_ [name] = tech;
    if（name！=='Tech'）{
      // camel case用于techOrder的techName
      Tech.defaultTechOrder_.push（名）;
    }
    回报科技
  };

  / **
   *通过名称从共享列表中获取“技术”。
   *
   * @param {string}名称
   *“camelCase”或“TitleCase”的技术名称
   *
   * @return {Tech | undefined}
   *“技术”或未定义，如果没有要求的名称的技术。
   * /


  Tech.getTech = function getTech（name）{
    if（！name）{
      返回;
    }

    name = toTitleCase（name）;

    if（Tech.techs_ && Tech.techs_ [name]）{
      返回Tech.techs_ [name];
    }

    if（window_1 && window_1.videojs && window_1.videojs [name]）{
      log $ 1.warn（''+ name +'tech被添加到videojs对象中，当它应该使用videojs.registerTech（name，tech）注册时）;
      return window_1.videojs [name];
    }
  };

  返回技术
}（零件）;

/ **
 *获取{@link VideoTrackList}
 *
 * @returns {VideoTrackList}
 * @method Tech.prototype.videoTracks
 * /

/ **
 *获取{@link AudioTrackList}
 *
 * @returns {AudioTrackList}
 * @method Tech.prototype.audioTracks
 * /

/ **
 *获取{@link TextTrackList}
 *
 * @returns {TextTrackList}
 * @method Tech.prototype.textTracks
 * /

/ **
 *获取远程元素{@link TextTrackList}
 *
 * @returns {TextTrackList}
 * @method Tech.prototype.remoteTextTracks
 * /

/ **
 *获取远程元素{@link HtmlTrackElementList}
 *
 * @returns {HtmlTrackElementList}
 * @method Tech.prototype.remoteTextTrackEls
 * /

ALL.names.forEach（function（name）{
  var props = ALL [name];

  Tech.prototype [props.getterName] = function（）{
    这个[props.privateName] =这个[props.privateName] || new props.ListClass（）;
    返回这个[props.privateName];
  };
}）;

/ **
 *相关文本曲目列表
 *
 * @type {TextTrackList}
 * @私人的
 * @property Tech＃textTracks_
 * /

/ **
 *相关音轨列表。
 *
 * @type {AudioTrackList}
 * @私人的
 * @property Tech＃audioTracks_
 * /

/ **
 *相关视频曲目列表。
 *
 * @type {VideoTrackList}
 * @私人的
 * @property Tech＃videoTracks_
 * /

/ **
 *布尔表示“技术”支持音量控制。
 *
 * @type {boolean}
 * @default
 * /
Tech.prototype.featuresVolumeControl = true;

/ **
 *布尔表示“技术”支持全屏调整大小控制。
 *使用请求全屏调整插件重新加载插件
 *
 * @type {boolean}
 * @default
 * /
Tech.prototype.featuresFullscreenResize = false;

/ **
 *布尔表示“技术”支持更改视频速度
 *戏剧。例子：
 *  - 设置播放器快速播放2x（两次）
 *  - 设置播放器快速播放0.5x（一半）
 *
 * @type {boolean}
 * @default
 * /
Tech.prototype.featuresPlaybackRate = false;

/ **
 *布尔表示`Tech`支持`进度'事件。这是目前
 *不被video-js-swf触发。这将用于确定是否
 应该调用{@link Tech＃manualProgressOn}。
 *
 * @type {boolean}
 * @default
 * /
Tech.prototype.featuresProgressEvents = false;

/ **
 *布尔表示`Tech`支持`timeupdate`事件。这是目前
 *不被video-js-swf触发。这将用于确定是否
 *应该调用{@link Tech＃manualTimeUpdates}。
 *
 * @type {boolean}
 * @default
 * /
Tech.prototype.featuresTimeupdateEvents = false;

/ **
 *布尔表示“技术”支持本机“TextTrack”。
 *如果浏览器支持它们，这将有助于我们与本地的“TextTrack”集成。
 *
 * @type {boolean}
 * @default
 * /
Tech.prototype.featuresNativeTextTracks = false;

/ **
 *要使用源处理程序模式的技术的功能混合。
 源处理程序是用于处理特定格式的脚本。
 *源处理程序模式用于自适应格式（HLS，DASH）
 *手动加载视频数据并将其馈送到源缓冲区（媒体源扩展）
 *示例：`Tech.withSourceHandlers.call（MyTech）;`
 *
 * @param {Tech} _Tech
 *添加源处理函数的技术。
 *
 * @mixes Tech〜SourceHandlerAdditions
 * /
Tech.withSourceHandlers = function（_Tech）{

  / **
   *注册源处理程序
   *
   * @param {Function}处理程序
   *源处理程序类
   *
   * @param {number} [index]
   *注册在以下索引
   * /
  _Tech.registerSourceHandler = function（handler，index）{
    var handlers = _Tech.sourceHandlers;

    if（！handlers）{
      处理程序= _Tech.sourceHandlers = [];
    }

    if（index === undefined）{
      //添加到列表的末尾
      index = handlers.length;
    }

    handlers.splice（index，0，handler）;
  };

  / **
   *检查技术是否可以支持给定类型。还检查
   技术来源
   *
   * @param {string}类型
   *要检查的mimetype。
   *
   * @return {string}
   *'可能'，'可能'或''（空字符串）
   * /
  _Tech.canPlayType = function（type）{
    var handlers = _Tech.sourceHandlers || [];
    var can = void 0;

    for（var i = 0; i <handlers.length; i ++）{
      can = handlers [i] .canPlayType（type）;

      if（can）{
        回归可以
      }
    }

    返回''
  };

  / **
   *返回支持源的第一个源处理程序。
   *
   * TODO：回答问题：应该'可能'优先于'也许'
   *
   * @param {Tech〜SourceObject}源码
   *源对象
   *
   * @param {Object}选项
   *选择传递给科技
   *
   * @return {SourceHandler | null}
   *支持源的第一个源处理程序，如果为null
   *没有SourceHandler支持源码
   * /
  _Tech.selectSourceHandler = function（source，options）{
    var handlers = _Tech.sourceHandlers || [];
    var can = void 0;

    for（var i = 0; i <handlers.length; i ++）{
      can = handlers [i] .canHandleSource（source，options）;

      if（can）{
        返回处理程序[i];
      }
    }

    返回null;
  };

  / **
   *检查技术是否可以支持给定的来源。
   *
   * @param {Tech〜SourceObject} srcObj
   *源对象
   *
   * @param {Object}选项
   *选择传递给科技
   *
   * @return {string}
   *'可能'，'可能'或''（空字符串）
   * /
  _Tech.canPlaySource = function（srcObj，options）{
    var sh = _Tech.selectSourceHandler（srcObj，options）;

    if（sh）{
      返回sh.canHandleSource（srcObj，options）;
    }

    返回''
  };

  / **
   *当使用源代码处理程序时，更喜欢它的实现
   *技术通常提供的任何功能。
   * /
  var deferrable = ['seekable'，'duration'];

  / **
   *围绕{@link Tech＃seekable}的一个包装器，可以称之为“SourceHandler”
   *功能，如果它存在，回溯到Techs seekable功能。
   *
   * @method _Tech.seekable
   * /

  / **
   *围绕{@link技术＃持续时间}的包装器，将调用“SourceHandler”的持续时间
   *功能，如果它存在，否则它将回退到技术持续时间功能。
   *
   * @method _Tech.duration
   * /

  deferrable.forEach（function（fnName）{
    var originalFn = this [fnName];

    if（typeof originalFn！=='function'）{
      返回;
    }

    这个[fnName] = function（）{
      if（this.sourceHandler_ && this.sourceHandler_ [fnName]）{
        返回this.sourceHandler_ [fnName] .apply（this.sourceHandler_，arguments）;
      }
      return originalFn.apply（this，arguments）;
    };
  }，_Tech.prototype）;

  / **
   *创建使用源对象设置源的功能
   *和源处理程序。
   除非找到源处理程序，否则不应该被调用。
   *
   * @param {Tech〜SourceObject}源码
   *具有src和类型键的源对象
   * /
  _Tech.prototype.setSource = function（source）{
    var sh = _Tech.selectSourceHandler（source，this.options_）;

    if（！sh）{
      //当不支持的源代码时，返回到原始源代码
      //故意设定
      if（_Tech.nativeSourceHandler）{
        sh = _Tech.nativeSourceHandler;
      } else {
        log $ 1.error（“找不到当前源的源代码”）;
      }
    }

    //处理任何现有的源处理程序
    this.disposeSourceHandler（）;
    this.off（'dispose'，this.disposeSourceHandler）;

    if（sh！== _Tech.nativeSourceHandler）{
      this.currentSource_ = source;
    }

    this.sourceHandler_ = sh.handleSource（source，this，this.options_）;
    this.on（'dispose'，this.disposeSourceHandler）;
  };

  / **
   *当Tech处理时，清理任何现有的SourceHandler和侦听器。
   *
   * @listens Tech＃处置
   * /
  _Tech.prototype.disposeSourceHandler = function（）{
    //如果我们有一个来源并获得另一个
    //然后我们正在加载新的东西
    //清除我们当前的所有曲目
    if（this.currentSource_）{
      this.clearTracks（['audio'，'video']）;
      this.currentSource_ = null;
    }

    //总是清理自动文本轨道
    this.cleanupAutoTextTracks（）;

    if（this.sourceHandler_）{

      if（this.sourceHandler_.dispose）{
        this.sourceHandler_.dispose（）;
      }

      this.sourceHandler_ = null;
    }
  };
};

//基础技术类需要注册为组件。这是唯一的
//可以注册为组件的技术。
Component.registerComponent（'Tech'，Tech）;
Tech.registerTech（“Tech”，Tech）;

/ **
 *应该添加到玩家玩家的技术列表
 *
 * @私人的
 * /
Tech.defaultTechOrder_ = [];

var middlewares = {};

功能使用（类型，中间件）{
  middlewares [type] = middlewares [type] || [];
  中间件[类型] .push（中间件）;
}



function setSource（player，src，next）{
  player.setTimeout（function（）{
    返回setSourceHelper（src，middlewares [src.type]，next，player）;
  }，1）;
}

功能setTech（中间件，技术）{
  middleware.forEach（function（mw）{
    返回mw.setTech && mw.setTech（tech）;
  }）;
}

function get $ 1（middleware，tech，method）{
  return middleware.reduceRight（middlewareIterator（method），tech [method]（））;
}

函数集$ 1（middleware，tech，method，arg）{
  return tech [method]（middleware.reduce（middlewareIterator（method），arg））;
}

var allowedGetters = {
  缓冲：1，
  当前时间：1，
  持续时间：1，
  可寻求：1，
  玩过：1
};

var allowedSetters = {
  setCurrentTime：1
};

函数middlewareIterator（method）{
  返回函数（value，mw）{
    if（mw [method]）{
      return mw [method]（value）;
    }

    返回值
  };
}

function setSourceHelper（）{
  var src = arguments.length> 0 && arguments [0]！== undefined？参数[0]：{};
  var middleware = arguments.length> 1 && arguments [1]！== undefined？争论[1]：[];
  var next = arguments [2];
  var player = arguments [3];
  var acc = arguments.length> 4 && arguments [4]！== undefined？参数[4]：[];
  var lastRun = arguments.length> 5 && arguments [5]！== undefined？参数[5]：假;
  var mwFactory = middleware [0]，
      mwrest = middleware.slice（1）;

  //如果mwFactory是一个字符串，那么我们在路上的一个叉子

  if（typeof mwFactory ==='string'）{
    setSourceHelper（src，middlewares [mwFactory]，next，player，acc，lastRun）;

    //如果我们有一个mwFactory，用播放器调用它来获取mw，
    //然后调用mw的setSource方法
  } else if（mwFactory）{
    var mw = mwFactory（player）;

    mw.setSource（assign（{}，src），function（err，_src）{

      //发生了一些事情，尝试在当前级别的下一个中间件
      //确保使用旧的src
      if（err）{
        return setSourceHelper（src，mwrest，next，player，acc，lastRun）;
      }

      //我们已经成功了，现在我们需要更深入
      acc.push（MW）;

      //如果是同一时间，继续执行当前链
      //否则，我们想下新的链条
      setSourceHelper（_src，src.type === _src.type？mwrest：middlewares [_src.type]，next，player，acc，lastRun）;
    }）;
  } else if（mwrest.length）{
    setSourceHelper（src，mwrest，next，player，acc，lastRun）;
  } else if（lastRun）{
    next（src，acc）;
  } else {
    setSourceHelper（src，middlewares ['*']，next，player，acc，true）;
  }
}

/ **
 * @module filter-source
 * /
/ **
 *过滤单个不良源对象或多个源对象
 *数组。也将嵌套的源对象数组变为1维
 *源对象数组。
 *
 * @param {Tech〜SourceObject | Tech〜SourceObject []} src
 *要过滤的src对象
 *
 * @return {Tech〜SourceObject []}
 *只包含有效来源的源对象数组
 *
 * @私人的
 * /
var filterSource = function filterSource（src）{
  //遍历数组
  if（Array.isArray（src））{
    var newsrc = [];

    src.forEach（function（srcobj）{
      srcobj = filterSource（srcobj）;

      if（Array.isArray（srcobj））{
        newsrc = newsrc.concat（srcobj）;
      } else if（isObject（srcobj））{
        newsrc.push（srcobj）;
      }
    }）;

    src = newsrc;
  } else if（typeof src ==='string'&& src.trim（））{
    //将字符串转换为对象
    src = [{src：src}];
  } else if（isObject（src）&& typeof src.src ==='string'&& src.src && src.src.trim（））{
    // src已经有效
    src = [src];
  } else {
    // invalid source，将其变成一个空数组
    src = [];
  }

  return src;
};

/ **
 * @file loader.js
 * /
/ **
 *“MediaLoader”是决定要加载播放技术的“组件”
 *玩家初始化时
 *
 * @extends组件
 * /

var MediaLoader = function（_Component）{
  inherit（MediaLoader，_Component）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的关键/价值。
   *
   * @param {Component〜ReadyCallback} [ready]
   *当该组件准备就绪时运行的功能。
   * /
  功能MediaLoader（播放器，选项，就绪）{
    classCallCheck（这是MediaLoader）;

    // MediaLoader没有元素
    var options_ = mergeOptions（{createEl：false}，options）;

    //如果播放器初始化时没有源，
    //加载第一个支持的播放技术。

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options_，ready））;

    if（！options.playerOptions.sources || options.playerOptions.sources.length === 0）{
      for（var i = 0，j = options.playerOptions.techOrder; i <j.length; i ++）{
        var techName = toTitleCase（j [i]）;
        var tech = Tech.getTech（techName）;

        //支持被注册为组件的技术的旧行为。
        //删除一旦不赞成的行为被删除。
        if（！techName）{
          tech = Component.getComponent（techName）;
        }

        //检查浏览器是否支持此技术
        if（tech && tech.isSupported（））{
          player.loadTech_（techName）;
          打破;
        }
      }
    } else {
      //循环播放技术（HTML5，Flash）并检查支持。
      //然后加载最好的源码。
      //这里有几个假设：
      //所有播放技术都要尊重preload false。
      player.src（options.playerOptions.sources）;
    }
    返回_this;
  }

  返回MediaLoader;
}（零件）;

Component.registerComponent（'MediaLoader'，MediaLoader）;

/ **
 * @file button.js
 * /
/ **
 *可点击的组件，可点击或键盘可操作，
 *但不是一个本机HTML按钮。
 *
 * @extends组件
 * /

var ClickableComponent = function（_Component）{
  inherits（ClickableComponent，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  function ClickableComponent（player，options）{
    classCallCheck（this，ClickableComponent）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.emitTapEvents（）;

    _this.enable（）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素。
   *
   * @param {string} [tag = div]
   *元素的节点类型。
   *
   * @param {Object} [props = {}]
   *应该在元素上设置的属性对象。
   *
   * @param {Object} [attributes = {}]
   *应该在元素上设置的属性对象。
   *
   * @return {Element}
   *创建的元素。
   * /


  ClickableComponent.prototype.createEl = function createEl $$ 1（）{
    var tag = arguments.length> 0 && arguments [0]！== undefined？参数[0]：'div';
    var props = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
    var attributes = arguments.length> 2 && arguments [2]！== undefined？参数[2]：{};

    props = assign（{
      innerHTML：'<span aria-hidden =“true”class =“vjs-icon-placeholder”> </ span>'，
      className：this.buildCSSClass（），
      tabIndex：0
    }， 道具）;

    if（tag ==='button'）{
      log $ 1.error（'不支持使用HTML元素'+ tag +'创建一个ClickableComponent），而不是使用Button'。
    }

    //为不是本地HTML按钮的clickable元素添加ARIA属性
    attributes = assign（{
      'role'：'button'，

      //让屏幕阅读器用户知道元素的文本可能会改变
      'aria-live'：'礼貌'
    }，属性）;

    this.tabIndex_ = props.tabIndex;

    var el = _Component.prototype.createEl.call（this，tag，props，attributes）;

    this.createControlTextEl（EL）;

    回报
  };

  / **
   *在这个“Component”上创建一个控件文本元素
   *
   * @param {Element} [el]
   *控件文本的父元素。
   *
   * @return {Element}
   *创建的控件文本元素。
   * /


  ClickableComponent.prototype.createControlTextEl = function createControlTextEl（el）{
    this.controlTextEl_ = createEl（'span'，{
      className：'vjs-control-text'
    }）;

    if（el）{
      el.appendChild（this.controlTextEl_）;
    }

    this.controlText（this.controlText_，el）;

    return this.controlTextEl_;
  };

  / **
   *获取或设置用于“组件”上的控件的本地化文本。
   *
   * @param {string} [text]
   *控制元素的文本。
   *
   * @param {Element} [el = this.el（）]
   *元素设置标题。
   *
   * @return {string}
   *  - 获取时的控制文本
   * /


  ClickableComponent.prototype.controlText = function controlText（text）{
    var el = arguments.length> 1 && arguments [1]！== undefined？arguments [1]：this.el（）;

    if（！text）{
      返回this.controlText_ || “需要文字”;
    }

    var localizedText = this.localize（text）;

    this.controlText_ = text;
    textContent（this.controlTextEl_，localizedText）;
    if（！this.nonIconControl）{
      //如果只显示一个图标，请设置标题属性
      el.setAttribute（'title'，localizedText）;
    }
  };

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。
   * /


  ClickableComponent.prototype.buildCSSClass = function buildCSSClass（）{
    return'vjs-control vjs-button'+ _Component.prototype.buildCSSClass.call（this）;
  };

  / **
   *启用这个“Component”元素。
   * /


  ClickableComponent.prototype.enable = function enable（）{
    if（！this.enabled_）{
      this.enabled_ = true;
      this.removeClass（ 'VJS禁用'）;
      this.el_.setAttribute（'aria-disabled'，'false'）;
      if（typeof this.tabIndex_！=='undefined'）{
        this.el_.setAttribute（'tabIndex'，this.tabIndex_）;
      }
      this.on（['tap'，'click']，this.handleClick）;
      this.on（'focus'，this.handleFocus）;
      this.on（'blur'，this.handleBlur）;
    }
  };

  / **
   *禁用此“Component”元素。
   * /


  ClickableComponent.prototype.disable = function disable（）{
    this.enabled_ = false;
    this.addClass（ 'VJS禁用'）;
    this.el_.setAttribute（'aria-disabled'，'true'）;
    if（typeof this.tabIndex_！=='undefined'）{
      this.el_.removeAttribute（ '的tabIndex'）;
    }
    this.off（['tap'，'click']，this.handleClick）;
    this.off（'focus'，this.handleFocus）;
    this.off（'blur'，this.handleBlur）;
  };

  / **
   *当“ClickableComponent”得到：
   *  - 单击（通过`click`事件，在构造函数中侦听开始）
   *  - 轻拍（通过“tap”事件，在构造函数中开始侦听）
   *  - 以下事情按顺序发生：
   * 1. {@link ClickableComponent＃handleFocus}通过`focus`事件调用
   *`ClickableComponent`。
   * 2. {@link ClickableComponent＃handleFocus}在使用时增加了“keydown”的侦听器
   * {@link ClickableComponent＃handleKeyPress}。
   * 3.`ClickableComponent`没有`blur`事件（`blur`意味着焦点丢失）。用户按下
   *空格或回车键。
   * 4. {@link ClickableComponent＃handleKeyPress}使用`keydown`调用这个函数
   *事件作为参数。
   *
   * @param {EventTarget〜Event}事件
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * @abstract
   * /


  ClickableComponent.prototype.handleClick = function handleClick（event）{};

  / **
   *当“ClickableComponent”通过焦点事件获取焦点时，这被调用。
   *开启“keydown”事件的侦听。当他们发生的时候
   *调用`this.handleKeyPress`。
   *
   * @param {EventTarget〜Event}事件
   *导致这个函数被调用的`focus`事件。
   *
   * @listens焦点
   * /


  ClickableComponent.prototype.handleFocus = function handleFocus（event）{
    on（document_1，'keydown'，bind（this，this.handleKeyPress））;
  };

  / **
   *当此ClickableComponent具有焦点并按下一个键时调用。通过
   *默认情况下，当键为空格或输入时，将调用`this.handleClick`。
   *
   * @param {EventTarget〜Event}事件
   *导致该函数被调用的`keydown`事件。
   *
   * @listens keydown
   * /


  ClickableComponent.prototype.handleKeyPress = function handleKeyPress（event）{

    //支持空间（32）或Enter（13）键操作来触发点击事件
    if（event.which === 32 || event.which === 13）{
      event.preventDefault（）;
      this.trigger（ '点击'）;
    } else if（_Component.prototype.handleKeyPress）{

      //通过不支持的键的按键处理
      _Component.prototype.handleKeyPress.call（this，event）;
    }
  };

  / **
   *当“ClickableComponent”失去焦点时调用。关闭监听器
   *`keydown`事件。哪个停止`this.handleKeyPress`从被调用。
   *
   * @param {EventTarget〜Event}事件
   *导致该函数被调用的`blur`事件。
   *
   * @静音模糊
   * /


  ClickableComponent.prototype.handleBlur = function handleBlur（event）{
    关闭（document_1，'keydown'，bind（this，this.handleKeyPress））;
  };

  返回ClickableComponent;
}（零件）;

Component.registerComponent（'ClickableComponent'，ClickableComponent）;

/ **
 * @file poster-image.js
 * /
/ **
 *一个“ClickableComponent”，用于显示播放器的海报图像。
 *
 * @extends ClickableComponent
 * /

var PosterImage = function（_ClickableComponent）{
  inherits（PosterImage，_ClickableComponent）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能PosterImage（播放器，选项）{
    classCallCheck（this，PosterImage）;

    var _this = possibleConstructorReturn（this，_ClickableComponent.call（this，player，options））;

    _this.update（）;
    player.on（'posterchange'，bind（_this，_this.update））;
    返回_this;
  }

  / **
   *清理并处理“PosterImage”。
   * /


  PosterImage.prototype.dispose = function dispose（）{
    this.player（）。off（'posterchange'，this.update）;
    _ClickableComponent.prototype.dispose.call（本）;
  };

  / **
   *创建'PosterImage'的DOM元素。
   *
   * @return {Element}
   *创建的元素。
   * /


  PosterImage.prototype.createEl = function createEl $$ 1（）{
    var el = createEl（'div'，{
      className：'vjs-poster'，

      //不要让海报被标签。
      tabIndex：-1
    }）;

    //确保海报图像大小，同时保持其原始方面
    //比例，当可用时使用`background-size`的div。对于浏览器
    //不支持`background-size`（例如IE8），回到使用常规
    // img元素。
    if（！BACKGROUND_SIZE_SUPPORTED）{
      this.fallbackImg_ = createEl（'img'）;
      el.appendChild（this.fallbackImg_）;
    }

    回报
  };

  / **
   * {@link Player＃posterchange}事件的{@link EventTarget〜EventListener}。
   *
   * @listens Player＃posterchange
   *
   * @param {EventTarget〜Event} [event]
   *触发此功能的“Player＃posterchange”事件。
   * /


  PosterImage.prototype.update = function update（event）{
    var url = this.player（）。poster（）;

    this.setSrc（URL）;

    //如果没有海报来源，我们应该在这个组件上显示：none
    //所以它还是不可点击或右键单击
    if（url）{
      this.show（）;
    } else {
      this.hide（）;
    }
  };

  / **
   *根据显示方式设置“PosterImage”的来源。
   *
   * @param {string} url
   *“PosterImage”的源的URL。
   * /


  PosterImage.prototype.setSrc = function setSrc（url）{
    if（this.fallbackImg_）{
      this.fallbackImg_.src = url;
    } else {
      var backgroundImage ='';

      //任何falsey值应保持为空字符串，否则
      //这会引发额外的错误
      if（url）{
        backgroundImage ='url（“'+ url +'”）';
      }

      this.el_.style.backgroundImage = backgroundImage;
    }
  };

  / **
   *“PosterImage”上的点击的{@link EventTarget〜EventListener}。看到
   * {@link ClickableComponent＃handleClick}，用于触发此事件的实例。
   *
   * @静音点击
   * @静音点击
   * @listens keydown
   *
   * @param {EventTarget〜Event}事件
   +导致此函数被调用的`click'，`tap`或`keydown`事件。
   * /


  PosterImage.prototype.handleClick = function handleClick（event）{
    //禁用控件时，我们不希望点击触发播放
    if（！this.player_.controls（））{
      返回;
    }

    if（this.player_.paused（））{
      this.player_.play（）;
    } else {
      this.player_.pause（）;
    }
  };

  返回PosterImage;
}（ClickableComponent）;

Component.registerComponent（'PosterImage'，PosterImage）;

/ **
 * @file text-track-display.js
 * /
var darkGray ='＃222';
var lightGray ='#ccc';
var fontMap = {
  等离子：
  sansSerif：'sans-serif'，
  衬线：'serif'，
  monospaceSansSerif：'“Andale Mono”，“Lucida Console”，monospace'，
  monospaceSerif：'“Courier New”，monospace'，
  比例人类系列：'sans-serif'，
  比例序列：'serif'，
  休闲：“漫画无所不知”，影响，幻想“，
  脚本：'“Monotype Corsiva”，cursive'，
  小帽子：“安达尔单声道”，“露西达控制台”，等离子卫星，无衬线'
};

/ **
 *从给定的十六进制颜色代码构造一个rgba颜色。
 *
 * @param {number}颜色
 *颜色十六进制数，如＃f0e。
 *
 * @param {number}不透明度
 *不透明度值，0.0  -  1.0。
 *
 * @return {string}
 *创建的rgba颜色，如“rgba（255，0，0，0.3）”。
 *
 * @私人的
 * /
function constructColor（color，opacity）{
  返回'rgba（'+
  //颜色看起来像“＃f0e”
  parseInt（color [1] + color [1]，16）+'，'+ parseInt（color [2] + color [2]，16）+'，'+ parseInt（color [3] + color [3] 16）+'，'+ opacity +'）';
}

/ **
 *尝试更新DOM元素的样式。一些风格的变化会引发错误，
 *特别是IE8。那些应该是noops。
 *
 * @param {Element} el
 *要设计的DOM元素。
 *
 * @param {string}样式
 *应该被设置的元素上的CSS属性。
 *
 * @param {string}规则
 *应用于属性的样式规则。
 *
 * @私人的
 * /
函数tryUpdateStyle（el，style，rule）{
  尝试{
    el.style [style] = rule;
  } catch（e）{

    //满足linter
    返回;
  }
}

/ **
 *显示文字曲目提示的组件。
 *
 * @extends组件
 * /

var TextTrackDisplay = function（_Component）{
  继承（TextTrackDisplay，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   *
   * @param {Component〜ReadyCallback} [ready]
   *当TextTrackDisplay准备就绪时调用的函数。
   * /
  function TextTrackDisplay（player，options，ready）{
    classCallCheck（this，TextTrackDisplay）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options，ready））;

    player.on（'loadstart'，bind（_this，_this.toggleDisplay））;
    player.on（'texttrackchange'，bind（_this，_this.updateDisplay））;
    player.on（'loadstart'，bind（_this，_this.preselectTrack））;

    //这个以前在玩家初始化时被调用，但是导致错误
    //如果曲目默认显示，并且显示尚未加载。
    //当我们支持时，应该移动到外部的跟踪装载器
    //不需要显示的轨迹。
    player.ready（bind（_this，function（）{
      if（player.tech_ && player.tech_.featuresNativeTextTracks）{
        this.hide（）;
        返回;
      }

      player.on（'fullscreenchange'，bind（this，this.updateDisplay））;

      var tracks = this.options_.playerOptions.tracks || [];

      for（var i = 0; i <tracks.length; i ++）{
        this.player_.addRemoteTextTrack（tracks [i]，true）;
      }

      this.preselectTrack（）;
    }））;
    返回_this;
  }

  / **
  *按照以下优先顺序选择一个轨道：
  *  - 与以前选择的{@link TextTrack}的语言和种类相匹配
  *  - 仅匹配先前选择的{@link TextTrack}语言
  *  - 是第一个默认字幕轨道
  *  - 是第一个默认的说明曲目
  *
  * @listens Player＃loadstart
  * /


  TextTrackDisplay.prototype.preselectTrack = function preelectTrack（）{
    var modes = {caption：1，subtitles：1};
    var trackList = this.player_.textTracks（）;
    var userPref = this.player_.cache_.selectedLanguage;
    var firstDesc = void 0;
    var firstCaptions = void 0;
    var preferredTrack = void 0;

    for（var i = 0; i <trackList.length; i ++）{
      var track = trackList [i];

      if（userPref && userPref.enabled && userPref.language === track.language）{
        //始终选择符合语言和种类的曲目
        if（track.kind === userPref.kind）{
          preferredTrack = track;
          //或选择与语言匹配的第一个曲目
        } else if（！preferredTrack）{
          preferredTrack = track;
        }

        //如果offTextTrackMenuItem被点击，清除所有内容
      } else if（userPref &&！userPref.enabled）{
        preferredTrack = null;
        firstDesc = null;
        firstCaptions = null;
      } else if（track ['default']）{
        if（track.kind ==='descript'&&！firstDesc）{
          firstDesc = track;
        } else if（track.kind in modes &&！firstCaptions）{
          firstCaptions = track;
        }
      }
    }

    // preferredTrack与用户偏好匹配
    //在所有其他轨道上的前提。
    //所以，在第一个默认轨迹之前显示preferredTrack
    //和字幕/标题轨迹之前的描述轨迹
    if（preferredTrack）{
      preferredTrack.mode ='显示';
    } else if（firstCaptions）{
      firstCaptions.mode ='显示';
    } else if（firstDesc）{
      firstDesc.mode ='显示';
    }
  };

  / **
   *将{@link TextTrack}的显示从当前状态转为另一状态。
   *只有两个状态：
   *  - “显示”
   *  - “隐藏”
   *
   * @listens Player＃loadstart
   * /


  TextTrackDisplay.prototype.toggleDisplay = function toggleDisplay（）{
    if（this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks）{
      this.hide（）;
    } else {
      this.show（）;
    }
  };

  / **
   *创建{@link Component}的DOM元素。
   *
   * @return {Element}
   *创建的元素。
   * /


  TextTrackDisplay.prototype.createEl = function createEl（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-text-track-display'
    }，{
      'aria-live'：'off'，
      'aria-atomic'：'真'
    }）;
  };

  / **
   *清除所有显示的{@link TextTrack}。
   * /


  TextTrackDisplay.prototype.clearDisplay = function clearDisplay（）{
    if（typeof window_1.WebVTT ==='function'）{
      window_1.WebVTT.processCues（window_1，[]，this.el_）;
    }
  };

  / **
   *当{@link Player＃texttrackchange}或
   * {@link Player＃fullscreenchange}被触发。
   *
   * @listens Player＃texttrackchange
   * @listens Player＃fullscreenchange
   * /


  TextTrackDisplay.prototype.updateDisplay = function updateDisplay（）{
    var tracks = this.player_.textTracks（）;

    this.clearDisplay（）;

    //跟踪显示优先级模型：如果多个轨道“显示”，
    //显示“显示”的第一个“字幕”或“字幕”轨道，
    //否则显示“显示”的第一个“描述”轨道

    var descriptionsTrack = null;
    var captionsSubtitlesTrack = null;
    var i = tracks.length;

    当我 - ） {
      var track = tracks [i];

      if（track.mode ==='显示'）{
        if（track.kind ==='descript'）{
          DESCRIPTIONTrack = track;
        } else {
          capttionSubtitlesTrack = track;
        }
      }
    }

    if（captionsSubtitlesTrack）{
      if（this.getAttribute（'aria-live'）！=='off'）{
        this.setAttribute（'aria-live'，'off'）;
      }
      this.updateForTrack（captionsSubtitlesTrack）;
    } else if（descriptTrack）{
      if（this.getAttribute（'aria-live'）！=='assertive'）{
        this.setAttribute（'aria-live'，'assertive'）;
      }
      this.updateForTrack（descriptionsTrack）;
    }
  };

  / **
   *将{@link Texttrack}添加到{@link Tech}的{@link TextTrackList}中。
   *
   * @param {TextTrack}曲目
   *要添加到列表中的文本轨道对象。
   * /


  TextTrackDisplay.prototype.updateForTrack = function updateForTrack（track）{
    if（typeof window_1.WebVTT！=='function'||！track.activeCues）{
      返回;
    }

    var overrides = this.player_.textTrackSettings.getValues（）;
    var cues = [];

    for（var _i = 0; _i <track.activeCues.length; _i ++）{
      cues.push（track.activeCues [_i]）;
    }

    window_1.WebVTT.processCues（window_1，cues，this.el_）;

    var i = cues.length;

    当我 - ） {
      var cue = cues [i];

      if（！cue）{
        继续;
      }

      var cueDiv = cue.displayState;

      if（overrides.color）{
        cueDiv.firstChild.style.color = overrides.color;
      }
      if（overrides.textOpacity）{
        tryUpdateStyle（cueDiv.firstChild，'color'，constructColor（overrides.color ||'#fff'，overrides.textOpacity））;
      }
      if（overrides.backgroundColor）{
        cueDiv.firstChild.style.backgroundColor = overrides.backgroundColor;
      }
      if（overrides.backgroundOpacity）{
        tryUpdateStyle（cueDiv.firstChild，'backgroundColor'，constructColor（overrides.backgroundColor ||'＃000'，overrides.backgroundOpacity））;
      }
      if（overrides.windowColor）{
        if（overrides.windowOpacity）{
          tryUpdateStyle（cueDiv，'backgroundColor'，constructColor（overrides.windowColor，overrides.windowOpacity））;
        } else {
          cueDiv.style.backgroundColor = overrides.windowColor;
        }
      }
      if（overrides.edgeStyle）{
        if（overrides.edgeStyle ==='dropshadow'）{
          cueDiv.firstChild.style.textShadow ='2px 2px 3px'+ darkGray +'，2px 2px 4px'+ darkGray +'，2px 2px 5px'+ darkGray;
        } else if（overrides.edgeStyle ==='raise'）{
          cueDiv.firstChild.style.textShadow ='1px 1px'+ darkGray +'，2px 2px'+ darkGray +'，3px 3px'+ darkGray;
        } else if（overrides.edgeStyle ==='depressed'）{
          cueDiv.firstChild.style.textShadow ='1px 1px'+ lightGray +'，0 1px'+ lightGray +'，-1px -1px'+ darkGray +'，0 -1px'+ darkGray;
        } else if（overrides.edgeStyle ==='uniform'）{
          cueDiv.firstChild.style.textShadow ='0 0 4px'+ darkGray +'，0 0 4px'+ darkGray +'，0 0 4px'+ darkGray +'，0 0 4px'+ darkGray;
        }
      }
      if（overrides.fontPercent && overrides.fontPercent！== 1）{
        var fontSize = window_1.parseFloat（cueDiv.style.fontSize）;

        cueDiv.style.fontSize = fontSize * overrides.fontPercent +'px';
        cueDiv.style.height ='auto';
        cueDiv.style.top ='auto';
        cueDiv.style.bottom ='2px';
      }
      if（overrides.fontFamily && overrides.fontFamily！=='default'）{
        if（overrides.fontFamily ==='small-caps'）{
          cueDiv.firstChild.style.fontVariant ='small-caps';
        } else {
          cueDiv.firstChild.style.fontFamily = fontMap [overrides.fontFamily];
        }
      }
    }
  };

  返回TextTrackDisplay;
}（零件）;

Component.registerComponent（'TextTrackDisplay'，TextTrackDisplay）;

/ **
 * @file load-spinner.js
 * /
/ **
 *在等待/装载事件期间使用的装载旋转器。
 *
 * @extends组件
 * /

var LoadingSpinner = function（_Component）{
  inherits（LoadingSpinner，_Component）;

  函数LoadingSpinner（）{
    classCallCheck（this，LoadingSpinner）;
    return possibleConstructorReturn（this，_Component.apply（this，arguments））;
  }

  / **
   *创建“LoadingSpinner”的DOM元素。
   *
   * @return {Element}
   *创建的dom元素。
   * /
  LoadingSpinner.prototype.createEl = function createEl（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-load-spinner'，
      目录：'ltr'
    }）;
  };

  返回LoadingSpinner;
}（零件）;

Component.registerComponent（'LoadingSpinner'，LoadingSpinner）;

/ **
 * @file button.js
 * /
/ **
 *所有按钮的基类。
 *
 * @extends ClickableComponent
 * /

var Button = function（_ClickableComponent）{
  inherits（Button，_ClickableComponent）;

  function Button（）{
    classCallCheck（this，Button）;
    return possibleConstructorReturn（this，_ClickableComponent.apply（this，arguments））;
  }

  / **
   *创建“Button”的DOM元素。
   *
   * @param {string} [tag =“button”]
   *元素的节点类型。这个论点是IGNORED：不管怎样
   *通过，它将始终创建一个`button`元素。
   *
   * @param {Object} [props = {}]
   *应该在元素上设置的属性对象。
   *
   * @param {Object} [attributes = {}]
   *应该在元素上设置的属性对象。
   *
   * @return {Element}
   *创建的元素。
   * /
  Button.prototype.createEl = function createEl（tag）{
    var props = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
    var attributes = arguments.length> 2 && arguments [2]！== undefined？参数[2]：{};

    tag ='button';

    props = assign（{
      innerHTML：'<span aria-hidden =“true”class =“vjs-icon-placeholder”> </ span>'，
      className：this.buildCSSClass（）
    }， 道具）;

    //添加按钮元素的属性
    attributes = assign（{

      //必要，因为默认按钮类型是“提交”
      'type'：'button'，

      //让屏幕阅读器用户知道按钮的文本可能会改变
      'aria-live'：'礼貌'
    }，属性）;

    var el = Component.prototype.createEl.call（this，tag，props，attributes）;

    this.createControlTextEl（EL）;

    回报
  };

  / **
   *在这个“Button”里添加一个小孩`Component`。
   *
   * @param {string | Component}小孩
   *要添加的小孩的名称或实例。
   *
   * @param {Object} [options = {}]
   *将传递给孩子的选项的键/值存储
   *小孩
   *
   * @return {Component}
   *作为小孩添加的“组件”。当使用字符串时
   *这个过程将创建'Component'。
   *
   *自版本5以来已被删除
   * /


  Button.prototype.addChild = function addChild（child）{
    var options = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};

    var className = this.constructor.name;

    log $ 1.warn（'添加一个可操作的（用户可控）的孩子到一个Button（'+ className +'）不支持;使用ClickableComponent代替'）;

    //避免ClickableComponent的addChild方法生成错误信息
    返回Component.prototype.addChild.call（this，child，options）;
  };

  / **
   *启用“Button”元素，以便可以激活或单击。与此配合使用
   * {@link Button＃disable}。
   * /


  Button.prototype.enable = function enable（）{
    _ClickableComponent.prototype.enable.call（本）;
    this.el_.removeAttribute（ '禁用'）;
  };

  / **
   *启用“Button”元素，使其无法激活或单击。与此配合使用
   * {@link Button＃enable}。
   * /


  Button.prototype.disable = function disable（）{
    _ClickableComponent.prototype.disable.call（本）;
    this.el_.setAttribute（'disabled'，'disabled'）;
  };

  / **
   *当“Button”具有焦点并且通过键触发“keydown”时，这被调用
   * 按。
   *
   * @param {EventTarget〜Event}事件
   *引起此函数调用的事件。
   *
   * @listens keydown
   * /


  Button.prototype.handleKeyPress = function handleKeyPress（event）{

    //忽略空格（32）或Enter（13）键操作，由浏览器处理按钮。
    if（event.which === 32 || event.which === 13）{
      返回;
    }

    //通过不支持的键的按键处理
    _ClickableComponent.prototype.handleKeyPress.call（this，event）;
  };

  返回按钮;
}（ClickableComponent）;

Component.registerComponent（'Button'，Button）;

/ **
 * @file big-play-button.js
 * /
/ **
 *在播放视频之前显示的初始播放按钮。隐藏的
 *“BigPlayButton”通过CSS和“Player”状态完成。
 *
 * @extends按钮
 * /

var BigPlayButton = function（_Button）{
  继承（BigPlayButton，_Button）;

  功能BigPlayButton（player，options）{
    classCallCheck（this，BigPlayButton）;

    var _this = possibleConstructorReturn（this，_Button.call（this，player，options））;

    _this.mouseused_ = false;

    _this.on（'mousedown'，_this.handleMouseDown）;
    返回_this;
  }

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。始终返回'vjs-big-play-button'。
   * /


  BigPlayButton.prototype.buildCSSClass = function buildCSSClass（）{
    return'vjs-big-play-button';
  };

  / **
   *当“BigPlayButton”“点击”时，这被调用。请参阅{@link ClickableComponent}
   *有关点击可以做的更详细的信息。
   *
   * @param {EventTarget〜Event}事件
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * /


  BigPlayButton.prototype.handleClick = function handleClick（event）{
    var playPromise = this.player_.play（）;

    //如果通过鼠标点击，请提前退出
    if（this.mouseused_ && event.clientX && event.clientY）{
      返回;
    }

    var cb = this.player_.getChild（'controlBar'）;
    var playToggle = cb && cb.getChild（'playToggle'）;

    if（！playToggle）{
      this.player_.focus（）;
      返回;
    }

    var playFocus = function playFocus（）{
      返回playToggle.focus（）;
    };

    if（playPromise && playPromise.then）{
      var ignoreRejectedPlayPromise = function ignoreRejectedPlayPromise（）{};

      playPromise.then（playFocus，ignoreRejectedPlayPromise）;
    } else {
      this.setTimeout（playFocus，1）;
    }
  };

  BigPlayButton.prototype.handleKeyPress = function handleKeyPress（event）{
    this.mouseused_ = false;

    _Button.prototype.handleKeyPress.call（this，event）;
  };

  BigPlayButton.prototype.handleMouseDown = function handleMouseDown（event）{
    this.mouseused_ = true;
  };

  返回BigPlayButton;
}（按钮）;

/ **
 *应显示在“BigPlayButton”控件上的文本。添加到本地化。
 *
 * @type {string}
 * @私人的
 * /


BigPlayButton.prototype.controlText_ ='播放视频';

Component.registerComponent（'BigPlayButton'，BigPlayButton）;

/ **
 * @file close-button.js
 * /
/ **
 *“CloseButton”是一个“{@link Button}”，在此时触发“close”事件
 *它被点击。
 *
 * @extends按钮
 * /

var CloseButton = function（_Button）{
  inherits（CloseButton，_Button）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能CloseButton（player，options）{
    classCallCheck（this，CloseButton）;

    var _this = possibleConstructorReturn（this，_Button.call（this，player，options））;

    _this.controlText（options && options.controlText || _this.localize（'Close'））;
    返回_this;
  }

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。
   * /


  CloseButton.prototype.buildCSSClass = function buildCSSClass（）{
    return'vjs-close-button'+ _Button.prototype.buildCSSClass.call（this）;
  };

  / **
   *当“CloseButton”被点击时，这被调用。看到
   * {@link ClickableComponent＃handleClick}了解更多信息
   *触发
   *
   * @param {EventTarget〜Event}事件
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * @fires CloseButton＃close
   * /


  CloseButton.prototype.handleClick = function handleClick（event）{

    / **
     *点击“CloseButton”时触发。
     *
     * @event CloseButton＃close
     * @type {EventTarget〜Event}
     *
     * @property {boolean} [bubbles = false]
     *设置为false，以使close事件不发生
     如果没有听众，就会发泄到父母身上
     * /
    this.trigger（{type：'close'，bubbles：false}）;
  };

  返回CloseButton;
}（按钮）;

Component.registerComponent（'CloseButton'，CloseButton）;

/ **
 * @file play-toggle.js
 * /
/ **
 *按钮可在播放和暂停之间切换。
 *
 * @extends按钮
 * /

var PlayToggle = function（_Button）{
  继承（PlayToggle，_Button）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能PlayToggle（播放器，选项）{
    classCallCheck（这是PlayToggle）;

    var _this = possibleConstructorReturn（this，_Button.call（this，player，options））;

    _this.on（player，'play'，_this.handlePlay）;
    _this.on（player，'pause'，_this.handlePause）;
    _this.on（玩家，'结束'，_this.handleEnded）;
    返回_this;
  }

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。
   * /


  PlayToggle.prototype.buildCSSClass = function buildCSSClass（）{
    return'vjs-play-control'+ _Button.prototype.buildCSSClass.call（this）;
  };

  / **
   *当“PlayToggle”被“点击”时被调用。看到
   * {@link ClickableComponent}了解更多关于点击次数的详细信息。
   *
   * @param {EventTarget〜Event} [event]
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * /


  PlayToggle.prototype.handleClick = function handleClick（event）{
    if（this.player_.paused（））{
      this.player_.play（）;
    } else {
      this.player_.pause（）;
    }
  };

  / **
   *添加vjs播放类到元素，以便它可以改变外观。
   *
   * @param {EventTarget〜Event} [event]
   *导致此函数运行的事件。
   *
   * @listens玩家＃玩
   * /


  PlayToggle.prototype.handlePlay = function handlePlay（event）{
    this.removeClass（ 'VJS端'）;
    this.removeClass（ 'VJS-暂停'）;
    this.addClass（ 'VJS扮演'）;
    //将按钮文本更改为“暂停”
    this.controlText（ '暂停'）;
  };

  / **
   *将vjs-paused类添加到元素中，以便可以更改外观。
   *
   * @param {EventTarget〜Event} [event]
   *导致此函数运行的事件。
   *
   * @listens播放器＃暂停
   * /


  PlayToggle.prototype.handlePause = function handlePause（event）{
    this.removeClass（ 'VJS扮演'）;
    this.addClass（ 'VJS-暂停'）;
    //将按钮文本更改为“播放”
    this.controlText（ '播放'）;
  };

  / **
   *将vjs-ends类添加到元素，以便它可以改变外观
   *
   * /


  PlayToggle.prototype.handleEnded = function handleEnded（event）{
    this.removeClass（ 'VJS扮演'）;
    this.addClass（ 'VJS端'）;
    //将按钮文本更改为“Replay”
    this.controlText（ '重播'）;
  };

  返回PlayToggle;
}（按钮）;

/ **
 *应该显示在“PlayToggle”控件上的文本。增加了本地化。
 *
 * @type {string}
 * @私人的
 * /


PlayToggle.prototype.controlText_ ='Play';

Component.registerComponent（'PlayToggle'，PlayToggle）;

/ **
 * @file format-time.js
 * @module格式时间
 * /

/ **
 *格式化秒作为时间字符串，H：MM：SS或M：SS。提供指南（秒）
 *将迫使一些前导零覆盖指南的长度。
 *
 * @param {number}秒
 *要变成字符串的秒数
 *
 * @param {number}指南
 *数字（以秒为单位）对字符串进行建模
 *
 * @return {string}
 *时间格式为H：MM：SS或M：SS
 * /
function formatTime（seconds）{
  var guide = arguments.length> 1 && arguments [1]！== undefined？参数[1]：秒;

  秒=秒<0？0：秒
  var s = Math.floor（秒％60）;
  var m = Math.floor（seconds / 60％60）;
  var h = Math.floor（seconds / 3600）;
  var gm = Math.floor（guide / 60％60）;
  var gh = Math.floor（guide / 3600）;

  //处理无效时间
  if（isNaN（seconds）|| seconds === Infinity）{
    对于所有的关系运算符（例如<，> =），//' - '是假的，所以这个设置
    //将添加指南指定的最小字段数
    h = m = s =' - ';
  }

  //检查我们是否需要显示时间
  h = h> 0 || gh> 0？h +'：'：'';

  //如果显示小时，我们可能需要添加前导零。
  //始终显示至少一分钟的数字。
  m =（（h || gm> = 10）&& m <10？'0'+ m：m）+'：'

  //检查前导零是否需要秒
  s = s <10？'0'+ s：s;

  返回h + m + s;
}

/ **
 * @file current-time-display.js
 * /
/ **
 *显示当前时间
 *
 * @extends组件
 * /

var CurrentTimeDisplay = function（_Component）{
  inherits（CurrentTimeDisplay，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  function CurrentTimeDisplay（player，options）{
    classCallCheck（this，CurrentTimeDisplay）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.throttledUpdateContent = throttle（bind（_this，_this.updateContent），25）;
    _this.on（player，'timeupdate'，_this.throttledUpdateContent）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  CurrentTimeDisplay.prototype.createEl = function createEl $$ 1（）{
    var el = _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-current-time vjs-time-control vjs-control'
    }）;

    this.contentEl_ = createEl（'div'，{
      className：'vjs-current-time-display'
    }，{
      //告诉屏幕阅读器不会自动读取时间，因为它会改变
      'aria-live'：'off'
    }，createEl（'span'，{
      className：'vjs-control-text'，
      textContent：this.localize（'当前时间'）
    }））;

    this.updateTextNode_（）;
    el.appendChild（this.contentEl_）;
    回报
  };

  / **
   *使用新内容更新“当前时间”文本节点
   *“formattedTime_”属性的内容。
   *
   * @私人的
   * /


  CurrentTimeDisplay.prototype.updateTextNode_ = function updateTextNode_（）{
    if（this.textNode_）{
      this.contentEl_.removeChild（this.textNode_）;
    }
    this.textNode_ = document_1.createTextNode（''+（this.formattedTime_ ||'0:00'））;
    this.contentEl_.appendChild（this.textNode_）;
  };

  / **
   *更新当前时间显示
   *
   * @param {EventTarget〜Event} [event]
   *导致此函数运行的“timeupdate”事件。
   *
   * @listens Player＃timeupdate
   * /


  CurrentTimeDisplay.prototype.updateContent = function updateContent（event）{
    //允许平滑擦洗，当玩家无法跟上时。
    var time = this.player_.scrubbing（）？this.player_.getCache（）。currentTime：this.player_.currentTime（）;
    var formattedTime = formatTime（time，this.player_.duration（））;

    if（formattedTime！== this.formattedTime_）{
      this.formattedTime_ = formattedTime;
      this.requestAnimationFrame（this.updateTextNode_）;
    }
  };

  return CurrentTimeDisplay;
}（零件）;

Component.registerComponent（'CurrentTimeDisplay'，CurrentTimeDisplay）;

/ **
 * @file duration-display.js
 * /
/ **
 *显示持续时间
 *
 * @extends组件
 * /

var DurationDisplay = function（_Component）{
  inherits（DurationDisplay，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  function DurationDisplay（player，options）{
    classCallCheck（this，DurationDisplay）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.throttledUpdateContent = throttle（bind（_this，_this.updateContent），25）;

    _this.on（玩家，['durationchange'，

    //还要监听timeupdate和loadedmetadata，因为删除那些
    //听众可能会破坏依赖的应用程序/库。这些
    //可能会删除7.0。
    'loadedmetadata'，'timeupdate']，_this.throttledUpdateContent）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  DurationDisplay.prototype.createEl = function createEl $$ 1（）{
    var el = _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-duration vjs-time-control vjs-control'
    }）;

    this.contentEl_ = createEl（'div'，{
      className：'vjs-duration-display'
    }，{
      //告诉屏幕阅读器不会自动读取时间，因为它会改变
      'aria-live'：'off'
    }，createEl（'span'，{
      className：'vjs-control-text'，
      textContent：this.localize（'持续时间'）
    }））;

    this.updateTextNode_（）;
    el.appendChild（this.contentEl_）;
    回报
  };

  / **
   *使用新内容更新“当前时间”文本节点
   *“formattedTime_”属性的内容。
   *
   * @私人的
   * /


  DurationDisplay.prototype.updateTextNode_ = function updateTextNode_（）{
    if（this.textNode_）{
      this.contentEl_.removeChild（this.textNode_）;
    }
    this.textNode_ = document_1.createTextNode（''+（this.formattedTime_ ||'0:00'））;
    this.contentEl_.appendChild（this.textNode_）;
  };

  / **
   *更新持续时间显示。
   *
   * @param {EventTarget〜Event} [event]
   *造成的`durationchange`，`timeupdate`或`loadedmetadata`事件
   *这个函数被调用。
   *
   * @listens Player＃durationchange
   * @listens Player＃timeupdate
   * @listens Player＃loadedmetadata
   * /


  DurationDisplay.prototype.updateContent = function updateContent（event）{
    var duration = this.player_.duration（）;

    if（duration && this.duration_！== duration）{
      this.duration_ =持续时间
      this.formattedTime_ = formatTime（duration）;
      this.requestAnimationFrame（this.updateTextNode_）;
    }
  };

  返回DurationDisplay;
}（零件）;

Component.registerComponent（'DurationDisplay'，DurationDisplay）;

/ **
 * @file time-divider.js
 * /
/ **
 *当前时间和持续时间之间的分隔符。
 *如果设计中不需要，可以隐藏。
 *
 * @extends组件
 * /

var TimeDivider = function（_Component）{
  继承（TimeDivider，_Component）;

  function TimeDivider（）{
    classCallCheck（this，TimeDivider）;
    return possibleConstructorReturn（this，_Component.apply（this，arguments））;
  }

  / **
   *创建组件的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /
  TimeDivider.prototype.createEl = function createEl（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-time-control vjs-time-divider'，
      innerHTML：'<div> <span> / </ span> </ div>
    }）;
  };

  返回TimeDivider;
}（零件）;

Component.registerComponent（'TimeDivider'，TimeDivider）;

/ **
 * @file remaining-time-display.js
 * /
/ **
 *显示视频中剩余的时间
 *
 * @extends组件
 * /

var RemainingTimeDisplay = function（_Component）{
  继承（RemainingTimeDisplay，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能RemainingTimeDisplay（player，options）{
    classCallCheck（this，RemainingTimeDisplay）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.throttledUpdateContent = throttle（bind（_this，_this.updateContent），25）;
    _this.on（player，['timeupdate'，'durationchange']，_this.throttledUpdateContent）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  RemainingTimeDisplay.prototype.createEl = function createEl $$ 1（）{
    var el = _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-remaining-time vjs-time-control vjs-control'
    }）;

    this.contentEl_ = createEl（'div'，{
      className：'vjs-remaining-time-display'
    }，{
      //告诉屏幕阅读器不会自动读取时间，因为它会改变
      'aria-live'：'off'
    }，createEl（'span'，{
      className：'vjs-control-text'，
      textContent：this.localize（'剩余时间'）
    }））;

    this.updateTextNode_（）;
    el.appendChild（this.contentEl_）;
    回报
  };

  / **
   *使用新内容更新“剩余时间”文本节点
   *“formattedTime_”属性的内容。
   *
   * @私人的
   * /


  RemainingTimeDisplay.prototype.updateTextNode_ = function updateTextNode_（）{
    if（this.textNode_）{
      this.contentEl_.removeChild（this.textNode_）;
    }
    this.textNode_ = document_1.createTextNode（' - '+（this.formattedTime_ ||'0:00'））;
    this.contentEl_.appendChild（this.textNode_）;
  };

  / **
   *更新剩余时间显示。
   *
   * @param {EventTarget〜Event} [event]
   *导致运行的“timeupdate”或“durationchange”事件。
   *
   * @listens Player＃timeupdate
   * @listens Player＃durationchange
   * /


  RemainingTimeDisplay.prototype.updateContent = function updateContent（event）{
    if（this.player_.duration（））{
      var formattedTime = formatTime（this.player_.remainingTime（））;

      if（formattedTime！== this.formattedTime_）{
        this.formattedTime_ = formattedTime;
        this.requestAnimationFrame（this.updateTextNode_）;
      }
    }
  };

  返回RemainingTimeDisplay;
}（零件）;

Component.registerComponent（'RemainingTimeDisplay'，RemainingTimeDisplay）;

/ **
 * @file live-display.js
 * /
// TODO  -  Future让它点击捕捉生活

/ **
 *持续时间为无穷大时显示实时指示。
 *
 * @extends组件
 * /

var LiveDisplay = function（_Component）{
  继承（LiveDisplay，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能LiveDisplay（播放器，选项）{
    classCallCheck（this，LiveDisplay）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.updateShowing（）;
    _this.on（_this.player（），'durationchange'，_this.updateShowing）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  LiveDisplay.prototype.createEl = function createEl $$ 1（）{
    var el = _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-live-control vjs-control'
    }）;

    this.contentEl_ = createEl（'div'，{
      className：'vjs-live-display'，
      innerHTML：'<span class =“vjs-control-text”>'+ this.localize（'Stream Type'）+'</ span>'+ this.localize（'LIVE'
    }，{
      'aria-live'：'off'
    }）;

    el.appendChild（this.contentEl_）;
    回报
  };

  / **
   *查看持续时间，看看LiveDisplay是否应该显示。然后显示/隐藏
   * 相应地
   *
   * @param {EventTarget〜Event} [event]
   *导致此函数运行的{@link Player＃durationchange}事件。
   *
   * @listens Player＃durationchange
   * /


  LiveDisplay.prototype.updateShowing = function updateShowing（event）{
    if（this.player（）。duration（）=== Infinity）{
      this.show（）;
    } else {
      this.hide（）;
    }
  };

  返回LiveDisplay;
}（零件）;

Component.registerComponent（'LiveDisplay'，LiveDisplay）;

/ **
 * @file slider.js
 * /
/ **
 *滑块的基本功能。可垂直或水平。
 *例如，视频上的音量栏或搜索栏是滑块。
 *
 * @extends组件
 * /

var Slider = function（_Component）{
  继承（Slider，_Component）;

  / **
   *创建一个这个类的实例
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能滑块（播放器，选项）{
    classCallCheck（this，Slider）;

    //将属性名称设置为bar以匹配Slider类正在寻找的子级
    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.bar = _this.getChild（_this.options_.barName）;

    //根据滑块类型，在滑块上设置水平或垂直类
    _this.vertical（!! _ this.options_.vertical）;

    _this.on（'mousedown'，_this.handleMouseDown）;
    _this.on（'touchstart'，_this.handleMouseDown）;
    _this.on（'focus'，_this.handleFocus）;
    _this.on（'blur'，_this.handleBlur）;
    _this.on（'click'，_this.handleClick）;

    _this.on（玩家，'controlsvisible'，_this.update）;

    if（_this.playerEvent）{
      _this.on（player，_this.playerEvent，_this.update）;
    }
    返回_this;
  }

  / **
   *创建“Button”的DOM元素。
   *
   * @param {string}类型
   *要创建的元素的类型。
   *
   * @param {Object} [props = {}]
   *对象形式的属性列表。
   *
   * @param {Object} [attributes = {}]
   *对象形式的属性列表。
   *
   * @return {Element}
   *创建的元素。
   * /


  Slider.prototype.createEl = function createEl $$ 1（type）{
    var props = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
    var attributes = arguments.length> 2 && arguments [2]！== undefined？参数[2]：{};

    //将slider元素类添加到所有子类
    props.className = props.className +'vjs-slider';
    props = assign（{
      tabIndex：0
    }， 道具）;

    attributes = assign（{
      'role'：'slider'，
      'aria-valuenow'：0，
      'aria-valuemin'：0，
      'aria-valuemax'：100，
      'tabIndex'：0
    }，属性）;

    return _Component.prototype.createEl.call（this，type，props，attributes）;
  };

  / **
   *在“滑块”上处理“mousedown”或“touchstart”事件。
   *
   * @param {EventTarget〜Event}事件
   *`mousedown`或`touchstart`事件触发了这个功能
   *
   * @静音mousedown
   * @listens touchstart
   * @fires Slider＃slideractive
   * /


  Slider.prototype.handleMouseDown = function handleMouseDown（event）{
    var doc = this.bar.el_.ownerDocument;

    event.preventDefault（）;
    blockTextSelection（）;

    this.addClass（ 'VJS滑动'）;
    / **
     *当滑块处于活动状态时触发
     *
     * @event滑块＃滑块
     * @type {EventTarget〜Event}
     * /
    this.trigger（ 'slideractive'）;

    this.on（doc，'mousemove'，this.handleMouseMove）;
    this.on（doc，'mouseup'，this.handleMouseUp）;
    this.on（doc，'touchmove'，this.handleMouseMove）;
    this.on（doc，'touchend'，this.handleMouseUp）;

    this.handleMouseMove（事件）;
  };

  / **
   *在这个“滑块”处理'mousemove'，'touchmove'和'mousedown`事件。
   *“mousemove”和“touchmove”事件只会在此期间触发此功能
   *`mousedown`和'touchstart'。这是由于{@link Slider＃handleMouseDown}和
   * {@link Slider＃handleMouseUp}。
   *
   * @param {EventTarget〜Event}事件
   *`mousedown`，`mousemove`，`touchstart`或`touchmove`触发事件
   *这个功能
   *
   * @listens mousemove
   * @静音touchmove
   * /


  Slider.prototype.handleMouseMove = function handleMouseMove（event）{};

  / **
   *在“Slider”上处理`mouseup`或`touchend`事件。
   *
   * @param {EventTarget〜Event}事件
   *`mouseup`或`touchend`触发这个功能的事件。
   *
   * @listens touchend
   * @listens mouseup
   * @fires Slider＃sliderinactive
   * /


  Slider.prototype.handleMouseUp = function handleMouseUp（）{
    var doc = this.bar.el_.ownerDocument;

    unblockTextSelection（）;

    this.removeClass（ 'VJS滑动'）;
    / **
     *当滑块不再处于活动状态时触发。
     *
     * @event Slider＃sliderinactive
     * @type {EventTarget〜Event}
     * /
    this.trigger（ 'sliderinactive'）;

    this.off（doc，'mousemove'，this.handleMouseMove）;
    this.off（doc，'mouseup'，this.handleMouseUp）;
    this.off（doc，'touchmove'，this.handleMouseMove）;
    this.off（doc，'touchend'，this.handleMouseUp）;

    this.update（）;
  };

  / **
   *更新'Slider'的进度条。
   *
   * @returns {number}
   *进度条表示为进度的百分比
   *号码从0到1。
   * /


  Slider.prototype.update = function update（）{

    //在VolumeBar init中，我们有一个弹出和更新的更新的setTimeout
    //到执行堆栈的末尾。之前玩家被摧毁
    //更新会导致错误
    if（！this.el_）{
      返回;
    }

    //如果擦除，我们可以使用缓存的值来使句柄保持
    //与用户的鼠标。在HTML5浏览器上，擦洗真的很顺利，但是
    //一些Flash播放器速度很慢，所以我们可能以后想要使用。
    // var progress =（this.player_.scrubbing（））？this.player_.getCache（）。currentTime / this.player_.duration（）：this.player_.currentTime（）/ this.player_.duration（）;
    var progress = this.getPercent（）;
    var bar = this.bar;

    //如果没有吧
    if（！bar）{
      返回;
    }

    //防止持续时间和其他分裂问题
    if（typeof progress！=='number'|| progress！== progress || progress <0 || progress === Infinity）{
      进度= 0;
    }

    //转换为设置的百分比
    var percentage =（progress * 100）.toFixed（2）+'％';
    var style = bar.el（）。style;

    //设置新的栏宽或高
    if（this.vertical（））{
      style.height = percent;
    } else {
      style.width = percent;
    }

    回报进度;
  };

  / **
   *计算滑块的距离
   *
   * @param {EventTarget〜Event}事件
   *导致此函数运行的事件。
   *
   * @return {number}
   *滑块的当前位置。
   *  -  postition.x用于垂直'滑块'
   *  - 对于水平的“Slider”来说，postition.y
   * /


  Slider.prototype.calculateDistance = function calculateDistance（event）{
    var position = getPointerPosition（this.el_，event）;

    if（this.vertical（））{
      返回位置
    }
    return position.x;
  };

  / **
   *在这个“滑块”上处理一个`focus`事件。
   *
   * @param {EventTarget〜Event}事件
   *导致此函数运行的`focus`事件。
   *
   * @listens焦点
   * /


  Slider.prototype.handleFocus = function handleFocus（）{
    this.on（this.bar.el_.ownerDocument，'keydown'，this.handleKeyPress）;
  };

  / **
   *在“Slider”上处理“keydown”事件。手表左，钻，上，下
   * 方向键。仅当滑块具有焦点时才会调用此功能。看到
   * {@link Slider＃handleFocus}和{@link Slider＃handleBlur}。
   *
   * @param {EventTarget〜Event}事件
   *导致此函数运行的`keydown`事件。
   *
   * @listens keydown
   * /


  Slider.prototype.handleKeyPress = function handleKeyPress（event）{
    //左下箭头
    if（event.which === 37 || event.which === 40）{
      event.preventDefault（）;
      this.stepBack（）;

      //向上和向右箭头
    } else if（event.which === 38 || event.which === 39）{
      event.preventDefault（）;
      this.stepForward（）;
    }
  };

  / **
   *在这个“滑块”上处理一个`blur`事件。
   *
   * @param {EventTarget〜Event}事件
   *导致该函数运行的`blur`事件。
   *
   * @静音模糊
   * /

  Slider.prototype.handleBlur = function handleBlur（）{
    this.off（this.bar.el_.ownerDocument，'keydown'，this.handleKeyPress）;
  };

  / **
   *滑块上的点击事件侦听器，用于防止点击
   *从起泡到父元素，如按钮菜单。
   *
   * @param {Object}事件
   *导致此对象运行的事件
   * /


  Slider.prototype.handleClick = function handleClick（event）{
    event.stopImmediatePropagation（）;
    event.preventDefault（）;
  };

  / **
   *如果滑块在垂直方向为水平，则获取/设置
   *
   * @param {boolean} [bool]
   *  - 如果滑块是垂直的，则为true，
   *  - 假水平
   *
   * @return {boolean}
   *  - 如果滑块是垂直的，则为true
   *  - 如果滑块是水平的，则为false
   * /


  Slider.prototype.vertical = function vertical（bool）{
    if（bool === undefined）{
      返回this.vertical_ || 假;
    }

    this.vertical_ = !! bool;

    if（this.vertical_）{
      this.addClass（ 'VJS滑块垂直'）;
    } else {
      this.addClass（ 'VJS滑块水平'）;
    }
  };

  返回滑块
}（零件）;

Component.registerComponent（'Slider'，Slider）;

/ **
 * @file load-progress-bar.js
 * /
/ **
 *显示加载进度
 *
 * @extends组件
 * /

var LoadProgressBar = function（_Component）{
  inherited（LoadProgressBar，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  函数LoadProgressBar（player，options）{
    classCallCheck（这是LoadProgressBar）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.partEls_ = [];
    _this.on（player，'progress'，_this.update）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  LoadProgressBar.prototype.createEl = function createEl $$ 1（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-load-progress'，
      innerHTML：'<span class =“vjs-control-text”> <span>'+ this.localize（'Loaded'）+'</ span>：0％</ span>
    }）;
  };

  / **
   *更新进度条
   *
   * @param {EventTarget〜Event} [event]
   *导致该函数运行的`progress`事件。
   *
   * @listens玩家＃进度
   * /


  LoadProgressBar.prototype.update = function update（event）{
    var buffered = this.player_.buffered（）;
    var duration = this.player_.duration（）;
    var bufferedEnd = this.player_.bufferedEnd（）;
    var children = this.partEls_;

    //获取一个时间的百分比宽度，与总结束相比
    var percentify = function percentify（time，end）{
      //没有NaN
      var percent = time / end || 0;

      return（percent> = 1？1：percent）* 100 +'％';
    };

    //更新进度条的宽度
    this.el_.style.width = percentify（bufferedEnd，duration）;

    //添加子元素来表示个别缓存的时间范围
    for（var i = 0; i <buffered.length; i ++）{
      var start = buffered.start（i）;
      var end = buffered.end（i）;
      var part = children [i];

      if（！part）{
        part = this.el_.appendChild（createEl（））;
        儿童[i] =部分;
      }

      //根据进度条的宽度设置百分比（bufferedEnd）
      part.style.left = percentify（start，bufferedEnd）;
      part.style.width = percentify（end-start，bufferedEnd）;
    }

    //删除未使用的缓冲区域元素
    for（var _i = children.length; _i> buffered.length; _i--）{
      this.el_.removeChild（children [_i  -  1]）;
    }
    children.length = buffered.length;
  };

  返回LoadProgressBar;
}（零件）;

Component.registerComponent（'LoadProgressBar'，LoadProgressBar）;

/ **
 * @file time-tooltip.js
 * /
/ **
 *时间工具提示显示进度条上方的时间。
 *
 * @extends组件
 * /

var TimeTooltip = function（_Component）{
  继承（TimeTooltip，_Component）;

  函数TimeTooltip（）{
    classCallCheck（this，TimeTooltip）;
    return possibleConstructorReturn（this，_Component.apply（this，arguments））;
  }

  / **
   *创建时间工具提示DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /
  TimeTooltip.prototype.createEl = function createEl $$ 1（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-time-tooltip'
    }）;
  };

  / **
   *更新相对于“SeekBar”的时间工具提示的位置。
   *
   * @param {Object} seekBarRect
   * {@link SeekBar}元素的“ClientRect”。
   *
   * @param {number} seekBarPoint
   *从0到1的数字，代表水平参考点
   *从{@link SeekBar}的左边缘
   * /


  TimeTooltip.prototype.update = function update（seekBarRect，seekBarPoint，content）{
    var tooltipRect = getBoundingClientRect（this.el_）;
    var playerRect = getBoundingClientRect（this.player_.el（））;
    var seekBarPointPx = seekBarRect.width * seekBarPoint;

    //如果没有rect，则不做任何操作
    //例如，如果播放器不在DOM中进行测试
    if（！playerRect ||！tooltipRect）{
      返回;
    }

    //这是边界内可用的“seekBarPoint”剩余空间
    //的播放器。我们计算播放器左边缘之间的任何间隙
    //和“SeekBar”的左边缘，并添加像素数
    //“SeekBar”，然后再点击“seekBarPoint”
    var spaceLeftOfPoint = seekBarRect.left  -  playerRect.left + seekBarPointPx;

    //这是在边界内可用的“seekBarPoint”的空格
    //的播放器。我们从`seekBarPoint`计算像素数
    //到“SeekBar”的右边缘，并添加到之间的任何差距
    //“SeekBar”和播放器的右边缘。
    var spaceRightOfPoint = seekBarRect.width  -  seekBarPointPx +（playerRect.right  -  seekBarRect.right）;

    //这是需要拉取工具提示的像素数
    //进一步向右，将其置于“seekBarPoint”上。
    var pullTooltipBy = tooltipRect.width / 2;

    //根据...调整左侧或右侧的“pullTooltipBy”距离
    //上面的空间计算的结果。
    if（spaceLeftOfPoint <pullTooltipBy）{
      pullTooltipBy + = pullTooltipBy  -  spaceLeftOfPoint;
    } else if（spaceRightOfPoint <pullTooltipBy）{
      pullTooltipBy = spaceRightOfPoint;
    }

    //由于十进制/基于比例的计算的不精确性和变化
    //舍入行为，有些情况下间距调整关闭
    //一个或两个。这为这些计算增加了保险。
    if（pullTooltipBy <0）{
      pullTooltipBy = 0;
    } else if（pullTooltipBy> tooltipRect.width）{
      pullTooltipBy = tooltipRect.width;
    }

    this.el_.style.right =' - '+ pullTooltipBy +'px';
    textContent（this.el_，content）;
  };

  返回TimeTooltip;
}（零件）;

Component.registerComponent（'TimeTooltip'，TimeTooltip）;

/ **
 * @file play-progress-bar.js
 * /
/ **
 *由{@link SeekBar}用于显示媒体播放进度
 * {@link ProgressControl}。
 *
 * @extends组件
 * /

var PlayProgressBar = function（_Component）{
  继承（PlayProgressBar，_Component）;

  功能PlayProgressBar（）{
    classCallCheck（这是PlayProgressBar）;
    return possibleConstructorReturn（this，_Component.apply（this，arguments））;
  }

  / **
   *为此类创建DOM元素。
   *
   * @return {Element}
   *创建的元素。
   * /
  PlayProgressBar.prototype.createEl = function createEl（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-play-progress vjs-slider-bar'，
      innerHTML：'<span class =“vjs-control-text”> <span>'+ this.localize（'Progress'）+'</ span>：0％</ span>
    }）;
  };

  / **
   *对其自己的DOM以及其DOM的更新进行排队
   * {@link TimeTooltip}小孩。
   *
   * @param {Object} seekBarRect
   * {@link SeekBar}元素的“ClientRect”。
   *
   * @param {number} seekBarPoint
   *从0到1的数字，代表水平参考点
   *从{@link SeekBar}的左边缘
   * /


  PlayProgressBar.prototype.update = function update（seekBarRect，seekBarPoint）{
    var _this2 = this;

    //如果有现有的rAF ID，请取消它，这样我们就不会排队。
    if（this.rafId_）{
      this.cancelAnimationFrame（this.rafId_）;
    }

    this.rafId_ = this.requestAnimationFrame（function（）{
      var time = _this2.player_.scrubbing（）？_this2.player_.getCache（）。currentTime：_this2.player_.currentTime（）;

      var content = formatTime（time，_this2.player_.duration（））;
      var timeTooltip = _this2.getChild（'timeTooltip'）;

      if（timeTooltip）{
        timeTooltip.update（seekBarRect，seekBarPoint，content）;
      }
    }）;
  };

  返回PlayProgressBar;
}（零件）;

/ **
 * {@link PlayProgressBar}的默认选项。
 *
 * @type {Object}
 * @私人的
 * /


PlayProgressBar.prototype.options_ = {
  孩子：[]
};

//时间工具提示不应该添加到移动设备或IE8上的播放器
如果（（！IE_VERSION || IE_VERSION> 8）&&！！IS_IOS &&！IS_ANDROID）{
  PlayProgressBar.prototype.options_.children.push（ 'timeTooltip'）;
}

Component.registerComponent（'PlayProgressBar'，PlayProgressBar）;

/ **
 * @file mouse-time-display.js
 * /
/ **
 * {@link MouseTimeDisplay}组件跟踪鼠标移动
 * {@link ProgressControl}。它显示一个指标和一个{@link TimeTooltip}
 *表示一个给定点表示的时间
 * {@link ProgressControl}。
 *
 * @extends组件
 * /

var MouseTimeDisplay = function（_Component）{
  inherits（MouseTimeDisplay，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加到的{@link Player}。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能MouseTimeDisplay（player，options）{
    classCallCheck（这是MouseTimeDisplay）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.update = throttle（bind（_this，_this.update），25）;
    返回_this;
  }

  / **
   *为此类创建DOM元素。
   *
   * @return {Element}
   *创建的元素。
   * /


  MouseTimeDisplay.prototype.createEl = function createEl（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-mouse-display'
    }）;
  };

  / **
   *对其自己的DOM以及其DOM的更新进行排队
   * {@link TimeTooltip}小孩。
   *
   * @param {Object} seekBarRect
   * {@link SeekBar}元素的“ClientRect”。
   *
   * @param {number} seekBarPoint
   *从0到1的数字，代表水平参考点
   *从{@link SeekBar}的左边缘
   * /


  MouseTimeDisplay.prototype.update = function update（seekBarRect，seekBarPoint）{
    var _this2 = this;

    //如果有现有的rAF ID，请取消它，这样我们就不会排队。
    if（this.rafId_）{
      this.cancelAnimationFrame（this.rafId_）;
    }

    this.rafId_ = this.requestAnimationFrame（function（）{
      var duration = _this2.player_.duration（）;
      var content = formatTime（seekBarPoint * duration，duration）;

      _this2.el_.style.left = seekBarRect.width * seekBarPoint +'px';
      _this2.getChild（'timeTooltip'）。update（seekBarRect，seekBarPoint，content）;
    }）;
  };

  返回MouseTimeDisplay;
}（零件）;

/ **
 * MouseTimeDisplay的默认选项
 *
 * @type {Object}
 * @私人的
 * /


MouseTimeDisplay.prototype.options_ = {
  孩子：['timeTooltip']
};

Component.registerComponent（'MouseTimeDisplay'，MouseTimeDisplay）;

/ **
 * @file seek-bar.js
 * /
//“step *”函数移动时间轴的秒数。
var STEP_SECONDS = 5;

/ **
 *为酒吧和容器寻找进度条。使用{@link PlayProgressBar}
 *作为它的“酒吧”。
 *
 * @extends滑块
 * /

var SeekBar = function（_Slider）{
  继承（SeekBar，_Slider）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  函数SeekBar（player，options）{
    classCallCheck（this，SeekBar）;

    var _this = possibleConstructorReturn（this，_Slider.call（this，player，options））;

    _this.update = throttle（bind（_this，_this.update），50）;
    _this.on（播放器，['timeupdate'，'结束']，_this.update）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  SeekBar.prototype.createEl = function createEl $$ 1（）{
    return _Slider.prototype.createEl.call（this，'div'，{
      className：'vjs-progress-holder'
    }，{
      'aria-label'：this.localize（'进度栏'）
    }）;
  };

  / **
   *更新搜索栏的UI。
   *
   * @param {EventTarget〜Event} [event]
   *导致运行的“timeupdate”或“ends”事件。
   *
   * @listens Player＃timeupdate
   * @listens玩家＃结束
   * /


  SeekBar.prototype.update = function update（）{
    var percent = _Slider.prototype.update.call（this）;
    var duration = this.player_.duration（）;

    //允许平滑擦洗，当玩家无法跟上时。
    var time = this.player_.scrubbing（）？this.player_.getCache（）。currentTime：this.player_.currentTime（）;

    //进度条的机器可读值（百分比完成）
    this.el_.setAttribute（'aria-valuenow'，（percent * 100）.toFixed（2））;

    //进度条的可读取值（时间完成）
    this.el_.setAttribute（'aria-valuetext'，this.localize（'progress bar timing：currentTime = {1} duration = {2}'，[formatTime（time，duration），formatTime（duration，duration）]，' {1} {2}'））;

    //更新“PlayProgressBar”。
    this.bar.update（getBoundingClientRect（this.el_），percent）;

    回报率
  };

  / **
   *获取到目前为止播放的媒体的百分比。
   *
   * @return {number}
   *到目前为止播放的媒体的百分比（0到1）。
   * /


  SeekBar.prototype.getPercent = function getPercent（）{

    //允许平滑擦洗，当玩家无法跟上时。
    var time = this.player_.scrubbing（）？this.player_.getCache（）。currentTime：this.player_.currentTime（）;

    var percent = time / this.player_.duration（）;

    返回百分比> = 1？1：百分比
  };

  / **
   *将鼠标放在搜索栏上
   *
   * @param {EventTarget〜Event}事件
   *导致运行的“mousedown”事件。
   *
   * @静音mousedown
   * /


  SeekBar.prototype.handleMouseDown = function handleMouseDown（event）{
    this.player_.scrubbing（真）;

    this.videoWasPlaying =！this.player_.paused（）;
    this.player_.pause（）;

    _Slider.prototype.handleMouseDown.call（this，event）;
  };

  / **
   *在搜索栏处理鼠标移动
   *
   * @param {EventTarget〜Event}事件
   *导致运行的“mousemove”事件。
   *
   * @listens mousemove
   * /


  SeekBar.prototype.handleMouseMove = function handleMouseMove（event）{
    var newTime = this.calculateDistance（event）* this.player_.duration（）;

    //擦洗时不要让视频结束。
    if（newTime === this.player_.duration（））{
      newTime = newTime  -  0.1;
    }

    //设置新时间（告诉玩家寻找新的时间）
    this.player_.currentTime（NEWTIME）;
  };

  / **
   *将鼠标放在搜索栏上
   *
   * @param {EventTarget〜Event}事件
   *导致运行的“mouseup”事件。
   *
   * @listens mouseup
   * /


  SeekBar.prototype.handleMouseUp = function handleMouseUp（event）{
    _Slider.prototype.handleMouseUp.call（this，event）;

    this.player_.scrubbing（假）;
    if（this.videoWasPlaying）{
      this.player_.play（）;
    }
  };

  / **
   *仅为键盘使用者快速向前移动
   * /


  SeekBar.prototype.stepForward = function stepForward（）{
    this.player_.currentTime（this.player_.currentTime（）+ STEP_SECONDS）;
  };

  / **
   *为仅限键盘的用户移动更快的倒带
   * /


  SeekBar.prototype.stepBack = function stepBack（）{
    this.player_.currentTime（this.player_.currentTime（） -  STEP_SECONDS）;
  };

  / **
   *切换播放器的播放状态
   *在搜索栏中使用enter或空格时，将被调用
   *
   * @param {EventTarget〜Event}事件
   *导致该函数被调用的`keydown`事件
   *
   * /


  SeekBar.prototype.handleAction = function handleAction（event）{
    if（this.player_.paused（））{
      this.player_.play（）;
    } else {
      this.player_.pause（）;
    }
  };

  / **
   *当此SeekBar具有焦点并按下一个键时调用。通过
   *默认情况下，当键为空格或输入时，将调用`this.handleAction`。
   *
   * @param {EventTarget〜Event}事件
   *导致该函数被调用的`keydown`事件。
   *
   * @listens keydown
   * /


  SeekBar.prototype.handleKeyPress = function handleKeyPress（event）{

    //支持空间（32）或Enter（13）键操作来触发点击事件
    if（event.which === 32 || event.which === 13）{
      event.preventDefault（）;
      this.handleAction（事件）;
    } else if（_Slider.prototype.handleKeyPress）{

      //通过不支持的键的按键处理
      _Slider.prototype.handleKeyPress.call（this，event）;
    }
  };

  返回SeekBar;
}（滑块）;

/ **
 *`SeekBar'的默认选项
 *
 * @type {Object}
 * @私人的
 * /


SeekBar.prototype.options_ = {
  孩子：['loadProgressBar'，'playProgressBar']，
  barName：'playProgressBar'
};

// MouseTimeDisplay工具提示不应该添加到移动设备或IE8上的播放器
如果（（！IE_VERSION || IE_VERSION> 8）&&！！IS_IOS &&！IS_ANDROID）{
  SeekBar.prototype.options_.children.splice（1，0，'mouseTimeDisplay'）;
}

/ **
 *当播放器发生此事件时，调用此滑块的更新事件。
 *
 * @type {string}
 * /
SeekBar.prototype.playerEvent ='timeupdate';

Component.registerComponent（'SeekBar'，SeekBar）;

/ **
 * @file progress-control.js
 * /
/ **
 *进度控制组件包含查找栏，加载进度，
 *并发挥进步。
 *
 * @extends组件
 * /

var ProgressControl = function（_Component）{
  inherits（ProgressControl，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  function ProgressControl（player，options）{
    classCallCheck（this，ProgressControl）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.handleMouseMove = throttle（bind（_this，_this.handleMouseMove），25）;
    _this.on（_this.el_，'mousemove'，_this.handleMouseMove）;

    _this.throttledHandleMouseSeek = throttle（bind（_this，_this.handleMouseSeek），25）;
    _this.on（['mousedown'，'touchstart']，_this.handleMouseDown）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  ProgressControl.prototype.createEl = function createEl $$ 1（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-progress-control vjs-control'
    }）;
  };

  / **
   *当鼠标移动“ProgressControl”时，指针位置
   *传递到“MouseTimeDisplay”组件。
   *
   * @param {EventTarget〜Event}事件
   *导致此函数运行的`mousemove`事件。
   *
   * @listen mousemove
   * /


  ProgressControl.prototype.handleMouseMove = function handleMouseMove（event）{
    var seekBar = this.getChild（'seekBar'）;
    var mouseTimeDisplay = seekBar.getChild（'mouseTimeDisplay'）;
    var seekBarEl = seekBar.el（）;
    var seekBarRect = getBoundingClientRect（seekBarEl）;
    var seekBarPoint = getPointerPosition（seekBarEl，event）.x;

    //默认的外观在“SeekBar”的两边有一个间隙。意即
    //有可能触发此行为超出边界
    //“SeekBar”。这确保我们始终保持在它的内部。
    if（seekBarPoint> 1）{
      seekBarPoint = 1;
    } else if（seekBarPoint <0）{
      seekBarPoint = 0;
    }

    if（mouseTimeDisplay）{
      mouseTimeDisplay.update（seekBarRect，seekBarPoint）;
    }
  };

  / **
   * {@link ProgressControl＃handleMouseSeek}侦听器的节​​流版本。
   *
   * @method ProgressControl＃throttledHandleMouseSeek
   * @param {EventTarget〜Event}事件
   *导致此函数运行的`mousemove`事件。
   *
   * @listen mousemove
   * @listen touchmove
   * /

  / **
   *在'ProgressControl'处理`mousemove`或`touchmove`事件。
   *
   * @param {EventTarget〜Event}事件
   *`mousedown`或`touchstart`事件触发了这个功能
   *
   * @listens mousemove
   * @静音touchmove
   * /


  ProgressControl.prototype.handleMouseSeek = function handleMouseSeek（event）{
    var seekBar = this.getChild（'seekBar'）;

    seekBar.handleMouseMove（事件）;
  };

  / **
   *在'ProgressControl'处理`mousedown`或`touchstart`事件。
   *
   * @param {EventTarget〜Event}事件
   *`mousedown`或`touchstart`事件触发了这个功能
   *
   * @静音mousedown
   * @listens touchstart
   * /


  ProgressControl.prototype.handleMouseDown = function handleMouseDown（event）{
    var doc = this.el_.ownerDocument;

    this.on（doc，'mousemove'，this.throttledHandleMouseSeek）;
    this.on（doc，'touchmove'，this.throttledHandleMouseSeek）;
    this.on（doc，'mouseup'，this.handleMouseUp）;
    this.on（doc，'touchend'，this.handleMouseUp）;
  };

  / **
   *在'ProgressControl'处理`mouseup`或`touchend`事件。
   *
   * @param {EventTarget〜Event}事件
   *`mouseup`或`touchend`触发这个功能的事件。
   *
   * @listens touchend
   * @listens mouseup
   * /


  ProgressControl.prototype.handleMouseUp = function handleMouseUp（event）{
    var doc = this.el_.ownerDocument;

    this.off（doc，'mousemove'，this.throttledHandleMouseSeek）;
    this.off（doc，'touchmove'，this.throttledHandleMouseSeek）;
    this.off（doc，'mouseup'，this.handleMouseUp）;
    this.off（doc，'touchend'，this.handleMouseUp）;
  };

  return ProgressControl;
}（零件）;

/ **
 *“ProgressControl”的默认选项
 *
 * @type {Object}
 * @私人的
 * /


ProgressControl.prototype.options_ = {
  孩子们：['seekBar']
};

Component.registerComponent（'ProgressControl'，ProgressControl）;

/ **
 * @file fullscreen-toggle.js
 * /
/ **
 *切换全屏视频
 *
 * @extends按钮
 * /

var FullscreenToggle = function（_Button）{
  继承（FullscreenToggle，_Button）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能FullscreenToggle（播放器，选项）{
    classCallCheck（this，FullscreenToggle）;

    var _this = possibleConstructorReturn（this，_Button.call（this，player，options））;

    _this.on（player，'fullscreenchange'，_this.handleFullscreenChange）;
    返回_this;
  }

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。
   * /


  FullscreenToggle.prototype.buildCSSClass = function buildCSSClass（）{
    return'vjs-fullscreen-control'+ _Button.prototype.buildCSSClass.call（this）;
  };

  / **
   *处理播放器上的全屏更改，并相应地更改控制文本。
   *
   * @param {EventTarget〜Event} [event]
   *导致此功能的{@link Player＃fullscreenchange}事件
   *叫。
   *
   * @listens Player＃fullscreenchange
   * /


  FullscreenToggle.prototype.handleFullscreenChange = function handleFullscreenChange（event）{
    if（this.player_.isFullscreen（））{
      this.controlText（ '非全屏'）;
    } else {
      this.controlText（ '全屏'）;
    }
  };

  / **
   *当“FullscreenToggle”被“点击”时，这被调用。看到
   * {@link ClickableComponent}了解更多关于点击次数的详细信息。
   *
   * @param {EventTarget〜Event} [event]
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * /


  FullscreenToggle.prototype.handleClick = function handleClick（event）{
    if（！this.player_.isFullscreen（））{
      this.player_.requestFullscreen（）;
    } else {
      this.player_.exitFullscreen（）;
    }
  };

  返回FullscreenToggle;
}（按钮）;

/ **
 *应该显示在“FullscreenToggle”控件上的文本。增加了本地化。
 *
 * @type {string}
 * @私人的
 * /


FullscreenToggle.prototype.controlText_ ='全屏';

Component.registerComponent（'FullscreenToggle'，FullscreenToggle）;

/ **
 *检查是否支持音量控制，如果不是隐藏音量控制
 *使用`vjs-hidden`类传递的`Component'。
 *
 * @param {Component} self
 *如果音量不受支持，应该隐藏的组件
 *
 * @param {Player}播放器
 *参考玩家
 *
 * @私人的
 * /
var checkVolumeSupport = function checkVolumeSupport（self，player）{
  //当目前的技术不支持时，隐藏音量控件
  if（player.tech_ &&！player.tech_.featuresVolumeControl）{
    self.addClass（ 'VJS隐藏'）;
  }

  self.on（player，'loadstart'，function（）{
    if（！player.tech_.featuresVolumeControl）{
      self.addClass（ 'VJS隐藏'）;
    } else {
      self.removeClass（ 'VJS隐藏'）;
    }
  }）;
};

/ **
 * @file volume-level.js
 * /
/ **
 *显示音量级别
 *
 * @extends组件
 * /

var VolumeLevel = function（_Component）{
  inherit（VolumeLevel，_Component）;

  函数VolumeLevel（）{
    classCallCheck（this，VolumeLevel）;
    return possibleConstructorReturn（this，_Component.apply（this，arguments））;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /
  VolumeLevel.prototype.createEl = function createEl（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-volume-level'，
      innerHTML：'<span class =“vjs-control-text”> </ span>
    }）;
  };

  return VolumeLevel;
}（零件）;

Component.registerComponent（'VolumeLevel'，VolumeLevel）;

/ **
 * @file volume-bar.js
 * /
//必需的孩子
/ **
 *包含音量级别并可以单击的条来调整级别
 *
 * @extends滑块
 * /

var VolumeBar = function（_Slider）{
  继承（VolumeBar，_Slider）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  函数VolumeBar（player，options）{
    classCallCheck（this，VolumeBar）;

    var _this = possibleConstructorReturn（this，_Slider.call（this，player，options））;

    _this.on（'slideractive'，_this.updateLastVolume_）;
    _this.on（player，'volumechange'，_this.updateARIAAttributes）;
    player.ready（function（）{
      return _this.updateARIAAttributes（）;
    }）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  VolumeBar.prototype.createEl = function createEl（）{
    return _Slider.prototype.createEl.call（this，'div'，{
      className：'vjs-volume-bar vjs-slider-bar'
    }，{
      'aria-label'：this.localize（'Volume Level'），
      'aria-live'：'礼貌'
    }）;
  };

  / **
   *在{@link VolumeMenuButton}处理移动事件。
   *
   * @param {EventTarget〜Event}事件
   *导致此函数运行的事件。
   *
   * @listens mousemove
   * /


  VolumeBar.prototype.handleMouseMove = function handleMouseMove（event）{
    this.checkMuted（）;
    this.player_.volume（this.calculateDistance（事件））;
  };

  / **
   *如果播放器静音取消静音。
   * /


  VolumeBar.prototype.checkMuted = function checkMuted（）{
    if（this.player_.muted（））{
      this.player_.muted（假）;
    }
  };

  / **
   *获取音量级别的百分比
   *
   * @return {number}
   *音量级别百分比为十进制数。
   * /


  VolumeBar.prototype.getPercent = function getPercent（）{
    if（this.player_.muted（））{
      返回0;
    }
    return this.player_.volume（）;
  };

  / **
   *增加键盘用户的音量
   * /


  VolumeBar.prototype.stepForward = function stepForward（）{
    this.checkMuted（）;
    this.player_.volume（this.player_.volume（）+ 0.1）;
  };

  / **
   *降低键盘用户的音量
   * /


  VolumeBar.prototype.stepBack = function stepBack（）{
    this.checkMuted（）;
    this.player_.volume（this.player_.volume（） -  0.1）;
  };

  / **
   *更新ARIA辅助功能属性
   *
   * @param {EventTarget〜Event} [event]
   *导致此函数运行的“volumechange”事件。
   *
   * @listens Player＃volumechange
   * /


  VolumeBar.prototype.updateARIAAttributes = function updateARIAAttributes（event）{
    var ariaValue = this.player_.muted（）？0：this.volumeAsPercentage_（）;

    this.el_.setAttribute（'aria-valuenow'，ariaValue）;
    this.el_.setAttribute（'aria-valuetext'，ariaValue +'％'）;
  };

  / **
   *以百分比形式返回播放器音量的当前值
   *
   * @私人的
   * /


  VolumeBar.prototype.volumeAsPercentage_ = function volumeAsPercentage_（）{
    return Math.round（this.player_.volume（）* 100）;
  };

  / **
   *当用户开始拖动VolumeBar时，存储音量并收听
   *拖曳的结束。当拖曳结束时，如果音量设置为零，
   *将lastVolume设置为存储的卷。
   *
   * @静音滑块
   * @私人的
   * /


  VolumeBar.prototype.updateLastVolume_ = function updateLastVolume_（）{
    var _this2 = this;

    var volumeBeforeDrag = this.player_.volume（）;

    this.one（'sliderinactive'，function（）{
      if（_this2.player_.volume（）=== 0）{
        _this2.player_.lastVolume_（volumeBeforeDrag）;
      }
    }）;
  };

  return VolumeBar;
}（滑块）;

/ **
 *“VolumeBar”的默认选项
 *
 * @type {Object}
 * @私人的
 * /


VolumeBar.prototype.options_ = {
  孩子：['volumeLevel']，
  barName：'volumeLevel'
};

/ **
 *当播放器发生此事件时，调用此滑块的更新事件。
 *
 * @type {string}
 * /
VolumeBar.prototype.playerEvent ='volumechange';

Component.registerComponent（'VolumeBar'，VolumeBar）;

/ **
 * @file volume-control.js
 * /
//必需的孩子
/ **
 *用于控制音量的组件
 *
 * @extends组件
 * /

var VolumeControl = function（_Component）{
  继承（VolumeControl，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options = {}]
   *玩家选项的键/值存储。
   * /
  函数VolumeControl（player）{
    var options = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
    classCallCheck（this，VolumeControl）;

    options.vertical = options.vertical || 假;

    //将垂直选项传递到VolumeBar，如果
    // VolumeBar已打开。
    if（typeof options.volumeBar ==='undefined'|| isPlain（options.volumeBar））{
      options.volumeBar = options.volumeBar || {};
      options.volumeBar.vertical = options.vertical;
    }

    //如果缺少卷支持，请隐藏此控件
    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    checkVolumeSupport（_this，player）;

    _this.throttledHandleMouseMove = throttle（bind（_this，_this.handleMouseMove），25）;

    _this.on（'mousedown'，_this.handleMouseDown）;
    _this.on（'touchstart'，_this.handleMouseDown）;

    //当滑块处于活动状态（鼠标已按下并且
    //是拖动）或焦点我们不想隐藏VolumeBar
    _this.on（_this.volumeBar，['focus'，'slideractive']，function（）{
      _this.volumeBar.addClass（ 'VJS滑块活性'）;
      _this.addClass（ 'VJS滑块活性'）;
      _this.trigger（ 'slideractive'）;
    }）;

    _this.on（_this.volumeBar，['blur'，'sliderinactive']，function（）{
      _this.volumeBar.removeClass（ 'VJS滑块活性'）;
      _this.removeClass（ 'VJS滑块活性'）;
      _this.trigger（ 'sliderinactive'）;
    }）;
    返回_this;
  }

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  VolumeControl.prototype.createEl = function createEl（）{
    var orientationClass ='vjs-volume-horizo​​ntal';

    if（this.options_.vertical）{
      orientationClass ='vjs-volume-vertical';
    }

    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-volume-control vjs-control'+ orientationClass
    }）;
  };

  / **
   *在“VolumeControl”上处理`mousedown`或`touchstart`事件。
   *
   * @param {EventTarget〜Event}事件
   *`mousedown`或`touchstart`事件触发了这个功能
   *
   * @静音mousedown
   * @listens touchstart
   * /


  VolumeControl.prototype.handleMouseDown = function handleMouseDown（event）{
    var doc = this.el_.ownerDocument;

    this.on（doc，'mousemove'，this.throttledHandleMouseMove）;
    this.on（doc，'touchmove'，this.throttledHandleMouseMove）;
    this.on（doc，'mouseup'，this.handleMouseUp）;
    this.on（doc，'touchend'，this.handleMouseUp）;
  };

  / **
   *在`VolumeControl`处理`mouseup`或`touchend`事件。
   *
   * @param {EventTarget〜Event}事件
   *`mouseup`或`touchend`触发这个功能的事件。
   *
   * @listens touchend
   * @listens mouseup
   * /


  VolumeControl.prototype.handleMouseUp = function handleMouseUp（event）{
    var doc = this.el_.ownerDocument;

    this.off（doc，'mousemove'，this.throttledHandleMouseMove）;
    this.off（doc，'touchmove'，this.throttledHandleMouseMove）;
    this.off（doc，'mouseup'，this.handleMouseUp）;
    this.off（doc，'touchend'，this.handleMouseUp）;
  };

  / **
   *在“VolumeControl”上处理`mousedown`或`touchstart`事件。
   *
   * @param {EventTarget〜Event}事件
   *`mousedown`或`touchstart`事件触发了这个功能
   *
   * @静音mousedown
   * @listens touchstart
   * /


  VolumeControl.prototype.handleMouseMove = function handleMouseMove（event）{
    this.volumeBar.handleMouseMove（事件）;
  };

  return VolumeControl;
}（零件）;

/ **
 *“VolumeControl”的默认选项
 *
 * @type {Object}
 * @私人的
 * /


VolumeControl.prototype.options_ = {
  孩子：['volumeBar']
};

Component.registerComponent（'VolumeControl'，VolumeControl）;

/ **
 * @file mute-toggle.js
 * /
/ **
 *用于静音音频的按钮组件。
 *
 * @extends按钮
 * /

var MuteToggle = function（_Button）{
  继承（MuteToggle，_Button）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能MuteToggle（player，options）{
    classCallCheck（this，MuteToggle）;

    //如果缺少卷支持，请隐藏此控件
    var _this = possibleConstructorReturn（this，_Button.call（this，player，options））;

    checkVolumeSupport（_this，player）;

    _this.on（player，['loadstart'，'volumechange']，_this.update）;
    返回_this;
  }

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。
   * /


  MuteToggle.prototype.buildCSSClass = function buildCSSClass（）{
    return'vjs-mute-control'+ _Button.prototype.buildCSSClass.call（this）;
  };

  / **
   *当“MuteToggle”被“点击”时被调用。看到
   * {@link ClickableComponent}了解更多关于点击次数的详细信息。
   *
   * @param {EventTarget〜Event} [event]
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * /


  MuteToggle.prototype.handleClick = function handleClick（event）{
    var vol = this.player_.volume（）;
    var lastVolume = this.player_.lastVolume_（）;

    if（vol === 0）{
      var volumeToSet = lastVolume <0.1？0.1：lastVolume;

      this.player_.volume（volumeToSet）;
      this.player_.muted（假）;
    } else {
      this.player_.muted（this.player_.muted（）？false：true）;
    }
  };

  / **
   *根据“volume”和“muted”的状态更新“MuteToggle”按钮
   *在播放器上
   *
   * @param {EventTarget〜Event} [event]
   *如果调用了这个函数的{@link Player＃loadstart}事件
   *通过一个事件。
   *
   * @listens Player＃loadstart
   * @listens Player＃volumechange
   * /


  MuteToggle.prototype.update = function update（event）{
    this.updateIcon_（）;
    this.updateControlText_（）;
  };

  / **
   *更新“MuteToggle”图标的外观。
   *
   *可能的状态（以下给出`level`变量）：
   *  -  0：划掉
   *  -  1：零巴数量
   *  -  2：一个音量
   *  -  3：两个音量棒
   *
   * @私人的
   * /


  MuteToggle.prototype.updateIcon_ = function updateIcon_（）{
    var vol = this.player_.volume（）;
    var level = 3;

    if（vol === 0 || this.player_.muted（））{
      level = 0;
    } else if（vol <0.33）{
      level = 1;
    } else if（vol <0.67）{
      level = 2;
    }

    // TODO改善静音图标类
    for（var i = 0; i <4; i ++）{
      removeClass（this.el_，'vjs-vol-'+ i）;
    }
    addClass（this.el_，'vjs-vol-'+ level）;
  };

  / **
   *如果播放器上的“muted”已更改，请更新控件文本
   *（`title`属性在`vjs-mute-control`元素和内容上
   *`vjs-control-text`元素）。
   *
   * @私人的
   * /


  MuteToggle.prototype.updateControlText_ = function updateControlText_（）{
    var soundOff = this.player_.muted（）|| this.player_.volume（）=== 0;
    var text = soundOff？'静音'：'静音';

    if（this.controlText（）！== text）{
      this.controlText（文本）;
    }
  };

  返回MuteToggle;
}（按钮）;

/ **
 *应显示在“MuteToggle”控件上的文本。增加了本地化。
 *
 * @type {string}
 * @私人的
 * /


MuteToggle.prototype.controlText_ ='静音';

Component.registerComponent（'MuteToggle'，MuteToggle）;

/ **
 * @file volume-control.js
 * /
//必需的孩子
/ **
 *包含MuteToggle和VolumeControl的组件
 *他们可以一起工作
 *
 * @extends组件
 * /

var VolumePanel = function（_Component）{
  inherit（VolumePanel，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options = {}]
   *玩家选项的键/值存储。
   * /
  函数VolumePanel（player）{
    var options = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
    classCallCheck（这是VolumePanel）;

    if（typeof options.inline！=='undefined'）{
      options.inline = options.inline;
    } else {
      options.inline = true;
    }

    //将内联选项下载到VolumeControl作为垂直如果
    // VolumeControl打开。
    if（typeof options.volumeControl ==='undefined'|| isPlain（options.volumeControl））{
      options.volumeControl = options.volumeControl || {};
      options.volumeControl.vertical =！options.inline;
    }

    //如果缺少卷支持，请隐藏此控件
    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    checkVolumeSupport（_this，player）;

    //当滑块处于活动状态（鼠标已按下并且
    //是拖动）或焦点我们不想隐藏VolumeBar
    _this.on（_this.volumeControl，['slideractive']，_this.sliderActive_）;
    _this.on（_this.muteToggle，'focus'，_this.sliderActive_）;

    _this.on（_this.volumeControl，['sliderinactive']，_this.sliderInactive_）;
    _this.on（_this.muteToggle，'blur'，_this.sliderInactive_）;
    返回_this;
  }

  / **
   *将vjs-slider-active类添加到VolumePanel
   *
   * @listens VolumeControl＃slideractive
   * @私人的
   * /


  VolumePanel.prototype.sliderActive_ = function sliderActive_（）{
    this.addClass（ 'VJS滑块活性'）;
  };

  / **
   将vjs-slider-active类删除到VolumePanel
   *
   * @listens VolumeControl＃sliderinactive
   * @私人的
   * /


  VolumePanel.prototype.sliderInactive_ = function sliderInactive_（）{
    this.removeClass（ 'VJS滑块活性'）;
  };

  / **
   *创建“Component”的DOM元素
   *
   * @return {Element}
   *创建的元素。
   * /


  VolumePanel.prototype.createEl = function createEl（）{
    var orientationClass ='vjs-volume-panel-horizo​​ntal';

    if（！this.options_.inline）{
      orientationClass ='vjs-volume-panel-vertical';
    }

    return _Component.prototype.createEl.call（this，'div'，{
      className：'vjs-volume-panel vjs-control'+ orientationClass
    }）;
  };

  return VolumePanel;
}（零件）;

/ **
 *“VolumeControl”的默认选项
 *
 * @type {Object}
 * @私人的
 * /


VolumePanel.prototype.options_ = {
  孩子：['muteToggle'，'volumeControl']
};

Component.registerComponent（'VolumePanel'，VolumePanel）;

/ **
 * @file menu.js
 * /
/ **
 *菜单组件用于构建弹出菜单，包括字幕和
 *字幕选择菜单。
 *
 * @extends组件
 * /

var Menu = function（_Component）{
  继承（Menu，_Component）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Player}播放器
   *该组件应该附加的播放器
   *
   * @param {Object} [options]
   *选项名称和值的对象
   *
   * /
  功能菜单（播放器，选项）{
    classCallCheck（this，Menu）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    if（options）{
      _this.menuButton_ = options.menuButton;
    }

    _this.focusedChild_ = -1;

    _this.on（'keydown'，_this.handleKeyPress）;
    返回_this;
  }

  / **
   *在菜单中添加{@link MenuItem}。
   *
   * @param {Object | string}组件
   *要添加的“MenuItem”的名称或实例。
   *
   * /


  Menu.prototype.addItem = function addItem（component）{
    this.addChild（组分）;
    component.on（'click'，bind（this，function（event）{
      //取消关联的MenuButton，并将焦点移回
      if（this.menuButton_）{
        this.menuButton_.unpressButton（）;

        //如果项目是字幕设置项目，请勿对焦菜单按钮
        //因为焦点会移动到其他地方，它会在IE8上记录一个错误
        if（component.name（）！=='CaptionSettingsMenuItem'）{
          this.menuButton_.focus（）;
        }
      }
    }））;
  };

  / **
   *创建“Menu”的DOM元素。
   *
   * @return {Element}
   *创建的元素
   * /


  Menu.prototype.createEl = function createEl $$ 1（）{
    var contentElType = this.options_.contentElType || 'UL';

    this.contentEl_ = createEl（contentElType，{
      className：'vjs-menu-content'
    }）;

    this.contentEl_.setAttribute（'role'，'menu'）;

    var el = _Component.prototype.createEl.call（this，'div'，{
      append：this.contentEl_，
      className：'vjs-menu'
    }）;

    el.appendChild（this.contentEl_）;

    //防止点击冒泡。需要菜单按钮，
    //对父母的点击是重要的
    on（el，'click'，function（event）{
      event.preventDefault（）;
      event.stopImmediatePropagation（）;
    }）;

    回报
  };

  / **
   *在此菜单上处理“keydown”事件。这个监听器被添加到构造函数中。
   *
   * @param {EventTarget〜Event}事件
   *菜单上发生的`keydown`事件。
   *
   * @listens keydown
   * /


  Menu.prototype.handleKeyPress = function handleKeyPress（event）{
    //左下箭头
    if（event.which === 37 || event.which === 40）{
      event.preventDefault（）;
      this.stepForward（）;

      //向上和向右箭头
    } else if（event.which === 38 || event.which === 39）{
      event.preventDefault（）;
      this.stepBack（）;
    }
  };

  / **
   *移动到键盘用户的下一个（下）菜单项。
   * /


  Menu.prototype.stepForward = function stepForward（）{
    var stepChild = 0;

    if（this.focusedChild_！== undefined）{
      stepChild = this.focusedChild_ + 1;
    }
    this.focus（继子）;
  };

  / **
   *移动到键盘用户的上一个（更高）菜单项。
   * /


  Menu.prototype.stepBack = function stepBack（）{
    var stepChild = 0;

    if（this.focusedChild_！== undefined）{
      stepChild = this.focusedChild_  -  1;
    }
    this.focus（继子）;
  };

  / **
   *将焦点放在“菜单”中的{@link MenuItem}上。
   *
   * @param {Object | string} [item = 0]
   *儿童用品集的索引集中于。
   * /


  Menu.prototype.focus = function focus（）{
    var item = arguments.length> 0 && arguments [0]！== undefined？参数[0]：0;

    var children = this.children（）。slice（）;
    var hasTitle = children.length && children [0] .className && /vjs-menu-title/.test(children[0].className）;

    if（hasTitle）{
      children.shift（）;
    }

    if（children.length> 0）{
      if（item <0）{
        item = 0;
      } else if（item> = children.length）{
        item = children.length  -  1;
      }

      this.focusedChild_ = item;

      儿童[项目] .el_.focus（）;
    }
  };

  返回菜单
}（零件）;

Component.registerComponent（'Menu'，Menu）;

/ **
 * @file menu-button.js
 * /
/ **
 *任何弹出窗口{@link Menu}的“MenuButton”类。
 *
 * @extends组件
 * /

var MenuButton = function（_Component）{
  继承（MenuButton，_Component）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options = {}]
   *玩家选项的键/值存储。
   * /
  功能MenuButton（播放器）{
    var options = arguments.length> 1 && arguments [1]！== undefined？参数[1]：{};
    classCallCheck（这是MenuButton）;

    var _this = possibleConstructorReturn（this，_Component.call（this，player，options））;

    _this.menuButton_ = new Button（player，options）;

    _this.menuButton_.controlText（_this.controlText_）;
    _this.menuButton_.el_.setAttribute（'aria-haspopup'，'true'）;

    //将buildCSSClass值添加到按钮，而不是包装器
    var buttonClass = Button.prototype.buildCSSClass（）;

    _this.menuButton_.el_.className = _this.buildCSSClass（）+''+ buttonClass;
    _this.menuButton_.removeClass（ 'VJS控制'）;

    _this.addChild（_this.menuButton_）;

    _this.update（）;

    _this.enabled_ = true;

    _this.on（_this.menuButton_，'tap'，_this.handleClick）;
    _this.on（_this.menuButton_，'click'，_this.handleClick）;
    _this.on（_this.menuButton_，'focus'，_this.handleFocus）;
    _this.on（_this.menuButton_，'blur'，_this.handleBlur）;

    _this.on（'keydown'，_this.handleSubmenuKeyPress）;
    返回_this;
  }

  / **
   *根据其项目的当前状态更新菜单。
   * /


  MenuButton.prototype.update = function update（）{
    var menu = this.createMenu（）;

    if（this.menu）{
      this.removeChild（this.menu）;
    }

    this.menu = menu;
    this.addChild（菜单）;

    / **
     跟踪菜单按钮的状态
     *
     * @type {Boolean}
     * @私人的
     * /
    this.buttonPressed_ = false;
    this.menuButton_.el_.setAttribute（'aria-expanded'，'false'）;

    if（this.items && this.items.length <= this.hideThreshold_）{
      this.hide（）;
    } else {
      this.show（）;
    }
  };

  / **
   *创建菜单并添加所有项目。
   *
   * @return {Menu}
   *构建的菜单
   * /


  MenuButton.prototype.createMenu = function createMenu（）{
    var menu = new Menu（this.player_，{menuButton：this}）;

    / **
     *如果项目数量小于或等于此阈值，请隐藏菜单。这是默认值
     *到0，每当我们添加可隐藏到菜单中的项目时，我们会增加它。我们列出
     *这里是因为每次运行`createMenu`时，我们需要重新设置值。
     *
     * @保护
     * @type {Number}
     * /
    this.hideThreshold_ = 0;

    //将标题列表项添加到顶部
    if（this.options_.title）{
      var title = createEl（'li'，{
        className：'vjs-menu-title'，
        innerHTML：toTitleCase（this.options_.title），
        tabIndex：-1
      }）;

      this.hideThreshold_ + = 1;

      menu.children_.unshift（标题）;
      prependTo（title，menu.contentEl（））;
    }

    this.items = this.createItems（）;

    if（this.items）{
      //将菜单项添加到菜单
      for（var i = 0; i <this.items.length; i ++）{
        menu.addItem（this.items [I]）;
      }
    }

    返回菜单
  };

  / **
   *创建菜单项列表。具体到每个子类。
   *
   * @abstract
   * /


  MenuButton.prototype.createItems = function createItems（）{};

  / **
   *创建“MenuButtons”的DOM元素。
   *
   * @return {Element}
   *创建的元素。
   * /


  MenuButton.prototype.createEl = function createEl $$ 1（）{
    return _Component.prototype.createEl.call（this，'div'，{
      className：this.buildWrapperCSSClass（）
    }，{}）;
  };

  / **
   *允许子组件为包装器元素堆栈CSS类名称
   *
   * @return {string}
   *构造的包装器DOM`className`
   * /


  MenuButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass（）{
    var menuButtonClass ='vjs-menu-button';

    //如果内联选项被传递，我们想要一起使用不同的样式。
    if（this.options_.inline === true）{
      menuButtonClass + ='-inline';
    } else {
      menuButtonClass + ='-popup';
    }

    // TODO：修复CSS，这样就不必要了
    var buttonClass = Button.prototype.buildCSSClass（）;

    return'vjs-menu-button'+ menuButtonClass +''+ buttonClass +''+ _Component.prototype.buildCSSClass.call（this）;
  };

  / **
   *构建默认的DOM`className`。
   *
   * @return {string}
   *该对象的DOM`className`。
   * /


  MenuButton.prototype.buildCSSClass = function buildCSSClass（）{
    var menuButtonClass ='vjs-menu-button';

    //如果内联选项被传递，我们想要一起使用不同的样式。
    if（this.options_.inline === true）{
      menuButtonClass + ='-inline';
    } else {
      menuButtonClass + ='-popup';
    }

    return'vjs-menu-button'+ menuButtonClass +''+ _Component.prototype.buildCSSClass.call（this）;
  };

  / **
   *获取或设置将用于辅助功能的本地化控制文本。
   *
   *>注意：这将来自内部的“menuButton_”元素。
   *
   * @param {string} [text]
   *控制元素的文本。
   *
   * @param {Element} [el = this.menuButton_.el（）]
   *元素设置标题。
   *
   * @return {string}
   *  - 获取时的控制文本
   * /


  MenuButton.prototype.controlText = function controlText（text）{
    var el = arguments.length> 1 && arguments [1]！== undefined？arguments [1]：this.menuButton_.el（）;

    return this.menuButton_.controlText（text，el）;
  };

  / **
   *点击一个“MenuButton”。
   *对于被调用的实例，请参阅{@link ClickableComponent＃handleClick}。
   *
   * @param {EventTarget〜Event}事件
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * /


  MenuButton.prototype.handleClick = function handleClick（event）{
    //当您点击按钮时，它会添加焦点，这将显示菜单。
    //因此，当鼠标离开按钮时，我们将删除焦点。需要重点
    //选项卡导航

    this.one（this.menu.contentEl（），'mouseleave'，bind（this，function（e）{
      this.unpressButton（）;
      this.el_.blur（）;
    }））;
    if（this.buttonPressed_）{
      this.unpressButton（）;
    } else {
      this.pressButton（）;
    }
  };

  / **
   *将焦点设置为实际 按钮，而不是此元素
   * /


  MenuButton.prototype.focus = function focus（）{
    this.menuButton_.focus（）;
  };

  / **
   *从实际按钮中删除焦点，而不是这个元素
   * /


  MenuButton.prototype.blur = function blur（）{
    this.menuButton_.blur（）;
  };

  / **
   *当“MenuButton”通过焦点事件获取焦点时，这被调用。
   *开启“keydown”事件的侦听。当他们发生的时候
   *调用`this.handleKeyPress`。
   *
   * @param {EventTarget〜Event}事件
   *导致这个函数被调用的`focus`事件。
   *
   * @listens焦点
   * /


  MenuButton.prototype.handleFocus = function handleFocus（）{
    on（document_1，'keydown'，bind（this，this.handleKeyPress））;
  };

  / **
   *当“MenuButton”失去焦点时调用。关闭监听器
   *`keydown`事件。哪个停止`this.handleKeyPress`从被调用。
   *
   * @param {EventTarget〜Event}事件
   *导致该函数被调用的`blur`事件。
   *
   * @静音模糊
   * /


  MenuButton.prototype.handleBlur = function handleBlur（）{
    关闭（document_1，'keydown'，bind（this，this.handleKeyPress））;
  };

  / **
   *处理“MenuButton”的选项卡，转义，向下箭头和向上箭头键。看到
   * {@link ClickableComponent＃handleKeyPress}对于被调用的实例。
   *
   * @param {EventTarget〜Event}事件
   *导致该函数被调用的`keydown`事件。
   *
   * @listens keydown
   * /


  MenuButton.prototype.handleKeyPress = function handleKeyPress（event）{

    // Escape（27）键或Tab（9）键取消按下“按钮”
    if（event.which === 27 || event.which === 9）{
      if（this.buttonPressed_）{
        this.unpressButton（）;
      }
      // Do not preventDefault for Tab键 - 我们仍然想失去焦点
      if（event.which！== 9）{
        event.preventDefault（）;
        //将对焦设置回菜单按钮的按钮
        this.menuButton_.el_.focus（）;
      }
      //向上（38）键或向下（40）键按'按钮'
    } else if（event.which === 38 || event.which === 40）{
      if（！this.buttonPressed_）{
        this.pressButton（）;
        event.preventDefault（）;
      }
    }
  };

  / **
   *在子菜单上处理“keydown”事件。这个侦听器被加入
   *构造函数。
   *
   * @param {EventTarget〜Event}事件
   *按键事件
   *
   * @listens keydown
   * /


  MenuButton.prototype.handleSubmenuKeyPress = function handleSubmenuKeyPress（event）{

    // Escape（27）键或Tab（9）键取消按下“按钮”
    if（event.which === 27 || event.which === 9）{
      if（this.buttonPressed_）{
        this.unpressButton（）;
      }
      // Do not preventDefault for Tab键 - 我们仍然想失去焦点
      if（event.which！== 9）{
        event.preventDefault（）;
        //将对焦设置回菜单按钮的按钮
        this.menuButton_.el_.focus（）;
      }
    }
  };

  / **
   *将当前的“MenuButton”置于按下状态。
   * /


  MenuButton.prototype.pressButton = function pressButton（）{
    if（this.enabled_）{
      this.buttonPressed_ = true;
      this.menu.lockShowing（）;
      this.menuButton_.el_.setAttribute（'aria-expanded'，'true'）;
      //将焦点设置到子菜单中
      this.menu.focus（）;
    }
  };

  / **
   *将当前的“MenuButton”从压缩状态中取出。
   * /


  MenuButton.prototype.unpressButton = function unpressButton（）{
    if（this.enabled_）{
      this.buttonPressed_ = false;
      this.menu.unlockShowing（）;
      this.menuButton_.el_.setAttribute（'aria-expanded'，'false'）;
    }
  };

  / **
   *禁用“MenuButton”。不要让它被点击。
   * /


  MenuButton.prototype.disable = function disable（）{
    this.unpressButton（）;

    this.enabled_ = false;
    this.addClass（ 'VJS禁用'）;

    this.menuButton_.disable（）;
  };

  / **
   *启用“MenuButton”。允许它被点击。
   * /


  MenuButton.prototype.enable = function enable（）{
    this.enabled_ = true;
    this.removeClass（ 'VJS禁用'）;

    this.menuButton_.enable（）;
  };

  返回MenuButton;
}（零件）;

Component.registerComponent（'MenuButton'，MenuButton）;

/ **
 * @file track-button.js
 * /
/ **
 *用于切换特定轨道类型（例如字幕）的按钮的基类。
 *
 * @extends MenuButton
 * /

var TrackButton = function（_MenuButton）{
  inherits（TrackButton，_MenuButton）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  功能TrackButton（播放器，选项）{
    classCallCheck（this，TrackButton）;

    var tracks = options.tracks;

    var _this = possibleConstructorReturn（this，_MenuButton.call（this，player，options））;

    if（_this.items.length <= 1）{
      _this.hide（）;
    }

    if（！tracks）{
      return possibleConstructorReturn（_this）;
    }

    var updateHandler = bind（_this，_this.update）;

    tracks.addEventListener（'removetrack'，updateHandler）;
    tracks.addEventListener（'addtrack'，updateHandler）;
    _this.player_.on（'ready'，updateHandler）;

    _this.player_.on（'dispose'，function（）{
      tracks.removeEventListener（'removetrack'，updateHandler）;
      tracks.removeEventListener（'addtrack'，updateHandler）;
    }）;
    返回_this;
  }

  返回TrackButton;
}（菜单按钮）;

Component.registerComponent（'TrackButton'，TrackButton）;

/ **
 * @file menu-item.js
 * /
/ **
 *菜单项的组件。`<LI>`
 *
 * @extends ClickableComponent
 * /

var MenuItem = function（_ClickableComponent）{
  inherits（MenuItem，_ClickableComponent）;

  / **
   *创建一个这个类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options = {}]
   *玩家选项的键/值存储。
   *
   * /
  功能MenuItem（播放器，选项）{
    classCallCheck（this，MenuItem）;

    var _this = possibleConstructorReturn（this，_ClickableComponent.call（this，player，options））;

    _this.selectable = options.selectable;

    _this.selected（options.selected）;

    if（_this.selectable）{
      // TODO：可能需要是menuitemcheckbox或menuitemradio，
      //并可能需要菜单项的逻辑分组。
      _this.el_.setAttribute（'role'，'menuitemcheckbox'）;
    } else {
      _this.el_.setAttribute（'role'，'menuitem'）;
    }
    返回_this;
  }

  / **
   *创建'MenuItem的DOM元素
   *
   * @param {string} [type = li]
   *元素的节点类型，实际上不使用，始终设置为“li”。
   *
   * @param {Object} [props = {}]
   *应该在元素上设置的属性对象
   *
   * @param {Object} [attrs = {}]
   *应该在元素上设置的属性对象
   *
   * @return {Element}
   *创建的元素。
   * /


  MenuItem.prototype.createEl = function createEl（type，props，attrs）{
    //控件是文本，而不仅仅是一个图标
    this.nonIconControl = true;

    return _ClickableComponent.prototype.createEl.call（this，'li'，assign（{
      className：'vjs-menu-item'，
      innerHTML：'<span class =“vjs-menu-item-text”>'+ this.localize（this.options_.label）+'</ span>
      tabIndex：-1
    }，道具）;
  };

  / **
   *任何点击“MenuItem”将int置于所选状态。
   *对于被调用的实例，请参阅{@link ClickableComponent＃handleClick}。
   *
   * @param {EventTarget〜Event}事件
   *导致此功能的`keydown`，`tap`或`click`事件
   *叫。
   *
   * @静音点击
   * @静音点击
   * /


  MenuItem.prototype.handleClick = function handleClick（event）{
    this.selected（真）;
  };

  / **
   *选择该菜单项的状态。
   *
   * @param {boolean}被选中
   *如果选择了菜单项，
   * /


  MenuItem.prototype.selected = function selected（_selected）{
    if（this.selectable）{
      if（_selected）{
        this.addClass（ 'VJS选择'）;
        this.el_.setAttribute（'aria-checked'，'true'）;
        //浏览器/屏幕阅读器不完全支持aria-checked，
        //所以在控件文本中指示选择状态到屏幕阅读器。
        this.controlText（'，selected'）;
      } else {
        this.removeClass（ 'VJS选择'）;
        this.el_.setAttribute（'aria-checked'，'false'）;
        //向屏幕阅读器指示未选择的状态
        //请注意，空格会清除所选的状态文本
        this.controlText（''）;
      }
    }
  };

  返回MenuItem;
}（ClickableComponent）;

Component.registerComponent（'MenuItem'，MenuItem）;

/ **
 * @file text-track-menu-item.js
 * /
/ **
 *用于选择文本轨道类型中的语言的特定菜单项类型
 *
 * @extends MenuItem
 * /

var TextTrackMenuItem = function（_MenuItem）{
  继承（TextTrackMenuItem，_MenuItem）;

  / **
   *创建此类的实例。
   *
   * @param {Player}播放器
   *这个类应该附加的`Player`。
   *
   * @param {Object} [options]
   *玩家选项的键/值存储。
   * /
  函数TextTrackMenuItem（player，options）{
    classCallCheck（this，TextTrackMenuItem）;

    var track = options.track;
    var tracks = player.textTracks();

    // Modify options for parent MenuItem class's init.
    options.label = track.label || track.language || 'Unknown';
    options.selected = track.mode === 'showing';

    var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.track = track;
    var changeHandler = bind(_this, _this.handleTracksChange);
    var selectedLanguageChangeHandler = bind(_this, _this.handleSelectedLanguageChange);

    player.on(['loadstart', 'texttrackchange'], changeHandler);
    tracks.addEventListener('change', changeHandler);
    tracks.addEventListener('selectedlanguagechange', selectedLanguageChangeHandler);
    _this.on('dispose', function () {
      tracks.removeEventListener('change', changeHandler);
      tracks.removeEventListener('selectedlanguagechange', selectedLanguageChangeHandler);
    });

    // iOS7 doesn't dispatch change events to TextTrackLists when an
    // associated track's mode changes. Without something like
    // Object.observe() (also not present on iOS7), it's not
    // possible to detect changes to the mode attribute and polyfill
    // the change event. As a poor substitute, we manually dispatch
    // change events whenever the controls modify the mode.
    if (tracks.onchange === undefined) {
      var event = void 0;

      _this.on(['tap', 'click'], function () {
        if (_typeof(window_1.Event) !== 'object') {
          // Android 2.3 throws an Illegal Constructor error for window.Event
          try {
            event = new window_1.Event('change');
          } catch (err) {
            // continue regardless of error
          }
        }

        if (!event) {
          event = document_1.createEvent('Event');
          event.initEvent('change', true, true);
        }

        tracks.dispatchEvent(event);
      });
    }
    return _this;
  }

  /**
   * This gets called when an `TextTrackMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} event
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  TextTrackMenuItem.prototype.handleClick = function handleClick(event) {
    var kind = this.track.kind;
    var kinds = this.track.kinds;
    var tracks = this.player_.textTracks();

    if (!kinds) {
      kinds = [kind];
    }

    _MenuItem.prototype.handleClick.call(this, event);

    if (!tracks) {
      return;
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      if (track === this.track && kinds.indexOf(track.kind) > -1) {
        if (track.mode !== 'showing') {
          track.mode = 'showing';
        }
      } else if (track.mode !== 'disabled') {
        track.mode = 'disabled';
      }
    }
  };

  /**
   * Handle text track list change
   *
   * @param {EventTarget~Event} event
   *        The `change` event that caused this function to be called.
   *
   * @listens TextTrackList#change
   */


  TextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    this.selected(this.track.mode === 'showing');
  };

  TextTrackMenuItem.prototype.handleSelectedLanguageChange = function handleSelectedLanguageChange(event) {
    if (this.track.mode === 'showing') {
      var selectedLanguage = this.player_.cache_.selectedLanguage;

      // Don't replace the kind of track across the same language
      if (selectedLanguage && selectedLanguage.enabled && selectedLanguage.language === this.track.language && selectedLanguage.kind !== this.track.kind) {
        return;
      }

      this.player_.cache_.selectedLanguage = {
        enabled: true,
        language: this.track.language,
        kind: this.track.kind
      };
    }
  };

  return TextTrackMenuItem;
}(MenuItem);

Component.registerComponent('TextTrackMenuItem', TextTrackMenuItem);

/**
 * @file off-text-track-menu-item.js
 */
/**
 * A special menu item for turning of a specific type of text track
 *
 * @extends TextTrackMenuItem
 */

var OffTextTrackMenuItem = function (_TextTrackMenuItem) {
  inherits(OffTextTrackMenuItem, _TextTrackMenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function OffTextTrackMenuItem(player, options) {
    classCallCheck(this, OffTextTrackMenuItem);

    // Create pseudo track info
    // Requires options['kind']
    options.track = {
      player: player,
      kind: options.kind,
      kinds: options.kinds,
      'default': false,
      mode: 'disabled'
    };

    if (!options.kinds) {
      options.kinds = [options.kind];
    }

    if (options.label) {
      options.track.label = options.label;
    } else {
      options.track.label = options.kinds.join(' and ') + ' off';
    }

    // MenuItem is selectable
    options.selectable = true;

    var _this = possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));

    _this.selected(true);
    return _this;
  }

  /**
   * Handle text track change
   *
   * @param {EventTarget~Event} event
   *        The event that caused this function to run
   */


  OffTextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    var tracks = this.player().textTracks();
    var selected = true;

    for (var i = 0, l = tracks.length; i < l; i++) {
      var track = tracks[i];

      if (this.options_.kinds.indexOf(track.kind) > -1 && track.mode === 'showing') {
        selected = false;
        break;
      }
    }

    this.selected(selected);
  };

  OffTextTrackMenuItem.prototype.handleSelectedLanguageChange = function handleSelectedLanguageChange(event) {
    var tracks = this.player().textTracks();
    var allHidden = true;

    for (var i = 0, l = tracks.length; i < l; i++) {
      var track = tracks[i];

      if (['captions', 'descriptions', 'subtitles'].indexOf(track.kind) > -1 && track.mode === 'showing') {
        allHidden = false;
        break;
      }
    }

    if (allHidden) {
      this.player_.cache_.selectedLanguage = {
        enabled: false
      };
    }
  };

  return OffTextTrackMenuItem;
}(TextTrackMenuItem);

Component.registerComponent('OffTextTrackMenuItem', OffTextTrackMenuItem);

/**
 * @file text-track-button.js
 */
/**
 * The base class for buttons that toggle specific text track types (e.g. subtitles)
 *
 * @extends MenuButton
 */

var TextTrackButton = function (_TrackButton) {
  inherits(TextTrackButton, _TrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   */
  function TextTrackButton(player) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, TextTrackButton);

    options.tracks = player.textTracks();

    return possibleConstructorReturn(this, _TrackButton.call(this, player, options));
  }

  /**
   * Create a menu item for each text track
   *
   * @param {TextTrackMenuItem[]} [items=[]]
   *        Existing array of items to use during creation
   *
   * @return {TextTrackMenuItem[]}
   *         Array of menu items that were created
   */


  TextTrackButton.prototype.createItems = function createItems() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var TrackMenuItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TextTrackMenuItem;


    // Label is an overide for the [track] off label
    // USed to localise captions/subtitles
    var label = void 0;

    if (this.label_) {
      label = this.label_ + ' off';
    }
    // Add an OFF menu item to turn all tracks off
    items.push(new OffTextTrackMenuItem(this.player_, {
      kinds: this.kinds_,
      kind: this.kind_,
      label: label
    }));

    this.hideThreshold_ += 1;

    var tracks = this.player_.textTracks();

    if (!Array.isArray(this.kinds_)) {
      this.kinds_ = [this.kind_];
    }

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      // only add tracks that are of an appropriate kind and have a label
      if (this.kinds_.indexOf(track.kind) > -1) {

        var item = new TrackMenuItem(this.player_, {
          track: track,
          // MenuItem is selectable
          selectable: true
        });

        item.addClass('vjs-' + track.kind + '-menu-item');
        items.push(item);
      }
    }

    return items;
  };

  return TextTrackButton;
}(TrackButton);

Component.registerComponent('TextTrackButton', TextTrackButton);

/**
 * @file chapters-track-menu-item.js
 */
/**
 * The chapter track menu item
 *
 * @extends MenuItem
 */

var ChaptersTrackMenuItem = function (_MenuItem) {
  inherits(ChaptersTrackMenuItem, _MenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function ChaptersTrackMenuItem(player, options) {
    classCallCheck(this, ChaptersTrackMenuItem);

    var track = options.track;
    var cue = options.cue;
    var currentTime = player.currentTime();

    // Modify options for parent MenuItem class's init.
    options.selectable = true;
    options.label = cue.text;
    options.selected = cue.startTime <= currentTime && currentTime < cue.endTime;

    var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.track = track;
    _this.cue = cue;
    track.addEventListener('cuechange', bind(_this, _this.update));
    return _this;
  }

  /**
   * This gets called when an `ChaptersTrackMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  ChaptersTrackMenuItem.prototype.handleClick = function handleClick(event) {
    _MenuItem.prototype.handleClick.call(this);
    this.player_.currentTime(this.cue.startTime);
    this.update(this.cue.startTime);
  };

  /**
   * Update chapter menu item
   *
   * @param {EventTarget~Event} [event]
   *        The `cuechange` event that caused this function to run.
   *
   * @listens TextTrack#cuechange
   */


  ChaptersTrackMenuItem.prototype.update = function update(event) {
    var cue = this.cue;
    var currentTime = this.player_.currentTime();

    // vjs.log(currentTime, cue.startTime);
    this.selected(cue.startTime <= currentTime && currentTime < cue.endTime);
  };

  return ChaptersTrackMenuItem;
}(MenuItem);

Component.registerComponent('ChaptersTrackMenuItem', ChaptersTrackMenuItem);

/**
 * @file chapters-button.js
 */
/**
 * The button component for toggling and selecting chapters
 * Chapters act much differently than other text tracks
 * Cues are navigation vs. other tracks of alternative languages
 *
 * @extends TextTrackButton
 */

var ChaptersButton = function (_TextTrackButton) {
  inherits(ChaptersButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this function is ready.
   */
  function ChaptersButton(player, options, ready) {
    classCallCheck(this, ChaptersButton);
    return possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  ChaptersButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-chapters-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  ChaptersButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
    return 'vjs-chapters-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
  };

  /**
   * Update the menu based on the current state of its items.
   *
   * @param {EventTarget~Event} [event]
   *        An event that triggered this function to run.
   *
   * @listens TextTrackList#addtrack
   * @listens TextTrackList#removetrack
   * @listens TextTrackList#change
   */


  ChaptersButton.prototype.update = function update(event) {
    if (!this.track_ || event && (event.type === 'addtrack' || event.type === 'removetrack')) {
      this.setTrack(this.findChaptersTrack());
    }
    _TextTrackButton.prototype.update.call(this);
  };

  /**
   * Set the currently selected track for the chapters button.
   *
   * @param {TextTrack} track
   *        The new track to select. Nothing will change if this is the currently selected
   *        track.
   */


  ChaptersButton.prototype.setTrack = function setTrack(track) {
    if (this.track_ === track) {
      return;
    }

    if (!this.updateHandler_) {
      this.updateHandler_ = this.update.bind(this);
    }

    // here this.track_ refers to the old track instance
    if (this.track_) {
      var remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);

      if (remoteTextTrackEl) {
        remoteTextTrackEl.removeEventListener('load', this.updateHandler_);
      }

      this.track_ = null;
    }

    this.track_ = track;

    // here this.track_ refers to the new track instance
    if (this.track_) {
      this.track_.mode = 'hidden';

      var _remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);

      if (_remoteTextTrackEl) {
        _remoteTextTrackEl.addEventListener('load', this.updateHandler_);
      }
    }
  };

  /**
   * Find the track object that is currently in use by this ChaptersButton
   *
   * @return {TextTrack|undefined}
   *         The current track or undefined if none was found.
   */


  ChaptersButton.prototype.findChaptersTrack = function findChaptersTrack() {
    var tracks = this.player_.textTracks() || [];

    for (var i = tracks.length - 1; i >= 0; i--) {
      // We will always choose the last track as our chaptersTrack
      var track = tracks[i];

      if (track.kind === this.kind_) {
        return track;
      }
    }
  };

  /**
   * Get the caption for the ChaptersButton based on the track label. This will also
   * use the current tracks localized kind as a fallback if a label does not exist.
   *
   * @return {string}
   *         The tracks current label or the localized track kind.
   */


  ChaptersButton.prototype.getMenuCaption = function getMenuCaption() {
    if (this.track_ && this.track_.label) {
      return this.track_.label;
    }
    return this.localize(toTitleCase(this.kind_));
  };

  /**
   * Create menu from chapter track
   *
   * @return {Menu}
   *         New menu for the chapter buttons
   */


  ChaptersButton.prototype.createMenu = function createMenu() {
    this.options_.title = this.getMenuCaption();
    return _TextTrackButton.prototype.createMenu.call(this);
  };

  /**
   * Create a menu item for each text track
   *
   * @return {TextTrackMenuItem[]}
   *         Array of menu items
   */


  ChaptersButton.prototype.createItems = function createItems() {
    var items = [];

    if (!this.track_) {
      return items;
    }

    var cues = this.track_.cues;

    if (!cues) {
      return items;
    }

    for (var i = 0, l = cues.length; i < l; i++) {
      var cue = cues[i];
      var mi = new ChaptersTrackMenuItem(this.player_, { track: this.track_, cue: cue });

      items.push(mi);
    }

    return items;
  };

  return ChaptersButton;
}(TextTrackButton);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


ChaptersButton.prototype.kind_ = 'chapters';

/**
 * The text that should display over the `ChaptersButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
ChaptersButton.prototype.controlText_ = 'Chapters';

Component.registerComponent('ChaptersButton', ChaptersButton);

/**
 * @file descriptions-button.js
 */
/**
 * The button component for toggling and selecting descriptions
 *
 * @extends TextTrackButton
 */

var DescriptionsButton = function (_TextTrackButton) {
  inherits(DescriptionsButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this component is ready.
   */
  function DescriptionsButton(player, options, ready) {
    classCallCheck(this, DescriptionsButton);

    var _this = possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));

    var tracks = player.textTracks();
    var changeHandler = bind(_this, _this.handleTracksChange);

    tracks.addEventListener('change', changeHandler);
    _this.on('dispose', function () {
      tracks.removeEventListener('change', changeHandler);
    });
    return _this;
  }

  /**
   * Handle text track change
   *
   * @param {EventTarget~Event} event
   *        The event that caused this function to run
   *
   * @listens TextTrackList#change
   */


  DescriptionsButton.prototype.handleTracksChange = function handleTracksChange(event) {
    var tracks = this.player().textTracks();
    var disabled = false;

    // Check whether a track of a different kind is showing
    for (var i = 0, l = tracks.length; i < l; i++) {
      var track = tracks[i];

      if (track.kind !== this.kind_ && track.mode === 'showing') {
        disabled = true;
        break;
      }
    }

    // If another track is showing, disable this menu button
    if (disabled) {
      this.disable();
    } else {
      this.enable();
    }
  };

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  DescriptionsButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-descriptions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  DescriptionsButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
    return 'vjs-descriptions-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
  };

  return DescriptionsButton;
}(TextTrackButton);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


DescriptionsButton.prototype.kind_ = 'descriptions';

/**
 * The text that should display over the `DescriptionsButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
DescriptionsButton.prototype.controlText_ = 'Descriptions';

Component.registerComponent('DescriptionsButton', DescriptionsButton);

/**
 * @file subtitles-button.js
 */
/**
 * The button component for toggling and selecting subtitles
 *
 * @extends TextTrackButton
 */

var SubtitlesButton = function (_TextTrackButton) {
  inherits(SubtitlesButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this component is ready.
   */
  function SubtitlesButton(player, options, ready) {
    classCallCheck(this, SubtitlesButton);
    return possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  SubtitlesButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-subtitles-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  SubtitlesButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
    return 'vjs-subtitles-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
  };

  return SubtitlesButton;
}(TextTrackButton);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


SubtitlesButton.prototype.kind_ = 'subtitles';

/**
 * The text that should display over the `SubtitlesButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
SubtitlesButton.prototype.controlText_ = 'Subtitles';

Component.registerComponent('SubtitlesButton', SubtitlesButton);

/**
 * @file caption-settings-menu-item.js
 */
/**
 * The menu item for caption track settings menu
 *
 * @extends TextTrackMenuItem
 */

var CaptionSettingsMenuItem = function (_TextTrackMenuItem) {
  inherits(CaptionSettingsMenuItem, _TextTrackMenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function CaptionSettingsMenuItem(player, options) {
    classCallCheck(this, CaptionSettingsMenuItem);

    options.track = {
      player: player,
      kind: options.kind,
      label: options.kind + ' settings',
      selectable: false,
      'default': false,
      mode: 'disabled'
    };

    // CaptionSettingsMenuItem has no concept of 'selected'
    options.selectable = false;

    options.name = 'CaptionSettingsMenuItem';

    var _this = possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));

    _this.addClass('vjs-texttrack-settings');
    _this.controlText(', opens ' + options.kind + ' settings dialog');
    return _this;
  }

  /**
   * This gets called when an `CaptionSettingsMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  CaptionSettingsMenuItem.prototype.handleClick = function handleClick(event) {
    this.player().getChild('textTrackSettings').open();
  };

  return CaptionSettingsMenuItem;
}(TextTrackMenuItem);

Component.registerComponent('CaptionSettingsMenuItem', CaptionSettingsMenuItem);

/**
 * @file captions-button.js
 */
/**
 * The button component for toggling and selecting captions
 *
 * @extends TextTrackButton
 */

var CaptionsButton = function (_TextTrackButton) {
  inherits(CaptionsButton, _TextTrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this component is ready.
   */
  function CaptionsButton(player, options, ready) {
    classCallCheck(this, CaptionsButton);
    return possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  CaptionsButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-captions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  CaptionsButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
    return 'vjs-captions-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
  };

  /**
   * Create caption menu items
   *
   * @return {CaptionSettingsMenuItem[]}
   *         The array of current menu items.
   */


  CaptionsButton.prototype.createItems = function createItems() {
    var items = [];

    if (!(this.player().tech_ && this.player().tech_.featuresNativeTextTracks)) {
      items.push(new CaptionSettingsMenuItem(this.player_, { kind: this.kind_ }));

      this.hideThreshold_ += 1;
    }

    return _TextTrackButton.prototype.createItems.call(this, items);
  };

  return CaptionsButton;
}(TextTrackButton);

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */


CaptionsButton.prototype.kind_ = 'captions';

/**
 * The text that should display over the `CaptionsButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
CaptionsButton.prototype.controlText_ = 'Captions';

Component.registerComponent('CaptionsButton', CaptionsButton);

/**
 * @file subs-caps-menu-item.js
 */
/**
 * SubsCapsMenuItem has an [cc] icon to distinguish captions from subtitles
 * in the SubsCapsMenu.
 *
 * @extends TextTrackMenuItem
 */

var SubsCapsMenuItem = function (_TextTrackMenuItem) {
  inherits(SubsCapsMenuItem, _TextTrackMenuItem);

  function SubsCapsMenuItem() {
    classCallCheck(this, SubsCapsMenuItem);
    return possibleConstructorReturn(this, _TextTrackMenuItem.apply(this, arguments));
  }

  SubsCapsMenuItem.prototype.createEl = function createEl(type, props, attrs) {
    var innerHTML = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);

    if (this.options_.track.kind === 'captions') {
      innerHTML += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize('Captions') + '</span>\n      ';
    }

    innerHTML += '</span>';

    var el = _TextTrackMenuItem.prototype.createEl.call(this, type, assign({
      innerHTML: innerHTML
    }, props), attrs);

    return el;
  };

  return SubsCapsMenuItem;
}(TextTrackMenuItem);

Component.registerComponent('SubsCapsMenuItem', SubsCapsMenuItem);

/**
 * @file sub-caps-button.js
 */
/**
 * The button component for toggling and selecting captions and/or subtitles
 *
 * @extends TextTrackButton
 */

var SubsCapsButton = function (_TextTrackButton) {
  inherits(SubsCapsButton, _TextTrackButton);

  function SubsCapsButton(player) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, SubsCapsButton);

    // Although North America uses "captions" in most cases for
    // "captions and subtitles" other locales use "subtitles"
    var _this = possibleConstructorReturn(this, _TextTrackButton.call(this, player, options));

    _this.label_ = 'subtitles';
    if (['en', 'en-us', 'en-ca', 'fr-ca'].indexOf(_this.player_.language_) > -1) {
      _this.label_ = 'captions';
    }
    _this.menuButton_.controlText(toTitleCase(_this.label_));
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  SubsCapsButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-subs-caps-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
  };

  SubsCapsButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
    return 'vjs-subs-caps-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
  };

  /**
   * Create caption/subtitles menu items
   *
   * @return {CaptionSettingsMenuItem[]}
   *         The array of current menu items.
   */


  SubsCapsButton.prototype.createItems = function createItems() {
    var items = [];

    if (!(this.player().tech_ && this.player().tech_.featuresNativeTextTracks)) {
      items.push(new CaptionSettingsMenuItem(this.player_, { kind: this.label_ }));

      this.hideThreshold_ += 1;
    }

    items = _TextTrackButton.prototype.createItems.call(this, items, SubsCapsMenuItem);
    return items;
  };

  return SubsCapsButton;
}(TextTrackButton);

/**
 * `kind`s of TextTrack to look for to associate it with this menu.
 *
 * @type {array}
 * @private
 */


SubsCapsButton.prototype.kinds_ = ['captions', 'subtitles'];

/**
 * The text that should display over the `SubsCapsButton`s controls.
 *
 *
 * @type {string}
 * @private
 */
SubsCapsButton.prototype.controlText_ = 'Subtitles';

Component.registerComponent('SubsCapsButton', SubsCapsButton);

/**
 * @file audio-track-menu-item.js
 */
/**
 * An {@link AudioTrack} {@link MenuItem}
 *
 * @extends MenuItem
 */

var AudioTrackMenuItem = function (_MenuItem) {
  inherits(AudioTrackMenuItem, _MenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function AudioTrackMenuItem(player, options) {
    classCallCheck(this, AudioTrackMenuItem);

    var track = options.track;
    var tracks = player.audioTracks();

    // Modify options for parent MenuItem class's init.
    options.label = track.label || track.language || 'Unknown';
    options.selected = track.enabled;

    var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.track = track;

    var changeHandler = bind(_this, _this.handleTracksChange);

    tracks.addEventListener('change', changeHandler);
    _this.on('dispose', function () {
      tracks.removeEventListener('change', changeHandler);
    });
    return _this;
  }

  /**
   * This gets called when an `AudioTrackMenuItem is "clicked". See {@link ClickableComponent}
   * for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  AudioTrackMenuItem.prototype.handleClick = function handleClick(event) {
    var tracks = this.player_.audioTracks();

    _MenuItem.prototype.handleClick.call(this, event);

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      track.enabled = track === this.track;
    }
  };

  /**
   * Handle any {@link AudioTrack} change.
   *
   * @param {EventTarget~Event} [event]
   *        The {@link AudioTrackList#change} event that caused this to run.
   *
   * @listens AudioTrackList#change
   */


  AudioTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
    this.selected(this.track.enabled);
  };

  return AudioTrackMenuItem;
}(MenuItem);

Component.registerComponent('AudioTrackMenuItem', AudioTrackMenuItem);

/**
 * @file audio-track-button.js
 */
/**
 * The base class for buttons that toggle specific {@link AudioTrack} types.
 *
 * @extends TrackButton
 */

var AudioTrackButton = function (_TrackButton) {
  inherits(AudioTrackButton, _TrackButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options={}]
   *        The key/value store of player options.
   */
  function AudioTrackButton(player) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, AudioTrackButton);

    options.tracks = player.audioTracks();

    return possibleConstructorReturn(this, _TrackButton.call(this, player, options));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  AudioTrackButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-audio-button ' + _TrackButton.prototype.buildCSSClass.call(this);
  };

  AudioTrackButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
    return 'vjs-audio-button ' + _TrackButton.prototype.buildWrapperCSSClass.call(this);
  };

  /**
   * Create a menu item for each audio track
   *
   * @param {AudioTrackMenuItem[]} [items=[]]
   *        An array of existing menu items to use.
   *
   * @return {AudioTrackMenuItem[]}
   *         An array of menu items
   */


  AudioTrackButton.prototype.createItems = function createItems() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // if there's only one audio track, there no point in showing it
    this.hideThreshold_ = 1;

    var tracks = this.player_.audioTracks();

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      items.push(new AudioTrackMenuItem(this.player_, {
        track: track,
        // MenuItem is selectable
        selectable: true
      }));
    }

    return items;
  };

  return AudioTrackButton;
}(TrackButton);

/**
 * The text that should display over the `AudioTrackButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


AudioTrackButton.prototype.controlText_ = 'Audio Track';
Component.registerComponent('AudioTrackButton', AudioTrackButton);

/**
 * @file playback-rate-menu-item.js
 */
/**
 * The specific menu item type for selecting a playback rate.
 *
 * @extends MenuItem
 */

var PlaybackRateMenuItem = function (_MenuItem) {
  inherits(PlaybackRateMenuItem, _MenuItem);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function PlaybackRateMenuItem(player, options) {
    classCallCheck(this, PlaybackRateMenuItem);

    var label = options.rate;
    var rate = parseFloat(label, 10);

    // Modify options for parent MenuItem class's init.
    options.label = label;
    options.selected = rate === 1;
    options.selectable = true;

    var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));

    _this.label = label;
    _this.rate = rate;

    _this.on(player, 'ratechange', _this.update);
    return _this;
  }

  /**
   * This gets called when an `PlaybackRateMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  PlaybackRateMenuItem.prototype.handleClick = function handleClick(event) {
    _MenuItem.prototype.handleClick.call(this);
    this.player().playbackRate(this.rate);
  };

  /**
   * Update the PlaybackRateMenuItem when the playbackrate changes.
   *
   * @param {EventTarget~Event} [event]
   *        The `ratechange` event that caused this function to run.
   *
   * @listens Player#ratechange
   */


  PlaybackRateMenuItem.prototype.update = function update(event) {
    this.selected(this.player().playbackRate() === this.rate);
  };

  return PlaybackRateMenuItem;
}(MenuItem);

/**
 * The text that should display over the `PlaybackRateMenuItem`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


PlaybackRateMenuItem.prototype.contentElType = 'button';

Component.registerComponent('PlaybackRateMenuItem', PlaybackRateMenuItem);

/**
 * @file playback-rate-menu-button.js
 */
/**
 * The component for controlling the playback rate.
 *
 * @extends MenuButton
 */

var PlaybackRateMenuButton = function (_MenuButton) {
  inherits(PlaybackRateMenuButton, _MenuButton);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  function PlaybackRateMenuButton(player, options) {
    classCallCheck(this, PlaybackRateMenuButton);

    var _this = possibleConstructorReturn(this, _MenuButton.call(this, player, options));

    _this.updateVisibility();
    _this.updateLabel();

    _this.on(player, 'loadstart', _this.updateVisibility);
    _this.on(player, 'ratechange', _this.updateLabel);
    return _this;
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  PlaybackRateMenuButton.prototype.createEl = function createEl$$1() {
    var el = _MenuButton.prototype.createEl.call(this);

    this.labelEl_ = createEl('div', {
      className: 'vjs-playback-rate-value',
      innerHTML: '1x'
    });

    el.appendChild(this.labelEl_);

    return el;
  };

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  PlaybackRateMenuButton.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-playback-rate ' + _MenuButton.prototype.buildCSSClass.call(this);
  };

  PlaybackRateMenuButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
    return 'vjs-playback-rate ' + _MenuButton.prototype.buildWrapperCSSClass.call(this);
  };

  /**
   * Create the playback rate menu
   *
   * @return {Menu}
   *         Menu object populated with {@link PlaybackRateMenuItem}s
   */


  PlaybackRateMenuButton.prototype.createMenu = function createMenu() {
    var menu = new Menu(this.player());
    var rates = this.playbackRates();

    if (rates) {
      for (var i = rates.length - 1; i >= 0; i--) {
        menu.addChild(new PlaybackRateMenuItem(this.player(), { rate: rates[i] + 'x' }));
      }
    }

    return menu;
  };

  /**
   * Updates ARIA accessibility attributes
   */


  PlaybackRateMenuButton.prototype.updateARIAAttributes = function updateARIAAttributes() {
    // Current playback rate
    this.el().setAttribute('aria-valuenow', this.player().playbackRate());
  };

  /**
   * This gets called when an `PlaybackRateMenuButton` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  PlaybackRateMenuButton.prototype.handleClick = function handleClick(event) {
    // select next rate option
    var currentRate = this.player().playbackRate();
    var rates = this.playbackRates();

    // this will select first one if the last one currently selected
    var newRate = rates[0];

    for (var i = 0; i < rates.length; i++) {
      if (rates[i] > currentRate) {
        newRate = rates[i];
        break;
      }
    }
    this.player().playbackRate(newRate);
  };

  /**
   * Get possible playback rates
   *
   * @return {Array}
   *         All possible playback rates
   */


  PlaybackRateMenuButton.prototype.playbackRates = function playbackRates() {
    return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates;
  };

  /**
   * Get whether playback rates is supported by the tech
   * and an array of playback rates exists
   *
   * @return {boolean}
   *         Whether changing playback rate is supported
   */


  PlaybackRateMenuButton.prototype.playbackRateSupported = function playbackRateSupported() {
    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
  };

  /**
   * Hide playback rate controls when they're no playback rate options to select
   *
   * @param {EventTarget~Event} [event]
   *        The event that caused this function to run.
   *
   * @listens Player#loadstart
   */


  PlaybackRateMenuButton.prototype.updateVisibility = function updateVisibility(event) {
    if (this.playbackRateSupported()) {
      this.removeClass('vjs-hidden');
    } else {
      this.addClass('vjs-hidden');
    }
  };

  /**
   * Update button label when rate changed
   *
   * @param {EventTarget~Event} [event]
   *        The event that caused this function to run.
   *
   * @listens Player#ratechange
   */


  PlaybackRateMenuButton.prototype.updateLabel = function updateLabel(event) {
    if (this.playbackRateSupported()) {
      this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
    }
  };

  return PlaybackRateMenuButton;
}(MenuButton);

/**
 * The text that should display over the `FullscreenToggle`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


PlaybackRateMenuButton.prototype.controlText_ = 'Playback Rate';

Component.registerComponent('PlaybackRateMenuButton', PlaybackRateMenuButton);

/**
 * @file spacer.js
 */
/**
 * Just an empty spacer element that can be used as an append point for plugins, etc.
 * Also can be used to create space between elements when necessary.
 *
 * @extends Component
 */

var Spacer = function (_Component) {
  inherits(Spacer, _Component);

  function Spacer() {
    classCallCheck(this, Spacer);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  Spacer.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-spacer ' + _Component.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  Spacer.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: this.buildCSSClass()
    });
  };

  return Spacer;
}(Component);

Component.registerComponent('Spacer', Spacer);

/**
 * @file custom-control-spacer.js
 */
/**
 * Spacer specifically meant to be used as an insertion point for new plugins, etc.
 *
 * @extends Spacer
 */

var CustomControlSpacer = function (_Spacer) {
  inherits(CustomControlSpacer, _Spacer);

  function CustomControlSpacer() {
    classCallCheck(this, CustomControlSpacer);
    return possibleConstructorReturn(this, _Spacer.apply(this, arguments));
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  CustomControlSpacer.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-custom-control-spacer ' + _Spacer.prototype.buildCSSClass.call(this);
  };

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */


  CustomControlSpacer.prototype.createEl = function createEl() {
    var el = _Spacer.prototype.createEl.call(this, {
      className: this.buildCSSClass()
    });

    // No-flex/table-cell mode requires there be some content
    // in the cell to fill the remaining space of the table.
    el.innerHTML = '&nbsp;';
    return el;
  };

  return CustomControlSpacer;
}(Spacer);

Component.registerComponent('CustomControlSpacer', CustomControlSpacer);

/**
 * @file control-bar.js
 */
// Required children
/**
 * Container of main controls.
 *
 * @extends Component
 */

var ControlBar = function (_Component) {
  inherits(ControlBar, _Component);

  function ControlBar() {
    classCallCheck(this, ControlBar);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  ControlBar.prototype.createEl = function createEl() {
    return _Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-control-bar',
      dir: 'ltr'
    }, {
      // The control bar is a group, but we don't aria-label it to avoid
      //  over-announcing by JAWS
      role: 'group'
    });
  };

  return ControlBar;
}(Component);

/**
 * Default options for `ControlBar`
 *
 * @type {Object}
 * @private
 */


ControlBar.prototype.options_ = {
  children: ['playToggle', 'volumePanel', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subsCapsButton', 'audioTrackButton', 'fullscreenToggle']
};

Component.registerComponent('ControlBar', ControlBar);

/**
 * @file error-display.js
 */
/**
 * A display that indicates an error has occurred. This means that the video
 * is unplayable.
 *
 * @extends ModalDialog
 */

var ErrorDisplay = function (_ModalDialog) {
  inherits(ErrorDisplay, _ModalDialog);

  /**
   * Creates an instance of this class.
   *
   * @param  {Player} player
   *         The `Player` that this class should be attached to.
   *
   * @param  {Object} [options]
   *         The key/value store of player options.
   */
  function ErrorDisplay(player, options) {
    classCallCheck(this, ErrorDisplay);

    var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));

    _this.on(player, 'error', _this.open);
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   *
   * @deprecated Since version 5.
   */


  ErrorDisplay.prototype.buildCSSClass = function buildCSSClass() {
    return 'vjs-error-display ' + _ModalDialog.prototype.buildCSSClass.call(this);
  };

  /**
   * Gets the localized error message based on the `Player`s error.
   *
   * @return {string}
   *         The `Player`s error message localized or an empty string.
   */


  ErrorDisplay.prototype.content = function content() {
    var error = this.player().error();

    return error ? this.localize(error.message) : '';
  };

  return ErrorDisplay;
}(ModalDialog);

/**
 * The default options for an `ErrorDisplay`.
 *
 * @private
 */


ErrorDisplay.prototype.options_ = mergeOptions(ModalDialog.prototype.options_, {
  pauseOnOpen: false,
  fillAlways: true,
  temporary: false,
  uncloseable: true
});

Component.registerComponent('ErrorDisplay', ErrorDisplay);

/**
 * @file text-track-settings.js
 */
var LOCAL_STORAGE_KEY = 'vjs-text-track-settings';

var COLOR_BLACK = ['#000', 'Black'];
var COLOR_BLUE = ['#00F', 'Blue'];
var COLOR_CYAN = ['#0FF', 'Cyan'];
var COLOR_GREEN = ['#0F0', 'Green'];
var COLOR_MAGENTA = ['#F0F', 'Magenta'];
var COLOR_RED = ['#F00', 'Red'];
var COLOR_WHITE = ['#FFF', 'White'];
var COLOR_YELLOW = ['#FF0', 'Yellow'];

var OPACITY_OPAQUE = ['1', 'Opaque'];
var OPACITY_SEMI = ['0.5', 'Semi-Transparent'];
var OPACITY_TRANS = ['0', 'Transparent'];

// Configuration for the various <select> elements in the DOM of this component.
//
// Possible keys include:
//
// `default`:
//   The default option index. Only needs to be provided if not zero.
// `parser`:
//   A function which is used to parse the value from the selected option in
//   a customized way.
// `selector`:
//   The selector used to find the associated <select> element.
var selectConfigs = {
  backgroundColor: {
    selector: '.vjs-bg-color > select',
    id: 'captions-background-color-%s',
    label: 'Color',
    options: [COLOR_BLACK, COLOR_WHITE, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
  },

  backgroundOpacity: {
    selector: '.vjs-bg-opacity > select',
    id: 'captions-background-opacity-%s',
    label: 'Transparency',
    options: [OPACITY_OPAQUE, OPACITY_SEMI, OPACITY_TRANS]
  },

  color: {
    selector: '.vjs-fg-color > select',
    id: 'captions-foreground-color-%s',
    label: 'Color',
    options: [COLOR_WHITE, COLOR_BLACK, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
  },

  edgeStyle: {
    selector: '.vjs-edge-style > select',
    id: '%s',
    label: 'Text Edge Style',
    options: [['none', 'None'], ['raised', 'Raised'], ['depressed', 'Depressed'], ['uniform', 'Uniform'], ['dropshadow', 'Dropshadow']]
  },

  fontFamily: {
    selector: '.vjs-font-family > select',
    id: 'captions-font-family-%s',
    label: 'Font Family',
    options: [['proportionalSansSerif', 'Proportional Sans-Serif'], ['monospaceSansSerif', 'Monospace Sans-Serif'], ['proportionalSerif', 'Proportional Serif'], ['monospaceSerif', 'Monospace Serif'], ['casual', 'Casual'], ['script', 'Script'], ['small-caps', 'Small Caps']]
  },

  fontPercent: {
    selector: '.vjs-font-percent > select',
    id: 'captions-font-size-%s',
    label: 'Font Size',
    options: [['0.50', '50%'], ['0.75', '75%'], ['1.00', '100%'], ['1.25', '125%'], ['1.50', '150%'], ['1.75', '175%'], ['2.00', '200%'], ['3.00', '300%'], ['4.00', '400%']],
    'default': 2,
    parser: function parser(v) {
      return v === '1.00' ? null : Number(v);
    }
  },

  textOpacity: {
    selector: '.vjs-text-opacity > select',
    id: 'captions-foreground-opacity-%s',
    label: 'Transparency',
    options: [OPACITY_OPAQUE, OPACITY_SEMI]
  },

  // Options for this object are defined below.
  windowColor: {
    selector: '.vjs-window-color > select',
    id: 'captions-window-color-%s',
    label: 'Color'
  },

  // Options for this object are defined below.
  windowOpacity: {
    selector: '.vjs-window-opacity > select',
    id: 'captions-window-opacity-%s',
    label: 'Transparency',
    options: [OPACITY_TRANS, OPACITY_SEMI, OPACITY_OPAQUE]
  }
};

selectConfigs.windowColor.options = selectConfigs.backgroundColor.options;

/**
 * Get the actual value of an option.
 *
 * @param  {string} value
 *         The value to get
 *
 * @param  {Function} [parser]
 *         Optional function to adjust the value.
 *
 * @return {Mixed}
 *         - Will be `undefined` if no value exists
 *         - Will be `undefined` if the given value is "none".
 *         - Will be the actual value otherwise.
 *
 * @private
 */
function parseOptionValue(value, parser) {
  if (parser) {
    value = parser(value);
  }

  if (value && value !== 'none') {
    return value;
  }
}

/**
 * Gets the value of the selected <option> element within a <select> element.
 *
 * @param  {Element} el
 *         the element to look in
 *
 * @param  {Function} [parser]
 *         Optional function to adjust the value.
 *
 * @return {Mixed}
 *         - Will be `undefined` if no value exists
 *         - Will be `undefined` if the given value is "none".
 *         - Will be the actual value otherwise.
 *
 * @private
 */
function getSelectedOptionValue(el, parser) {
  var value = el.options[el.options.selectedIndex].value;

  return parseOptionValue(value, parser);
}

/**
 * Sets the selected <option> element within a <select> element based on a
 * given value.
 *
 * @param {Element} el
 *        The element to look in.
 *
 * @param {string} value
 *        the property to look on.
 *
 * @param {Function} [parser]
 *        Optional function to adjust the value before comparing.
 *
 * @private
 */
function setSelectedOption(el, value, parser) {
  if (!value) {
    return;
  }

  for (var i = 0; i < el.options.length; i++) {
    if (parseOptionValue(el.options[i].value, parser) === value) {
      el.selectedIndex = i;
      break;
    }
  }
}

/**
 * Manipulate Text Tracks settings.
 *
 * @extends ModalDialog
 */

var TextTrackSettings = function (_ModalDialog) {
  inherits(TextTrackSettings, _ModalDialog);

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *         The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *         The key/value store of player options.
   */
  function TextTrackSettings(player, options) {
    classCallCheck(this, TextTrackSettings);

    options.temporary = false;

    var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));

    _this.updateDisplay = bind(_this, _this.updateDisplay);

    // fill the modal and pretend we have opened it
    _this.fill();
    _this.hasBeenOpened_ = _this.hasBeenFilled_ = true;

    _this.endDialog = createEl('p', {
      className: 'vjs-control-text',
      textContent: _this.localize('End of dialog window.')
    });
    _this.el().appendChild(_this.endDialog);

    _this.setDefaults();

    // Grab `persistTextTrackSettings` from the player options if not passed in child options
    if (options.persistTextTrackSettings === undefined) {
      _this.options_.persistTextTrackSettings = _this.options_.playerOptions.persistTextTrackSettings;
    }

    _this.on(_this.$('.vjs-done-button'), 'click', function () {
      _this.saveSettings();
      _this.close();
    });

    _this.on(_this.$('.vjs-default-button'), 'click', function () {
      _this.setDefaults();
      _this.updateDisplay();
    });

    each(selectConfigs, function (config) {
      _this.on(_this.$(config.selector), 'change', _this.updateDisplay);
    });

    if (_this.options_.persistTextTrackSettings) {
      _this.restoreSettings();
    }
    return _this;
  }

  /**
   * Create a <select> element with configured options.
   *
   * @param {string} key
   *        Configuration key to use during creation.
   *
   * @return {string}
   *         An HTML string.
   *
   * @private
   */


  TextTrackSettings.prototype.createElSelect_ = function createElSelect_(key) {
    var _this2 = this;

    var legendId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';

    var config = selectConfigs[key];
    var id = config.id.replace('%s', this.id_);

    return ['<' + type + ' id="' + id + '" class="' + (type === 'label' ? 'vjs-label' : '') + '">', this.localize(config.label), '</' + type + '>', '<select aria-labelledby="' + legendId + ' ' + id + '">'].concat(config.options.map(function (o) {
      var optionId = id + '-' + o[1];

      return ['<option id="' + optionId + '" value="' + o[0] + '" ', 'aria-labelledby="' + legendId + ' ' + id + ' ' + optionId + '">', _this2.localize(o[1]), '</option>'].join('');
    })).concat('</select>').join('');
  };

  /**
   * Create foreground color element for the component
   *
   * @return {string}
   *         An HTML string.
   *
   * @private
   */


  TextTrackSettings.prototype.createElFgColor_ = function createElFgColor_() {
    var legendId = 'captions-text-legend-' + this.id_;

    return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize('Text'), '</legend>', this.createElSelect_('color', legendId), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_('textOpacity', legendId), '</span>', '</fieldset>'].join('');
  };

  /**
   * Create background color element for the component
   *
   * @return {string}
   *         An HTML string.
   *
   * @private
   */


  TextTrackSettings.prototype.createElBgColor_ = function createElBgColor_() {
    var legendId = 'captions-background-' + this.id_;

    return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize('Background'), '</legend>', this.createElSelect_('backgroundColor', legendId), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_('backgroundOpacity', legendId), '</span>', '</fieldset>'].join('');
  };

  /**
   * Create window color element for the component
   *
   * @return {string}
   *         An HTML string.
   *
   * @private
   */


  TextTrackSettings.prototype.createElWinColor_ = function createElWinColor_() {
    var legendId = 'captions-window-' + this.id_;

    return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize('Window'), '</legend>', this.createElSelect_('windowColor', legendId), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_('windowOpacity', legendId), '</span>', '</fieldset>'].join('');
  };

  /**
   * Create color elements for the component
   *
   * @return {Element}
   *         The element that was created
   *
   * @private
   */


  TextTrackSettings.prototype.createElColors_ = function createElColors_() {
    return createEl('div', {
      className: 'vjs-track-settings-colors',
      innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join('')
    });
  };

  /**
   * Create font elements for the component
   *
   * @return {Element}
   *         The element that was created.
   *
   * @private
   */


  TextTrackSettings.prototype.createElFont_ = function createElFont_() {
    return createEl('div', {
      className: 'vjs-track-settings-font">',
      innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_('fontPercent', '', 'legend'), '</fieldset>', '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_('edgeStyle', '', 'legend'), '</fieldset>', '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_('fontFamily', '', 'legend'), '</fieldset>'].join('')
    });
  };

  /**
   * Create controls for the component
   *
   * @return {Element}
   *         The element that was created.
   *
   * @private
   */


  TextTrackSettings.prototype.createElControls_ = function createElControls_() {
    var defaultsDescription = this.localize('restore all settings to the default values');

    return createEl('div', {
      className: 'vjs-track-settings-controls',
      innerHTML: ['<button class="vjs-default-button" title="' + defaultsDescription + '">', this.localize('Reset'), '<span class="vjs-control-text"> ' + defaultsDescription + '</span>', '</button>', '<button class="vjs-done-button">' + this.localize('Done') + '</button>'].join('')
    });
  };

  TextTrackSettings.prototype.content = function content() {
    return [this.createElColors_(), this.createElFont_(), this.createElControls_()];
  };

  TextTrackSettings.prototype.label = function label() {
    return this.localize('Caption Settings Dialog');
  };

  TextTrackSettings.prototype.description = function description() {
    return this.localize('Beginning of dialog window. Escape will cancel and close the window.');
  };

  TextTrackSettings.prototype.buildCSSClass = function buildCSSClass() {
    return _ModalDialog.prototype.buildCSSClass.call(this) + ' vjs-text-track-settings';
  };

  /**
   * Gets an object of text track settings (or null).
   *
   * @return {Object}
   *         An object with config values parsed from the DOM or localStorage.
   */


  TextTrackSettings.prototype.getValues = function getValues() {
    var _this3 = this;

    return reduce(selectConfigs, function (accum, config, key) {
      var value = getSelectedOptionValue(_this3.$(config.selector), config.parser);

      if (value !== undefined) {
        accum[key] = value;
      }

      return accum;
    }, {});
  };

  /**
   * Sets text track settings from an object of values.
   *
   * @param {Object} values
   *        An object with config values parsed from the DOM or localStorage.
   */


  TextTrackSettings.prototype.setValues = function setValues(values) {
    var _this4 = this;

    each(selectConfigs, function (config, key) {
      setSelectedOption(_this4.$(config.selector), values[key], config.parser);
    });
  };

  /**
   * Sets all `<select>` elements to their default values.
   */


  TextTrackSettings.prototype.setDefaults = function setDefaults() {
    var _this5 = this;

    each(selectConfigs, function (config) {
      var index = config.hasOwnProperty('default') ? config['default'] : 0;

      _this5.$(config.selector).selectedIndex = index;
    });
  };

  /**
   * Restore texttrack settings from localStorage
   */


  TextTrackSettings.prototype.restoreSettings = function restoreSettings() {
    var values = void 0;

    try {
      values = JSON.parse(window_1.localStorage.getItem(LOCAL_STORAGE_KEY));
    } catch (err) {
      log$1.warn(err);
    }

    if (values) {
      this.setValues(values);
    }
  };

  /**
   * Save text track settings to localStorage
   */


  TextTrackSettings.prototype.saveSettings = function saveSettings() {
    if (!this.options_.persistTextTrackSettings) {
      return;
    }

    var values = this.getValues();

    try {
      if (Object.keys(values).length) {
        window_1.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
      } else {
        window_1.localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    } catch (err) {
      log$1.warn(err);
    }
  };

  /**
   * Update display of text track settings
   */


  TextTrackSettings.prototype.updateDisplay = function updateDisplay() {
    var ttDisplay = this.player_.getChild('textTrackDisplay');

    if (ttDisplay) {
      ttDisplay.updateDisplay();
    }
  };

  /**
   * conditionally blur the element and refocus the captions button
   *
   * @private
   */


  TextTrackSettings.prototype.conditionalBlur_ = function conditionalBlur_() {
    this.previouslyActiveEl_ = null;
    this.off(document_1, 'keydown', this.handleKeyDown);

    var cb = this.player_.controlBar;
    var subsCapsBtn = cb && cb.subsCapsButton;
    var ccBtn = cb && cb.captionsButton;

    if (subsCapsBtn) {
      subsCapsBtn.focus();
    } else if (ccBtn) {
      ccBtn.focus();
    }
  };

  return TextTrackSettings;
}(ModalDialog);

Component.registerComponent('TextTrackSettings', TextTrackSettings);

var _templateObject$2 = taggedTemplateLiteralLoose(['Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.'], ['Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.']);

/**
 * @file html5.js
 */
/**
 * HTML5 Media Controller - Wrapper for HTML5 Media API
 *
 * @mixes Tech~SouceHandlerAdditions
 * @extends Tech
 */

var Html5 = function (_Tech) {
  inherits(Html5, _Tech);

  /**
   * Create an instance of this Tech.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} ready
   *        Callback function to call when the `HTML5` Tech is ready.
   */
  function Html5(options, ready) {
    classCallCheck(this, Html5);

    var _this = possibleConstructorReturn(this, _Tech.call(this, options, ready));

    var source = options.source;
    var crossoriginTracks = false;

    // Set the source if one is provided
    // 1) Check if the source is new (if not, we want to keep the original so playback isn't interrupted)
    // 2) Check to see if the network state of the tag was failed at init, and if so, reset the source
    // anyway so the error gets fired.
    if (source && (_this.el_.currentSrc !== source.src || options.tag && options.tag.initNetworkState_ === 3)) {
      _this.setSource(source);
    } else {
      _this.handleLateInit_(_this.el_);
    }

    if (_this.el_.hasChildNodes()) {

      var nodes = _this.el_.childNodes;
      var nodesLength = nodes.length;
      var removeNodes = [];

      while (nodesLength--) {
        var node = nodes[nodesLength];
        var nodeName = node.nodeName.toLowerCase();

        if (nodeName === 'track') {
          if (!_this.featuresNativeTextTracks) {
            // Empty video tag tracks so the built-in player doesn't use them also.
            // This may not be fast enough to stop HTML5 browsers from reading the tags
            // so we'll need to turn off any default tracks if we're manually doing
            // captions and subtitles. videoElement.textTracks
            removeNodes.push(node);
          } else {
            // store HTMLTrackElement and TextTrack to remote list
            _this.remoteTextTrackEls().addTrackElement_(node);
            _this.remoteTextTracks().addTrack(node.track);
            _this.textTracks().addTrack(node.track);
            if (!crossoriginTracks && !_this.el_.hasAttribute('crossorigin') && isCrossOrigin(node.src)) {
              crossoriginTracks = true;
            }
          }
        }
      }

      for (var i = 0; i < removeNodes.length; i++) {
        _this.el_.removeChild(removeNodes[i]);
      }
    }

    _this.proxyNativeTracks_();
    if (_this.featuresNativeTextTracks && crossoriginTracks) {
      log$1.warn(tsml(_templateObject$2));
    }

    // prevent iOS Safari from disabling metadata text tracks during native playback
    _this.restoreMetadataTracksInIOSNativePlayer_();

    // Determine if native controls should be used
    // Our goal should be to get the custom controls on mobile solid everywhere
    // so we can remove this all together. Right now this will block custom
    // controls on touch enabled laptops like the Chrome Pixel
    if ((TOUCH_ENABLED || IS_IPHONE || IS_NATIVE_ANDROID) && options.nativeControlsForTouch === true) {
      _this.setControls(true);
    }

    // on iOS, we want to proxy `webkitbeginfullscreen` and `webkitendfullscreen`
    // into a `fullscreenchange` event
    _this.proxyWebkitFullscreen_();

    _this.triggerReady();
    return _this;
  }

  /**
   * Dispose of `HTML5` media element and remove all tracks.
   */


  Html5.prototype.dispose = function dispose() {
    Html5.disposeMediaElement(this.el_);
    // tech will handle clearing of the emulated track list
    _Tech.prototype.dispose.call(this);
  };

  /**
   * When a captions track is enabled in the iOS Safari native player, all other
   * tracks are disabled (including metadata tracks), which nulls all of their
   * associated cue points. This will restore metadata tracks to their pre-fullscreen
   * state in those cases so that cue points are not needlessly lost.
   *
   * @private
   */


  Html5.prototype.restoreMetadataTracksInIOSNativePlayer_ = function restoreMetadataTracksInIOSNativePlayer_() {
    var textTracks = this.textTracks();
    var metadataTracksPreFullscreenState = void 0;

    // captures a snapshot of every metadata track's current state
    var takeMetadataTrackSnapshot = function takeMetadataTrackSnapshot() {
      metadataTracksPreFullscreenState = [];

      for (var i = 0; i < textTracks.length; i++) {
        var track = textTracks[i];

        if (track.kind === 'metadata') {
          metadataTracksPreFullscreenState.push({
            track: track,
            storedMode: track.mode
          });
        }
      }
    };

    // snapshot each metadata track's initial state, and update the snapshot
    // each time there is a track 'change' event
    takeMetadataTrackSnapshot();
    textTracks.addEventListener('change', takeMetadataTrackSnapshot);

    var restoreTrackMode = function restoreTrackMode() {
      for (var i = 0; i < metadataTracksPreFullscreenState.length; i++) {
        var storedTrack = metadataTracksPreFullscreenState[i];

        if (storedTrack.track.mode === 'disabled' && storedTrack.track.mode !== storedTrack.storedMode) {
          storedTrack.track.mode = storedTrack.storedMode;
        }
      }
      // we only want this handler to be executed on the first 'change' event
      textTracks.removeEventListener('change', restoreTrackMode);
    };

    // when we enter fullscreen playback, stop updating the snapshot and
    // restore all track modes to their pre-fullscreen state
    this.on('webkitbeginfullscreen', function () {
      textTracks.removeEventListener('change', takeMetadataTrackSnapshot);

      // remove the listener before adding it just in case it wasn't previously removed
      textTracks.removeEventListener('change', restoreTrackMode);
      textTracks.addEventListener('change', restoreTrackMode);
    });

    // start updating the snapshot again after leaving fullscreen
    this.on('webkitendfullscreen', function () {
      // remove the listener before adding it just in case it wasn't previously removed
      textTracks.removeEventListener('change', takeMetadataTrackSnapshot);
      textTracks.addEventListener('change', takeMetadataTrackSnapshot);

      // remove the restoreTrackMode handler in case it wasn't triggered during fullscreen playback
      textTracks.removeEventListener('change', restoreTrackMode);
    });
  };

  /**
   * Proxy all native track list events to our track lists if the browser we are playing
   * in supports that type of track list.
   *
   * @private
   */


  Html5.prototype.proxyNativeTracks_ = function proxyNativeTracks_() {
    var _this2 = this;

    NORMAL.names.forEach(function (name) {
      var props = NORMAL[name];
      var elTracks = _this2.el()[props.getterName];
      var techTracks = _this2[props.getterName]();

      if (!_this2['featuresNative' + props.capitalName + 'Tracks'] || !elTracks || !elTracks.addEventListener) {
        return;
      }
      var listeners = {
        change: function change(e) {
          techTracks.trigger({
            type: 'change',
            target: techTracks,
            currentTarget: techTracks,
            srcElement: techTracks
          });
        },
        addtrack: function addtrack(e) {
          techTracks.addTrack(e.track);
        },
        removetrack: function removetrack(e) {
          techTracks.removeTrack(e.track);
        }
      };
      var removeOldTracks = function removeOldTracks() {
        var removeTracks = [];

        for (var i = 0; i < techTracks.length; i++) {
          var found = false;

          for (var j = 0; j < elTracks.length; j++) {
            if (elTracks[j] === techTracks[i]) {
              found = true;
              break;
            }
          }

          if (!found) {
            removeTracks.push(techTracks[i]);
          }
        }

        while (removeTracks.length) {
          techTracks.removeTrack(removeTracks.shift());
        }
      };

      Object.keys(listeners).forEach(function (eventName) {
        var listener = listeners[eventName];

        elTracks.addEventListener(eventName, listener);
        _this2.on('dispose', function (e) {
          return elTracks.removeEventListener(eventName, listener);
        });
      });

      // Remove (native) tracks that are not used anymore
      _this2.on('loadstart', removeOldTracks);
      _this2.on('dispose', function (e) {
        return _this2.off('loadstart', removeOldTracks);
      });
    });
  };

  /**
   * Create the `Html5` Tech's DOM element.
   *
   * @return {Element}
   *         The element that gets created.
   */


  Html5.prototype.createEl = function createEl$$1() {
    var el = this.options_.tag;

    // Check if this browser supports moving the element into the box.
    // On the iPhone video will break if you move the element,
    // So we have to create a brand new element.
    // If we ingested the player div, we do not need to move the media element.
    if (!el || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {

      // If the original tag is still there, clone and remove it.
      if (el) {
        var clone = el.cloneNode(true);

        if (el.parentNode) {
          el.parentNode.insertBefore(clone, el);
        }
        Html5.disposeMediaElement(el);
        el = clone;
      } else {
        el = document_1.createElement('video');

        // determine if native controls should be used
        var tagAttributes = this.options_.tag && getAttributes(this.options_.tag);
        var attributes = mergeOptions({}, tagAttributes);

        if (!TOUCH_ENABLED || this.options_.nativeControlsForTouch !== true) {
          delete attributes.controls;
        }

        setAttributes(el, assign(attributes, {
          id: this.options_.techId,
          'class': 'vjs-tech'
        }));
      }

      el.playerId = this.options_.playerId;
    }

    if (typeof this.options_.preload !== 'undefined') {
      setAttribute(el, 'preload', this.options_.preload);
    }

    // Update specific tag settings, in case they were overridden
    // `autoplay` has to be *last* so that `muted` and `playsinline` are present
    // when iOS/Safari or other browsers attempt to autoplay.
    var settingsAttrs = ['loop', 'muted', 'playsinline', 'autoplay'];

    for (var i = settingsAttrs.length - 1; i >= 0; i--) {
      var attr = settingsAttrs[i];
      var value = this.options_[attr];

      if (typeof value !== 'undefined') {
        if (value) {
          setAttribute(el, attr, attr);
        } else {
          removeAttribute(el, attr);
        }
        el[attr] = value;
      }
    }

    return el;
  };

  /**
   * This will be triggered if the loadstart event has already fired, before videojs was
   * ready. Two known examples of when this can happen are:
   * 1. If we're loading the playback object after it has started loading
   * 2. The media is already playing the (often with autoplay on) then
   *
   * This function will fire another loadstart so that videojs can catchup.
   *
   * @fires Tech#loadstart
   *
   * @return {undefined}
   *         returns nothing.
   */


  Html5.prototype.handleLateInit_ = function handleLateInit_(el) {
    if (el.networkState === 0 || el.networkState === 3) {
      // The video element hasn't started loading the source yet
      // or didn't find a source
      return;
    }

    if (el.readyState === 0) {
      // NetworkState is set synchronously BUT loadstart is fired at the
      // end of the current stack, usually before setInterval(fn, 0).
      // So at this point we know loadstart may have already fired or is
      // about to fire, and either way the player hasn't seen it yet.
      // We don't want to fire loadstart prematurely here and cause a
      // double loadstart so we'll wait and see if it happens between now
      // and the next loop, and fire it if not.
      // HOWEVER, we also want to make sure it fires before loadedmetadata
      // which could also happen between now and the next loop, so we'll
      // watch for that also.
      var loadstartFired = false;
      var setLoadstartFired = function setLoadstartFired() {
        loadstartFired = true;
      };

      this.on('loadstart', setLoadstartFired);

      var triggerLoadstart = function triggerLoadstart() {
        // We did miss the original loadstart. Make sure the player
        // sees loadstart before loadedmetadata
        if (!loadstartFired) {
          this.trigger('loadstart');
        }
      };

      this.on('loadedmetadata', triggerLoadstart);

      this.ready(function () {
        this.off('loadstart', setLoadstartFired);
        this.off('loadedmetadata', triggerLoadstart);

        if (!loadstartFired) {
          // We did miss the original native loadstart. Fire it now.
          this.trigger('loadstart');
        }
      });

      return;
    }

    // From here on we know that loadstart already fired and we missed it.
    // The other readyState events aren't as much of a problem if we double
    // them, so not going to go to as much trouble as loadstart to prevent
    // that unless we find reason to.
    var eventsToTrigger = ['loadstart'];

    // loadedmetadata: newly equal to HAVE_METADATA (1) or greater
    eventsToTrigger.push('loadedmetadata');

    // loadeddata: newly increased to HAVE_CURRENT_DATA (2) or greater
    if (el.readyState >= 2) {
      eventsToTrigger.push('loadeddata');
    }

    // canplay: newly increased to HAVE_FUTURE_DATA (3) or greater
    if (el.readyState >= 3) {
      eventsToTrigger.push('canplay');
    }

    // canplaythrough: newly equal to HAVE_ENOUGH_DATA (4)
    if (el.readyState >= 4) {
      eventsToTrigger.push('canplaythrough');
    }

    // We still need to give the player time to add event listeners
    this.ready(function () {
      eventsToTrigger.forEach(function (type) {
        this.trigger(type);
      }, this);
    });
  };

  /**
   * Set current time for the `HTML5` tech.
   *
   * @param {number} seconds
   *        Set the current time of the media to this.
   */


  Html5.prototype.setCurrentTime = function setCurrentTime(seconds) {
    try {
      this.el_.currentTime = seconds;
    } catch (e) {
      log$1(e, 'Video is not ready. (Video.js)');
      // this.warning(VideoJS.warnings.videoNotReady);
    }
  };

  /**
   * Get the current duration of the HTML5 media element.
   *
   * @return {number}
   *         The duration of the media or 0 if there is no duration.
   */


  Html5.prototype.duration = function duration() {
    var _this3 = this;

    // Android Chrome will report duration as Infinity for VOD HLS until after
    // playback has started, which triggers the live display erroneously.
    // Return NaN if playback has not started and trigger a durationupdate once
    // the duration can be reliably known.
    if (this.el_.duration === Infinity && IS_ANDROID && IS_CHROME && this.el_.currentTime === 0) {
      // Wait for the first `timeupdate` with currentTime > 0 - there may be
      // several with 0
      var checkProgress = function checkProgress() {
        if (_this3.el_.currentTime > 0) {
          // Trigger durationchange for genuinely live video
          if (_this3.el_.duration === Infinity) {
            _this3.trigger('durationchange');
          }
          _this3.off('timeupdate', checkProgress);
        }
      };

      this.on('timeupdate', checkProgress);
      return NaN;
    }
    return this.el_.duration || NaN;
  };

  /**
   * Get the current width of the HTML5 media element.
   *
   * @return {number}
   *         The width of the HTML5 media element.
   */


  Html5.prototype.width = function width() {
    return this.el_.offsetWidth;
  };

  /**
   * Get the current height of the HTML5 media element.
   *
   * @return {number}
   *         The heigth of the HTML5 media element.
   */


  Html5.prototype.height = function height() {
    return this.el_.offsetHeight;
  };

  /**
   * Proxy iOS `webkitbeginfullscreen` and `webkitendfullscreen` into
   * `fullscreenchange` event.
   *
   * @private
   * @fires fullscreenchange
   * @listens webkitendfullscreen
   * @listens webkitbeginfullscreen
   * @listens webkitbeginfullscreen
   */


  Html5.prototype.proxyWebkitFullscreen_ = function proxyWebkitFullscreen_() {
    var _this4 = this;

    if (!('webkitDisplayingFullscreen' in this.el_)) {
      return;
    }

    var endFn = function endFn() {
      this.trigger('fullscreenchange', { isFullscreen: false });
    };

    var beginFn = function beginFn() {
      if ('webkitPresentationMode' in this.el_ && this.el_.webkitPresentationMode !== 'picture-in-picture') {
        this.one('webkitendfullscreen', endFn);

        this.trigger('fullscreenchange', { isFullscreen: true });
      }
    };

    this.on('webkitbeginfullscreen', beginFn);
    this.on('dispose', function () {
      _this4.off('webkitbeginfullscreen', beginFn);
      _this4.off('webkitendfullscreen', endFn);
    });
  };

  /**
   * Check if fullscreen is supported on the current playback device.
   *
   * @return {boolean}
   *         - True if fullscreen is supported.
   *         - False if fullscreen is not supported.
   */


  Html5.prototype.supportsFullScreen = function supportsFullScreen() {
    if (typeof this.el_.webkitEnterFullScreen === 'function') {
      var userAgent = window_1.navigator && window_1.navigator.userAgent || '';

      // Seems to be broken in Chromium/Chrome && Safari in Leopard
      if (/Android/.test(userAgent) || !/Chrome|Mac OS X 10.5/.test(userAgent)) {
        return true;
      }
    }
    return false;
  };

  /**
   * Request that the `HTML5` Tech enter fullscreen.
   */


  Html5.prototype.enterFullScreen = function enterFullScreen() {
    var video = this.el_;

    if (video.paused && video.networkState <= video.HAVE_METADATA) {
      // attempt to prime the video element for programmatic access
      // this isn't necessary on the desktop but shouldn't hurt
      this.el_.play();

      // playing and pausing synchronously during the transition to fullscreen
      // can get iOS ~6.1 devices into a play/pause loop
      this.setTimeout(function () {
        video.pause();
        video.webkitEnterFullScreen();
      }, 0);
    } else {
      video.webkitEnterFullScreen();
    }
  };

  /**
   * Request that the `HTML5` Tech exit fullscreen.
   */


  Html5.prototype.exitFullScreen = function exitFullScreen() {
    this.el_.webkitExitFullScreen();
  };

  /**
   * A getter/setter for the `Html5` Tech's source object.
   * > Note: Please use {@link Html5#setSource}
   *
   * @param {Tech~SourceObject} [src]
   *        The source object you want to set on the `HTML5` techs element.
   *
   * @return {Tech~SourceObject|undefined}
   *         - The current source object when a source is not passed in.
   *         - undefined when setting
   *
   * @deprecated Since version 5.
   */


  Html5.prototype.src = function src(_src) {
    if (_src === undefined) {
      return this.el_.src;
    }

    // Setting src through `src` instead of `setSrc` will be deprecated
    this.setSrc(_src);
  };

  /**
   * Reset the tech by removing all sources and then calling
   * {@link Html5.resetMediaElement}.
   */


  Html5.prototype.reset = function reset() {
    Html5.resetMediaElement(this.el_);
  };

  /**
   * Get the current source on the `HTML5` Tech. Falls back to returning the source from
   * the HTML5 media element.
   *
   * @return {Tech~SourceObject}
   *         The current source object from the HTML5 tech. With a fallback to the
   *         elements source.
   */


  Html5.prototype.currentSrc = function currentSrc() {
    if (this.currentSource_) {
      return this.currentSource_.src;
    }
    return this.el_.currentSrc;
  };

  /**
   * Set controls attribute for the HTML5 media Element.
   *
   * @param {string} val
   *        Value to set the controls attribute to
   */


  Html5.prototype.setControls = function setControls(val) {
    this.el_.controls = !!val;
  };

  /**
   * Create and returns a remote {@link TextTrack} object.
   *
   * @param {string} kind
   *        `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata)
   *
   * @param {string} [label]
   *        Label to identify the text track
   *
   * @param {string} [language]
   *        Two letter language abbreviation
   *
   * @return {TextTrack}
   *         The TextTrack that gets created.
   */


  Html5.prototype.addTextTrack = function addTextTrack(kind, label, language) {
    if (!this.featuresNativeTextTracks) {
      return _Tech.prototype.addTextTrack.call(this, kind, label, language);
    }

    return this.el_.addTextTrack(kind, label, language);
  };

  /**
   * Creates either native TextTrack or an emulated TextTrack depending
   * on the value of `featuresNativeTextTracks`
   *
   * @param {Object} options
   *        The object should contain the options to intialize the TextTrack with.
   *
   * @param {string} [options.kind]
   *        `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata).
   *
   * @param {string} [options.label].
   *        Label to identify the text track
   *
   * @param {string} [options.language]
   *        Two letter language abbreviation.
   *
   * @param {boolean} [options.default]
   *        Default this track to on.
   *
   * @param {string} [options.id]
   *        The internal id to assign this track.
   *
   * @param {string} [options.src]
   *        A source url for the track.
   *
   * @return {HTMLTrackElement}
   *         The track element that gets created.
   */


  Html5.prototype.createRemoteTextTrack = function createRemoteTextTrack(options) {
    if (!this.featuresNativeTextTracks) {
      return _Tech.prototype.createRemoteTextTrack.call(this, options);
    }
    var htmlTrackElement = document_1.createElement('track');

    if (options.kind) {
      htmlTrackElement.kind = options.kind;
    }
    if (options.label) {
      htmlTrackElement.label = options.label;
    }
    if (options.language || options.srclang) {
      htmlTrackElement.srclang = options.language || options.srclang;
    }
    if (options['default']) {
      htmlTrackElement['default'] = options['default'];
    }
    if (options.id) {
      htmlTrackElement.id = options.id;
    }
    if (options.src) {
      htmlTrackElement.src = options.src;
    }

    return htmlTrackElement;
  };

  /**
   * Creates a remote text track object and returns an html track element.
   *
   * @param {Object} options The object should contain values for
   * kind, language, label, and src (location of the WebVTT file)
   * @param {Boolean} [manualCleanup=true] if set to false, the TextTrack will be
   * automatically removed from the video element whenever the source changes
   * @return {HTMLTrackElement} An Html Track Element.
   * This can be an emulated {@link HTMLTrackElement} or a native one.
   * @deprecated The default value of the "manualCleanup" parameter will default
   * to "false" in upcoming versions of Video.js
   */


  Html5.prototype.addRemoteTextTrack = function addRemoteTextTrack(options, manualCleanup) {
    var htmlTrackElement = _Tech.prototype.addRemoteTextTrack.call(this, options, manualCleanup);

    if (this.featuresNativeTextTracks) {
      this.el().appendChild(htmlTrackElement);
    }

    return htmlTrackElement;
  };

  /**
   * Remove remote `TextTrack` from `TextTrackList` object
   *
   * @param {TextTrack} track
   *        `TextTrack` object to remove
   */


  Html5.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
    _Tech.prototype.removeRemoteTextTrack.call(this, track);

    if (this.featuresNativeTextTracks) {
      var tracks = this.$$('track');

      var i = tracks.length;

      while (i--) {
        if (track === tracks[i] || track === tracks[i].track) {
          this.el().removeChild(tracks[i]);
        }
      }
    }
  };

  /**
   * Gets available media playback quality metrics as specified by the W3C's Media
   * Playback Quality API.
   *
   * @see [Spec]{@link https://wicg.github.io/media-playback-quality}
   *
   * @return {Object}
   *         An object with supported media playback quality metrics
   */


  Html5.prototype.getVideoPlaybackQuality = function getVideoPlaybackQuality() {
    if (typeof this.el().getVideoPlaybackQuality === 'function') {
      return this.el().getVideoPlaybackQuality();
    }

    var videoPlaybackQuality = {};

    if (typeof this.el().webkitDroppedFrameCount !== 'undefined' && typeof this.el().webkitDecodedFrameCount !== 'undefined') {
      videoPlaybackQuality.droppedVideoFrames = this.el().webkitDroppedFrameCount;
      videoPlaybackQuality.totalVideoFrames = this.el().webkitDecodedFrameCount;
    }

    if (window_1.performance && typeof window_1.performance.now === 'function') {
      videoPlaybackQuality.creationTime = window_1.performance.now();
    } else if (window_1.performance && window_1.performance.timing && typeof window_1.performance.timing.navigationStart === 'number') {
      videoPlaybackQuality.creationTime = window_1.Date.now() - window_1.performance.timing.navigationStart;
    }

    return videoPlaybackQuality;
  };

  return Html5;
}(Tech);

/* HTML5 Support Testing ---------------------------------------------------- */

if (isReal()) {

  /**
   * Element for testing browser HTML5 media capabilities
   *
   * @type {Element}
   * @constant
   * @private
   */
  Html5.TEST_VID = document_1.createElement('video');
  var track = document_1.createElement('track');

  track.kind = 'captions';
  track.srclang = 'en';
  track.label = 'English';
  Html5.TEST_VID.appendChild(track);
}

/**
 * Check if HTML5 media is supported by this browser/device.
 *
 * @return {boolean}
 *         - True if HTML5 media is supported.
 *         - False if HTML5 media is not supported.
 */
Html5.isSupported = function () {
  // IE9 with no Media Player is a LIAR! (#984)
  try {
    Html5.TEST_VID.volume = 0.5;
  } catch (e) {
    return false;
  }

  return !!(Html5.TEST_VID && Html5.TEST_VID.canPlayType);
};

/**
 * Check if the tech can support the given type
 *
 * @param {string} type
 *        The mimetype to check
 * @return {string} 'probably', 'maybe', or '' (empty string)
 */
Html5.canPlayType = function (type) {
  return Html5.TEST_VID.canPlayType(type);
};

/**
 * Check if the tech can support the given source
 * @param {Object} srcObj
 *        The source object
 * @param {Object} options
 *        The options passed to the tech
 * @return {string} 'probably', 'maybe', or '' (empty string)
 */
Html5.canPlaySource = function (srcObj, options) {
  return Html5.canPlayType(srcObj.type);
};

/**
 * Check if the volume can be changed in this browser/device.
 * Volume cannot be changed in a lot of mobile devices.
 * Specifically, it can't be changed from 1 on iOS.
 *
 * @return {boolean}
 *         - True if volume can be controlled
 *         - False otherwise
 */
Html5.canControlVolume = function () {
  // IE will error if Windows Media Player not installed #3315
  try {
    var volume = Html5.TEST_VID.volume;

    Html5.TEST_VID.volume = volume / 2 + 0.1;
    return volume !== Html5.TEST_VID.volume;
  } catch (e) {
    return false;
  }
};

/**
 * Check if the playback rate can be changed in this browser/device.
 *
 * @return {boolean}
 *         - True if playback rate can be controlled
 *         - False otherwise
 */
Html5.canControlPlaybackRate = function () {
  // Playback rate API is implemented in Android Chrome, but doesn't do anything
  // https://github.com/videojs/video.js/issues/3180
  if (IS_ANDROID && IS_CHROME && CHROME_VERSION < 58) {
    return false;
  }
  // IE will error if Windows Media Player not installed #3315
  try {
    var playbackRate = Html5.TEST_VID.playbackRate;

    Html5.TEST_VID.playbackRate = playbackRate / 2 + 0.1;
    return playbackRate !== Html5.TEST_VID.playbackRate;
  } catch (e) {
    return false;
  }
};

/**
 * Check to see if native `TextTrack`s are supported by this browser/device.
 *
 * @return {boolean}
 *         - True if native `TextTrack`s are supported.
 *         - False otherwise
 */
Html5.supportsNativeTextTracks = function () {
  return IS_ANY_SAFARI;
};

/**
 * Check to see if native `VideoTrack`s are supported by this browser/device
 *
 * @return {boolean}
 *        - True if native `VideoTrack`s are supported.
 *        - False otherwise
 */
Html5.supportsNativeVideoTracks = function () {
  return !!(Html5.TEST_VID && Html5.TEST_VID.videoTracks);
};

/**
 * Check to see if native `AudioTrack`s are supported by this browser/device
 *
 * @return {boolean}
 *        - True if native `AudioTrack`s are supported.
 *        - False otherwise
 */
Html5.supportsNativeAudioTracks = function () {
  return !!(Html5.TEST_VID && Html5.TEST_VID.audioTracks);
};

/**
 * An array of events available on the Html5 tech.
 *
 * @private
 * @type {Array}
 */
Html5.Events = ['loadstart', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'waiting', 'seeking', 'seeked', 'ended', 'durationchange', 'timeupdate', 'progress', 'play', 'pause', 'ratechange', 'resize', 'volumechange'];

/**
 * Boolean indicating whether the `Tech` supports volume control.
 *
 * @type {boolean}
 * @default {@link Html5.canControlVolume}
 */
Html5.prototype.featuresVolumeControl = Html5.canControlVolume();

/**
 * Boolean indicating whether the `Tech` supports changing the speed at which the media
 * plays. Examples:
 *   - Set player to play 2x (twice) as fast
 *   - Set player to play 0.5x (half) as fast
 *
 * @type {boolean}
 * @default {@link Html5.canControlPlaybackRate}
 */
Html5.prototype.featuresPlaybackRate = Html5.canControlPlaybackRate();

/**
 * Boolean indicating whether the `HTML5` tech currently supports the media element
 * moving in the DOM. iOS breaks if you move the media element, so this is set this to
 * false there. Everywhere else this should be true.
 *
 * @type {boolean}
 * @default
 */
Html5.prototype.movingMediaElementInDOM = !IS_IOS;

// TODO: Previous comment: No longer appears to be used. Can probably be removed.
//       Is this true?
/**
 * Boolean indicating whether the `HTML5` tech currently supports automatic media resize
 * when going into fullscreen.
 *
 * @type {boolean}
 * @default
 */
Html5.prototype.featuresFullscreenResize = true;

/**
 * Boolean indicating whether the `HTML5` tech currently supports the progress event.
 * If this is false, manual `progress` events will be triggred instead.
 *
 * @type {boolean}
 * @default
 */
Html5.prototype.featuresProgressEvents = true;

/**
 * Boolean indicating whether the `HTML5` tech currently supports the timeupdate event.
 * If this is false, manual `timeupdate` events will be triggred instead.
 *
 * @default
 */
Html5.prototype.featuresTimeupdateEvents = true;

/**
 * Boolean indicating whether the `HTML5` tech currently supports native `TextTrack`s.
 *
 * @type {boolean}
 * @default {@link Html5.supportsNativeTextTracks}
 */
Html5.prototype.featuresNativeTextTracks = Html5.supportsNativeTextTracks();

/**
 * Boolean indicating whether the `HTML5` tech currently supports native `VideoTrack`s.
 *
 * @type {boolean}
 * @default {@link Html5.supportsNativeVideoTracks}
 */
Html5.prototype.featuresNativeVideoTracks = Html5.supportsNativeVideoTracks();

/**
 * Boolean indicating whether the `HTML5` tech currently supports native `AudioTrack`s.
 *
 * @type {boolean}
 * @default {@link Html5.supportsNativeAudioTracks}
 */
Html5.prototype.featuresNativeAudioTracks = Html5.supportsNativeAudioTracks();

// HTML5 Feature detection and Device Fixes --------------------------------- //
var canPlayType = Html5.TEST_VID && Html5.TEST_VID.constructor.prototype.canPlayType;
var mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
var mp4RE = /^video\/mp4/i;

Html5.patchCanPlayType = function () {

  // Android 4.0 and above can play HLS to some extent but it reports being unable to do so
  if (ANDROID_VERSION >= 4.0 && !IS_FIREFOX) {
    Html5.TEST_VID.constructor.prototype.canPlayType = function (type) {
      if (type && mpegurlRE.test(type)) {
        return 'maybe';
      }
      return canPlayType.call(this, type);
    };

    // Override Android 2.2 and less canPlayType method which is broken
  } else if (IS_OLD_ANDROID) {
    Html5.TEST_VID.constructor.prototype.canPlayType = function (type) {
      if (type && mp4RE.test(type)) {
        return 'maybe';
      }
      return canPlayType.call(this, type);
    };
  }
};

Html5.unpatchCanPlayType = function () {
  var r = Html5.TEST_VID.constructor.prototype.canPlayType;

  Html5.TEST_VID.constructor.prototype.canPlayType = canPlayType;
  return r;
};

// by default, patch the media element
Html5.patchCanPlayType();

Html5.disposeMediaElement = function (el) {
  if (!el) {
    return;
  }

  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }

  // remove any child track or source nodes to prevent their loading
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }

  // remove any src reference. not setting `src=''` because that causes a warning
  // in firefox
  el.removeAttribute('src');

  // force the media element to update its loading state by calling load()
  // however IE on Windows 7N has a bug that throws an error so need a try/catch (#793)
  if (typeof el.load === 'function') {
    // wrapping in an iife so it's not deoptimized (#1060#discussion_r10324473)
    (function () {
      try {
        el.load();
      } catch (e) {
        // not supported
      }
    })();
  }
};

Html5.resetMediaElement = function (el) {
  if (!el) {
    return;
  }

  var sources = el.querySelectorAll('source');
  var i = sources.length;

  while (i--) {
    el.removeChild(sources[i]);
  }

  // remove any src reference.
  // not setting `src=''` because that throws an error
  el.removeAttribute('src');

  if (typeof el.load === 'function') {
    // wrapping in an iife so it's not deoptimized (#1060#discussion_r10324473)
    (function () {
      try {
        el.load();
      } catch (e) {
        // satisfy linter
      }
    })();
  }
};

/* Native HTML5 element property wrapping ----------------------------------- */
// Wrap native boolean attributes with getters that check both property and attribute
// The list is as followed:
// muted, defaultMuted, autoplay, controls, loop, playsinline
[
/**
 * Get the value of `muted` from the media element. `muted` indicates
 * that the volume for the media should be set to silent. This does not actually change
 * the `volume` attribute.
 *
 * @method Html5#muted
 * @return {boolean}
 *         - True if the value of `volume` should be ignored and the audio set to silent.
 *         - False if the value of `volume` should be used.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-muted}
 */
'muted',

/**
 * Get the value of `defaultMuted` from the media element. `defaultMuted` indicates
 * whether the media should start muted or not. Only changes the default state of the
 * media. `muted` and `defaultMuted` can have different values. {@link Html5#muted} indicates the
 * current state.
 *
 * @method Html5#defaultMuted
 * @return {boolean}
 *         - The value of `defaultMuted` from the media element.
 *         - True indicates that the media should start muted.
 *         - False indicates that the media should not start muted
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-defaultmuted}
 */
'defaultMuted',

/**
 * Get the value of `autoplay` from the media element. `autoplay` indicates
 * that the media should start to play as soon as the page is ready.
 *
 * @method Html5#autoplay
 * @return {boolean}
 *         - The value of `autoplay` from the media element.
 *         - True indicates that the media should start as soon as the page loads.
 *         - False indicates that the media should not start as soon as the page loads.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-autoplay}
 */
'autoplay',

/**
 * Get the value of `controls` from the media element. `controls` indicates
 * whether the native media controls should be shown or hidden.
 *
 * @method Html5#controls
 * @return {boolean}
 *         - The value of `controls` from the media element.
 *         - True indicates that native controls should be showing.
 *         - False indicates that native controls should be hidden.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-controls}
 */
'controls',

/**
 * Get the value of `loop` from the media element. `loop` indicates
 * that the media should return to the start of the media and continue playing once
 * it reaches the end.
 *
 * @method Html5#loop
 * @return {boolean}
 *         - The value of `loop` from the media element.
 *         - True indicates that playback should seek back to start once
 *           the end of a media is reached.
 *         - False indicates that playback should not loop back to the start when the
 *           end of the media is reached.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-loop}
 */
'loop',

/**
 * Get the value of `playsinline` from the media element. `playsinline` indicates
 * to the browser that non-fullscreen playback is preferred when fullscreen
 * playback is the native default, such as in iOS Safari.
 *
 * @method Html5#playsinline
 * @return {boolean}
 *         - The value of `playsinline` from the media element.
 *         - True indicates that the media should play inline.
 *         - False indicates that the media should not play inline.
 *
 * @see [Spec]{@link https://html.spec.whatwg.org/#attr-video-playsinline}
 */
'playsinline'].forEach(function (prop) {
  Html5.prototype[prop] = function () {
    return this.el_[prop] || this.el_.hasAttribute(prop);
  };
});

// Wrap native boolean attributes with setters that set both property and attribute
// The list is as followed:
// setMuted, setDefaultMuted, setAutoplay, setLoop, setPlaysinline
// setControls is special-cased above
[
/**
 * Set the value of `muted` on the media element. `muted` indicates that the current
 * audio level should be silent.
 *
 * @method Html5#setMuted
 * @param {boolean} muted
 *        - True if the audio should be set to silent
 *        - False otherwise
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-muted}
 */
'muted',

/**
 * Set the value of `defaultMuted` on the media element. `defaultMuted` indicates that the current
 * audio level should be silent, but will only effect the muted level on intial playback..
 *
 * @method Html5.prototype.setDefaultMuted
 * @param {boolean} defaultMuted
 *        - True if the audio should be set to silent
 *        - False otherwise
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-defaultmuted}
 */
'defaultMuted',

/**
 * Set the value of `autoplay` on the media element. `autoplay` indicates
 * that the media should start to play as soon as the page is ready.
 *
 * @method Html5#setAutoplay
 * @param {boolean} autoplay
 *         - True indicates that the media should start as soon as the page loads.
 *         - False indicates that the media should not start as soon as the page loads.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-autoplay}
 */
'autoplay',

/**
 * Set the value of `loop` on the media element. `loop` indicates
 * that the media should return to the start of the media and continue playing once
 * it reaches the end.
 *
 * @method Html5#setLoop
 * @param {boolean} loop
 *         - True indicates that playback should seek back to start once
 *           the end of a media is reached.
 *         - False indicates that playback should not loop back to the start when the
 *           end of the media is reached.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-loop}
 */
'loop',

/**
 * Set the value of `playsinline` from the media element. `playsinline` indicates
 * to the browser that non-fullscreen playback is preferred when fullscreen
 * playback is the native default, such as in iOS Safari.
 *
 * @method Html5#setPlaysinline
 * @param {boolean} playsinline
 *         - True indicates that the media should play inline.
 *         - False indicates that the media should not play inline.
 *
 * @see [Spec]{@link https://html.spec.whatwg.org/#attr-video-playsinline}
 */
'playsinline'].forEach(function (prop) {
  Html5.prototype['set' + toTitleCase(prop)] = function (v) {
    this.el_[prop] = v;

    if (v) {
      this.el_.setAttribute(prop, prop);
    } else {
      this.el_.removeAttribute(prop);
    }
  };
});

// Wrap native properties with a getter
// The list is as followed
// paused, currentTime, buffered, volume, poster, preload, error, seeking
// seekable, ended, playbackRate, defaultPlaybackRate, played, networkState
// readyState, videoWidth, videoHeight
[
/**
 * Get the value of `paused` from the media element. `paused` indicates whether the media element
 * is currently paused or not.
 *
 * @method Html5#paused
 * @return {boolean}
 *         The value of `paused` from the media element.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-paused}
 */
'paused',

/**
 * Get the value of `currentTime` from the media element. `currentTime` indicates
 * the current second that the media is at in playback.
 *
 * @method Html5#currentTime
 * @return {number}
 *         The value of `currentTime` from the media element.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-currenttime}
 */
'currentTime',

/**
 * Get the value of `buffered` from the media element. `buffered` is a `TimeRange`
 * object that represents the parts of the media that are already downloaded and
 * available for playback.
 *
 * @method Html5#buffered
 * @return {TimeRange}
 *         The value of `buffered` from the media element.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-buffered}
 */
'buffered',

/**
 * Get the value of `volume` from the media element. `volume` indicates
 * the current playback volume of audio for a media. `volume` will be a value from 0
 * (silent) to 1 (loudest and default).
 *
 * @method Html5#volume
 * @return {number}
 *         The value of `volume` from the media element. Value will be between 0-1.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-a-volume}
 */
'volume',

/**
 * Get the value of `poster` from the media element. `poster` indicates
 * that the url of an image file that can/will be shown when no media data is available.
 *
 * @method Html5#poster
 * @return {string}
 *         The value of `poster` from the media element. Value will be a url to an
 *         image.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-video-poster}
 */
'poster',

/**
 * Get the value of `preload` from the media element. `preload` indicates
 * what should download before the media is interacted with. It can have the following
 * values:
 * - none: nothing should be downloaded
 * - metadata: poster and the first few frames of the media may be downloaded to get
 *   media dimensions and other metadata
 * - auto: allow the media and metadata for the media to be downloaded before
 *    interaction
 *
 * @method Html5#preload
 * @return {string}
 *         The value of `preload` from the media element. Will be 'none', 'metadata',
 *         or 'auto'.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-preload}
 */
'preload',

/**
 * Get the value of the `error` from the media element. `error` indicates any
 * MediaError that may have occured during playback. If error returns null there is no
 * current error.
 *
 * @method Html5#error
 * @return {MediaError|null}
 *         The value of `error` from the media element. Will be `MediaError` if there
 *         is a current error and null otherwise.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-error}
 */
'error',

/**
 * Get the value of `seeking` from the media element. `seeking` indicates whether the
 * media is currently seeking to a new position or not.
 *
 * @method Html5#seeking
 * @return {boolean}
 *         - The value of `seeking` from the media element.
 *         - True indicates that the media is currently seeking to a new position.
 *         - Flase indicates that the media is not seeking to a new position at this time.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-seeking}
 */
'seeking',

/**
 * Get the value of `seekable` from the media element. `seekable` returns a
 * `TimeRange` object indicating ranges of time that can currently be `seeked` to.
 *
 * @method Html5#seekable
 * @return {TimeRange}
 *         The value of `seekable` from the media element. A `TimeRange` object
 *         indicating the current ranges of time that can be seeked to.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-seekable}
 */
'seekable',

/**
 * Get the value of `ended` from the media element. `ended` indicates whether
 * the media has reached the end or not.
 *
 * @method Html5#ended
 * @return {boolean}
 *         - The value of `ended` from the media element.
 *         - True indicates that the media has ended.
 *         - False indicates that the media has not ended.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-ended}
 */
'ended',

/**
 * Get the value of `playbackRate` from the media element. `playbackRate` indicates
 * the rate at which the media is currently playing back. Examples:
 *   - if playbackRate is set to 2, media will play twice as fast.
 *   - if playbackRate is set to 0.5, media will play half as fast.
 *
 * @method Html5#playbackRate
 * @return {number}
 *         The value of `playbackRate` from the media element. A number indicating
 *         the current playback speed of the media, where 1 is normal speed.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-playbackrate}
 */
'playbackRate',

/**
 * Get the value of `defaultPlaybackRate` from the media element. `defaultPlaybackRate` indicates
 * the rate at which the media is currently playing back. This value will not indicate the current
 * `playbackRate` after playback has started, use {@link Html5#playbackRate} for that.
 *
 * Examples:
 *   - if defaultPlaybackRate is set to 2, media will play twice as fast.
 *   - if defaultPlaybackRate is set to 0.5, media will play half as fast.
 *
 * @method Html5.prototype.defaultPlaybackRate
 * @return {number}
 *         The value of `defaultPlaybackRate` from the media element. A number indicating
 *         the current playback speed of the media, where 1 is normal speed.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-playbackrate}
 */
'defaultPlaybackRate',

/**
 * Get the value of `played` from the media element. `played` returns a `TimeRange`
 * object representing points in the media timeline that have been played.
 *
 * @method Html5#played
 * @return {TimeRange}
 *         The value of `played` from the media element. A `TimeRange` object indicating
 *         the ranges of time that have been played.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-played}
 */
'played',

/**
 * Get the value of `networkState` from the media element. `networkState` indicates
 * the current network state. It returns an enumeration from the following list:
 * - 0: NETWORK_EMPTY
 * - 1: NEWORK_IDLE
 * - 2: NETWORK_LOADING
 * - 3: NETWORK_NO_SOURCE
 *
 * @method Html5#networkState
 * @return {number}
 *         The value of `networkState` from the media element. This will be a number
 *         from the list in the description.
 *
 * @see [Spec] {@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-networkstate}
 */
'networkState',

/**
 * Get the value of `readyState` from the media element. `readyState` indicates
 * the current state of the media element. It returns an enumeration from the
 * following list:
 * - 0: HAVE_NOTHING
 * - 1: HAVE_METADATA
 * - 2: HAVE_CURRENT_DATA
 * - 3: HAVE_FUTURE_DATA
 * - 4: HAVE_ENOUGH_DATA
 *
 * @method Html5#readyState
 * @return {number}
 *         The value of `readyState` from the media element. This will be a number
 *         from the list in the description.
 *
 * @see [Spec] {@link https://www.w3.org/TR/html5/embedded-content-0.html#ready-states}
 */
'readyState',

/**
 * Get the value of `videoWidth` from the video element. `videoWidth` indicates
 * the current width of the video in css pixels.
 *
 * @method Html5#videoWidth
 * @return {number}
 *         The value of `videoWidth` from the video element. This will be a number
 *         in css pixels.
 *
 * @see [Spec] {@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-video-videowidth}
 */
'videoWidth',

/**
 * Get the value of `videoHeight` from the video element. `videoHeigth` indicates
 * the current height of the video in css pixels.
 *
 * @method Html5#videoHeight
 * @return {number}
 *         The value of `videoHeight` from the video element. This will be a number
 *         in css pixels.
 *
 * @see [Spec] {@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-video-videowidth}
 */
'videoHeight'].forEach(function (prop) {
  Html5.prototype[prop] = function () {
    return this.el_[prop];
  };
});

// Wrap native properties with a setter in this format:
// set + toTitleCase(name)
// The list is as follows:
// setVolume, setSrc, setPoster, setPreload, setPlaybackRate, setDefaultPlaybackRate
[
/**
 * Set the value of `volume` on the media element. `volume` indicates the current
 * audio level as a percentage in decimal form. This means that 1 is 100%, 0.5 is 50%, and
 * so on.
 *
 * @method Html5#setVolume
 * @param {number} percentAsDecimal
 *        The volume percent as a decimal. Valid range is from 0-1.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-a-volume}
 */
'volume',

/**
 * Set the value of `src` on the media element. `src` indicates the current
 * {@link Tech~SourceObject} for the media.
 *
 * @method Html5#setSrc
 * @param {Tech~SourceObject} src
 *        The source object to set as the current source.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-src}
 */
'src',

/**
 * Set the value of `poster` on the media element. `poster` is the url to
 * an image file that can/will be shown when no media data is available.
 *
 * @method Html5#setPoster
 * @param {string} poster
 *        The url to an image that should be used as the `poster` for the media
 *        element.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-poster}
 */
'poster',

/**
 * Set the value of `preload` on the media element. `preload` indicates
 * what should download before the media is interacted with. It can have the following
 * values:
 * - none: nothing should be downloaded
 * - metadata: poster and the first few frames of the media may be downloaded to get
 *   media dimensions and other metadata
 * - auto: allow the media and metadata for the media to be downloaded before
 *    interaction
 *
 * @method Html5#setPreload
 * @param {string} preload
 *         The value of `preload` to set on the media element. Must be 'none', 'metadata',
 *         or 'auto'.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-preload}
 */
'preload',

/**
 * Set the value of `playbackRate` on the media element. `playbackRate` indicates
 * the rate at which the media should play back. Examples:
 *   - if playbackRate is set to 2, media will play twice as fast.
 *   - if playbackRate is set to 0.5, media will play half as fast.
 *
 * @method Html5#setPlaybackRate
 * @return {number}
 *         The value of `playbackRate` from the media element. A number indicating
 *         the current playback speed of the media, where 1 is normal speed.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-playbackrate}
 */
'playbackRate',

/**
 * Set the value of `defaultPlaybackRate` on the media element. `defaultPlaybackRate` indicates
 * the rate at which the media should play back upon initial startup. Changing this value
 * after a video has started will do nothing. Instead you should used {@link Html5#setPlaybackRate}.
 *
 * Example Values:
 *   - if playbackRate is set to 2, media will play twice as fast.
 *   - if playbackRate is set to 0.5, media will play half as fast.
 *
 * @method Html5.prototype.setDefaultPlaybackRate
 * @return {number}
 *         The value of `defaultPlaybackRate` from the media element. A number indicating
 *         the current playback speed of the media, where 1 is normal speed.
 *
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-defaultplaybackrate}
 */
'defaultPlaybackRate'].forEach(function (prop) {
  Html5.prototype['set' + toTitleCase(prop)] = function (v) {
    this.el_[prop] = v;
  };
});

// wrap native functions with a function
// The list is as follows:
// pause, load play
[
/**
 * A wrapper around the media elements `pause` function. This will call the `HTML5`
 * media elements `pause` function.
 *
 * @method Html5#pause
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-pause}
 */
'pause',

/**
 * A wrapper around the media elements `load` function. This will call the `HTML5`s
 * media element `load` function.
 *
 * @method Html5#load
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-load}
 */
'load',

/**
 * A wrapper around the media elements `play` function. This will call the `HTML5`s
 * media element `play` function.
 *
 * @method Html5#play
 * @see [Spec]{@link https://www.w3.org/TR/html5/embedded-content-0.html#dom-media-play}
 */
'play'].forEach(function (prop) {
  Html5.prototype[prop] = function () {
    return this.el_[prop]();
  };
});

Tech.withSourceHandlers(Html5);

/**
 * Native source handler for Html5, simply passes the source to the media element.
 *
 * @proprety {Tech~SourceObject} source
 *        The source object
 *
 * @proprety {Html5} tech
 *        The instance of the HTML5 tech.
 */
Html5.nativeSourceHandler = {};

/**
 * Check if the media element can play the given mime type.
 *
 * @param {string} type
 *        The mimetype to check
 *
 * @return {string}
 *         'probably', 'maybe', or '' (empty string)
 */
Html5.nativeSourceHandler.canPlayType = function (type) {
  // IE9 on Windows 7 without MediaPlayer throws an error here
  // https://github.com/videojs/video.js/issues/519
  try {
    return Html5.TEST_VID.canPlayType(type);
  } catch (e) {
    return '';
  }
};

/**
 * Check if the media element can handle a source natively.
 *
 * @param {Tech~SourceObject} source
 *         The source object
 *
 * @param {Object} [options]
 *         Options to be passed to the tech.
 *
 * @return {string}
 *         'probably', 'maybe', or '' (empty string).
 */
Html5.nativeSourceHandler.canHandleSource = function (source, options) {

  // If a type was provided we should rely on that
  if (source.type) {
    return Html5.nativeSourceHandler.canPlayType(source.type);

    // If no type, fall back to checking 'video/[EXTENSION]'
  } else if (source.src) {
    var ext = getFileExtension(source.src);

    return Html5.nativeSourceHandler.canPlayType('video/' + ext);
  }

  return '';
};

/**
 * Pass the source to the native media element.
 *
 * @param {Tech~SourceObject} source
 *        The source object
 *
 * @param {Html5} tech
 *        The instance of the Html5 tech
 *
 * @param {Object} [options]
 *        The options to pass to the source
 */
Html5.nativeSourceHandler.handleSource = function (source, tech, options) {
  tech.setSrc(source.src);
};

/**
 * A noop for the native dispose function, as cleanup is not needed.
 */
Html5.nativeSourceHandler.dispose = function () {};

// Register the native source handler
Html5.registerSourceHandler(Html5.nativeSourceHandler);

Tech.registerTech('Html5', Html5);

var _templateObject$1 = taggedTemplateLiteralLoose(['\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      '], ['\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      ']);

/**
 * @file player.js
 */
// Subclasses Component
// The following imports are used only to ensure that the corresponding modules
// are always included in the video.js package. Importing the modules will
// execute them and they will register themselves with video.js.
// Import Html5 tech, at least for disposing the original video tag.
// The following tech events are simply re-triggered
// on the player when they happen
var TECH_EVENTS_RETRIGGER = [
/**
 * Fired while the user agent is downloading media data.
 *
 * @event Player#progress
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `progress` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechProgress_
 * @fires Player#progress
 * @listens Tech#progress
 */
'progress',

/**
 * Fires when the loading of an audio/video is aborted.
 *
 * @event Player#abort
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `abort` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechAbort_
 * @fires Player#abort
 * @listens Tech#abort
 */
'abort',

/**
 * Fires when the browser is intentionally not getting media data.
 *
 * @event Player#suspend
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `suspend` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechSuspend_
 * @fires Player#suspend
 * @listens Tech#suspend
 */
'suspend',

/**
 * Fires when the current playlist is empty.
 *
 * @event Player#emptied
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `emptied` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechEmptied_
 * @fires Player#emptied
 * @listens Tech#emptied
 */
'emptied',
/**
 * Fires when the browser is trying to get media data, but data is not available.
 *
 * @event Player#stalled
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `stalled` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechStalled_
 * @fires Player#stalled
 * @listens Tech#stalled
 */
'stalled',

/**
 * Fires when the browser has loaded meta data for the audio/video.
 *
 * @event Player#loadedmetadata
 * @type {EventTarget~Event}
 */
/**
 * Retrigger the `stalled` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechLoadedmetadata_
 * @fires Player#loadedmetadata
 * @listens Tech#loadedmetadata
 */
'loadedmetadata',

/**
 * Fires when the browser has loaded the current frame of the audio/video.
 *
 * @event Player#loadeddata
 * @type {event}
 */
/**
 * Retrigger the `loadeddata` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechLoaddeddata_
 * @fires Player#loadeddata
 * @listens Tech#loadeddata
 */
'loadeddata',

/**
 * Fires when the current playback position has changed.
 *
 * @event Player#timeupdate
 * @type {event}
 */
/**
 * Retrigger the `timeupdate` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechTimeUpdate_
 * @fires Player#timeupdate
 * @listens Tech#timeupdate
 */
'timeupdate',

/**
 * Fires when the playing speed of the audio/video is changed
 *
 * @event Player#ratechange
 * @type {event}
 */
/**
 * Retrigger the `ratechange` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechRatechange_
 * @fires Player#ratechange
 * @listens Tech#ratechange
 */
'ratechange',

/**
 * Fires when the video's intrinsic dimensions change
 *
 * @event Player#resize
 * @type {event}
 */
/**
 * Retrigger the `resize` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechResize_
 * @fires Player#resize
 * @listens Tech#resize
 */
'resize',

/**
 * Fires when the volume has been changed
 *
 * @event Player#volumechange
 * @type {event}
 */
/**
 * Retrigger the `volumechange` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechVolumechange_
 * @fires Player#volumechange
 * @listens Tech#volumechange
 */
'volumechange',

/**
 * Fires when the text track has been changed
 *
 * @event Player#texttrackchange
 * @type {event}
 */
/**
 * Retrigger the `texttrackchange` event that was triggered by the {@link Tech}.
 *
 * @private
 * @method Player#handleTechTexttrackchange_
 * @fires Player#texttrackchange
 * @listens Tech#texttrackchange
 */
'texttrackchange'];

/**
 * An instance of the `Player` class is created when any of the Video.js setup methods
 * are used to initialize a video.
 *
 * After an instance has been created it can be accessed globally in two ways:
 * 1. By calling `videojs('example_video_1');`
 * 2. By using it directly via  `videojs.players.example_video_1;`
 *
 * @extends Component
 */

var Player = function (_Component) {
  inherits(Player, _Component);

  /**
   * Create an instance of this class.
   *
   * @param {Element} tag
   *        The original video DOM element used for configuring options.
   *
   * @param {Object} [options]
   *        Object of option names and values.
   *
   * @param {Component~ReadyCallback} [ready]
   *        Ready callback function.
   */
  function Player(tag, options, ready) {
    classCallCheck(this, Player);

    // Make sure tag ID exists
    tag.id = tag.id || 'vjs_video_' + newGUID();

    // Set Options
    // The options argument overrides options set in the video tag
    // which overrides globally set options.
    // This latter part coincides with the load order
    // (tag must exist before Player)
    options = assign(Player.getTagSettings(tag), options);

    // Delay the initialization of children because we need to set up
    // player properties first, and can't use `this` before `super()`
    options.initChildren = false;

    // Same with creating the element
    options.createEl = false;

    // we don't want the player to report touch activity on itself
    // see enableTouchActivity in Component
    options.reportTouchActivity = false;

    // If language is not set, get the closest lang attribute
    if (!options.language) {
      if (typeof tag.closest === 'function') {
        var closest = tag.closest('[lang]');

        if (closest) {
          options.language = closest.getAttribute('lang');
        }
      } else {
        var element = tag;

        while (element && element.nodeType === 1) {
          if (getAttributes(element).hasOwnProperty('lang')) {
            options.language = element.getAttribute('lang');
            break;
          }
          element = element.parentNode;
        }
      }
    }

    // Run base component initializing with new options

    // Turn off API access because we're loading a new tech that might load asynchronously
    var _this = possibleConstructorReturn(this, _Component.call(this, null, options, ready));

    _this.isReady_ = false;

    // if the global option object was accidentally blown away by
    // someone, bail early with an informative error
    if (!_this.options_ || !_this.options_.techOrder || !_this.options_.techOrder.length) {
      throw new Error('No techOrder specified. Did you overwrite ' + 'videojs.options instead of just changing the ' + 'properties you want to override?');
    }

    // Store the original tag used to set options
    _this.tag = tag;

    // Store the tag attributes used to restore html5 element
    _this.tagAttributes = tag && getAttributes(tag);

    // Update current language
    _this.language(_this.options_.language);

    // Update Supported Languages
    if (options.languages) {
      // Normalise player option languages to lowercase
      var languagesToLower = {};

      Object.getOwnPropertyNames(options.languages).forEach(function (name$$1) {
        languagesToLower[name$$1.toLowerCase()] = options.languages[name$$1];
      });
      _this.languages_ = languagesToLower;
    } else {
      _this.languages_ = Player.prototype.options_.languages;
    }

    // Cache for video property values.
    _this.cache_ = {};

    // Set poster
    _this.poster_ = options.poster || '';

    // Set controls
    _this.controls_ = !!options.controls;

    // Set default values for lastVolume
    _this.cache_.lastVolume = 1;

    // Original tag settings stored in options
    // now remove immediately so native controls don't flash.
    // May be turned back on by HTML5 tech if nativeControlsForTouch is true
    tag.controls = false;

    /*
     * Store the internal state of scrubbing
     *
     * @private
     * @return {Boolean} True if the user is scrubbing
     */
    _this.scrubbing_ = false;

    _this.el_ = _this.createEl();

    // Make this an evented object and use `el_` as its event bus.
    evented(_this, { eventBusKey: 'el_' });

    // We also want to pass the original player options to each component and plugin
    // as well so they don't need to reach back into the player for options later.
    // We also need to do another copy of this.options_ so we don't end up with
    // an infinite loop.
    var playerOptionsCopy = mergeOptions(_this.options_);

    // Load plugins
    if (options.plugins) {
      var plugins = options.plugins;

      Object.keys(plugins).forEach(function (name$$1) {
        if (typeof this[name$$1] === 'function') {
          this[name$$1](plugins[name$$1]);
        } else {
          throw new Error('plugin "' + name$$1 + '" does not exist');
        }
      }, _this);
    }

    _this.options_.playerOptions = playerOptionsCopy;

    _this.middleware_ = [];

    _this.initChildren();

    // Set isAudio based on whether or not an audio tag was used
    _this.isAudio(tag.nodeName.toLowerCase() === 'audio');

    // Update controls className. Can't do this when the controls are initially
    // set because the element doesn't exist yet.
    if (_this.controls()) {
      _this.addClass('vjs-controls-enabled');
    } else {
      _this.addClass('vjs-controls-disabled');
    }

    // Set ARIA label and region role depending on player type
    _this.el_.setAttribute('role', 'region');
    if (_this.isAudio()) {
      _this.el_.setAttribute('aria-label', _this.localize('Audio Player'));
    } else {
      _this.el_.setAttribute('aria-label', _this.localize('Video Player'));
    }

    if (_this.isAudio()) {
      _this.addClass('vjs-audio');
    }

    if (_this.flexNotSupported_()) {
      _this.addClass('vjs-no-flex');
    }

    // TODO: Make this smarter. Toggle user state between touching/mousing
    // using events, since devices can have both touch and mouse events.
    // if (browser.TOUCH_ENABLED) {
    //   this.addClass('vjs-touch-enabled');
    // }

    // iOS Safari has broken hover handling
    if (!IS_IOS) {
      _this.addClass('vjs-workinghover');
    }

    // Make player easily findable by ID
    Player.players[_this.id_] = _this;

    // Add a major version class to aid css in plugins
    var majorVersion = version.split('.')[0];

    _this.addClass('vjs-v' + majorVersion);

    // When the player is first initialized, trigger activity so components
    // like the control bar show themselves if needed
    _this.userActive(true);
    _this.reportUserActivity();
    _this.listenForUserActivity_();

    _this.on('fullscreenchange', _this.handleFullscreenChange_);
    _this.on('stageclick', _this.handleStageClick_);

    _this.changingSrc_ = false;
    return _this;
  }

  /**
   * Destroys the video player and does any necessary cleanup.
   *
   * This is especially helpful if you are dynamically adding and removing videos
   * to/from the DOM.
   *
   * @fires Player#dispose
   */


  Player.prototype.dispose = function dispose() {
    /**
     * Called when the player is being disposed of.
     *
     * @event Player#dispose
     * @type {EventTarget~Event}
     */
    this.trigger('dispose');
    // prevent dispose from being called twice
    this.off('dispose');

    if (this.styleEl_ && this.styleEl_.parentNode) {
      this.styleEl_.parentNode.removeChild(this.styleEl_);
    }

    // Kill reference to this player
    Player.players[this.id_] = null;

    if (this.tag && this.tag.player) {
      this.tag.player = null;
    }

    if (this.el_ && this.el_.player) {
      this.el_.player = null;
    }

    if (this.tech_) {
      this.tech_.dispose();
    }

    _Component.prototype.dispose.call(this);
  };

  /**
   * Create the `Player`'s DOM element.
   *
   * @return {Element}
   *         The DOM element that gets created.
   */


  Player.prototype.createEl = function createEl$$1() {
    var tag = this.tag;
    var el = void 0;
    var playerElIngest = this.playerElIngest_ = tag.parentNode && tag.parentNode.hasAttribute && tag.parentNode.hasAttribute('data-vjs-player');

    if (playerElIngest) {
      el = this.el_ = tag.parentNode;
    } else {
      el = this.el_ = _Component.prototype.createEl.call(this, 'div');
    }

    // set tabindex to -1 so we could focus on the player element
    tag.setAttribute('tabindex', '-1');

    // Remove width/height attrs from tag so CSS can make it 100% width/height
    tag.removeAttribute('width');
    tag.removeAttribute('height');

    // Copy over all the attributes from the tag, including ID and class
    // ID will now reference player box, not the video tag
    var attrs = getAttributes(tag);

    Object.getOwnPropertyNames(attrs).forEach(function (attr) {
      // workaround so we don't totally break IE7
      // http://stackoverflow.com/questions/3653444/css-styles-not-applied-on-dynamic-elements-in-internet-explorer-7
      if (attr === 'class') {
        el.className += ' ' + attrs[attr];
      } else {
        el.setAttribute(attr, attrs[attr]);
      }
    });

    // Update tag id/class for use as HTML5 playback tech
    // Might think we should do this after embedding in container so .vjs-tech class
    // doesn't flash 100% width/height, but class only applies with .video-js parent
    tag.playerId = tag.id;
    tag.id += '_html5_api';
    tag.className = 'vjs-tech';

    // Make player findable on elements
    tag.player = el.player = this;
    // Default state of video is paused
    this.addClass('vjs-paused');

    // Add a style element in the player that we'll use to set the width/height
    // of the player in a way that's still overrideable by CSS, just like the
    // video element
    if (window_1.VIDEOJS_NO_DYNAMIC_STYLE !== true) {
      this.styleEl_ = createStyleElement('vjs-styles-dimensions');
      var defaultsStyleEl = $('.vjs-styles-defaults');
      var head = $('head');

      head.insertBefore(this.styleEl_, defaultsStyleEl ? defaultsStyleEl.nextSibling : head.firstChild);
    }

    // Pass in the width/height/aspectRatio options which will update the style el
    this.width(this.options_.width);
    this.height(this.options_.height);
    this.fluid(this.options_.fluid);
    this.aspectRatio(this.options_.aspectRatio);

    // Hide any links within the video/audio tag, because IE doesn't hide them completely.
    var links = tag.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
      var linkEl = links.item(i);

      addClass(linkEl, 'vjs-hidden');
      linkEl.setAttribute('hidden', 'hidden');
    }

    // insertElFirst seems to cause the networkState to flicker from 3 to 2, so
    // keep track of the original for later so we can know if the source originally failed
    tag.initNetworkState_ = tag.networkState;

    // Wrap video tag in div (el/box) container
    if (tag.parentNode && !playerElIngest) {
      tag.parentNode.insertBefore(el, tag);
    }

    // insert the tag as the first child of the player element
    // then manually add it to the children array so that this.addChild
    // will work properly for other components
    //
    // Breaks iPhone, fixed in HTML5 setup.
    prependTo(tag, el);
    this.children_.unshift(tag);

    // Set lang attr on player to ensure CSS :lang() in consistent with player
    // if it's been set to something different to the doc
    this.el_.setAttribute('lang', this.language_);

    this.el_ = el;

    return el;
  };

  /**
   * A getter/setter for the `Player`'s width.
   *
   * @param {number} [value]
   *        The value to set the `Player's width to.
   *
   * @return {number}
   *         The current width of the `Player` when getting.
   */


  Player.prototype.width = function width(value) {
    return this.dimension('width', value);
  };

  /**
   * A getter/setter for the `Player`'s height.
   *
   * @param {number} [value]
   *        The value to set the `Player's heigth to.
   *
   * @return {number}
   *         The current height of the `Player` when getting.
   */


  Player.prototype.height = function height(value) {
    return this.dimension('height', value);
  };

  /**
   * A getter/setter for the `Player`'s width & height.
   *
   * @param {string} dimension
   *        This string can be:
   *        - 'width'
   *        - 'height'
   *
   * @param {number} [value]
   *        Value for dimension specified in the first argument.
   *
   * @return {number}
   *         The dimension arguments value when getting (width/height).
   */


  Player.prototype.dimension = function dimension(_dimension, value) {
    var privDimension = _dimension + '_';

    if (value === undefined) {
      return this[privDimension] || 0;
    }

    if (value === '') {
      // If an empty string is given, reset the dimension to be automatic
      this[privDimension] = undefined;
    } else {
      var parsedVal = parseFloat(value);

      if (isNaN(parsedVal)) {
        log$1.error('Improper value "' + value + '" supplied for for ' + _dimension);
        return;
      }

      this[privDimension] = parsedVal;
    }

    this.updateStyleEl_();
  };

  /**
   * A getter/setter/toggler for the vjs-fluid `className` on the `Player`.
   *
   * @param {boolean} [bool]
   *        - A value of true adds the class.
   *        - A value of false removes the class.
   *        - No value will toggle the fluid class.
   *
   * @return {boolean|undefined}
   *         - The value of fluid when getting.
   *         - `undefined` when setting.
   */


  Player.prototype.fluid = function fluid(bool) {
    if (bool === undefined) {
      return !!this.fluid_;
    }

    this.fluid_ = !!bool;

    if (bool) {
      this.addClass('vjs-fluid');
    } else {
      this.removeClass('vjs-fluid');
    }

    this.updateStyleEl_();
  };

  /**
   * Get/Set the aspect ratio
   *
   * @param {string} [ratio]
   *        Aspect ratio for player
   *
   * @return {string|undefined}
   *         returns the current aspect ratio when getting
   */

  /**
   * A getter/setter for the `Player`'s aspect ratio.
   *
   * @param {string} [ratio]
   *        The value to set the `Player's aspect ratio to.
   *
   * @return {string|undefined}
   *         - The current aspect ratio of the `Player` when getting.
   *         - undefined when setting
   */


  Player.prototype.aspectRatio = function aspectRatio(ratio) {
    if (ratio === undefined) {
      return this.aspectRatio_;
    }

    // Check for width:height format
    if (!/^\d+\:\d+$/.test(ratio)) {
      throw new Error('Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.');
    }
    this.aspectRatio_ = ratio;

    // We're assuming if you set an aspect ratio you want fluid mode,
    // because in fixed mode you could calculate width and height yourself.
    this.fluid(true);

    this.updateStyleEl_();
  };

  /**
   * Update styles of the `Player` element (height, width and aspect ratio).
   *
   * @private
   * @listens Tech#loadedmetadata
   */


  Player.prototype.updateStyleEl_ = function updateStyleEl_() {
    if (window_1.VIDEOJS_NO_DYNAMIC_STYLE === true) {
      var _width = typeof this.width_ === 'number' ? this.width_ : this.options_.width;
      var _height = typeof this.height_ === 'number' ? this.height_ : this.options_.height;
      var techEl = this.tech_ && this.tech_.el();

      if (techEl) {
        if (_width >= 0) {
          techEl.width = _width;
        }
        if (_height >= 0) {
          techEl.height = _height;
        }
      }

      return;
    }

    var width = void 0;
    var height = void 0;
    var aspectRatio = void 0;
    var idClass = void 0;

    // The aspect ratio is either used directly or to calculate width and height.
    if (this.aspectRatio_ !== undefined && this.aspectRatio_ !== 'auto') {
      // Use any aspectRatio that's been specifically set
      aspectRatio = this.aspectRatio_;
    } else if (this.videoWidth() > 0) {
      // Otherwise try to get the aspect ratio from the video metadata
      aspectRatio = this.videoWidth() + ':' + this.videoHeight();
    } else {
      // Or use a default. The video element's is 2:1, but 16:9 is more common.
      aspectRatio = '16:9';
    }

    // Get the ratio as a decimal we can use to calculate dimensions
    var ratioParts = aspectRatio.split(':');
    var ratioMultiplier = ratioParts[1] / ratioParts[0];

    if (this.width_ !== undefined) {
      // Use any width that's been specifically set
      width = this.width_;
    } else if (this.height_ !== undefined) {
      // Or calulate the width from the aspect ratio if a height has been set
      width = this.height_ / ratioMultiplier;
    } else {
      // Or use the video's metadata, or use the video el's default of 300
      width = this.videoWidth() || 300;
    }

    if (this.height_ !== undefined) {
      // Use any height that's been specifically set
      height = this.height_;
    } else {
      // Otherwise calculate the height from the ratio and the width
      height = width * ratioMultiplier;
    }

    // Ensure the CSS class is valid by starting with an alpha character
    if (/^[^a-zA-Z]/.test(this.id())) {
      idClass = 'dimensions-' + this.id();
    } else {
      idClass = this.id() + '-dimensions';
    }

    // Ensure the right class is still on the player for the style element
    this.addClass(idClass);

    setTextContent(this.styleEl_, '\n      .' + idClass + ' {\n        width: ' + width + 'px;\n        height: ' + height + 'px;\n      }\n\n      .' + idClass + '.vjs-fluid {\n        padding-top: ' + ratioMultiplier * 100 + '%;\n      }\n    ');
  };

  /**
   * Load/Create an instance of playback {@link Tech} including element
   * and API methods. Then append the `Tech` element in `Player` as a child.
   *
   * @param {string} techName
   *        name of the playback technology
   *
   * @param {string} source
   *        video source
   *
   * @private
   */


  Player.prototype.loadTech_ = function loadTech_(techName, source) {
    var _this2 = this;

    // Pause and remove current playback technology
    if (this.tech_) {
      this.unloadTech_();
    }

    var titleTechName = toTitleCase(techName);
    var camelTechName = techName.charAt(0).toLowerCase() + techName.slice(1);

    // get rid of the HTML5 video tag as soon as we are using another tech
    if (titleTechName !== 'Html5' && this.tag) {
      Tech.getTech('Html5').disposeMediaElement(this.tag);
      this.tag.player = null;
      this.tag = null;
    }

    this.techName_ = titleTechName;

    // Turn off API access because we're loading a new tech that might load asynchronously
    this.isReady_ = false;

    // Grab tech-specific options from player options and add source and parent element to use.
    var techOptions = {
      source: source,
      'nativeControlsForTouch': this.options_.nativeControlsForTouch,
      'playerId': this.id(),
      'techId': this.id() + '_' + titleTechName + '_api',
      'autoplay': this.options_.autoplay,
      'playsinline': this.options_.playsinline,
      'preload': this.options_.preload,
      'loop': this.options_.loop,
      'muted': this.options_.muted,
      'poster': this.poster(),
      'language': this.language(),
      'playerElIngest': this.playerElIngest_ || false,
      'vtt.js': this.options_['vtt.js']
    };

    ALL.names.forEach(function (name$$1) {
      var props = ALL[name$$1];

      techOptions[props.getterName] = _this2[props.privateName];
    });

    assign(techOptions, this.options_[titleTechName]);
    assign(techOptions, this.options_[camelTechName]);
    assign(techOptions, this.options_[techName.toLowerCase()]);

    if (this.tag) {
      techOptions.tag = this.tag;
    }

    if (source && source.src === this.cache_.src && this.cache_.currentTime > 0) {
      techOptions.startTime = this.cache_.currentTime;
    }

    // Initialize tech instance
    var TechClass = Tech.getTech(techName);

    if (!TechClass) {
      throw new Error('No Tech named \'' + titleTechName + '\' exists! \'' + titleTechName + '\' should be registered using videojs.registerTech()\'');
    }

    this.tech_ = new TechClass(techOptions);

    // player.triggerReady is always async, so don't need this to be async
    this.tech_.ready(bind(this, this.handleTechReady_), true);

    textTrackConverter.jsonToTextTracks(this.textTracksJson_ || [], this.tech_);

    // Listen to all HTML5-defined events and trigger them on the player
    TECH_EVENTS_RETRIGGER.forEach(function (event) {
      _this2.on(_this2.tech_, event, _this2['handleTech' + toTitleCase(event) + '_']);
    });
    this.on(this.tech_, 'loadstart', this.handleTechLoadStart_);
    this.on(this.tech_, 'waiting', this.handleTechWaiting_);
    this.on(this.tech_, 'canplay', this.handleTechCanPlay_);
    this.on(this.tech_, 'canplaythrough', this.handleTechCanPlayThrough_);
    this.on(this.tech_, 'playing', this.handleTechPlaying_);
    this.on(this.tech_, 'ended', this.handleTechEnded_);
    this.on(this.tech_, 'seeking', this.handleTechSeeking_);
    this.on(this.tech_, 'seeked', this.handleTechSeeked_);
    this.on(this.tech_, 'play', this.handleTechPlay_);
    this.on(this.tech_, 'firstplay', this.handleTechFirstPlay_);
    this.on(this.tech_, 'pause', this.handleTechPause_);
    this.on(this.tech_, 'durationchange', this.handleTechDurationChange_);
    this.on(this.tech_, 'fullscreenchange', this.handleTechFullscreenChange_);
    this.on(this.tech_, 'error', this.handleTechError_);
    this.on(this.tech_, 'loadedmetadata', this.updateStyleEl_);
    this.on(this.tech_, 'posterchange', this.handleTechPosterChange_);
    this.on(this.tech_, 'textdata', this.handleTechTextData_);

    this.usingNativeControls(this.techGet_('controls'));

    if (this.controls() && !this.usingNativeControls()) {
      this.addTechControlsListeners_();
    }

    // Add the tech element in the DOM if it was not already there
    // Make sure to not insert the original video element if using Html5
    if (this.tech_.el().parentNode !== this.el() && (titleTechName !== 'Html5' || !this.tag)) {
      prependTo(this.tech_.el(), this.el());
    }

    // Get rid of the original video tag reference after the first tech is loaded
    if (this.tag) {
      this.tag.player = null;
      this.tag = null;
    }
  };

  /**
   * Unload and dispose of the current playback {@link Tech}.
   *
   * @private
   */


  Player.prototype.unloadTech_ = function unloadTech_() {
    var _this3 = this;

    // Save the current text tracks so that we can reuse the same text tracks with the next tech
    ALL.names.forEach(function (name$$1) {
      var props = ALL[name$$1];

      _this3[props.privateName] = _this3[props.getterName]();
    });
    this.textTracksJson_ = textTrackConverter.textTracksToJson(this.tech_);

    this.isReady_ = false;

    this.tech_.dispose();

    this.tech_ = false;
  };

  /**
   * Return a reference to the current {@link Tech}.
   * It will print a warning by default about the danger of using the tech directly
   * but any argument that is passed in will silence the warning.
   *
   * @param {*} [safety]
   *        Anything passed in to silence the warning
   *
   * @return {Tech}
   *         The Tech
   */


  Player.prototype.tech = function tech(safety) {
    if (safety === undefined) {
      log$1.warn(tsml(_templateObject$1));
    }

    return this.tech_;
  };

  /**
   * Set up click and touch listeners for the playback element
   *
   * - On desktops: a click on the video itself will toggle playback
   * - On mobile devices: a click on the video toggles controls
   *   which is done by toggling the user state between active and
   *   inactive
   * - A tap can signal that a user has become active or has become inactive
   *   e.g. a quick tap on an iPhone movie should reveal the controls. Another
   *   quick tap should hide them again (signaling the user is in an inactive
   *   viewing state)
   * - In addition to this, we still want the user to be considered inactive after
   *   a few seconds of inactivity.
   *
   * > Note: the only part of iOS interaction we can't mimic with this setup
   * is a touch and hold on the video element counting as activity in order to
   * keep the controls showing, but that shouldn't be an issue. A touch and hold
   * on any controls will still keep the user active
   *
   * @private
   */


  Player.prototype.addTechControlsListeners_ = function addTechControlsListeners_() {
    // Make sure to remove all the previous listeners in case we are called multiple times.
    this.removeTechControlsListeners_();

    // Some browsers (Chrome & IE) don't trigger a click on a flash swf, but do
    // trigger mousedown/up.
    // http://stackoverflow.com/questions/1444562/javascript-onclick-event-over-flash-object
    // Any touch events are set to block the mousedown event from happening
    this.on(this.tech_, 'mousedown', this.handleTechClick_);

    // If the controls were hidden we don't want that to change without a tap event
    // so we'll check if the controls were already showing before reporting user
    // activity
    this.on(this.tech_, 'touchstart', this.handleTechTouchStart_);
    this.on(this.tech_, 'touchmove', this.handleTechTouchMove_);
    this.on(this.tech_, 'touchend', this.handleTechTouchEnd_);

    // The tap listener needs to come after the touchend listener because the tap
    // listener cancels out any reportedUserActivity when setting userActive(false)
    this.on(this.tech_, 'tap', this.handleTechTap_);
  };

  /**
   * Remove the listeners used for click and tap controls. This is needed for
   * toggling to controls disabled, where a tap/touch should do nothing.
   *
   * @private
   */


  Player.prototype.removeTechControlsListeners_ = function removeTechControlsListeners_() {
    // We don't want to just use `this.off()` because there might be other needed
    // listeners added by techs that extend this.
    this.off(this.tech_, 'tap', this.handleTechTap_);
    this.off(this.tech_, 'touchstart', this.handleTechTouchStart_);
    this.off(this.tech_, 'touchmove', this.handleTechTouchMove_);
    this.off(this.tech_, 'touchend', this.handleTechTouchEnd_);
    this.off(this.tech_, 'mousedown', this.handleTechClick_);
  };

  /**
   * Player waits for the tech to be ready
   *
   * @private
   */


  Player.prototype.handleTechReady_ = function handleTechReady_() {
    this.triggerReady();

    // Keep the same volume as before
    if (this.cache_.volume) {
      this.techCall_('setVolume', this.cache_.volume);
    }

    // Look if the tech found a higher resolution poster while loading
    this.handleTechPosterChange_();

    // Update the duration if available
    this.handleTechDurationChange_();

    // Chrome and Safari both have issues with autoplay.
    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
    // This fixes both issues. Need to wait for API, so it updates displays correctly
    if ((this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) {
      try {
        // Chrome Fix. Fixed in Chrome v16.
        delete this.tag.poster;
      } catch (e) {
        log$1('deleting tag.poster throws in some browsers', e);
      }
      this.play();
    }
  };

  /**
   * Retrigger the `loadstart` event that was triggered by the {@link Tech}. This
   * function will also trigger {@link Player#firstplay} if it is the first loadstart
   * for a video.
   *
   * @fires Player#loadstart
   * @fires Player#firstplay
   * @listens Tech#loadstart
   * @private
   */


  Player.prototype.handleTechLoadStart_ = function handleTechLoadStart_() {
    // TODO: Update to use `emptied` event instead. See #1277.

    this.removeClass('vjs-ended');
    this.removeClass('vjs-seeking');

    // reset the error state
    this.error(null);

    // If it's already playing we want to trigger a firstplay event now.
    // The firstplay event relies on both the play and loadstart events
    // which can happen in any order for a new source
    if (!this.paused()) {
      /**
       * Fired when the user agent begins looking for media data
       *
       * @event Player#loadstart
       * @type {EventTarget~Event}
       */
      this.trigger('loadstart');
      this.trigger('firstplay');
    } else {
      // reset the hasStarted state
      this.hasStarted(false);
      this.trigger('loadstart');
    }
  };

  /**
   * Add/remove the vjs-has-started class
   *
   * @fires Player#firstplay
   *
   * @param {boolean} hasStarted
   *        - true: adds the class
   *        - false: remove the class
   *
   * @return {boolean}
   *         the boolean value of hasStarted
   */


  Player.prototype.hasStarted = function hasStarted(_hasStarted) {
    if (_hasStarted !== undefined) {
      // only update if this is a new value
      if (this.hasStarted_ !== _hasStarted) {
        this.hasStarted_ = _hasStarted;
        if (_hasStarted) {
          this.addClass('vjs-has-started');
          // trigger the firstplay event if this newly has played
          this.trigger('firstplay');
        } else {
          this.removeClass('vjs-has-started');
        }
      }
      return;
    }
    return !!this.hasStarted_;
  };

  /**
   * Fired whenever the media begins or resumes playback
   *
   * @see [Spec]{@link https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-play}
   * @fires Player#play
   * @listens Tech#play
   * @private
   */


  Player.prototype.handleTechPlay_ = function handleTechPlay_() {
    this.removeClass('vjs-ended');
    this.removeClass('vjs-paused');
    this.addClass('vjs-playing');

    // hide the poster when the user hits play
    this.hasStarted(true);
    /**
     * Triggered whenever an {@link Tech#play} event happens. Indicates that
     * playback has started or resumed.
     *
     * @event Player#play
     * @type {EventTarget~Event}
     */
    this.trigger('play');
  };

  /**
   * Retrigger the `waiting` event that was triggered by the {@link Tech}.
   *
   * @fires Player#waiting
   * @listens Tech#waiting
   * @private
   */


  Player.prototype.handleTechWaiting_ = function handleTechWaiting_() {
    var _this4 = this;

    this.addClass('vjs-waiting');
    /**
     * A readyState change on the DOM element has caused playback to stop.
     *
     * @event Player#waiting
     * @type {EventTarget~Event}
     */
    this.trigger('waiting');
    this.one('timeupdate', function () {
      return _this4.removeClass('vjs-waiting');
    });
  };

  /**
   * Retrigger the `canplay` event that was triggered by the {@link Tech}.
   * > Note: This is not consistent between browsers. See #1351
   *
   * @fires Player#canplay
   * @listens Tech#canplay
   * @private
   */


  Player.prototype.handleTechCanPlay_ = function handleTechCanPlay_() {
    this.removeClass('vjs-waiting');
    /**
     * The media has a readyState of HAVE_FUTURE_DATA or greater.
     *
     * @event Player#canplay
     * @type {EventTarget~Event}
     */
    this.trigger('canplay');
  };

  /**
   * Retrigger the `canplaythrough` event that was triggered by the {@link Tech}.
   *
   * @fires Player#canplaythrough
   * @listens Tech#canplaythrough
   * @private
   */


  Player.prototype.handleTechCanPlayThrough_ = function handleTechCanPlayThrough_() {
    this.removeClass('vjs-waiting');
    /**
     * The media has a readyState of HAVE_ENOUGH_DATA or greater. This means that the
     * entire media file can be played without buffering.
     *
     * @event Player#canplaythrough
     * @type {EventTarget~Event}
     */
    this.trigger('canplaythrough');
  };

  /**
   * Retrigger the `playing` event that was triggered by the {@link Tech}.
   *
   * @fires Player#playing
   * @listens Tech#playing
   * @private
   */


  Player.prototype.handleTechPlaying_ = function handleTechPlaying_() {
    this.removeClass('vjs-waiting');
    /**
     * The media is no longer blocked from playback, and has started playing.
     *
     * @event Player#playing
     * @type {EventTarget~Event}
     */
    this.trigger('playing');
  };

  /**
   * Retrigger the `seeking` event that was triggered by the {@link Tech}.
   *
   * @fires Player#seeking
   * @listens Tech#seeking
   * @private
   */


  Player.prototype.handleTechSeeking_ = function handleTechSeeking_() {
    this.addClass('vjs-seeking');
    /**
     * Fired whenever the player is jumping to a new time
     *
     * @event Player#seeking
     * @type {EventTarget~Event}
     */
    this.trigger('seeking');
  };

  /**
   * Retrigger the `seeked` event that was triggered by the {@link Tech}.
   *
   * @fires Player#seeked
   * @listens Tech#seeked
   * @private
   */


  Player.prototype.handleTechSeeked_ = function handleTechSeeked_() {
    this.removeClass('vjs-seeking');
    /**
     * Fired when the player has finished jumping to a new time
     *
     * @event Player#seeked
     * @type {EventTarget~Event}
     */
    this.trigger('seeked');
  };

  /**
   * Retrigger the `firstplay` event that was triggered by the {@link Tech}.
   *
   * @fires Player#firstplay
   * @listens Tech#firstplay
   * @deprecated As of 6.0 firstplay event is deprecated.
   * @deprecated As of 6.0 passing the `starttime` option to the player and the firstplay event are deprecated.
   * @private
   */


  Player.prototype.handleTechFirstPlay_ = function handleTechFirstPlay_() {
    // If the first starttime attribute is specified
    // then we will start at the given offset in seconds
    if (this.options_.starttime) {
      log$1.warn('Passing the `starttime` option to the player will be deprecated in 6.0');
      this.currentTime(this.options_.starttime);
    }

    this.addClass('vjs-has-started');
    /**
     * Fired the first time a video is played. Not part of the HLS spec, and this is
     * probably not the best implementation yet, so use sparingly. If you don't have a
     * reason to prevent playback, use `myPlayer.one('play');` instead.
     *
     * @event Player#firstplay
     * @deprecated As of 6.0 firstplay event is deprecated.
     * @type {EventTarget~Event}
     */
    this.trigger('firstplay');
  };

  /**
   * Retrigger the `pause` event that was triggered by the {@link Tech}.
   *
   * @fires Player#pause
   * @listens Tech#pause
   * @private
   */


  Player.prototype.handleTechPause_ = function handleTechPause_() {
    this.removeClass('vjs-playing');
    this.addClass('vjs-paused');
    /**
     * Fired whenever the media has been paused
     *
     * @event Player#pause
     * @type {EventTarget~Event}
     */
    this.trigger('pause');
  };

  /**
   * Retrigger the `ended` event that was triggered by the {@link Tech}.
   *
   * @fires Player#ended
   * @listens Tech#ended
   * @private
   */


  Player.prototype.handleTechEnded_ = function handleTechEnded_() {
    this.addClass('vjs-ended');
    if (this.options_.loop) {
      this.currentTime(0);
      this.play();
    } else if (!this.paused()) {
      this.pause();
    }

    /**
     * Fired when the end of the media resource is reached (currentTime == duration)
     *
     * @event Player#ended
     * @type {EventTarget~Event}
     */
    this.trigger('ended');
  };

  /**
   * Fired when the duration of the media resource is first known or changed
   *
   * @listens Tech#durationchange
   * @private
   */


  Player.prototype.handleTechDurationChange_ = function handleTechDurationChange_() {
    this.duration(this.techGet_('duration'));
  };

  /**
   * Handle a click on the media element to play/pause
   *
   * @param {EventTarget~Event} event
   *        the event that caused this function to trigger
   *
   * @listens Tech#mousedown
   * @private
   */


  Player.prototype.handleTechClick_ = function handleTechClick_(event) {
    // We're using mousedown to detect clicks thanks to Flash, but mousedown
    // will also be triggered with right-clicks, so we need to prevent that
    if (event.button !== 0) {
      return;
    }

    // When controls are disabled a click should not toggle playback because
    // the click is considered a control
    if (this.controls()) {
      if (this.paused()) {
        this.play();
      } else {
        this.pause();
      }
    }
  };

  /**
   * Handle a tap on the media element. It will toggle the user
   * activity state, which hides and shows the controls.
   *
   * @listens Tech#tap
   * @private
   */


  Player.prototype.handleTechTap_ = function handleTechTap_() {
    this.userActive(!this.userActive());
  };

  /**
   * Handle touch to start
   *
   * @listens Tech#touchstart
   * @private
   */


  Player.prototype.handleTechTouchStart_ = function handleTechTouchStart_() {
    this.userWasActive = this.userActive();
  };

  /**
   * Handle touch to move
   *
   * @listens Tech#touchmove
   * @private
   */


  Player.prototype.handleTechTouchMove_ = function handleTechTouchMove_() {
    if (this.userWasActive) {
      this.reportUserActivity();
    }
  };

  /**
   * Handle touch to end
   *
   * @param {EventTarget~Event} event
   *        the touchend event that triggered
   *        this function
   *
   * @listens Tech#touchend
   * @private
   */


  Player.prototype.handleTechTouchEnd_ = function handleTechTouchEnd_(event) {
    // Stop the mouse events from also happening
    event.preventDefault();
  };

  /**
   * Fired when the player switches in or out of fullscreen mode
   *
   * @private
   * @listens Player#fullscreenchange
   */


  Player.prototype.handleFullscreenChange_ = function handleFullscreenChange_() {
    if (this.isFullscreen()) {
      this.addClass('vjs-fullscreen');
    } else {
      this.removeClass('vjs-fullscreen');
    }
  };

  /**
   * native click events on the SWF aren't triggered on IE11, Win8.1RT
   * use stageclick events triggered from inside the SWF instead
   *
   * @private
   * @listens stageclick
   */


  Player.prototype.handleStageClick_ = function handleStageClick_() {
    this.reportUserActivity();
  };

  /**
   * Handle Tech Fullscreen Change
   *
   * @param {EventTarget~Event} event
   *        the fullscreenchange event that triggered this function
   *
   * @param {Object} data
   *        the data that was sent with the event
   *
   * @private
   * @listens Tech#fullscreenchange
   * @fires Player#fullscreenchange
   */


  Player.prototype.handleTechFullscreenChange_ = function handleTechFullscreenChange_(event, data) {
    if (data) {
      this.isFullscreen(data.isFullscreen);
    }
    /**
     * Fired when going in and out of fullscreen.
     *
     * @event Player#fullscreenchange
     * @type {EventTarget~Event}
     */
    this.trigger('fullscreenchange');
  };

  /**
   * Fires when an error occurred during the loading of an audio/video.
   *
   * @private
   * @listens Tech#error
   */


  Player.prototype.handleTechError_ = function handleTechError_() {
    var error = this.tech_.error();

    this.error(error);
  };

  /**
   * Retrigger the `textdata` event that was triggered by the {@link Tech}.
   *
   * @fires Player#textdata
   * @listens Tech#textdata
   * @private
   */


  Player.prototype.handleTechTextData_ = function handleTechTextData_() {
    var data = null;

    if (arguments.length > 1) {
      data = arguments[1];
    }

    /**
     * Fires when we get a textdata event from tech
     *
     * @event Player#textdata
     * @type {EventTarget~Event}
     */
    this.trigger('textdata', data);
  };

  /**
   * Get object for cached values.
   *
   * @return {Object}
   *         get the current object cache
   */


  Player.prototype.getCache = function getCache() {
    return this.cache_;
  };

  /**
   * Pass values to the playback tech
   *
   * @param {string} [method]
   *        the method to call
   *
   * @param {Object} arg
   *        the argument to pass
   *
   * @private
   */


  Player.prototype.techCall_ = function techCall_(method, arg) {
    // If it's not ready yet, call method when it is

    this.ready(function () {
      if (method in allowedSetters) {
        return set$1(this.middleware_, this.tech_, method, arg);
      }

      try {
        if (this.tech_) {
          this.tech_[method](arg);
        }
      } catch (e) {
        log$1(e);
        throw e;
      }
    }, true);
  };

  /**
   * Get calls can't wait for the tech, and sometimes don't need to.
   *
   * @param {string} method
   *        Tech method
   *
   * @return {Function|undefined}
   *         the method or undefined
   *
   * @private
   */


  Player.prototype.techGet_ = function techGet_(method) {
    if (this.tech_ && this.tech_.isReady_) {

      if (method in allowedGetters) {
        return get$1(this.middleware_, this.tech_, method);
      }

      // Flash likes to die and reload when you hide or reposition it.
      // In these cases the object methods go away and we get errors.
      // When that happens we'll catch the errors and inform tech that it's not ready any more.
      try {
        return this.tech_[method]();
      } catch (e) {
        // When building additional tech libs, an expected method may not be defined yet
        if (this.tech_[method] === undefined) {
          log$1('Video.js: ' + method + ' method not defined for ' + this.techName_ + ' playback technology.', e);

          // When a method isn't available on the object it throws a TypeError
        } else if (e.name === 'TypeError') {
          log$1('Video.js: ' + method + ' unavailable on ' + this.techName_ + ' playback technology element.', e);
          this.tech_.isReady_ = false;
        } else {
          log$1(e);
        }
        throw e;
      }
    }

    return;
  };

  /**
   * start media playback
   *
   * @return {Promise|undefined}
   *         Returns a `Promise` if the browser returns one, for most browsers this will
   *         return undefined.
   */


  Player.prototype.play = function play() {
    if (this.changingSrc_) {
      this.ready(function () {
        var retval = this.techGet_('play');

        // silence errors (unhandled promise from play)
        if (retval !== undefined && typeof retval.then === 'function') {
          retval.then(null, function (e) {});
        }
      });

      // Only calls the tech's play if we already have a src loaded
    } else if (this.isReady_ && (this.src() || this.currentSrc())) {
      return this.techGet_('play');
    } else {
      this.ready(function () {
        this.tech_.one('loadstart', function () {
          var retval = this.play();

          // silence errors (unhandled promise from play)
          if (retval !== undefined && typeof retval.then === 'function') {
            retval.then(null, function (e) {});
          }
        });
      });
    }
  };

  /**
   * Pause the video playback
   *
   * @return {Player}
   *         A reference to the player object this function was called on
   */


  Player.prototype.pause = function pause() {
    this.techCall_('pause');
  };

  /**
   * Check if the player is paused or has yet to play
   *
   * @return {boolean}
   *         - false: if the media is currently playing
   *         - true: if media is not currently playing
   */


  Player.prototype.paused = function paused() {
    // The initial state of paused should be true (in Safari it's actually false)
    return this.techGet_('paused') === false ? false : true;
  };

  /**
   * Get a TimeRange object representing the current ranges of time that the user
   * has played.
   *
   * @return {TimeRange}
   *         A time range object that represents all the increments of time that have
   *         been played.
   */


  Player.prototype.played = function played() {
    return this.techGet_('played') || createTimeRanges(0, 0);
  };

  /**
   * Returns whether or not the user is "scrubbing". Scrubbing is
   * when the user has clicked the progress bar handle and is
   * dragging it along the progress bar.
   *
   * @param {boolean} [isScrubbing]
   *        wether the user is or is not scrubbing
   *
   * @return {boolean}
   *         The value of scrubbing when getting
   */


  Player.prototype.scrubbing = function scrubbing(isScrubbing) {
    if (typeof isScrubbing === 'undefined') {
      return this.scrubbing_;
    }
    this.scrubbing_ = !!isScrubbing;

    if (isScrubbing) {
      this.addClass('vjs-scrubbing');
    } else {
      this.removeClass('vjs-scrubbing');
    }
  };

  /**
   * Get or set the current time (in seconds)
   *
   * @param {number|string} [seconds]
   *        The time to seek to in seconds
   *
   * @return {number}
   *         - the current time in seconds when getting
   */


  Player.prototype.currentTime = function currentTime(seconds) {
    if (typeof seconds !== 'undefined') {
      this.techCall_('setCurrentTime', seconds);
      return;
    }

    // cache last currentTime and return. default to 0 seconds
    //
    // Caching the currentTime is meant to prevent a massive amount of reads on the tech's
    // currentTime when scrubbing, but may not provide much performance benefit afterall.
    // Should be tested. Also something has to read the actual current time or the cache will
    // never get updated.
    this.cache_.currentTime = this.techGet_('currentTime') || 0;
    return this.cache_.currentTime;
  };

  /**
   * Normally gets the length in time of the video in seconds;
   * in all but the rarest use cases an argument will NOT be passed to the method
   *
   * > **NOTE**: The video must have started loading before the duration can be
   * known, and in the case of Flash, may not be known until the video starts
   * playing.
   *
   * @fires Player#durationchange
   *
   * @param {number} [seconds]
   *        The duration of the video to set in seconds
   *
   * @return {number}
   *         - The duration of the video in seconds when getting
   */


  Player.prototype.duration = function duration(seconds) {
    if (seconds === undefined) {
      // return NaN if the duration is not known
      return this.cache_.duration !== undefined ? this.cache_.duration : NaN;
    }

    seconds = parseFloat(seconds);

    // Standardize on Inifity for signaling video is live
    if (seconds < 0) {
      seconds = Infinity;
    }

    if (seconds !== this.cache_.duration) {
      // Cache the last set value for optimized scrubbing (esp. Flash)
      this.cache_.duration = seconds;

      if (seconds === Infinity) {
        this.addClass('vjs-live');
      } else {
        this.removeClass('vjs-live');
      }
      /**
       * @event Player#durationchange
       * @type {EventTarget~Event}
       */
      this.trigger('durationchange');
    }
  };

  /**
   * Calculates how much time is left in the video. Not part
   * of the native video API.
   *
   * @return {number}
   *         The time remaining in seconds
   */


  Player.prototype.remainingTime = function remainingTime() {
    return this.duration() - this.currentTime();
  };

  //
  // Kind of like an array of portions of the video that have been downloaded.

  /**
   * Get a TimeRange object with an array of the times of the video
   * that have been downloaded. If you just want the percent of the
   * video that's been downloaded, use bufferedPercent.
   *
   * @see [Buffered Spec]{@link http://dev.w3.org/html5/spec/video.html#dom-media-buffered}
   *
   * @return {TimeRange}
   *         A mock TimeRange object (following HTML spec)
   */


  Player.prototype.buffered = function buffered() {
    var buffered = this.techGet_('buffered');

    if (!buffered || !buffered.length) {
      buffered = createTimeRanges(0, 0);
    }

    return buffered;
  };

  /**
   * Get the percent (as a decimal) of the video that's been downloaded.
   * This method is not a part of the native HTML video API.
   *
   * @return {number}
   *         A decimal between 0 and 1 representing the percent
   *         that is bufferred 0 being 0% and 1 being 100%
   */


  Player.prototype.bufferedPercent = function bufferedPercent$$1() {
    return bufferedPercent(this.buffered(), this.duration());
  };

  /**
   * Get the ending time of the last buffered time range
   * This is used in the progress bar to encapsulate all time ranges.
   *
   * @return {number}
   *         The end of the last buffered time range
   */


  Player.prototype.bufferedEnd = function bufferedEnd() {
    var buffered = this.buffered();
    var duration = this.duration();
    var end = buffered.end(buffered.length - 1);

    if (end > duration) {
      end = duration;
    }

    return end;
  };

  /**
   * Get or set the current volume of the media
   *
   * @param  {number} [percentAsDecimal]
   *         The new volume as a decimal percent:
   *         - 0 is muted/0%/off
   *         - 1.0 is 100%/full
   *         - 0.5 is half volume or 50%
   *
   * @return {number}
   *         The current volume as a percent when getting
   */


  Player.prototype.volume = function volume(percentAsDecimal) {
    var vol = void 0;

    if (percentAsDecimal !== undefined) {
      // Force value to between 0 and 1
      vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal)));
      this.cache_.volume = vol;
      this.techCall_('setVolume', vol);

      if (vol > 0) {
        this.lastVolume_(vol);
      }

      return;
    }

    // Default to 1 when returning current volume.
    vol = parseFloat(this.techGet_('volume'));
    return isNaN(vol) ? 1 : vol;
  };

  /**
   * Get the current muted state, or turn mute on or off
   *
   * @param {boolean} [muted]
   *        - true to mute
   *        - false to unmute
   *
   * @return {boolean}
   *         - true if mute is on and getting
   *         - false if mute is off and getting
   */


  Player.prototype.muted = function muted(_muted) {
    if (_muted !== undefined) {
      this.techCall_('setMuted', _muted);
      return;
    }
    return this.techGet_('muted') || false;
  };

  /**
   * Get the current defaultMuted state, or turn defaultMuted on or off. defaultMuted
   * indicates the state of muted on intial playback.
   *
   * ```js
   *   var myPlayer = videojs('some-player-id');
   *
   *   myPlayer.src("http://www.example.com/path/to/video.mp4");
   *
   *   // get, should be false
   *   console.log(myPlayer.defaultMuted());
   *   // set to true
   *   myPlayer.defaultMuted(true);
   *   // get should be true
   *   console.log(myPlayer.defaultMuted());
   * ```
   *
   * @param {boolean} [defaultMuted]
   *        - true to mute
   *        - false to unmute
   *
   * @return {boolean|Player}
   *         - true if defaultMuted is on and getting
   *         - false if defaultMuted is off and getting
   *         - A reference to the current player when setting
   */


  Player.prototype.defaultMuted = function defaultMuted(_defaultMuted) {
    if (_defaultMuted !== undefined) {
      return this.techCall_('setDefaultMuted', _defaultMuted);
    }
    return this.techGet_('defaultMuted') || false;
  };

  /**
   * Get the last volume, or set it
   *
   * @param  {number} [percentAsDecimal]
   *         The new last volume as a decimal percent:
   *         - 0 is muted/0%/off
   *         - 1.0 is 100%/full
   *         - 0.5 is half volume or 50%
   *
   * @return {number}
   *         the current value of lastVolume as a percent when getting
   *
   * @private
   */


  Player.prototype.lastVolume_ = function lastVolume_(percentAsDecimal) {
    if (percentAsDecimal !== undefined && percentAsDecimal !== 0) {
      this.cache_.lastVolume = percentAsDecimal;
      return;
    }
    return this.cache_.lastVolume;
  };

  /**
   * Check if current tech can support native fullscreen
   * (e.g. with built in controls like iOS, so not our flash swf)
   *
   * @return {boolean}
   *         if native fullscreen is supported
   */


  Player.prototype.supportsFullScreen = function supportsFullScreen() {
    return this.techGet_('supportsFullScreen') || false;
  };

  /**
   * Check if the player is in fullscreen mode or tell the player that it
   * is or is not in fullscreen mode.
   *
   * > NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
   * property and instead document.fullscreenElement is used. But isFullscreen is
   * still a valuable property for internal player workings.
   *
   * @param  {boolean} [isFS]
   *         Set the players current fullscreen state
   *
   * @return {boolean}
   *         - true if fullscreen is on and getting
   *         - false if fullscreen is off and getting
   */


  Player.prototype.isFullscreen = function isFullscreen(isFS) {
    if (isFS !== undefined) {
      this.isFullscreen_ = !!isFS;
      return;
    }
    return !!this.isFullscreen_;
  };

  /**
   * Increase the size of the video to full screen
   * In some browsers, full screen is not supported natively, so it enters
   * "full window mode", where the video fills the browser window.
   * In browsers and devices that support native full screen, sometimes the
   * browser's default controls will be shown, and not the Video.js custom skin.
   * This includes most mobile devices (iOS, Android) and older versions of
   * Safari.
   *
   * @fires Player#fullscreenchange
   */


  Player.prototype.requestFullscreen = function requestFullscreen() {
    var fsApi = FullscreenApi;

    this.isFullscreen(true);

    if (fsApi.requestFullscreen) {
      // the browser supports going fullscreen at the element level so we can
      // take the controls fullscreen as well as the video

      // Trigger fullscreenchange event after change
      // We have to specifically add this each time, and remove
      // when canceling fullscreen. Otherwise if there's multiple
      // players on a page, they would all be reacting to the same fullscreen
      // events
      on(document_1, fsApi.fullscreenchange, bind(this, function documentFullscreenChange(e) {
        this.isFullscreen(document_1[fsApi.fullscreenElement]);

        // If cancelling fullscreen, remove event listener.
        if (this.isFullscreen() === false) {
          off(document_1, fsApi.fullscreenchange, documentFullscreenChange);
        }
        /**
         * @event Player#fullscreenchange
         * @type {EventTarget~Event}
         */
        this.trigger('fullscreenchange');
      }));

      this.el_[fsApi.requestFullscreen]();
    } else if (this.tech_.supportsFullScreen()) {
      // we can't take the video.js controls fullscreen but we can go fullscreen
      // with native controls
      this.techCall_('enterFullScreen');
    } else {
      // fullscreen isn't supported so we'll just stretch the video element to
      // fill the viewport
      this.enterFullWindow();
      /**
       * @event Player#fullscreenchange
       * @type {EventTarget~Event}
       */
      this.trigger('fullscreenchange');
    }
  };

  /**
   * Return the video to its normal size after having been in full screen mode
   *
   * @fires Player#fullscreenchange
   */


  Player.prototype.exitFullscreen = function exitFullscreen() {
    var fsApi = FullscreenApi;

    this.isFullscreen(false);

    // Check for browser element fullscreen support
    if (fsApi.requestFullscreen) {
      document_1[fsApi.exitFullscreen]();
    } else if (this.tech_.supportsFullScreen()) {
      this.techCall_('exitFullScreen');
    } else {
      this.exitFullWindow();
      /**
       * @event Player#fullscreenchange
       * @type {EventTarget~Event}
       */
      this.trigger('fullscreenchange');
    }
  };

  /**
   * When fullscreen isn't supported we can stretch the
   * video container to as wide as the browser will let us.
   *
   * @fires Player#enterFullWindow
   */


  Player.prototype.enterFullWindow = function enterFullWindow() {
    this.isFullWindow = true;

    // Storing original doc overflow value to return to when fullscreen is off
    this.docOrigOverflow = document_1.documentElement.style.overflow;

    // Add listener for esc key to exit fullscreen
    on(document_1, 'keydown', bind(this, this.fullWindowOnEscKey));

    // Hide any scroll bars
    document_1.documentElement.style.overflow = 'hidden';

    // Apply fullscreen styles
    addClass(document_1.body, 'vjs-full-window');

    /**
     * @event Player#enterFullWindow
     * @type {EventTarget~Event}
     */
    this.trigger('enterFullWindow');
  };

  /**
   * Check for call to either exit full window or
   * full screen on ESC key
   *
   * @param {string} event
   *        Event to check for key press
   */


  Player.prototype.fullWindowOnEscKey = function fullWindowOnEscKey(event) {
    if (event.keyCode === 27) {
      if (this.isFullscreen() === true) {
        this.exitFullscreen();
      } else {
        this.exitFullWindow();
      }
    }
  };

  /**
   * Exit full window
   *
   * @fires Player#exitFullWindow
   */


  Player.prototype.exitFullWindow = function exitFullWindow() {
    this.isFullWindow = false;
    off(document_1, 'keydown', this.fullWindowOnEscKey);

    // Unhide scroll bars.
    document_1.documentElement.style.overflow = this.docOrigOverflow;

    // Remove fullscreen styles
    removeClass(document_1.body, 'vjs-full-window');

    // Resize the box, controller, and poster to original sizes
    // this.positionAll();
    /**
     * @event Player#exitFullWindow
     * @type {EventTarget~Event}
     */
    this.trigger('exitFullWindow');
  };

  /**
   * Check whether the player can play a given mimetype
   *
   * @see https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype
   *
   * @param {string} type
   *        The mimetype to check
   *
   * @return {string}
   *         'probably', 'maybe', or '' (empty string)
   */


  Player.prototype.canPlayType = function canPlayType(type) {
    var can = void 0;

    // Loop through each playback technology in the options order
    for (var i = 0, j = this.options_.techOrder; i < j.length; i++) {
      var techName = j[i];
      var tech = Tech.getTech(techName);

      // Support old behavior of techs being registered as components.
      // Remove once that deprecated behavior is removed.
      if (!tech) {
        tech = Component.getComponent(techName);
      }

      // Check if the current tech is defined before continuing
      if (!tech) {
        log$1.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
        continue;
      }

      // Check if the browser supports this technology
      if (tech.isSupported()) {
        can = tech.canPlayType(type);

        if (can) {
          return can;
        }
      }
    }

    return '';
  };

  /**
   * Select source based on tech-order or source-order
   * Uses source-order selection if `options.sourceOrder` is truthy. Otherwise,
   * defaults to tech-order selection
   *
   * @param {Array} sources
   *        The sources for a media asset
   *
   * @return {Object|boolean}
   *         Object of source and tech order or false
   */


  Player.prototype.selectSource = function selectSource(sources) {
    var _this5 = this;

    // Get only the techs specified in `techOrder` that exist and are supported by the
    // current platform
    var techs = this.options_.techOrder.map(function (techName) {
      return [techName, Tech.getTech(techName)];
    }).filter(function (_ref) {
      var techName = _ref[0],
          tech = _ref[1];

      // Check if the current tech is defined before continuing
      if (tech) {
        // Check if the browser supports this technology
        return tech.isSupported();
      }

      log$1.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
      return false;
    });

    // Iterate over each `innerArray` element once per `outerArray` element and execute
    // `tester` with both. If `tester` returns a non-falsy value, exit early and return
    // that value.
    var findFirstPassingTechSourcePair = function findFirstPassingTechSourcePair(outerArray, innerArray, tester) {
      var found = void 0;

      outerArray.some(function (outerChoice) {
        return innerArray.some(function (innerChoice) {
          found = tester(outerChoice, innerChoice);

          if (found) {
            return true;
          }
        });
      });

      return found;
    };

    var foundSourceAndTech = void 0;
    var flip = function flip(fn) {
      return function (a, b) {
        return fn(b, a);
      };
    };
    var finder = function finder(_ref2, source) {
      var techName = _ref2[0],
          tech = _ref2[1];

      if (tech.canPlaySource(source, _this5.options_[techName.toLowerCase()])) {
        return { source: source, tech: techName };
      }
    };

    // Depending on the truthiness of `options.sourceOrder`, we swap the order of techs and sources
    // to select from them based on their priority.
    if (this.options_.sourceOrder) {
      // Source-first ordering
      foundSourceAndTech = findFirstPassingTechSourcePair(sources, techs, flip(finder));
    } else {
      // Tech-first ordering
      foundSourceAndTech = findFirstPassingTechSourcePair(techs, sources, finder);
    }

    return foundSourceAndTech || false;
  };

  /**
   * Get or set the video source.
   *
   * @param {Tech~SourceObject|Tech~SourceObject[]|string} [source]
   *        A SourceObject, an array of SourceObjects, or a string referencing
   *        a URL to a media source. It is _highly recommended_ that an object
   *        or array of objects is used here, so that source selection
   *        algorithms can take the `type` into account.
   *
   *        If not provided, this method acts as a getter.
   *
   * @return {string|undefined}
   *         If the `source` argument is missing, returns the current source
   *         URL. Otherwise, returns nothing/undefined.
   */


  Player.prototype.src = function src(source) {
    var _this6 = this;

    // getter usage
    if (typeof source === 'undefined') {
      return this.cache_.src;
    }
    // filter out invalid sources and turn our source into
    // an array of source objects
    var sources = filterSource(source);

    // if a source was passed in then it is invalid because
    // it was filtered to a zero length Array. So we have to
    // show an error
    if (!sources.length) {
      this.setTimeout(function () {
        this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) });
      }, 0);
      return;
    }

    // intial sources
    this.cache_.sources = sources;
    this.changingSrc_ = true;

    // intial source
    this.cache_.source = sources[0];

    // middlewareSource is the source after it has been changed by middleware
    setSource(this, sources[0], function (middlewareSource, mws) {
      _this6.middleware_ = mws;

      var err = _this6.src_(middlewareSource);

      if (err) {
        if (sources.length > 1) {
          return _this6.src(sources.slice(1));
        }

        // We need to wrap this in a timeout to give folks a chance to add error event handlers
        _this6.setTimeout(function () {
          this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) });
        }, 0);

        // we could not find an appropriate tech, but let's still notify the delegate that this is it
        // this needs a better comment about why this is needed
        _this6.triggerReady();

        return;
      }

      _this6.changingSrc_ = false;
      // video element listed source
      _this6.cache_.src = middlewareSource.src;

      setTech(mws, _this6.tech_);
    });
  };

  /**
   * Set the source object on the tech, returns a boolean that indicates wether
   * there is a tech that can play the source or not
   *
   * @param {Tech~SourceObject} source
   *        The source object to set on the Tech
   *
   * @return {Boolean}
   *         - True if there is no Tech to playback this source
   *         - False otherwise
   *
   * @private
   */


  Player.prototype.src_ = function src_(source) {
    var sourceTech = this.selectSource([source]);

    if (!sourceTech) {
      return true;
    }

    if (!titleCaseEquals(sourceTech.tech, this.techName_)) {
      this.changingSrc_ = true;

      // load this technology with the chosen source
      this.loadTech_(sourceTech.tech, sourceTech.source);
      return false;
    }

    // wait until the tech is ready to set the source
    this.ready(function () {

      // The setSource tech method was added with source handlers
      // so older techs won't support it
      // We need to check the direct prototype for the case where subclasses
      // of the tech do not support source handlers
      if (this.tech_.constructor.prototype.hasOwnProperty('setSource')) {
        this.techCall_('setSource', source);
      } else {
        this.techCall_('src', source.src);
      }

      if (this.options_.preload === 'auto') {
        this.load();
      }

      if (this.options_.autoplay) {
        this.play();
      }

      // Set the source synchronously if possible (#2326)
    }, true);

    return false;
  };

  /**
   * Begin loading the src data.
   */


  Player.prototype.load = function load() {
    this.techCall_('load');
  };

  /**
   * Reset the player. Loads the first tech in the techOrder,
   * and calls `reset` on the tech`.
   */


  Player.prototype.reset = function reset() {
    this.loadTech_(this.options_.techOrder[0], null);
    this.techCall_('reset');
  };

  /**
   * Returns all of the current source objects.
   *
   * @return {Tech~SourceObject[]}
   *         The current source objects
   */


  Player.prototype.currentSources = function currentSources() {
    var source = this.currentSource();
    var sources = [];

    // assume `{}` or `{ src }`
    if (Object.keys(source).length !== 0) {
      sources.push(source);
    }

    return this.cache_.sources || sources;
  };

  /**
   * Returns the current source object.
   *
   * @return {Tech~SourceObject}
   *         The current source object
   */


  Player.prototype.currentSource = function currentSource() {
    return this.cache_.source || {};
  };

  /**
   * Returns the fully qualified URL of the current source value e.g. http://mysite.com/video.mp4
   * Can be used in conjuction with `currentType` to assist in rebuilding the current source object.
   *
   * @return {string}
   *         The current source
   */


  Player.prototype.currentSrc = function currentSrc() {
    return this.currentSource() && this.currentSource().src || '';
  };

  /**
   * Get the current source type e.g. video/mp4
   * This can allow you rebuild the current source object so that you could load the same
   * source and tech later
   *
   * @return {string}
   *         The source MIME type
   */


  Player.prototype.currentType = function currentType() {
    return this.currentSource() && this.currentSource().type || '';
  };

  /**
   * Get or set the preload attribute
   *
   * @param {boolean} [value]
   *        - true means that we should preload
   *        - false maens that we should not preload
   *
   * @return {string}
   *         The preload attribute value when getting
   */


  Player.prototype.preload = function preload(value) {
    if (value !== undefined) {
      this.techCall_('setPreload', value);
      this.options_.preload = value;
      return;
    }
    return this.techGet_('preload');
  };

  /**
   * Get or set the autoplay attribute.
   *
   * @param {boolean} [value]
   *        - true means that we should autoplay
   *        - false means that we should not autoplay
   *
   * @return {string}
   *         The current value of autoplay when getting
   */


  Player.prototype.autoplay = function autoplay(value) {
    if (value !== undefined) {
      this.techCall_('setAutoplay', value);
      this.options_.autoplay = value;
      return;
    }
    return this.techGet_('autoplay', value);
  };

  /**
   * Set or unset the playsinline attribute.
   * Playsinline tells the browser that non-fullscreen playback is preferred.
   *
   * @param {boolean} [value]
   *        - true means that we should try to play inline by default
   *        - false means that we should use the browser's default playback mode,
   *          which in most cases is inline. iOS Safari is a notable exception
   *          and plays fullscreen by default.
   *
   * @return {string|Player}
   *         - the current value of playsinline
   *         - the player when setting
   *
   * @see [Spec]{@link https://html.spec.whatwg.org/#attr-video-playsinline}
   */


  Player.prototype.playsinline = function playsinline(value) {
    if (value !== undefined) {
      this.techCall_('setPlaysinline', value);
      this.options_.playsinline = value;
      return this;
    }
    return this.techGet_('playsinline');
  };

  /**
   * Get or set the loop attribute on the video element.
   *
   * @param {boolean} [value]
   *        - true means that we should loop the video
   *        - false means that we should not loop the video
   *
   * @return {string}
   *         The current value of loop when getting
   */


  Player.prototype.loop = function loop(value) {
    if (value !== undefined) {
      this.techCall_('setLoop', value);
      this.options_.loop = value;
      return;
    }
    return this.techGet_('loop');
  };

  /**
   * Get or set the poster image source url
   *
   * @fires Player#posterchange
   *
   * @param {string} [src]
   *        Poster image source URL
   *
   * @return {string}
   *         The current value of poster when getting
   */


  Player.prototype.poster = function poster(src) {
    if (src === undefined) {
      return this.poster_;
    }

    // The correct way to remove a poster is to set as an empty string
    // other falsey values will throw errors
    if (!src) {
      src = '';
    }

    // update the internal poster variable
    this.poster_ = src;

    // update the tech's poster
    this.techCall_('setPoster', src);

    // alert components that the poster has been set
    /**
     * This event fires when the poster image is changed on the player.
     *
     * @event Player#posterchange
     * @type {EventTarget~Event}
     */
    this.trigger('posterchange');
  };

  /**
   * Some techs (e.g. YouTube) can provide a poster source in an
   * asynchronous way. We want the poster component to use this
   * poster source so that it covers up the tech's controls.
   * (YouTube's play button). However we only want to use this
   * source if the player user hasn't set a poster through
   * the normal APIs.
   *
   * @fires Player#posterchange
   * @listens Tech#posterchange
   * @private
   */


  Player.prototype.handleTechPosterChange_ = function handleTechPosterChange_() {
    if (!this.poster_ && this.tech_ && this.tech_.poster) {
      this.poster_ = this.tech_.poster() || '';

      // Let components know the poster has changed
      this.trigger('posterchange');
    }
  };

  /**
   * Get or set whether or not the controls are showing.
   *
   * @fires Player#controlsenabled
   *
   * @param {boolean} [bool]
   *        - true to turn controls on
   *        - false to turn controls off
   *
   * @return {boolean}
   *         The current value of controls when getting
   */


  Player.prototype.controls = function controls(bool) {
    if (bool !== undefined) {
      bool = !!bool;

      // Don't trigger a change event unless it actually changed
      if (this.controls_ !== bool) {
        this.controls_ = bool;

        if (this.usingNativeControls()) {
          this.techCall_('setControls', bool);
        }

        if (bool) {
          this.removeClass('vjs-controls-disabled');
          this.addClass('vjs-controls-enabled');
          /**
           * @event Player#controlsenabled
           * @type {EventTarget~Event}
           */
          this.trigger('controlsenabled');

          if (!this.usingNativeControls()) {
            this.addTechControlsListeners_();
          }
        } else {
          this.removeClass('vjs-controls-enabled');
          this.addClass('vjs-controls-disabled');
          /**
           * @event Player#controlsdisabled
           * @type {EventTarget~Event}
           */
          this.trigger('controlsdisabled');

          if (!this.usingNativeControls()) {
            this.removeTechControlsListeners_();
          }
        }
      }
      return;
    }
    return !!this.controls_;
  };

  /**
   * Toggle native controls on/off. Native controls are the controls built into
   * devices (e.g. default iPhone controls), Flash, or other techs
   * (e.g. Vimeo Controls)
   * **This should only be set by the current tech, because only the tech knows
   * if it can support native controls**
   *
   * @fires Player#usingnativecontrols
   * @fires Player#usingcustomcontrols
   *
   * @param {boolean} [bool]
   *        - true to turn native controls on
   *        - false to turn native controls off
   *
   * @return {boolean}
   *         The current value of native controls when getting
   */


  Player.prototype.usingNativeControls = function usingNativeControls(bool) {
    if (bool !== undefined) {
      bool = !!bool;

      // Don't trigger a change event unless it actually changed
      if (this.usingNativeControls_ !== bool) {
        this.usingNativeControls_ = bool;
        if (bool) {
          this.addClass('vjs-using-native-controls');

          /**
           * player is using the native device controls
           *
           * @event Player#usingnativecontrols
           * @type {EventTarget~Event}
           */
          this.trigger('usingnativecontrols');
        } else {
          this.removeClass('vjs-using-native-controls');

          /**
           * player is using the custom HTML controls
           *
           * @event Player#usingcustomcontrols
           * @type {EventTarget~Event}
           */
          this.trigger('usingcustomcontrols');
        }
      }
      return;
    }
    return !!this.usingNativeControls_;
  };

  /**
   * Set or get the current MediaError
   *
   * @fires Player#error
   *
   * @param  {MediaError|string|number} [err]
   *         A MediaError or a string/number to be turned
   *         into a MediaError
   *
   * @return {MediaError|null}
   *         The current MediaError when getting (or null)
   */


  Player.prototype.error = function error(err) {
    if (err === undefined) {
      return this.error_ || null;
    }

    // restoring to default
    if (err === null) {
      this.error_ = err;
      this.removeClass('vjs-error');
      if (this.errorDisplay) {
        this.errorDisplay.close();
      }
      return;
    }

    this.error_ = new MediaError(err);

    // add the vjs-error classname to the player
    this.addClass('vjs-error');

    // log the name of the error type and any message
    // ie8 just logs "[object object]" if you just log the error object
    log$1.error('(CODE:' + this.error_.code + ' ' + MediaError.errorTypes[this.error_.code] + ')', this.error_.message, this.error_);

    /**
     * @event Player#error
     * @type {EventTarget~Event}
     */
    this.trigger('error');

    return;
  };

  /**
   * Report user activity
   *
   * @param {Object} event
   *        Event object
   */


  Player.prototype.reportUserActivity = function reportUserActivity(event) {
    this.userActivity_ = true;
  };

  /**
   * Get/set if user is active
   *
   * @fires Player#useractive
   * @fires Player#userinactive
   *
   * @param {boolean} [bool]
   *        - true if the user is active
   *        - false if the user is inactive
   *
   * @return {boolean}
   *         The current value of userActive when getting
   */


  Player.prototype.userActive = function userActive(bool) {
    if (bool !== undefined) {
      bool = !!bool;
      if (bool !== this.userActive_) {
        this.userActive_ = bool;
        if (bool) {
          // If the user was inactive and is now active we want to reset the
          // inactivity timer
          this.userActivity_ = true;
          this.removeClass('vjs-user-inactive');
          this.addClass('vjs-user-active');
          /**
           * @event Player#useractive
           * @type {EventTarget~Event}
           */
          this.trigger('useractive');
        } else {
          // We're switching the state to inactive manually, so erase any other
          // activity
          this.userActivity_ = false;

          // Chrome/Safari/IE have bugs where when you change the cursor it can
          // trigger a mousemove event. This causes an issue when you're hiding
          // the cursor when the user is inactive, and a mousemove signals user
          // activity. Making it impossible to go into inactive mode. Specifically
          // this happens in fullscreen when we really need to hide the cursor.
          //
          // When this gets resolved in ALL browsers it can be removed
          // https://code.google.com/p/chromium/issues/detail?id=103041
          if (this.tech_) {
            this.tech_.one('mousemove', function (e) {
              e.stopPropagation();
              e.preventDefault();
            });
          }

          this.removeClass('vjs-user-active');
          this.addClass('vjs-user-inactive');
          /**
           * @event Player#userinactive
           * @type {EventTarget~Event}
           */
          this.trigger('userinactive');
        }
      }
      return;
    }
    return this.userActive_;
  };

  /**
   * Listen for user activity based on timeout value
   *
   * @private
   */


  Player.prototype.listenForUserActivity_ = function listenForUserActivity_() {
    var mouseInProgress = void 0;
    var lastMoveX = void 0;
    var lastMoveY = void 0;
    var handleActivity = bind(this, this.reportUserActivity);

    var handleMouseMove = function handleMouseMove(e) {
      // #1068 - Prevent mousemove spamming
      // Chrome Bug: https://code.google.com/p/chromium/issues/detail?id=366970
      if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
        lastMoveX = e.screenX;
        lastMoveY = e.screenY;
        handleActivity();
      }
    };

    var handleMouseDown = function handleMouseDown() {
      handleActivity();
      // For as long as the they are touching the device or have their mouse down,
      // we consider them active even if they're not moving their finger or mouse.
      // So we want to continue to update that they are active
      this.clearInterval(mouseInProgress);
      // Setting userActivity=true now and setting the interval to the same time
      // as the activityCheck interval (250) should ensure we never miss the
      // next activityCheck
      mouseInProgress = this.setInterval(handleActivity, 250);
    };

    var handleMouseUp = function handleMouseUp(event) {
      handleActivity();
      // Stop the interval that maintains activity if the mouse/touch is down
      this.clearInterval(mouseInProgress);
    };

    // Any mouse movement will be considered user activity
    this.on('mousedown', handleMouseDown);
    this.on('mousemove', handleMouseMove);
    this.on('mouseup', handleMouseUp);

    // Listen for keyboard navigation
    // Shouldn't need to use inProgress interval because of key repeat
    this.on('keydown', handleActivity);
    this.on('keyup', handleActivity);

    // Run an interval every 250 milliseconds instead of stuffing everything into
    // the mousemove/touchmove function itself, to prevent performance degradation.
    // `this.reportUserActivity` simply sets this.userActivity_ to true, which
    // then gets picked up by this loop
    // http://ejohn.org/blog/learning-from-twitter/
    var inactivityTimeout = void 0;

    this.setInterval(function () {
      // Check to see if mouse/touch activity has happened
      if (this.userActivity_) {
        // Reset the activity tracker
        this.userActivity_ = false;

        // If the user state was inactive, set the state to active
        this.userActive(true);

        // Clear any existing inactivity timeout to start the timer over
        this.clearTimeout(inactivityTimeout);

        var timeout = this.options_.inactivityTimeout;

        if (timeout > 0) {
          // In <timeout> milliseconds, if no more activity has occurred the
          // user will be considered inactive
          inactivityTimeout = this.setTimeout(function () {
            // Protect against the case where the inactivityTimeout can trigger just
            // before the next user activity is picked up by the activity check loop
            // causing a flicker
            if (!this.userActivity_) {
              this.userActive(false);
            }
          }, timeout);
        }
      }
    }, 250);
  };

  /**
   * Gets or sets the current playback rate. A playback rate of
   * 1.0 represents normal speed and 0.5 would indicate half-speed
   * playback, for instance.
   *
   * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-playbackrate
   *
   * @param {number} [rate]
   *       New playback rate to set.
   *
   * @return {number}
   *         The current playback rate when getting or 1.0
   */


  Player.prototype.playbackRate = function playbackRate(rate) {
    if (rate !== undefined) {
      this.techCall_('setPlaybackRate', rate);
      return;
    }

    if (this.tech_ && this.tech_.featuresPlaybackRate) {
      return this.techGet_('playbackRate');
    }
    return 1.0;
  };

  /**
   * Gets or sets the current default playback rate. A default playback rate of
   * 1.0 represents normal speed and 0.5 would indicate half-speed playback, for instance.
   * defaultPlaybackRate will only represent what the intial playbackRate of a video was, not
   * not the current playbackRate.
   *
   * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-defaultplaybackrate
   *
   * @param {number} [rate]
   *       New default playback rate to set.
   *
   * @return {number|Player}
   *         - The default playback rate when getting or 1.0
   *         - the player when setting
   */


  Player.prototype.defaultPlaybackRate = function defaultPlaybackRate(rate) {
    if (rate !== undefined) {
      return this.techCall_('setDefaultPlaybackRate', rate);
    }

    if (this.tech_ && this.tech_.featuresPlaybackRate) {
      return this.techGet_('defaultPlaybackRate');
    }
    return 1.0;
  };

  /**
   * Gets or sets the audio flag
   *
   * @param {boolean} bool
   *        - true signals that this is an audio player
   *        - false signals that this is not an audio player
   *
   * @return {boolean}
   *         The current value of isAudio when getting
   */


  Player.prototype.isAudio = function isAudio(bool) {
    if (bool !== undefined) {
      this.isAudio_ = !!bool;
      return;
    }

    return !!this.isAudio_;
  };

  /**
   * A helper method for adding a {@link TextTrack} to our
   * {@link TextTrackList}.
   *
   * In addition to the W3C settings we allow adding additional info through options.
   *
   * @see http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
   *
   * @param {string} [kind]
   *        the kind of TextTrack you are adding
   *
   * @param {string} [label]
   *        the label to give the TextTrack label
   *
   * @param {string} [language]
   *        the language to set on the TextTrack
   *
   * @return {TextTrack|undefined}
   *         the TextTrack that was added or undefined
   *         if there is no tech
   */


  Player.prototype.addTextTrack = function addTextTrack(kind, label, language) {
    if (this.tech_) {
      return this.tech_.addTextTrack(kind, label, language);
    }
  };

  /**
   * Create a remote {@link TextTrack} and an {@link HTMLTrackElement}. It will
   * automatically removed from the video element whenever the source changes, unless
   * manualCleanup is set to false.
   *
   * @param {Object} options
   *        Options to pass to {@link HTMLTrackElement} during creation. See
   *        {@link HTMLTrackElement} for object properties that you should use.
   *
   * @param {boolean} [manualCleanup=true] if set to false, the TextTrack will be
   *
   * @return {HtmlTrackElement}
   *         the HTMLTrackElement that was created and added
   *         to the HtmlTrackElementList and the remote
   *         TextTrackList
   *
   * @deprecated The default value of the "manualCleanup" parameter will default
   *             to "false" in upcoming versions of Video.js
   */


  Player.prototype.addRemoteTextTrack = function addRemoteTextTrack(options, manualCleanup) {
    if (this.tech_) {
      return this.tech_.addRemoteTextTrack(options, manualCleanup);
    }
  };

  /**
   * Remove a remote {@link TextTrack} from the respective
   * {@link TextTrackList} and {@link HtmlTrackElementList}.
   *
   * @param {Object} track
   *        Remote {@link TextTrack} to remove
   *
   * @return {undefined}
   *         does not return anything
   */


  Player.prototype.removeRemoteTextTrack = function removeRemoteTextTrack() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$track = _ref3.track,
        track = _ref3$track === undefined ? arguments[0] : _ref3$track;

    // destructure the input into an object with a track argument, defaulting to arguments[0]
    // default the whole argument to an empty object if nothing was passed in

    if (this.tech_) {
      return this.tech_.removeRemoteTextTrack(track);
    }
  };

  /**
   * Gets available media playback quality metrics as specified by the W3C's Media
   * Playback Quality API.
   *
   * @see [Spec]{@link https://wicg.github.io/media-playback-quality}
   *
   * @return {Object|undefined}
   *         An object with supported media playback quality metrics or undefined if there
   *         is no tech or the tech does not support it.
   */


  Player.prototype.getVideoPlaybackQuality = function getVideoPlaybackQuality() {
    return this.techGet_('getVideoPlaybackQuality');
  };

  /**
   * Get video width
   *
   * @return {number}
   *         current video width
   */


  Player.prototype.videoWidth = function videoWidth() {
    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
  };

  /**
   * Get video height
   *
   * @return {number}
   *         current video height
   */


  Player.prototype.videoHeight = function videoHeight() {
    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
  };

  /**
   * The player's language code
   * NOTE: The language should be set in the player options if you want the
   * the controls to be built with a specific language. Changing the lanugage
   * later will not update controls text.
   *
   * @param {string} [code]
   *        the language code to set the player to
   *
   * @return {string}
   *         The current language code when getting
   */


  Player.prototype.language = function language(code) {
    if (code === undefined) {
      return this.language_;
    }

    this.language_ = String(code).toLowerCase();
  };

  /**
   * Get the player's language dictionary
   * Merge every time, because a newly added plugin might call videojs.addLanguage() at any time
   * Languages specified directly in the player options have precedence
   *
   * @return {Array}
   *         An array of of supported languages
   */


  Player.prototype.languages = function languages() {
    return mergeOptions(Player.prototype.options_.languages, this.languages_);
  };

  /**
   * returns a JavaScript object reperesenting the current track
   * information. **DOES not return it as JSON**
   *
   * @return {Object}
   *         Object representing the current of track info
   */


  Player.prototype.toJSON = function toJSON() {
    var options = mergeOptions(this.options_);
    var tracks = options.tracks;

    options.tracks = [];

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];

      // deep merge tracks and null out player so no circular references
      track = mergeOptions(track);
      track.player = undefined;
      options.tracks[i] = track;
    }

    return options;
  };

  /**
   * Creates a simple modal dialog (an instance of the {@link ModalDialog}
   * component) that immediately overlays the player with arbitrary
   * content and removes itself when closed.
   *
   * @param {string|Function|Element|Array|null} content
   *        Same as {@link ModalDialog#content}'s param of the same name.
   *        The most straight-forward usage is to provide a string or DOM
   *        element.
   *
   * @param {Object} [options]
   *        Extra options which will be passed on to the {@link ModalDialog}.
   *
   * @return {ModalDialog}
   *         the {@link ModalDialog} that was created
   */


  Player.prototype.createModal = function createModal(content, options) {
    var _this7 = this;

    options = options || {};
    options.content = content || '';

    var modal = new ModalDialog(this, options);

    this.addChild(modal);
    modal.on('dispose', function () {
      _this7.removeChild(modal);
    });

    modal.open();
    return modal;
  };

  /**
   * Gets tag settings
   *
   * @param {Element} tag
   *        The player tag
   *
   * @return {Object}
   *         An object containing all of the settings
   *         for a player tag
   */


  Player.getTagSettings = function getTagSettings(tag) {
    var baseOptions = {
      sources: [],
      tracks: []
    };

    var tagOptions = getAttributes(tag);
    var dataSetup = tagOptions['data-setup'];

    if (hasClass(tag, 'vjs-fluid')) {
      tagOptions.fluid = true;
    }

    // Check if data-setup attr exists.
    if (dataSetup !== null) {
      // Parse options JSON
      // If empty string, make it a parsable json object.
      var _safeParseTuple = tuple(dataSetup || '{}'),
          err = _safeParseTuple[0],
          data = _safeParseTuple[1];

      if (err) {
        log$1.error(err);
      }
      assign(tagOptions, data);
    }

    assign(baseOptions, tagOptions);

    // Get tag children settings
    if (tag.hasChildNodes()) {
      var children = tag.childNodes;

      for (var i = 0, j = children.length; i < j; i++) {
        var child = children[i];
        // Change case needed: http://ejohn.org/blog/nodename-case-sensitivity/
        var childName = child.nodeName.toLowerCase();

        if (childName === 'source') {
          baseOptions.sources.push(getAttributes(child));
        } else if (childName === 'track') {
          baseOptions.tracks.push(getAttributes(child));
        }
      }
    }

    return baseOptions;
  };

  /**
   * Determine wether or not flexbox is supported
   *
   * @return {boolean}
   *         - true if flexbox is supported
   *         - false if flexbox is not supported
   */


  Player.prototype.flexNotSupported_ = function flexNotSupported_() {
    var elem = document_1.createElement('i');

    // Note: We don't actually use flexBasis (or flexOrder), but it's one of the more
    // common flex features that we can rely on when checking for flex support.
    return !('flexBasis' in elem.style || 'webkitFlexBasis' in elem.style || 'mozFlexBasis' in elem.style || 'msFlexBasis' in elem.style ||
    // IE10-specific (2012 flex spec)
    'msFlexOrder' in elem.style);
  };

  return Player;
}(Component);

/**
 * Get the {@link VideoTrackList}
 * @link https://html.spec.whatwg.org/multipage/embedded-content.html#videotracklist
 *
 * @return {VideoTrackList}
 *         the current video track list
 *
 * @method Player.prototype.videoTracks
 */

/**
 * Get the {@link AudioTrackList}
 * @link https://html.spec.whatwg.org/multipage/embedded-content.html#audiotracklist
 *
 * @return {AudioTrackList}
 *         the current audio track list
 *
 * @method Player.prototype.audioTracks
 */

/**
 * Get the {@link TextTrackList}
 *
 * @link http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-texttracks
 *
 * @return {TextTrackList}
 *         the current text track list
 *
 * @method Player.prototype.textTracks
 */

/**
 * Get the remote {@link TextTrackList}
 *
 * @return {TextTrackList}
 *         The current remote text track list
 *
 * @method Player.prototype.remoteTextTracks
 */

/**
 * Get the remote {@link HtmlTrackElementList} tracks.
 *
 * @return {HtmlTrackElementList}
 *         The current remote text track element list
 *
 * @method Player.prototype.remoteTextTrackEls
 */

ALL.names.forEach(function (name$$1) {
  var props = ALL[name$$1];

  Player.prototype[props.getterName] = function () {
    if (this.tech_) {
      return this.tech_[props.getterName]();
    }

    // if we have not yet loadTech_, we create {video,audio,text}Tracks_
    // these will be passed to the tech during loading
    this[props.privateName] = this[props.privateName] || new props.ListClass();
    return this[props.privateName];
  };
});

/**
 * Global player list
 *
 * @type {Object}
 */
Player.players = {};

var navigator$1 = window_1.navigator;

/*
 * Player instance options, surfaced using options
 * options = Player.prototype.options_
 * Make changes in options, not here.
 *
 * @type {Object}
 * @private
 */
Player.prototype.options_ = {
  // Default order of fallback technology
  techOrder: Tech.defaultTechOrder_,

  html5: {},
  flash: {},

  // default inactivity timeout
  inactivityTimeout: 2000,

  // default playback rates
  playbackRates: [],
  // Add playback rate selection by adding rates
  // 'playbackRates': [0.5, 1, 1.5, 2],

  // Included control sets
  children: ['mediaLoader', 'posterImage', 'textTrackDisplay', 'loadingSpinner', 'bigPlayButton', 'controlBar', 'errorDisplay', 'textTrackSettings'],

  language: navigator$1 && (navigator$1.languages && navigator$1.languages[0] || navigator$1.userLanguage || navigator$1.language) || 'en',

  // locales and their language translations
  languages: {},

  // Default message to show when a video cannot be played.
  notSupportedMessage: 'No compatible source was found for this media.'
};

[
/**
 * Returns whether or not the player is in the "ended" state.
 *
 * @return {Boolean} True if the player is in the ended state, false if not.
 * @method Player#ended
 */
'ended',
/**
 * Returns whether or not the player is in the "seeking" state.
 *
 * @return {Boolean} True if the player is in the seeking state, false if not.
 * @method Player#seeking
 */
'seeking',
/**
 * Returns the TimeRanges of the media that are currently available
 * for seeking to.
 *
 * @return {TimeRanges} the seekable intervals of the media timeline
 * @method Player#seekable
 */
'seekable',
/**
 * Returns the current state of network activity for the element, from
 * the codes in the list below.
 * - NETWORK_EMPTY (numeric value 0)
 *   The element has not yet been initialised. All attributes are in
 *   their initial states.
 * - NETWORK_IDLE (numeric value 1)
 *   The element's resource selection algorithm is active and has
 *   selected a resource, but it is not actually using the network at
 *   this time.
 * - NETWORK_LOADING (numeric value 2)
 *   The user agent is actively trying to download data.
 * - NETWORK_NO_SOURCE (numeric value 3)
 *   The element's resource selection algorithm is active, but it has
 *   not yet found a resource to use.
 *
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#network-states
 * @return {number} the current network activity state
 * @method Player#networkState
 */
'networkState',
/**
 * Returns a value that expresses the current state of the element
 * with respect to rendering the current playback position, from the
 * codes in the list below.
 * - HAVE_NOTHING (numeric value 0)
 *   No information regarding the media resource is available.
 * - HAVE_METADATA (numeric value 1)
 *   Enough of the resource has been obtained that the duration of the
 *   resource is available.
 * - HAVE_CURRENT_DATA (numeric value 2)
 *   Data for the immediate current playback position is available.
 * - HAVE_FUTURE_DATA (numeric value 3)
 *   Data for the immediate current playback position is available, as
 *   well as enough data for the user agent to advance the current
 *   playback position in the direction of playback.
 * - HAVE_ENOUGH_DATA (numeric value 4)
 *   The user agent estimates that enough data is available for
 *   playback to proceed uninterrupted.
 *
 * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-readystate
 * @return {number} the current playback rendering state
 * @method Player#readyState
 */
'readyState'].forEach(function (fn) {
  Player.prototype[fn] = function () {
    return this.techGet_(fn);
  };
});

TECH_EVENTS_RETRIGGER.forEach(function (event) {
  Player.prototype['handleTech' + toTitleCase(event) + '_'] = function () {
    return this.trigger(event);
  };
});

/**
 * Fired when the player has initial duration and dimension information
 *
 * @event Player#loadedmetadata
 * @type {EventTarget~Event}
 */

/**
 * Fired when the player has downloaded data at the current playback position
 *
 * @event Player#loadeddata
 * @type {EventTarget~Event}
 */

/**
 * Fired when the current playback position has changed *
 * During playback this is fired every 15-250 milliseconds, depending on the
 * playback technology in use.
 *
 * @event Player#timeupdate
 * @type {EventTarget~Event}
 */

/**
 * Fired when the volume changes
 *
 * @event Player#volumechange
 * @type {EventTarget~Event}
 */

/**
 * Reports whether or not a player has a plugin available.
 *
 * This does not report whether or not the plugin has ever been initialized
 * on this player. For that, [usingPlugin]{@link Player#usingPlugin}.
 *
 * @method Player#hasPlugin
 * @param  {string}  name
 *         The name of a plugin.
 *
 * @return {boolean}
 *         Whether or not this player has the requested plugin available.
 */

/**
 * Reports whether or not a player is using a plugin by name.
 *
 * For basic plugins, this only reports whether the plugin has _ever_ been
 * initialized on this player.
 *
 * @method Player#usingPlugin
 * @param  {string} name
 *         The name of a plugin.
 *
 * @return {boolean}
 *         Whether or not this player is using the requested plugin.
 */

Component.registerComponent('Player', Player);

/**
 * @file plugin.js
 */
/**
 * The base plugin name.
 *
 * @private
 * @constant
 * @type {string}
 */
var BASE_PLUGIN_NAME = 'plugin';

/**
 * The key on which a player's active plugins cache is stored.
 *
 * @private
 * @constant
 * @type     {string}
 */
var PLUGIN_CACHE_KEY = 'activePlugins_';

/**
 * Stores registered plugins in a private space.
 *
 * @private
 * @type    {Object}
 */
var pluginStorage = {};

/**
 * Reports whether or not a plugin has been registered.
 *
 * @private
 * @param   {string} name
 *          The name of a plugin.
 *
 * @returns {boolean}
 *          Whether or not the plugin has been registered.
 */
var pluginExists = function pluginExists(name) {
  return pluginStorage.hasOwnProperty(name);
};

/**
 * Get a single registered plugin by name.
 *
 * @private
 * @param   {string} name
 *          The name of a plugin.
 *
 * @returns {Function|undefined}
 *          The plugin (or undefined).
 */
var getPlugin = function getPlugin(name) {
  return pluginExists(name) ? pluginStorage[name] : undefined;
};

/**
 * Marks a plugin as "active" on a player.
 *
 * Also, ensures that the player has an object for tracking active plugins.
 *
 * @private
 * @param   {Player} player
 *          A Video.js player instance.
 *
 * @param   {string} name
 *          The name of a plugin.
 */
var markPluginAsActive = function markPluginAsActive(player, name) {
  player[PLUGIN_CACHE_KEY] = player[PLUGIN_CACHE_KEY] || {};
  player[PLUGIN_CACHE_KEY][name] = true;
};

/**
 * Triggers a pair of plugin setup events.
 *
 * @private
 * @param  {Player} player
 *         A Video.js player instance.
 *
 * @param  {Plugin~PluginEventHash} hash
 *         A plugin event hash.
 *
 * @param  {Boolean} [before]
 *         If true, prefixes the event name with "before". In other words,
 *         use this to trigger "beforepluginsetup" instead of "pluginsetup".
 */
var triggerSetupEvent = function triggerSetupEvent(player, hash, before) {
  var eventName = (before ? 'before' : '') + 'pluginsetup';

  player.trigger(eventName, hash);
  player.trigger(eventName + ':' + hash.name, hash);
};

/**
 * Takes a basic plugin function and returns a wrapper function which marks
 * on the player that the plugin has been activated.
 *
 * @private
 * @param   {string} name
 *          The name of the plugin.
 *
 * @param   {Function} plugin
 *          The basic plugin.
 *
 * @returns {Function}
 *          A wrapper function for the given plugin.
 */
var createBasicPlugin = function createBasicPlugin(name, plugin) {
  var basicPluginWrapper = function basicPluginWrapper() {

    // We trigger the "beforepluginsetup" and "pluginsetup" events on the player
    // regardless, but we want the hash to be consistent with the hash provided
    // for advanced plugins.
    //
    // The only potentially counter-intuitive thing here is the `instance` in
    // the "pluginsetup" event is the value returned by the `plugin` function.
    triggerSetupEvent(this, { name: name, plugin: plugin, instance: null }, true);

    var instance = plugin.apply(this, arguments);

    markPluginAsActive(this, name);
    triggerSetupEvent(this, { name: name, plugin: plugin, instance: instance });

    return instance;
  };

  Object.keys(plugin).forEach(function (prop) {
    basicPluginWrapper[prop] = plugin[prop];
  });

  return basicPluginWrapper;
};

/**
 * Takes a plugin sub-class and returns a factory function for generating
 * instances of it.
 *
 * This factory function will replace itself with an instance of the requested
 * sub-class of Plugin.
 *
 * @private
 * @param   {string} name
 *          The name of the plugin.
 *
 * @param   {Plugin} PluginSubClass
 *          The advanced plugin.
 *
 * @returns {Function}
 */
var createPluginFactory = function createPluginFactory(name, PluginSubClass) {

  // Add a `name` property to the plugin prototype so that each plugin can
  // refer to itself by name.
  PluginSubClass.prototype.name = name;

  return function () {
    triggerSetupEvent(this, { name: name, plugin: PluginSubClass, instance: null }, true);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var instance = new (Function.prototype.bind.apply(PluginSubClass, [null].concat([this].concat(args))))();

    // The plugin is replaced by a function that returns the current instance.
    this[name] = function () {
      return instance;
    };

    triggerSetupEvent(this, instance.getEventHash());

    return instance;
  };
};

/**
 * Parent class for all advanced plugins.
 *
 * @mixes   module:evented~EventedMixin
 * @mixes   module:stateful~StatefulMixin
 * @fires   Player#beforepluginsetup
 * @fires   Player#beforepluginsetup:$name
 * @fires   Player#pluginsetup
 * @fires   Player#pluginsetup:$name
 * @listens Player#dispose
 * @throws  {Error}
 *          If attempting to instantiate the base {@link Plugin} class
 *          directly instead of via a sub-class.
 */

var Plugin = function () {

  /**
   * Creates an instance of this class.
   *
   * Sub-classes should call `super` to ensure plugins are properly initialized.
   *
   * @param {Player} player
   *        A Video.js player instance.
   */
  function Plugin(player) {
    classCallCheck(this, Plugin);

    if (this.constructor === Plugin) {
      throw new Error('Plugin must be sub-classed; not directly instantiated.');
    }

    this.player = player;

    // Make this object evented, but remove the added `trigger` method so we
    // use the prototype version instead.
    evented(this);
    delete this.trigger;

    stateful(this, this.constructor.defaultState);
    markPluginAsActive(player, this.name);

    // Auto-bind the dispose method so we can use it as a listener and unbind
    // it later easily.
    this.dispose = bind(this, this.dispose);

    // If the player is disposed, dispose the plugin.
    player.on('dispose', this.dispose);
  }

  /**
   * Each event triggered by plugins includes a hash of additional data with
   * conventional properties.
   *
   * This returns that object or mutates an existing hash.
   *
   * @param   {Object} [hash={}]
   *          An object to be used as event an event hash.
   *
   * @returns {Plugin~PluginEventHash}
   *          An event hash object with provided properties mixed-in.
   */


  Plugin.prototype.getEventHash = function getEventHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    hash.name = this.name;
    hash.plugin = this.constructor;
    hash.instance = this;
    return hash;
  };

  /**
   * Triggers an event on the plugin object and overrides
   * {@link module:evented~EventedMixin.trigger|EventedMixin.trigger}.
   *
   * @param   {string|Object} event
   *          An event type or an object with a type property.
   *
   * @param   {Object} [hash={}]
   *          Additional data hash to merge with a
   *          {@link Plugin~PluginEventHash|PluginEventHash}.
   *
   * @returns {boolean}
   *          Whether or not default was prevented.
   */


  Plugin.prototype.trigger = function trigger$$1(event) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return trigger(this.eventBusEl_, event, this.getEventHash(hash));
  };

  /**
   * Handles "statechanged" events on the plugin. No-op by default, override by
   * subclassing.
   *
   * @abstract
   * @param    {Event} e
   *           An event object provided by a "statechanged" event.
   *
   * @param    {Object} e.changes
   *           An object describing changes that occurred with the "statechanged"
   *           event.
   */


  Plugin.prototype.handleStateChanged = function handleStateChanged(e) {};

  /**
   * Disposes a plugin.
   *
   * Subclasses can override this if they want, but for the sake of safety,
   * it's probably best to subscribe the "dispose" event.
   *
   * @fires Plugin#dispose
   */


  Plugin.prototype.dispose = function dispose() {
    var name = this.name,
        player = this.player;

    /**
     * Signals that a advanced plugin is about to be disposed.
     *
     * @event Plugin#dispose
     * @type  {EventTarget~Event}
     */

    this.trigger('dispose');
    this.off();
    player.off('dispose', this.dispose);

    // Eliminate any possible sources of leaking memory by clearing up
    // references between the player and the plugin instance and nulling out
    // the plugin's state and replacing methods with a function that throws.
    player[PLUGIN_CACHE_KEY][name] = false;
    this.player = this.state = null;

    // Finally, replace the plugin name on the player with a new factory
    // function, so that the plugin is ready to be set up again.
    player[name] = createPluginFactory(name, pluginStorage[name]);
  };

  /**
   * Determines if a plugin is a basic plugin (i.e. not a sub-class of `Plugin`).
   *
   * @param   {string|Function} plugin
   *          If a string, matches the name of a plugin. If a function, will be
   *          tested directly.
   *
   * @returns {boolean}
   *          Whether or not a plugin is a basic plugin.
   */


  Plugin.isBasic = function isBasic(plugin) {
    var p = typeof plugin === 'string' ? getPlugin(plugin) : plugin;

    return typeof p === 'function' && !Plugin.prototype.isPrototypeOf(p.prototype);
  };

  /**
   * Register a Video.js plugin.
   *
   * @param   {string} name
   *          The name of the plugin to be registered. Must be a string and
   *          must not match an existing plugin or a method on the `Player`
   *          prototype.
   *
   * @param   {Function} plugin
   *          A sub-class of `Plugin` or a function for basic plugins.
   *
   * @returns {Function}
   *          For advanced plugins, a factory function for that plugin. For
   *          basic plugins, a wrapper function that initializes the plugin.
   */


  Plugin.registerPlugin = function registerPlugin(name, plugin) {
    if (typeof name !== 'string') {
      throw new Error('Illegal plugin name, "' + name + '", must be a string, was ' + (typeof name === 'undefined' ? 'undefined' : _typeof(name)) + '.');
    }

    if (pluginExists(name)) {
      log$1.warn('A plugin named "' + name + '" already exists. You may want to avoid re-registering plugins!');
    } else if (Player.prototype.hasOwnProperty(name)) {
      throw new Error('Illegal plugin name, "' + name + '", cannot share a name with an existing player method!');
    }

    if (typeof plugin !== 'function') {
      throw new Error('Illegal plugin for "' + name + '", must be a function, was ' + (typeof plugin === 'undefined' ? 'undefined' : _typeof(plugin)) + '.');
    }

    pluginStorage[name] = plugin;

    // Add a player prototype method for all sub-classed plugins (but not for
    // the base Plugin class).
    if (name !== BASE_PLUGIN_NAME) {
      if (Plugin.isBasic(plugin)) {
        Player.prototype[name] = createBasicPlugin(name, plugin);
      } else {
        Player.prototype[name] = createPluginFactory(name, plugin);
      }
    }

    return plugin;
  };

  /**
   * De-register a Video.js plugin.
   *
   * @param {string} name
   *        The name of the plugin to be deregistered.
   */


  Plugin.deregisterPlugin = function deregisterPlugin(name) {
    if (name === BASE_PLUGIN_NAME) {
      throw new Error('Cannot de-register base plugin.');
    }
    if (pluginExists(name)) {
      delete pluginStorage[name];
      delete Player.prototype[name];
    }
  };

  /**
   * Gets an object containing multiple Video.js plugins.
   *
   * @param   {Array} [names]
   *          If provided, should be an array of plugin names. Defaults to _all_
   *          plugin names.
   *
   * @returns {Object|undefined}
   *          An object containing plugin(s) associated with their name(s) or
   *          `undefined` if no matching plugins exist).
   */


  Plugin.getPlugins = function getPlugins() {
    var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.keys(pluginStorage);

    var result = void 0;

    names.forEach(function (name) {
      var plugin = getPlugin(name);

      if (plugin) {
        result = result || {};
        result[name] = plugin;
      }
    });

    return result;
  };

  /**
   * Gets a plugin's version, if available
   *
   * @param   {string} name
   *          The name of a plugin.
   *
   * @returns {string}
   *          The plugin's version or an empty string.
   */


  Plugin.getPluginVersion = function getPluginVersion(name) {
    var plugin = getPlugin(name);

    return plugin && plugin.VERSION || '';
  };

  return Plugin;
}();

/**
 * Gets a plugin by name if it exists.
 *
 * @static
 * @method   getPlugin
 * @memberOf Plugin
 * @param    {string} name
 *           The name of a plugin.
 *
 * @returns  {Function|undefined}
 *           The plugin (or `undefined`).
 */


Plugin.getPlugin = getPlugin;

/**
 * The name of the base plugin class as it is registered.
 *
 * @type {string}
 */
Plugin.BASE_PLUGIN_NAME = BASE_PLUGIN_NAME;

Plugin.registerPlugin(BASE_PLUGIN_NAME, Plugin);

/**
 * Documented in player.js
 *
 * @ignore
 */
Player.prototype.usingPlugin = function (name) {
  return !!this[PLUGIN_CACHE_KEY] && this[PLUGIN_CACHE_KEY][name] === true;
};

/**
 * Documented in player.js
 *
 * @ignore
 */
Player.prototype.hasPlugin = function (name) {
  return !!pluginExists(name);
};

/**
 * Signals that a plugin is about to be set up on a player.
 *
 * @event    Player#beforepluginsetup
 * @type     {Plugin~PluginEventHash}
 */

/**
 * Signals that a plugin is about to be set up on a player - by name. The name
 * is the name of the plugin.
 *
 * @event    Player#beforepluginsetup:$name
 * @type     {Plugin~PluginEventHash}
 */

/**
 * Signals that a plugin has just been set up on a player.
 *
 * @event    Player#pluginsetup
 * @type     {Plugin~PluginEventHash}
 */

/**
 * Signals that a plugin has just been set up on a player - by name. The name
 * is the name of the plugin.
 *
 * @event    Player#pluginsetup:$name
 * @type     {Plugin~PluginEventHash}
 */

/**
 * @typedef  {Object} Plugin~PluginEventHash
 *
 * @property {string} instance
 *           For basic plugins, the return value of the plugin function. For
 *           advanced plugins, the plugin instance on which the event is fired.
 *
 * @property {string} name
 *           The name of the plugin.
 *
 * @property {string} plugin
 *           For basic plugins, the plugin function. For advanced plugins, the
 *           plugin class/constructor.
 */

/**
 * @file extend.js
 * @module extend
 */

/**
 * A combination of node inherits and babel's inherits (after transpile).
 * Both work the same but node adds `super_` to the subClass
 * and Bable adds the superClass as __proto__. Both seem useful.
 *
 * @param {Object} subClass
 *        The class to inherit to
 *
 * @param {Object} superClass
 *        The class to inherit from
 *
 * @private
 */
var _inherits = function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (superClass) {
    // node
    subClass.super_ = superClass;
  }
};

/**
 * Function for subclassing using the same inheritance that
 * videojs uses internally
 *
 * @static
 * @const
 *
 * @param {Object} superClass
 *        The class to inherit from
 *
 * @param {Object} [subClassMethods={}]
 *        The class to inherit to
 *
 * @return {Object}
 *         The new object with subClassMethods that inherited superClass.
 */
var extendFn = function extendFn(superClass) {
  var subClassMethods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var subClass = function subClass() {
    superClass.apply(this, arguments);
  };

  var methods = {};

  if ((typeof subClassMethods === 'undefined' ? 'undefined' : _typeof(subClassMethods)) === 'object') {
    if (subClassMethods.constructor !== Object.prototype.constructor) {
      subClass = subClassMethods.constructor;
    }
    methods = subClassMethods;
  } else if (typeof subClassMethods === 'function') {
    subClass = subClassMethods;
  }

  _inherits(subClass, superClass);

  // Extend subObj's prototype with functions and other properties from props
  for (var name in methods) {
    if (methods.hasOwnProperty(name)) {
      subClass.prototype[name] = methods[name];
    }
  }

  return subClass;
};

/**
 * @file video.js
 * @module videojs
 */
// Include the built-in techs
// HTML5 Element Shim for IE8
if (typeof HTMLVideoElement === 'undefined' && isReal()) {
  document_1.createElement('video');
  document_1.createElement('audio');
  document_1.createElement('track');
}

/**
 * Doubles as the main function for users to create a player instance and also
 * the main library object.
 * The `videojs` function can be used to initialize or retrieve a player.
  *
 * @param {string|Element} id
 *        Video element or video element ID
 *
 * @param {Object} [options]
 *        Optional options object for config/settings
 *
 * @param {Component~ReadyCallback} [ready]
 *        Optional ready callback
 *
 * @return {Player}
 *         A player instance
 */
function videojs(id, options, ready) {
  var tag = void 0;

  // Allow for element or ID to be passed in
  // String ID
  if (typeof id === 'string') {
    var players = videojs.getPlayers();

    // Adjust for jQuery ID syntax
    if (id.indexOf('#') === 0) {
      id = id.slice(1);
    }

    // If a player instance has already been created for this ID return it.
    if (players[id]) {

      // If options or ready function are passed, warn
      if (options) {
        log$1.warn('Player "' + id + '" is already initialised. Options will not be applied.');
      }

      if (ready) {
        players[id].ready(ready);
      }

      return players[id];
    }

    // Otherwise get element for ID
    tag = $('#' + id);

    // ID is a media element
  } else {
    tag = id;
  }

  // Check for a useable element
  // re: nodeName, could be a box div also
  if (!tag || !tag.nodeName) {
    throw new TypeError('The element or ID supplied is not valid. (videojs)');
  }

  // Element may have a player attr referring to an already created player instance.
  // If so return that otherwise set up a new player below
  if (tag.player || Player.players[tag.playerId]) {
    return tag.player || Player.players[tag.playerId];
  }

  options = options || {};

  videojs.hooks('beforesetup').forEach(function (hookFunction) {
    var opts = hookFunction(tag, mergeOptions(options));

    if (!isObject(opts) || Array.isArray(opts)) {
      log$1.error('please return an object in beforesetup hooks');
      return;
    }

    options = mergeOptions(options, opts);
  });

  var PlayerComponent = Component.getComponent('Player');
  // If not, set up a new player
  var player = new PlayerComponent(tag, options, ready);

  videojs.hooks('setup').forEach(function (hookFunction) {
    return hookFunction(player);
  });

  return player;
}

/**
 * An Object that contains lifecycle hooks as keys which point to an array
 * of functions that are run when a lifecycle is triggered
 */
videojs.hooks_ = {};

/**
 * Get a list of hooks for a specific lifecycle
 * @function videojs.hooks
 *
 * @param {string} type
 *        the lifecyle to get hooks from
 *
 * @param {Function} [fn]
 *        Optionally add a hook to the lifecycle that your are getting.
 *
 * @return {Array}
 *         an array of hooks, or an empty array if there are none.
 */
videojs.hooks = function (type, fn) {
  videojs.hooks_[type] = videojs.hooks_[type] || [];
  if (fn) {
    videojs.hooks_[type] = videojs.hooks_[type].concat(fn);
  }
  return videojs.hooks_[type];
};

/**
 * Add a function hook to a specific videojs lifecycle.
 *
 * @param {string} type
 *        the lifecycle to hook the function to.
 *
 * @param {Function|Function[]}
 *        The function or array of functions to attach.
 */
videojs.hook = function (type, fn) {
  videojs.hooks(type, fn);
};

/**
 * Remove a hook from a specific videojs lifecycle.
 *
 * @param {string} type
 *        the lifecycle that the function hooked to
 *
 * @param {Function} fn
 *        The hooked function to remove
 *
 * @return {boolean}
 *         The function that was removed or undef
 */
videojs.removeHook = function (type, fn) {
  var index = videojs.hooks(type).indexOf(fn);

  if (index <= -1) {
    return false;
  }

  videojs.hooks_[type] = videojs.hooks_[type].slice();
  videojs.hooks_[type].splice(index, 1);

  return true;
};

// Add default styles
if (window_1.VIDEOJS_NO_DYNAMIC_STYLE !== true && isReal()) {
  var style = $('.vjs-styles-defaults');

  if (!style) {
    style = createStyleElement('vjs-styles-defaults');
    var head = $('head');

    if (head) {
      head.insertBefore(style, head.firstChild);
    }
    setTextContent(style, '\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ');
  }
}

// Run Auto-load players
// You have to wait at least once in case this script is loaded after your
// video in the DOM (weird behavior only with minified version)
autoSetupTimeout(1, videojs);

/**
 * Current software version. Follows semver.
 *
 * @type {string}
 */
videojs.VERSION = version;

/**
 * The global options object. These are the settings that take effect
 * if no overrides are specified when the player is created.
 *
 * @type {Object}
 */
videojs.options = Player.prototype.options_;

/**
 * Get an object with the currently created players, keyed by player ID
 *
 * @return {Object}
 *         The created players
 */
videojs.getPlayers = function () {
  return Player.players;
};

/**
 * Expose players object.
 *
 * @memberOf videojs
 * @property {Object} players
 */
videojs.players = Player.players;

/**
 * Get a component class object by name
 *
 * @borrows Component.getComponent as videojs.getComponent
 */
videojs.getComponent = Component.getComponent;

/**
 * Register a component so it can referred to by name. Used when adding to other
 * components, either through addChild `component.addChild('myComponent')` or through
 * default children options  `{ children: ['myComponent'] }`.
 *
 * > NOTE: You could also just initialize the component before adding.
 * `component.addChild(new MyComponent());`
 *
 * @param {string} name
 *        The class name of the component
 *
 * @param {Component} comp
 *        The component class
 *
 * @return {Component}
 *         The newly registered component
 */
videojs.registerComponent = function (name$$1, comp) {
  if (Tech.isTech(comp)) {
    log$1.warn('The ' + name$$1 + ' tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)');
  }

  Component.registerComponent.call(Component, name$$1, comp);
};

/**
 * Get a Tech class object by name
 *
 * @borrows Tech.getTech as videojs.getTech
 */
videojs.getTech = Tech.getTech;

/**
 * Register a Tech so it can referred to by name.
 * This is used in the tech order for the player.
 *
 * @borrows Tech.registerTech as videojs.registerTech
 */
videojs.registerTech = Tech.registerTech;

videojs.use = use;

/**
 * A suite of browser and device tests from {@link browser}.
 *
 * @type {Object}
 * @private
 */
videojs.browser = browser;

/**
 * Whether or not the browser supports touch events. Included for backward
 * compatibility with 4.x, but deprecated. Use `videojs.browser.TOUCH_ENABLED`
 * instead going forward.
 *
 * @deprecated since version 5.0
 * @type {boolean}
 */
videojs.TOUCH_ENABLED = TOUCH_ENABLED;

/**
 * Subclass an existing class
 * Mimics ES6 subclassing with the `extend` keyword
 *
 * @borrows extend:extendFn as videojs.extend
 */
videojs.extend = extendFn;

/**
 * Merge two options objects recursively
 * Performs a deep merge like lodash.merge but **only merges plain objects**
 * (not arrays, elements, anything else)
 * Other values will be copied directly from the second object.
 *
 * @borrows merge-options:mergeOptions as videojs.mergeOptions
 */
videojs.mergeOptions = mergeOptions;

/**
 * Change the context (this) of a function
 *
 * > NOTE: as of v5.0 we require an ES5 shim, so you should use the native
 * `function() {}.bind(newContext);` instead of this.
 *
 * @borrows fn:bind as videojs.bind
 */
videojs.bind = bind;

/**
 * Register a Video.js plugin.
 *
 * @borrows plugin:registerPlugin as videojs.registerPlugin
 * @method registerPlugin
 *
 * @param  {string} name
 *         The name of the plugin to be registered. Must be a string and
 *         must not match an existing plugin or a method on the `Player`
 *         prototype.
 *
 * @param  {Function} plugin
 *         A sub-class of `Plugin` or a function for basic plugins.
 *
 * @return {Function}
 *         For advanced plugins, a factory function for that plugin. For
 *         basic plugins, a wrapper function that initializes the plugin.
 */
videojs.registerPlugin = Plugin.registerPlugin;

/**
 * Deprecated method to register a plugin with Video.js
 *
 * @deprecated
 *        videojs.plugin() is deprecated; use videojs.registerPlugin() instead
 *
 * @param {string} name
 *        The plugin name
 *
 * @param {Plugin|Function} plugin
 *         The plugin sub-class or function
 */
videojs.plugin = function (name$$1, plugin) {
  log$1.warn('videojs.plugin() is deprecated; use videojs.registerPlugin() instead');
  return Plugin.registerPlugin(name$$1, plugin);
};

/**
 * Gets an object containing multiple Video.js plugins.
 *
 * @param  {Array} [names]
 *         If provided, should be an array of plugin names. Defaults to _all_
 *         plugin names.
 *
 * @return {Object|undefined}
 *         An object containing plugin(s) associated with their name(s) or
 *         `undefined` if no matching plugins exist).
 */
videojs.getPlugins = Plugin.getPlugins;

/**
 * Gets a plugin by name if it exists.
 *
 * @param  {string} name
 *         The name of a plugin.
 *
 * @return {Function|undefined}
 *         The plugin (or `undefined`).
 */
videojs.getPlugin = Plugin.getPlugin;

/**
 * Gets a plugin's version, if available
 *
 * @param  {string} name
 *         The name of a plugin.
 *
 * @return {string}
 *         The plugin's version or an empty string.
 */
videojs.getPluginVersion = Plugin.getPluginVersion;

/**
 * Adding languages so that they're available to all players.
 * Example: `videojs.addLanguage('es', { 'Hello': 'Hola' });`
 *
 * @param {string} code
 *        The language code or dictionary property
 *
 * @param {Object} data
 *        The data values to be translated
 *
 * @return {Object}
 *         The resulting language dictionary object
 */
videojs.addLanguage = function (code, data) {
  var _mergeOptions;

  code = ('' + code).toLowerCase();

  videojs.options.languages = mergeOptions(videojs.options.languages, (_mergeOptions = {}, _mergeOptions[code] = data, _mergeOptions));

  return videojs.options.languages[code];
};

/**
 * Log messages
 *
 * @borrows log:log as videojs.log
 */
videojs.log = log$1;

/**
 * Creates an emulated TimeRange object.
 *
 * @borrows time-ranges:createTimeRanges as videojs.createTimeRange
 */
/**
 * @borrows time-ranges:createTimeRanges as videojs.createTimeRanges
 */
videojs.createTimeRange = videojs.createTimeRanges = createTimeRanges;

/**
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @borrows format-time:formatTime as videojs.formatTime
 */
videojs.formatTime = formatTime;

/**
 * Resolve and parse the elements of a URL
 *
 * @borrows url:parseUrl as videojs.parseUrl
 */
videojs.parseUrl = parseUrl;

/**
 * Returns whether the url passed is a cross domain request or not.
 *
 * @borrows url:isCrossOrigin as videojs.isCrossOrigin
 */
videojs.isCrossOrigin = isCrossOrigin;

/**
 * Event target class.
 *
 * @borrows EventTarget as videojs.EventTarget
 */
videojs.EventTarget = EventTarget;

/**
 * Add an event listener to element
 * It stores the handler function in a separate cache object
 * and adds a generic handler to the element's event,
 * along with a unique id (guid) to the element.
 *
 * @borrows events:on as videojs.on
 */
videojs.on = on;

/**
 * Trigger a listener only once for an event
 *
 * @borrows events:one as videojs.one
 */
videojs.one = one;

/**
 * Removes event listeners from an element
 *
 * @borrows events:off as videojs.off
 */
videojs.off = off;

/**
 * Trigger an event for an element
 *
 * @borrows events:trigger as videojs.trigger
 */
videojs.trigger = trigger;

/**
 * A cross-browser XMLHttpRequest wrapper. Here's a simple example:
 *
 * @param {Object} options
 *        settings for the request.
 *
 * @return {XMLHttpRequest|XDomainRequest}
 *         The request object.
 *
 * @see https://github.com/Raynos/xhr
 */
videojs.xhr = xhr;

/**
 * TextTrack class
 *
 * @borrows TextTrack as videojs.TextTrack
 */
videojs.TextTrack = TextTrack;

/**
 * export the AudioTrack class so that source handlers can create
 * AudioTracks and then add them to the players AudioTrackList
 *
 * @borrows AudioTrack as videojs.AudioTrack
 */
videojs.AudioTrack = AudioTrack;

/**
 * export the VideoTrack class so that source handlers can create
 * VideoTracks and then add them to the players VideoTrackList
 *
 * @borrows VideoTrack as videojs.VideoTrack
 */
videojs.VideoTrack = VideoTrack;

/**
 * Determines, via duck typing, whether or not a value is a DOM element.
 *
 * @borrows dom:isEl as videojs.isEl
 * @deprecated Use videojs.dom.isEl() instead
 */

/**
 * Determines, via duck typing, whether or not a value is a text node.
 *
 * @borrows dom:isTextNode as videojs.isTextNode
 * @deprecated Use videojs.dom.isTextNode() instead
 */

/**
 * Creates an element and applies properties.
 *
 * @borrows dom:createEl as videojs.createEl
 * @deprecated Use videojs.dom.createEl() instead
 */

/**
 * Check if an element has a CSS class
 *
 * @borrows dom:hasElClass as videojs.hasClass
 * @deprecated Use videojs.dom.hasClass() instead
 */

/**
 * Add a CSS class name to an element
 *
 * @borrows dom:addElClass as videojs.addClass
 * @deprecated Use videojs.dom.addClass() instead
 */

/**
 * Remove a CSS class name from an element
 *
 * @borrows dom:removeElClass as videojs.removeClass
 * @deprecated Use videojs.dom.removeClass() instead
 */

/**
 * Adds or removes a CSS class name on an element depending on an optional
 * condition or the presence/absence of the class name.
 *
 * @borrows dom:toggleElClass as videojs.toggleClass
 * @deprecated Use videojs.dom.toggleClass() instead
 */

/**
 * Apply attributes to an HTML element.
 *
 * @borrows dom:setElAttributes as videojs.setAttribute
 * @deprecated Use videojs.dom.setAttributes() instead
 */

/**
 * Get an element's attribute values, as defined on the HTML tag
 * Attributes are not the same as properties. They're defined on the tag
 * or with setAttribute (which shouldn't be used with HTML)
 * This will return true or false for boolean attributes.
 *
 * @borrows dom:getElAttributes as videojs.getAttributes
 * @deprecated Use videojs.dom.getAttributes() instead
 */

/**
 * Empties the contents of an element.
 *
 * @borrows dom:emptyEl as videojs.emptyEl
 * @deprecated Use videojs.dom.emptyEl() instead
 */

/**
 * Normalizes and appends content to an element.
 *
 * The content for an element can be passed in multiple types and
 * combinations, whose behavior is as follows:
 *
 * - String
 *   Normalized into a text node.
 *
 * - Element, TextNode
 *   Passed through.
 *
 * - Array
 *   A one-dimensional array of strings, elements, nodes, or functions (which
 *   return single strings, elements, or nodes).
 *
 * - Function
 *   If the sole argument, is expected to produce a string, element,
 *   node, or array.
 *
 * @borrows dom:appendContents as videojs.appendContet
 * @deprecated Use videojs.dom.appendContent() instead
 */

/**
 * Normalizes and inserts content into an element; this is identical to
 * `appendContent()`, except it empties the element first.
 *
 * The content for an element can be passed in multiple types and
 * combinations, whose behavior is as follows:
 *
 * - String
 *   Normalized into a text node.
 *
 * - Element, TextNode
 *   Passed through.
 *
 * - Array
 *   A one-dimensional array of strings, elements, nodes, or functions (which
 *   return single strings, elements, or nodes).
 *
 * - Function
 *   If the sole argument, is expected to produce a string, element,
 *   node, or array.
 *
 * @borrows dom:insertContent as videojs.insertContent
 * @deprecated Use videojs.dom.insertContent() instead
 */
['isEl', 'isTextNode', 'createEl', 'hasClass', 'addClass', 'removeClass', 'toggleClass', 'setAttributes', 'getAttributes', 'emptyEl', 'appendContent', 'insertContent'].forEach(function (k) {
  videojs[k] = function () {
    log$1.warn('videojs.' + k + '() is deprecated; use videojs.dom.' + k + '() instead');
    return Dom[k].apply(null, arguments);
  };
});

/**
 * A safe getComputedStyle with an IE8 fallback.
 *
 * This is because in Firefox, if the player is loaded in an iframe with `display:none`,
 * then `getComputedStyle` returns `null`, so, we do a null-check to make sure
 * that the player doesn't break in these cases.
 * See https://bugzilla.mozilla.org/show_bug.cgi?id=548397 for more details.
 *
 * @borrows computed-style:computedStyle as videojs.computedStyle
 */
videojs.computedStyle = computedStyle;

/**
 * Export the Dom utilities for use in external plugins
 * and Tech's
 */
videojs.dom = Dom;

/**
 * Export the Url utilities for use in external plugins
 * and Tech's
 */
videojs.url = Url;

return videojs;

})));

!function(){!function(a){var b=a&&a.videojs;b&&(b.CDN_VERSION="6.2.7")}(window),function(a,b,c,d,e,f,g){b&&!1!==b.HELP_IMPROVE_VIDEOJS&&(e.random()>.01||(f=b.location,g=b.videojs||{},a.src="//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-3&utmn=1&utmhn="+d(f.hostname)+"&utmsr="+b.screen.availWidth+"x"+b.screen.availHeight+"&utmul="+(c.language||c.userLanguage||"").toLowerCase()+"&utmr="+d(f.href)+"&utmp="+d(f.hostname+f.pathname)+"&utmcc=__utma%3D1."+e.floor(1e10*e.random())+".1.1.1.1%3B&utme=8(vjsv*cdnv)9("+g.VERSION+"*"+g.CDN_VERSION+")"))}(new Image,window,navigator,encodeURIComponent,Math)}();