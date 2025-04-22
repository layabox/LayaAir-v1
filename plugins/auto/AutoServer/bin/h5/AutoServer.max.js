
/***********************************/
/*http://www.layabox.com  2017/3/23*/
/***********************************/
var Laya=window.Laya=(function(window,document){
	var Laya={
		__internals:[],
		__packages:{},
		__classmap:{'Object':Object,'Function':Function,'Array':Array,'String':String},
		__sysClass:{'object':'Object','array':'Array','string':'String','dictionary':'Dictionary'},
		__propun:{writable: true,enumerable: false,configurable: true},
		__presubstr:String.prototype.substr,
		__substr:function(ofs,sz){return arguments.length==1?Laya.__presubstr.call(this,ofs):Laya.__presubstr.call(this,ofs,sz>0?sz:(this.length+sz));},
		__init:function(_classs){_classs.forEach(function(o){o.__init$ && o.__init$();});},
		__isClass:function(o){return o && (o.__isclass || o==Object || o==String || o==Array);},
		__newvec:function(sz,value){
			var d=[];
			d.length=sz;
			for(var i=0;i<sz;i++) d[i]=value;
			return d;
		},
		__extend:function(d,b){
			for (var p in b){
				if (!b.hasOwnProperty(p)) continue;
				var gs=Object.getOwnPropertyDescriptor(b, p);
				var g = gs.get, s = gs.set; 
				if ( g || s ) {
					if ( g && s)
						Object.defineProperty(d,p,gs);
					else{
						g && Object.defineProperty(d, p, g);
						s && Object.defineProperty(d, p, s);
					}
				}
				else d[p] = b[p];
			}
			function __() { Laya.un(this,'constructor',d); }__.prototype=b.prototype;d.prototype=new __();Laya.un(d.prototype,'__imps',Laya.__copy({},b.prototype.__imps));
		},
		__copy:function(dec,src){
			if(!src) return null;
			dec=dec||{};
			for(var i in src) dec[i]=src[i];
			return dec;
		},
		__package:function(name,o){
			if(Laya.__packages[name]) return;
			Laya.__packages[name]=true;
			var p=window,strs=name.split('.');
			if(strs.length>1){
				for(var i=0,sz=strs.length-1;i<sz;i++){
					var c=p[strs[i]];
					p=c?c:(p[strs[i]]={});
				}
			}
			p[strs[strs.length-1]] || (p[strs[strs.length-1]]=o||{});
		},
		__hasOwnProperty:function(name,o){
			o=o ||this;
		    function classHas(name,o){
				if(Object.hasOwnProperty.call(o.prototype,name)) return true;
				var s=o.prototype.__super;
				return s==null?null:classHas(name,s);
			}
			return (Object.hasOwnProperty.call(o,name)) || classHas(name,o.__class);
		},
		__typeof:function(o,value){
			if(!o || !value) return false;
			if(value===String) return (typeof o==='string');
			if(value===Number) return (typeof o==='number');
			if(value.__interface__) value=value.__interface__;
			else if(typeof value!='string')  return (o instanceof value);
			return (o.__imps && o.__imps[value]) || (o.__class==value);
		},
		__as:function(value,type){
			return (this.__typeof(value,type))?value:null;
		},
        __int:function(value){
            return value?parseInt(value):0;
        },
		interface:function(name,_super){
			Laya.__package(name,{});
			var ins=Laya.__internals;
			var a=ins[name]=ins[name] || {self:name};
			if(_super)
			{
				var supers=_super.split(',');
				a.extend=[];
				for(var i=0;i<supers.length;i++){
					var nm=supers[i];
					ins[nm]=ins[nm] || {self:nm};
					a.extend.push(ins[nm]);
				}
			}
			var o=window,words=name.split('.');
			for(var i=0;i<words.length-1;i++) o=o[words[i]];
			o[words[words.length-1]]={__interface__:name};
		},
		class:function(o,fullName,_super,miniName){
			_super && Laya.__extend(o,_super);
			if(fullName){
				Laya.__package(fullName,o);
				Laya.__classmap[fullName]=o;
				if(fullName.indexOf('.')>0){
					if(fullName.indexOf('laya.')==0){
						var paths=fullName.split('.');
						miniName=miniName || paths[paths.length-1];
						if(Laya[miniName]) console.log("Warning!,this class["+miniName+"] already exist:",Laya[miniName]);
						Laya[miniName]=o;
					}
				}
				else {
					if(fullName=="Main")
						window.Main=o;
					else{
						if(Laya[fullName]){
							console.log("Error!,this class["+fullName+"] already exist:",Laya[fullName]);
						}
						Laya[fullName]=o;
					}
				}
			}
			var un=Laya.un,p=o.prototype;
			un(p,'hasOwnProperty',Laya.__hasOwnProperty);
			un(p,'__class',o);
			un(p,'__super',_super);
			un(p,'__className',fullName);
			un(o,'__super',_super);
			un(o,'__className',fullName);
			un(o,'__isclass',true);
			un(o,'super',function(o){this.__super.call(o);});
		},
		imps:function(dec,src){
			if(!src) return null;
			var d=dec.__imps|| Laya.un(dec,'__imps',{});
			function __(name){
				var c,exs;
				if(! (c=Laya.__internals[name]) ) return;
				d[name]=true;
				if(!(exs=c.extend)) return;
				for(var i=0;i<exs.length;i++){
					__(exs[i].self);
				}
			}
			for(var i in src) __(i);
		},
        superSet:function(clas,o,prop,value){
            var fun = clas.prototype["_$set_"+prop];
            fun && fun.call(o,value);
        },
        superGet:function(clas,o,prop){
            var fun = clas.prototype["_$get_"+prop];
           	return fun?fun.call(o):null;
        },
		getset:function(isStatic,o,name,getfn,setfn){
			if(!isStatic){
				getfn && Laya.un(o,'_$get_'+name,getfn);
				setfn && Laya.un(o,'_$set_'+name,setfn);
			}
			else{
				getfn && (o['_$GET_'+name]=getfn);
				setfn && (o['_$SET_'+name]=setfn);
			}
			if(getfn && setfn) 
				Object.defineProperty(o,name,{get:getfn,set:setfn,enumerable:false,configurable:true});
			else{
				getfn && Object.defineProperty(o,name,{get:getfn,enumerable:false,configurable:true});
				setfn && Object.defineProperty(o,name,{set:setfn,enumerable:false,configurable:true});
			}
		},
		static:function(_class,def){
				for(var i=0,sz=def.length;i<sz;i+=2){
					if(def[i]=='length') 
						_class.length=def[i+1].call(_class);
					else{
						function tmp(){
							var name=def[i];
							var getfn=def[i+1];
							Object.defineProperty(_class,name,{
								get:function(){delete this[name];return this[name]=getfn.call(this);},
								set:function(v){delete this[name];this[name]=v;},enumerable: true,configurable: true});
						}
						tmp();
					}
				}
		},		
		un:function(obj,name,value){
			value || (value=obj[name]);
			Laya.__propun.value=value;
			Object.defineProperty(obj, name, Laya.__propun);
			return value;
		},
		uns:function(obj,names){
			names.forEach(function(o){Laya.un(obj,o)});
		}
	};

    window.console=window.console || ({log:function(){}});
	window.trace=window.console.log;
	Error.prototype.throwError=function(){throw arguments;};
	//String.prototype.substr=Laya.__substr;
	Object.defineProperty(Array.prototype,'fixed',{enumerable: false});

	return Laya;
})(window,document);

(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;
	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/IMessage.as=======1100000100.000061/1100000100.000061
Laya.interface('laya.data.IMessage');
	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/core/IRecoverable.as=======1100000100.000023/1100000100.000023
Laya.interface('laya.server.core.IRecoverable');
	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/Laya.as=======1000199.999962/1000199.999962
/**
*全局引用类
*/
//class Laya
var ___Laya=(function(){
	//function Laya(){}
	Laya.init=function(frameRate){
		(frameRate===void 0)&& (frameRate=60);
		setInterval(function(){Laya.timer._update()},1000 / frameRate);
	}

	__static(Laya,
	['timer',function(){return this.timer=new Timer();},'loader',function(){return this.loader=new LoaderManager();}
	]);
	return Laya;
})()


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/MessageBase.as=======199.999998/199.999998
/**
*消息基类，提供自动序列化和反序列化消息功能
*消息的定义用类的定义方式替代，使用起来简单，并且有代码提示
*/
//class laya.data.MessageBase
var MessageBase=(function(){
	function MessageBase(){}
	__class(MessageBase,'laya.data.MessageBase');
	var __proto=MessageBase.prototype;
	Laya.imps(__proto,{"laya.data.IMessage":true})
	/**
	*@private
	*/
	__proto.read=function(byte){
		var des=MessageUtils.getDesByObject(this);
		var i=0,len=0;
		len=des.length;
		var tArr;
		for (i=0;i < len;i++){
			tArr=des[i];
			this[tArr[0]]=this._readObj(byte,tArr[1],tArr[2]);
		}
		return true;
	}

	/**
	*@private
	*/
	__proto.write=function(byte){
		this.writeByDes(this,byte,MessageUtils.getDesByObject(this));
		return true;
	}

	/**
	*@private
	*/
	__proto.clear=function(){}
	/**
	*@private
	*/
	__proto._readObj=function(byte,type,des){
		var v;
		if ((type instanceof Array))return this.readArray(byte,type);
		if ((typeof type=='function'))return this.readClass(byte,type);
		switch (type){
			case 0:
				v=byte.getUint8()!=0;
				break ;
			case 1:
				v=byte.readByte();
				break ;
			case 2:
				v=byte.getUint8();
				break ;
			case 3:
				v=byte.getInt16();
				break ;
			case 4:
				v=byte.getUint16();
				break ;
			case 5:
				v=byte.getInt32();
				break ;
			case 6:
				v=byte.getUint32();
				break ;
			case 7:
				v=byte.getFloat32();
				break ;
			case 8:
				v=byte.getFloat64();
				break ;
			case 9:
				v=byte.readUTFString();
				break ;
			case 11:
				v=this.readClass(byte,des);
				break ;
			case 12:
				v=this.readClass(byte,this["getClass"]());
				break ;
			case 10:
				v=this.readArray(byte,des);
				break ;
			}
		return v;
	}

	/**
	*@private
	*/
	__proto.readClass=function(byte,Clz){
		Clz=MessageUtils.getClassByID(MessageUtils.getClassID(Clz));
		var rst=new Clz();
		rst.read(byte);
		return rst;
	}

	/**
	*@private
	*/
	__proto.readArray=function(byte,des){
		var rst;
		var i=0,len=0;
		len=byte.getInt32();
		if (len < 0)return null;
		rst=[];
		rst.length=len;
		for (i=0;i < len;i++){
			rst[i]=this._readObj(byte,des[0],des[1]);
		}
		return rst;
	}

	/**
	*@private
	*/
	__proto.writeByDes=function(data,byte,des){
		var i=0,len=0;
		len=des.length;
		var tArr;
		for (i=0;i < len;i++){
			tArr=des[i];
			var v=data[tArr[0]];
			this._writeObj(v,byte,tArr[1],tArr[2]);
		}
	}

	//}
	__proto._writeObj=function(v,byte,type,des){
		if ((type instanceof Array)){
			this.writeArray(v,byte,type);
			return;
		}
		if ((typeof type=='function')){
			this.writeClass(v,byte,type);
			return;
		}
		switch (type){
			case 0:
				byte.writeUint8(v ? 1 :0);
				break ;
			case 1:
				byte.writeByte(v);
				break ;
			case 2:
				byte.writeUint8(v);
				break ;
			case 3:
				byte.writeInt16(v);
				break ;
			case 4:
				byte.writeUint16(v);
				break ;
			case 5:
				byte.writeInt32(v);
				break ;
			case 6:
				byte.writeUint32(v);
				break ;
			case 7:
				byte.writeFloat32(v);
				break ;
			case 8:
				byte.writeFloat64(v);
				break ;
			case 9:
				byte.writeUTFString(v);
				break ;
			case 11:
				this.writeClass(v,byte,des);
				break ;
			case 12:
				this.writeClass(v,byte,this["getClass"]());
				break ;
			case 10:
				this.writeArray(v,byte,des);
				break ;
			}
	}

	/**
	*@private
	*/
	__proto.writeClass=function(data,byte,clz){
		data.writeByDes(data,byte,clz["DES"]);
	}

	/**
	*@private
	*/
	__proto.writeArray=function(arr,byte,des){
		if (!arr)byte.writeInt32(-1);
		var i=0,len=0;
		len=arr.length;
		byte.writeInt32(len);
		for (i=0;i < len;i++){
			this._writeObj(arr[i],byte,des[0],des[1]);
		}
	}

	/**@private */
	__getset(0,__proto,'msgId',function(){
		return MessageUtils.getObjectClassID(this);
	});

	/**@private */
	__getset(0,__proto,'msgKey',function(){
		return MessageUtils.getObjectClass(this)["KEY"];
	});

	MessageBase.DES_SIGN="DES";
	MessageBase.BOOLEAN=0;
	MessageBase.INT8=1;
	MessageBase.UINT8=2;
	MessageBase.INT16=3;
	MessageBase.UINT16=4;
	MessageBase.INT32=5;
	MessageBase.UINT32=6;
	MessageBase.FLOAT32=7;
	MessageBase.FLOAT64=8;
	MessageBase.STRING=9;
	MessageBase.ARRAY=10;
	MessageBase.CLASS=11;
	MessageBase.DYNAMIC=12;
	return MessageBase;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/src/db/ItemData.as=======199.999995/199.999995
//class db.ItemData
var ItemData=(function(){
	function ItemData(){
		this.id=NaN;
		this.name=null;
		this.color=NaN;
	}

	__class(ItemData,'db.ItemData');
	ItemData.sheet=function(){
		return Sheet.get("Item");
	}

	ItemData.getData=function(id){
		return Sheet.getData("Item",id);
	}

	ItemData.getByID=function(id){
		return Sheet.getByID("Item",id);
	}

	return ItemData;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/src/Main.as=======199.999992/199.999992
/**
*...
*@author yung
*/
//class Main
var Main=(function(){
	function Main(){
		Laya.init(60);
		MessageInit;
		Table.I.load(["data/Item.bd"]);
		GameServer.runServer(SocketServer,MyCSCommunicator,Platform,PlayerBase,RoomBase,true);
		console.log("Server startup successful!");
		Table.addTrigger("checkUserGold","User",2,checkGold);
		function checkGold (data){
			if (data.gold < 0){
				Actuator.stop("gold is not enough");
			}
		}
		Table.addTrigger("checkUserGold2","User",2,checkGold2);
		function checkGold2 (data){
			if (data.gold > 10000){
				Actuator.main.change("User","isVip",true);
			}
		}
	}

	__class(Main,'Main');
	return Main;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/net/CSCommunicator.as=======199.999990/199.999990
/**
*`CSCommunicator`是Client和Server间的通信员，通过`CSCommunicator.I`获得单例引用。
*
*它会收到来自客户端的Message，并且处理这些Message。还能发送Message到某个客户端，或者是游戏服务器中的所有客户端。
*
*CSCommunicator的子类应该
*
*-重写processMessage处理来自客户端的Message
*-重写clientConnected处理客户端连接
*-重写clientDisconnected处理客户端断开
*-增加针对游戏的Message发送函数
*
*@author survivor
*
*/
//class laya.server.net.CSCommunicator
var CSCommunicator=(function(){
	function CSCommunicator(){}
	__class(CSCommunicator,'laya.server.net.CSCommunicator');
	var __proto=CSCommunicator.prototype;
	/**
	*监听客户端连接。
	*
	*@param channel
	*/
	__proto.watchClient=function(channel){
		this.createPlayer(channel);
		channel.on("message",this.processClientMessage);
		channel.on("close" ,this.internal_clientDisconnected);
		channel.on("error" ,this.internal_clientError);
		this.clientConnected(channel["player"]);
	}

	__proto.createPlayer=function(channel){
		var gs=GameServer.I;
		var player=Pool.getItemByClass("player",GameServer.playerClass);
		player.beforeReuse();
		gs.players.push(player);
		player.id=Utils.getGID();
		gs.idMap[player.id]=player;
		player.socket=channel;
		channel.player=player;
	}

	/**
	*接收到客户端的消息时触发。
	*
	*@param msg 来自客户端的消息，可能是二进制数据，可能是字符串
	*/
	__proto.processClientMessage=function(buffer){
		CSCommunicator.byte.clear();
		CSCommunicator.byte.writeArrayBuffer(buffer);
		CSCommunicator.byte.pos=0;
		var message=MessageUtils.readMessageFromByte(CSCommunicator.byte);
		laya.server.net.CSCommunicator.I.processMessage(message,this['player']);
	}

	/**
	*处理客户端消息。
	*重写processMessage处理来自客户端的Message。
	*
	*@param message
	*/
	__proto.processMessage=function(message,player){
		console.log("Message from client");
	}

	/**
	*客户端连接时触发。
	*重写clientConnected处理客户端连接。
	*
	*@param player player
	*
	*/
	__proto.clientConnected=function(player){}
	/**
	*客户端连接被关闭时触发。
	*重写clientDisconnected处理客户端断开。
	*
	*@player PlayerBase
	*@param code Socket被关闭的原因对应的状态值
	*@param reason 以人类可读的形式表达Socket被关闭的原因
	*@return void
	*/
	__proto.clientDisconnected=function(player,code,reason){}
	__proto.internal_clientDisconnected=function(code,reason){
		var player=this["player"];
		laya.server.net.CSCommunicator.I.clientDisconnected(player,code,reason);
		Pool.recover("p",player);
		this["player"]=null;
		GameServer.I.idMap[player.id]=null;
		var idx=GameServer.I.players.indexOf(player);
		if(idx !=-1)
			GameServer.I.players.splice(idx,1);
		else
		console.assert(false);
		if(player.room)
			player.room.removePlayer(player);
		player.afterRecover();
		if(GameServer.debug && player.room && player.room.isEmpty()){
			GameServer.I.removeRoom(player.room.id);
		}
	}

	/**
	*客户端出错时，会导致客户端被关闭。
	*@param err
	*
	*/
	__proto.internal_clientError=function(err){
		CSCommunicator.I.internal_clientDisconnected.call(this,err.errorID,err.message);
	}

	CSCommunicator.sendMessage=function(player,message){
		player.send(message);
	}

	CSCommunicator.broadcast=function(message){
		for(var i=0,len=GameServer.I.players.length;i < len;i++){
			CSCommunicator.sendMessage(GameServer.I.players[i],message);
		}
	}

	CSCommunicator.I=null;
	__static(CSCommunicator,
	['byte',function(){return this.byte=new Byte();}
	]);
	return CSCommunicator;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/events/Event.as=======199.999989/199.999989
/**
*<code>Event</code> 是事件类型的集合。一般当发生事件时，<code>Event</code> 对象将作为参数传递给事件侦听器。
*/
//class laya.events.Event
var Event=(function(){
	function Event(){
		/**事件类型。*/
		//this.type=null;
		/**原生浏览器事件。*/
		//this.nativeEvent=null;
		/**事件目标触发对象。*/
		//this.target=null;
		/**事件当前冒泡对象。*/
		//this.currentTarget=null;
		/**@private */
		//this._stoped=false;
		/**分配给触摸点的唯一标识号（作为 int）。*/
		//this.touchId=0;
		/**键盘值*/
		//this.keyCode=0;
		/**滚轮滑动增量*/
		//this.delta=0;
	}

	__class(Event,'laya.events.Event');
	var __proto=Event.prototype;
	/**
	*设置事件数据。
	*@param type 事件类型。
	*@param currentTarget 事件目标触发对象。
	*@param target 事件当前冒泡对象。
	*@return 返回当前 Event 对象。
	*/
	__proto.setTo=function(type,currentTarget,target){
		this.type=type;
		this.currentTarget=currentTarget;
		this.target=target;
		return this;
	}

	/**
	*阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget)中的任何事件侦听器。
	*/
	__proto.stopPropagation=function(){
		this._stoped=true;
	}

	/**
	*表示键在键盘上的位置。这对于区分在键盘上多次出现的键非常有用。<br>
	*例如，您可以根据此属性的值来区分左 Shift 键和右 Shift 键：左 Shift 键的值为 KeyLocation.LEFT，右 Shift 键的值为 KeyLocation.RIGHT。另一个示例是区分标准键盘 (KeyLocation.STANDARD)与数字键盘 (KeyLocation.NUM_PAD)上按下的数字键。
	*/
	__getset(0,__proto,'keyLocation',function(){
		return this.nativeEvent.keyLocation;
	});

	/**
	*表示 Ctrl 键是处于活动状态 (true)还是非活动状态 (false)。
	*/
	__getset(0,__proto,'ctrlKey',function(){
		return this.nativeEvent.ctrlKey;
	});

	/**
	*表示 Alt 键是处于活动状态 (true)还是非活动状态 (false)。
	*/
	__getset(0,__proto,'altKey',function(){
		return this.nativeEvent.altKey;
	});

	/**
	*表示 Shift 键是处于活动状态 (true)还是非活动状态 (false)。
	*/
	__getset(0,__proto,'shiftKey',function(){
		return this.nativeEvent.shiftKey;
	});

	/**
	*包含按下或释放的键的字符代码值。字符代码值为英文键盘值。
	*/
	__getset(0,__proto,'charCode',function(){
		return this.nativeEvent.charCode;
	});

	Event.EMPTY=new Event();
	Event.CHANGE="change";
	Event.CHANGED="changed";
	Event.RESIZE="resize";
	Event.ADDED="added";
	Event.REMOVED="removed";
	Event.DISPLAY="display";
	Event.UNDISPLAY="undisplay";
	Event.ERROR="error";
	Event.COMPLETE="complete";
	Event.LOADED="loaded";
	Event.PROGRESS="progress";
	Event.INPUT="input";
	Event.RENDER="render";
	Event.OPEN="open";
	Event.MESSAGE="message";
	Event.CLOSE="close";
	Event.KEY_DOWN="keydown";
	Event.KEY_PRESS="keypress";
	Event.KEY_UP="keyup";
	Event.ENTER="enter";
	Event.SELECT="select";
	Event.BLUR="blur";
	Event.FOCUS="focus";
	Event.VISIBILITY_CHANGE="visibilitychange";
	Event.FOCUS_CHANGE="focuschange";
	Event.PLAYED="played";
	Event.PAUSED="paused";
	Event.STOPPED="stopped";
	Event.START="start";
	Event.END="end";
	return Event;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/events/EventDispatcher.as=======199.999988/199.999988
/**
*<code>EventDispatcher</code> 类是可调度事件的所有类的基类。
*/
//class laya.events.EventDispatcher
var EventDispatcher=(function(){
	var EventHandler;
	function EventDispatcher(){
		/**@private */
		this._events=null;
		Object.defineProperty(this,"_events",{enumerable:false});
	}

	__class(EventDispatcher,'laya.events.EventDispatcher');
	var __proto=EventDispatcher.prototype;
	/**
	*检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。
	*@param type 事件的类型。
	*@return 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
	*/
	__proto.hasListener=function(type){
		var listener=this._events && this._events[type];
		return !!listener;
	}

	/**
	*派发事件。
	*@param type 事件类型。
	*@param data 回调数据。
	*<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
	*@return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
	*/
	__proto.event=function(type,data){
		if (!this._events || !this._events[type])return false;
		var listeners=this._events[type];
		if (listeners.run){
			if (listeners.once)delete this._events[type];
			data !=null ? listeners.runWith(data):listeners.run();
			}else {
			for (var i=0,n=listeners.length;i < n;i++){
				var listener=listeners[i];
				if (listener){
					(data !=null)? listener.runWith(data):listener.run();
				}
				if (!listener || listener.once){
					listeners.splice(i,1);
					i--;
					n--;
				}
			}
			if (listeners.length===0 && this._events)delete this._events[type];
		}
		return true;
	}

	/**
	*使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
	*@param type 事件的类型。
	*@param caller 事件侦听函数的执行域。
	*@param listener 事件侦听函数。
	*@param args 事件侦听函数的回调参数。
	*@return 此 EventDispatcher 对象。
	*/
	__proto.on=function(type,caller,listener,args){
		return this._createListener(type,caller,listener,args,false);
	}

	/**
	*使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
	*@param type 事件的类型。
	*@param caller 事件侦听函数的执行域。
	*@param listener 事件侦听函数。
	*@param args 事件侦听函数的回调参数。
	*@return 此 EventDispatcher 对象。
	*/
	__proto.once=function(type,caller,listener,args){
		return this._createListener(type,caller,listener,args,true);
	}

	/**@private */
	__proto._createListener=function(type,caller,listener,args,once,offBefore){
		(offBefore===void 0)&& (offBefore=true);
		offBefore && this.off(type,caller,listener,once);
		var handler=EventHandler.create(caller || this,listener,args,once);
		this._events || (this._events={});
		var events=this._events;
		if (!events[type])events[type]=handler;
		else {
			if (!events[type].run)events[type].push(handler);
			else events[type]=[events[type],handler];
		}
		return this;
	}

	/**
	*从 EventDispatcher 对象中删除侦听器。
	*@param type 事件的类型。
	*@param caller 事件侦听函数的执行域。
	*@param listener 事件侦听函数。
	*@param onceOnly 如果值为 true ,则只移除通过 once 方法添加的侦听器。
	*@return 此 EventDispatcher 对象。
	*/
	__proto.off=function(type,caller,listener,onceOnly){
		(onceOnly===void 0)&& (onceOnly=false);
		if (!this._events || !this._events[type])return this;
		var listeners=this._events[type];
		if (listener !=null){
			if (listeners.run){
				if ((!caller || listeners.caller===caller)&& listeners.method===listener && (!onceOnly || listeners.once)){
					delete this._events[type];
					listeners.recover();
				}
				}else {
				var count=0;
				for (var i=0,n=listeners.length;i < n;i++){
					var item=listeners[i];
					if (item && (!caller || item.caller===caller)&& item.method===listener && (!onceOnly || item.once)){
						count++;
						listeners[i]=null;
						item.recover();
					}
				}
				if (count===n)delete this._events[type];
			}
		}
		return this;
	}

	/**
	*从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
	*@param type 事件类型，如果值为 null，则移除本对象所有类型的侦听器。
	*@return 此 EventDispatcher 对象。
	*/
	__proto.offAll=function(type){
		var events=this._events;
		if (!events)return this;
		if (type){
			this._recoverHandlers(events[type]);
			delete events[type];
			}else {
			for (var name in events){
				this._recoverHandlers(events[name]);
			}
			this._events=null;
		}
		return this;
	}

	__proto._recoverHandlers=function(arr){
		if (!arr)return;
		if (arr.run){
			arr.recover();
			}else {
			for (var i=arr.length-1;i >-1;i--){
				if (arr[i]){
					arr[i].recover();
					arr[i]=null;
				}
			}
		}
	}

	EventDispatcher.__init$=function(){
		/**@private */
		//class EventHandler extends laya.utils.Handler
		EventHandler=(function(_super){
			function EventHandler(caller,method,args,once){
				EventHandler.__super.call(this,caller,method,args,once);
			}
			__class(EventHandler,'',_super);
			var __proto=EventHandler.prototype;
			__proto.recover=function(){
				if (this._id > 0){
					this._id=0;
					EventHandler._pool.push(this.clear());
				}
			}
			EventHandler.create=function(caller,method,args,once){
				(once===void 0)&& (once=true);
				if (EventHandler._pool.length)return EventHandler._pool.pop().setTo(caller,method,args,once);
				return new EventHandler(caller,method,args,once);
			}
			EventHandler._pool=[];
			return EventHandler;
		})(Handler)
	}

	return EventDispatcher;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/utils/Handler.as=======199.999986/199.999986
/**
*<p><code>Handler</code> 是事件处理器类。</p>
*<p>推荐使用 Handler.create()方法从对象池创建，减少对象创建消耗。</p>
*<p><b>注意：</b>由于鼠标事件也用本对象池，不正确的回收及调用，可能会影响鼠标事件的执行。</p>
*/
//class laya.utils.Handler
var Handler=(function(){
	function Handler(caller,method,args,once){
		/**执行域(this)。*/
		//this.caller=null;
		/**处理方法。*/
		//this.method=null;
		/**参数。*/
		//this.args=null;
		/**表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
		this.once=false;
		/**@private */
		this._id=0;
		(once===void 0)&& (once=false);
		this.setTo(caller,method,args,once);
	}

	__class(Handler,'laya.utils.Handler');
	var __proto=Handler.prototype;
	/**
	*设置此对象的指定属性值。
	*@param caller 执行域(this)。
	*@param method 回调方法。
	*@param args 携带的参数。
	*@param once 是否只执行一次，如果为true，执行后执行recover()进行回收。
	*@return 返回 handler 本身。
	*/
	__proto.setTo=function(caller,method,args,once){
		this._id=Handler._gid++;
		this.caller=caller;
		this.method=method;
		this.args=args;
		this.once=once;
		return this;
	}

	/**
	*执行处理器。
	*/
	__proto.run=function(){
		if (this.method==null)return null;
		var id=this._id;
		var result=this.method.apply(this.caller,this.args);
		this._id===id && this.once && this.recover();
		return result;
	}

	/**
	*执行处理器，携带额外数据。
	*@param data 附加的回调数据，可以是单数据或者Array(作为多参)。
	*/
	__proto.runWith=function(data){
		if (this.method==null)return null;
		var id=this._id;
		if (data==null)
			var result=this.method.apply(this.caller,this.args);
		else if (!this.args && !data.unshift)result=this.method.call(this.caller,data);
		else if (this.args)result=this.method.apply(this.caller,this.args.concat(data));
		else result=this.method.apply(this.caller,data);
		this._id===id && this.once && this.recover();
		return result;
	}

	/**
	*清理对象引用。
	*/
	__proto.clear=function(){
		this.caller=null;
		this.method=null;
		this.args=null;
		return this;
	}

	/**
	*清理并回收到 Handler 对象池内。
	*/
	__proto.recover=function(){
		if (this._id > 0){
			this._id=0;
			Handler._pool.push(this.clear());
		}
	}

	Handler.create=function(caller,method,args,once){
		(once===void 0)&& (once=true);
		if (Handler._pool.length)return Handler._pool.pop().setTo(caller,method,args,once);
		return new Handler(caller,method,args,once);
	}

	Handler._pool=[];
	Handler._gid=1;
	return Handler;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/net/URL.as=======199.999979/199.999979
/**
*<p> <code>URL</code> 类用于定义地址信息。</p>
*/
//class laya.net.URL
var URL=(function(){
	function URL(url){
		/**@private */
		this._url=null;
		/**@private */
		this._path=null;
		this._url=URL.formatURL(url);
		this._path=URL.getPath(url);
	}

	__class(URL,'laya.net.URL');
	var __proto=URL.prototype;
	/**地址的路径。*/
	__getset(0,__proto,'path',function(){
		return this._path;
	});

	/**格式化后的地址。*/
	__getset(0,__proto,'url',function(){
		return this._url;
	});

	URL.formatURL=function(url,base){
		if (!url)return "null path";
		if (url.indexOf(":")> 0)return url;
		if (URL.customFormat !=null)url=URL.customFormat(url,base);
		var char1=url.charAt(0);
		if (char1==="."){
			return URL.formatRelativePath((base || URL.basePath)+url);
			}else if (char1==='~'){
			return URL.rootPath+url.substring(1);
			}else if (char1==="d"){
			if (url.indexOf("data:image")===0)return url;
			}else if (char1==="/"){
			return url;
		}
		return (base || URL.basePath)+url;
	}

	URL.formatRelativePath=function(value){
		var parts=value.split("/");
		for (var i=0,len=parts.length;i < len;i++){
			if (parts[i]=='..'){
				parts.splice(i-1,2);
				i-=2;
			}
		}
		return parts.join('/');
	}

	URL.isAbsolute=function(url){
		return url.indexOf(":")> 0 || url.charAt(0)=='/';
	}

	URL.getPath=function(url){
		var ofs=url.lastIndexOf('/');
		return ofs > 0 ? url.substr(0,ofs+1):"";
	}

	URL.getFileName=function(url){
		var ofs=url.lastIndexOf('/');
		return ofs > 0 ? url.substr(ofs+1):url;
	}

	URL.version={};
	URL.basePath="";
	URL.rootPath="";
	URL.customFormat=function(url){
		var newUrl=URL.version[url];
		return url;
	}

	return URL;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/net/Platform.as=======199.999976/199.999976
/**
*Platform负责游戏服务器与平台通信。
*Platform的子类可以
*
*-重写connectSucceeded处理连接上平台
*-重写connectFailed处理连接平台失败
*-重写listenMessages侦听来自平台的消息，会被connectSucceeded调用
*
*在listenMessages里我们已经监听了“创建房间“和”用户进入“两个消息。通过
*
*-重写onCreateRoom修改创建房间逻辑
*-重写onUserIntoRoom修改用户进入房间的逻辑
*
*@author survivor
*/
//class laya.server.net.Platform
var Platform=(function(){
	function Platform(){
		this.l8Client=null;
		this.options=new PlatformOptions();
		this.fs=require('fs');
		this.path=require('path');
		var _l8ClientClz=require("./conn/index.js").Laya8Client;
		this.l8Client=new _l8ClientClz();
	}

	__class(Platform,'laya.server.net.Platform');
	var __proto=Platform.prototype;
	/**
	*非debug模式下被GameServer调用
	*/
	__proto.connectToPlatform=function(){
		this.l8Client.open(
		this.options.getCenterServerURL(),
		this.options.getServerID(),
		Utils.bind(this.onL8ClientRespond,this));
		console.log("Master Server URL: "+this.options.getCenterServerURL());
		console.log("Server ID: "+this.options.getServerID());
	}

	__proto.onL8ClientRespond=function(err,data){
		if(err)
			this.connectFailed(err);
		else
		this.connectSucceeded(data);
	}

	/**
	*重写connectFailed处理连接平台失败
	*
	*@param err error
	*/
	__proto.connectFailed=function(err){
		console.log(err);
	}

	/**
	*重写connectSucceeded处理连接上平台
	*
	*@param data 如 {id:50101,idc:1,ip:"10.10.20.62",link:null,port:9001,type:5}
	*/
	__proto.connectSucceeded=function(data){
		console.log("l8 client connected.");
		SocketServer.options.port=data.port;
		SocketServer.runServer();
		this.listenMessages();
	}

	/**
	*重写listenMessages侦听来自平台的消息，会被connectSucceeded调用
	*/
	__proto.listenMessages=function(){
		this.l8Client.on(Platform.CREATE_ROOM,Utils.bind(this.onCreateRoom,this));
		this.l8Client.on(Platform.USER_INTOROOM,Utils.bind(this.onUserIntoRoom,this));
	}

	/**
	*重写onCreateRoom修改创建房间逻辑
	*
	*@param msg 消息类型为Platform静态常量
	*@param data 如{type:"1",roomid:"15",roomname:"AUTO",force:"0",linkId:40001}
	*/
	__proto.onCreateRoom=function(msg,data){
		console.log("[onCreateRoom]",msg,data);
		var roomid=parseInt(data.roomid);
		GameServer.I.addRoom(roomid,data.roomname,parseInt(data.type));
		var d={};
		d.url=Platform.CREATE_ROOM_OK;
		d.params={"roomid":roomid,"ret":0};
		this.send(d,data.linkId);
	}

	/**
	*重写onUserIntoRoom修改用户进入房间的逻辑
	*
	*@param msg 消息类型为Platform静态常量
	*@param data 如{aip:""avtor:"1"gender:"0"grade:"1"key:"64438"level:"1"linkId:40001memberendtime:"0"money:"0"nip:""nkname:"★~★剑圣"referee:"0"roomid:"15"spid:"308"team:"0"userid:"1074278293"username:"5a84a8b2e6a29ad9bf761bdd14a7ac1d" }
	*/
	__proto.onUserIntoRoom=function(msg,data){
		var roomId=parseInt(data.roomid);
		var userId=parseInt(data.userid);
		var key=parseInt(data.key);
		GameServer.I.userKeys[userId]={roomId:roomId,key:data.key};
	}

	/**
	*向平台发送数据
	*@param data
	*@param linkId
	*
	*/
	__proto.send=function(data,linkId){
		(linkId===void 0)&& (linkId=0);
		this.l8Client.send(data,linkId);
	}

	__proto.getGameID=function(){
		return this._l8Client.gameId;
	}

	__proto.close=function(){
		this.l8Client.close();
	}

	/**
	*检查当前实例是否已经连接到Master Server
	*
	*@return
	*/
	__proto.isConnected=function(){
		return this.l8Client.getIsConnected();
	}

	Platform.I=null;
	Platform.CREATE_ROOM_OK="game.created";
	Platform.ROOM_START="game.restart";
	Platform.USER_JOIN_GAME="game.join";
	Platform.USER_LEAVE_GAME="game.leave";
	Platform.DESTROY_GAME="game.destroy";
	Platform.START_GAME="game.restart";
	Platform.CREATE_ROOM="room.create";
	Platform.USER_INTOROOM="room.usrin";
	return Platform;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/net/PlatformOptions.as=======199.999975/199.999975
/**
*平台器选项
*
*@author survivor
*
*/
//class laya.server.net.PlatformOptions
var PlatformOptions=(function(){
	function PlatformOptions(){
		/**true连接广域网，false连接局域网 */
		this.connectToWAN=false;
		/**局域网主服务器地址 */
		this.platformURL_LAN=null;
		/**广域网主服务器地址 */
		this.platformURL_WAN=null;
		/**局域网服务器id */
		this.serverID_LAN=0;
		/**广域网服务器id */
		this.serverID_WAN=0;
	}

	__class(PlatformOptions,'laya.server.net.PlatformOptions');
	var __proto=PlatformOptions.prototype;
	/**
	*根据 <code>connectToWAN</code> 获取主服务器地址
	*@return 主服务器地址
	*/
	__proto.getCenterServerURL=function(){
		return this.connectToWAN ? this.platformURL_WAN :this.platformURL_LAN;
	}

	/**
	*根据 <code>connectToWAN</code> 获取服务器id
	*@return 服务器id
	*/
	__proto.getServerID=function(){
		return this.connectToWAN ? this.serverID_WAN :this.serverID_LAN;
	}

	return PlatformOptions;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/net/SocketServer.as=======199.999974/199.999974
/**
*在子类的构造函数中设置options。
*除了options，还有一些公开方法可以设置socket服务器。
*
*更多参见：
*https://github.com/websockets/ws/blob/master/doc/ws.md
*
*@author survivor
*/
//class laya.server.net.SocketServer
var SocketServer=(function(){
	function SocketServer(){
		//////////////////////
		this.server=null;
	}

	__class(SocketServer,'laya.server.net.SocketServer');
	var __proto=SocketServer.prototype;
	/**
	*使用options的选项创建服务器
	*/
	__proto.start=function(){
		var modual=(process.argv[0].indexOf("electron")!=-1)? "ws":"uws";
		var WebSocket=require(modual);
		if(GameServer.debug)
			SocketServer.options.port=SocketServer.options.debugPort;
		this.server=new WebSocket.Server(SocketServer.options);
		this.server.on("connection",Utils.bind(this.clientConnected,this));
		console.log(SocketServer.options.host || 'localhost'+' listen on '+SocketServer.options.port);
	}

	/**
	*客户端连接到服务器时触发。
	*@param channel 客户端Socket引用
	*/
	__proto.clientConnected=function(channel){
		CSCommunicator.I.watchClient(channel);
	}

	/**
	*监听事件。事件侦听器的this指向socket。
	*
	*@param eventName 事件名称
	*@param callback 事件侦听器的this指向socket
	*
	*/
	__proto.on=function(eventName,callback){
		this.server.on(eventName,callback);
	}

	/**
	*关闭服务，并且终止所有客户端。完成时调用callback
	*
	*参见：
	*https://github.com/websockets/ws/blob/master/doc/ws.md
	*
	*@param callback
	*/
	__proto.close=function(callback){
		this.server.close(callback);
	}

	/**
	*处理HTTP升级请求。当HTTP server在内部创建或者通过server选项传入时，该方法会被自动调用。如果是"noServer"模式，该方法需要手动调用。
	*
	*参见：
	*https://github.com/websockets/ws/blob/master/doc/ws.md
	*
	*@param request http.IncomingMessage，客户端HTTP GET请求
	*@param socket net.Socket，客户端和服务端间的网络socket
	*@param head Buffer，第一个升级流的数据包
	*@param callback 如果升级成功，callback会被调用，并带有WebSocket对象作为参数
	*
	*/
	__proto.handleUpgrade=function(request,socket,head,callback){
		this.server.handleUpgrade(request,socket,head,callback);
	}

	/**
	*是否一个给定的请求应该由该服务器处理。
	*默认情况下这个方法验证请求的路径名，匹配提供的对path选项。
	*
	*参见：
	*https://github.com/websockets/ws/blob/master/doc/ws.md
	*
	*@param request http.IncomingMessage，客户端HTTP GET请求
	*@return true为接受握手
	*/
	__proto.shouldHandle=function(request){
		return this.server.shouldHandle(request);
	}

	/**
	*保存所有已连接的客户端。仅在options.clientTracking为true时有效
	*/
	__getset(0,__proto,'clients',function(){
		return this.server.clients;
	});

	SocketServer.runServer=function(){
		SocketServer.I=new SocketServer.runTimeClass();
		SocketServer.I.start();
	}

	SocketServer.runTimeClass=null;
	SocketServer.I=null;
	SocketServer.CONNECTION="connection";
	SocketServer.ERROR="error";
	SocketServer.HEADERS="headers";
	SocketServer.LISTENING="listening";
	__static(SocketServer,
	['options',function(){return this.options=new SocketServerOptions();}
	]);
	return SocketServer;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/net/SocketServerOptions.as=======199.999973/199.999973
/**
*详情参见：
*https://github.com/websockets/ws/blob/master/doc/ws.md
*@author survivor
*/
//class laya.server.net.SocketServerOptions
var SocketServerOptions=(function(){
	function SocketServerOptions(){
		/**server绑定的主机名 */
		this.host=null;
		/**server绑定的端口号，用户不需要设置 */
		this.port=0;
		this.debugPort=9000;
		/**等待连接的队列的最大长度。 */
		this.backlog=0;
		/**
		*http.Server|https.Server
		*<p>预先创建的Node.js HTTP server</p>
		*/
		this.server=null;
		/**用来验证传入的连接的函数 */
		this.verifyClient=null;
		/**用来处理WebSocket subprotocols */
		this.handleProtocols=null;
		/**只接受匹配该路径的连接 */
		this.path=null;
		/**启用no server模式 */
		this.noServer=false;
		/**是否追踪用户 */
		this.clientTracking=false;
		/**启用permessage-deflate */
		this.perMessageDeflate=null;
		/**最大允许的消息字节数 */
		this.maxPayload=0;
	}

	__class(SocketServerOptions,'laya.server.net.SocketServerOptions');
	return SocketServerOptions;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/rpg/PlayerBase.as=======199.999972/199.999972
/**
*玩家模块就是一个信息集合体，本身不包含逻辑处理。逻辑处理被组合进PlayerBase子类。比如使用QuadTree进行碰撞处理，PlayerBase的子类会组合一个Rect。
*<p>
*PlayerBase的实例不需要手动创建，在CSCommunicator中，客户端连接和断开时，会自动被对象池分配和回收。
*</p>
*/
//class laya.server.rpg.PlayerBase
var PlayerBase=(function(){
	function PlayerBase(){
		this.id=0;
		this.room=null;
		this.socket=null;
		this.table=null;
	}

	__class(PlayerBase,'laya.server.rpg.PlayerBase');
	var __proto=PlayerBase.prototype;
	Laya.imps(__proto,{"laya.server.core.IRecoverable":true})
	__proto.afterRecover=function(){
		this.id=0;
		this.room=null;
		this.socket=null;
	}

	__proto.beforeReuse=function(){}
	__proto.send=function(message){
		PlayerBase.byte.clear();
		MessageUtils.writeMessageToByte(PlayerBase.byte,message);
		this.socket.send(PlayerBase.byte.buffer);
	}

	__static(PlayerBase,
	['byte',function(){return this.byte=new Byte();}
	]);
	return PlayerBase;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/utils/Byte.as=======199.999970/199.999970
/**
*<p> <code>Byte</code> 类提供用于优化读取、写入以及处理二进制数据的方法和属性。</p>
*<p><b>注意：</b> <code>Byte</code> 类适用于需要在字节层访问数据的高级开发人员。</p>
*/
//class laya.utils.Byte
var Byte=(function(){
	function Byte(data){
		/**
		*@private
		*是否为小端数据。
		*/
		this._xd_=true;
		this._allocated_=8;
		/**
		*@private
		*原始数据。
		*/
		//this._d_=null;
		/**
		*@private
		*DataView
		*/
		//this._u8d_=null;
		/**@private */
		this._pos_=0;
		/**@private */
		this._length=0;
		if (data){
			this._u8d_=new Uint8Array(data);
			this._d_=new DataView(this._u8d_.buffer);
			this._length=this._d_.byteLength;
			}else {
			this.___resizeBuffer(this._allocated_);
		}
	}

	__class(Byte,'laya.utils.Byte');
	var __proto=Byte.prototype;
	/**@private */
	__proto.___resizeBuffer=function(len){
		try {
			var newByteView=new Uint8Array(len);
			if (this._u8d_ !=null){
				if (this._u8d_.length <=len)newByteView.set(this._u8d_);
				else newByteView.set(this._u8d_.subarray(0,len));
			}
			this._u8d_=newByteView;
			this._d_=new DataView(newByteView.buffer);
			}catch (err){
			throw "___resizeBuffer err:"+len;
		}
	}

	/**
	*<p>常用于解析固定格式的字节流。</p>
	*<p>先从字节流的当前字节偏移位置处读取一个 <code>Uint16</code> 值，然后以此值为长度，读取此长度的字符串。</p>
	*@return 读取的字符串。
	*/
	__proto.getString=function(){
		return this.rUTF(this.getUint16());
	}

	/**
	*从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Float32Array</code> 对象并返回此对象。
	*@param start 开始位置。
	*@param len 需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
	*@return 读取的 Float32Array 对象。
	*/
	__proto.getFloat32Array=function(start,len){
		var end=start+len;
		end=(end > this._length)? this._length :end;
		var v=new Float32Array(this._d_.buffer.slice(start,end));
		this._pos_=end;
		return v;
	}

	/**
	*从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Uint8Array</code> 对象并返回此对象。
	*@param start 开始位置。
	*@param len 需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
	*@return 读取的 Uint8Array 对象。
	*/
	__proto.getUint8Array=function(start,len){
		var end=start+len;
		end=(end > this._length)? this._length :end;
		var v=new Uint8Array(this._d_.buffer.slice(start,end));
		this._pos_=end;
		return v;
	}

	/**
	*从字节流中 <code>start</code> 参数指定的位置开始，读取 <code>len</code> 参数指定的字节数的数据，用于创建一个 <code>Int16Array</code> 对象并返回此对象。
	*@param start 开始读取的字节偏移量位置。
	*@param len 需要读取的字节长度。如果要读取的长度超过可读取范围，则只返回可读范围内的值。
	*@return 读取的 Uint8Array 对象。
	*/
	__proto.getInt16Array=function(start,len){
		var end=start+len;
		end=(end > this._length)? this._length :end;
		var v=new Int16Array(this._d_.buffer.slice(start,end));
		this._pos_=end;
		return v;
	}

	/**
	*从字节流的当前字节偏移位置处读取一个 IEEE 754 单精度（32 位）浮点数。
	*@return 单精度（32 位）浮点数。
	*/
	__proto.getFloat32=function(){
		if (this._pos_+4 > this._length)throw "getFloat32 error - Out of bounds";
		var v=this._d_.getFloat32(this._pos_,this._xd_);
		this._pos_+=4;
		return v;
	}

	/**
	*从字节流的当前字节偏移量位置处读取一个 IEEE 754 双精度（64 位）浮点数。
	*@return 双精度（64 位）浮点数。
	*/
	__proto.getFloat64=function(){
		if (this._pos_+8 > this._length)throw "getFloat64 error - Out of bounds";
		var v=this._d_.getFloat64(this._pos_,this._xd_);
		this._pos_+=8;
		return v;
	}

	/**
	*在字节流的当前字节偏移量位置处写入一个 IEEE 754 单精度（32 位）浮点数。
	*@param value 单精度（32 位）浮点数。
	*/
	__proto.writeFloat32=function(value){
		this.ensureWrite(this._pos_+4);
		this._d_.setFloat32(this._pos_,value,this._xd_);
		this._pos_+=4;
	}

	/**
	*在字节流的当前字节偏移量位置处写入一个 IEEE 754 双精度（64 位）浮点数。
	*@param value 双精度（64 位）浮点数。
	*/
	__proto.writeFloat64=function(value){
		this.ensureWrite(this._pos_+8);
		this._d_.setFloat64(this._pos_,value,this._xd_);
		this._pos_+=8;
	}

	/**
	*从字节流的当前字节偏移量位置处读取一个 Int32 值。
	*@return Int32 值。
	*/
	__proto.getInt32=function(){
		if (this._pos_+4 > this._length)throw "getInt32 error - Out of bounds";
		var float=this._d_.getInt32(this._pos_,this._xd_);
		this._pos_+=4;
		return float;
	}

	/**
	*从字节流的当前字节偏移量位置处读取一个 Uint32 值。
	*@return Uint32 值。
	*/
	__proto.getUint32=function(){
		if (this._pos_+4 > this._length)throw "getUint32 error - Out of bounds";
		var v=this._d_.getUint32(this._pos_,this._xd_);
		this._pos_+=4;
		return v;
	}

	/**
	*在字节流的当前字节偏移量位置处写入指定的 Int32 值。
	*@param value 需要写入的 Int32 值。
	*/
	__proto.writeInt32=function(value){
		this.ensureWrite(this._pos_+4);
		this._d_.setInt32(this._pos_,value,this._xd_);
		this._pos_+=4;
	}

	/**
	*在字节流的当前字节偏移量位置处写入 Uint32 值。
	*@param value 需要写入的 Uint32 值。
	*/
	__proto.writeUint32=function(value){
		this.ensureWrite(this._pos_+4);
		this._d_.setUint32(this._pos_,value,this._xd_);
		this._pos_+=4;
	}

	/**
	*从字节流的当前字节偏移量位置处读取一个 Int16 值。
	*@return Int16 值。
	*/
	__proto.getInt16=function(){
		if (this._pos_+2 > this._length)throw "getInt16 error - Out of bounds";
		var us=this._d_.getInt16(this._pos_,this._xd_);
		this._pos_+=2;
		return us;
	}

	/**
	*从字节流的当前字节偏移量位置处读取一个 Uint16 值。
	*@return Uint16 值。
	*/
	__proto.getUint16=function(){
		if (this._pos_+2 > this._length)throw "getUint16 error - Out of bounds";
		var us=this._d_.getUint16(this._pos_,this._xd_);
		this._pos_+=2;
		return us;
	}

	/**
	*在字节流的当前字节偏移量位置处写入指定的 Uint16 值。
	*@param value 需要写入的Uint16 值。
	*/
	__proto.writeUint16=function(value){
		this.ensureWrite(this._pos_+2);
		this._d_.setUint16(this._pos_,value,this._xd_);
		this._pos_+=2;
	}

	/**
	*在字节流的当前字节偏移量位置处写入指定的 Int16 值。
	*@param value 需要写入的 Int16 值。
	*/
	__proto.writeInt16=function(value){
		this.ensureWrite(this._pos_+2);
		this._d_.setInt16(this._pos_,value,this._xd_);
		this._pos_+=2;
	}

	/**
	*从字节流的当前字节偏移量位置处读取一个 Uint8 值。
	*@return Uint8 值。
	*/
	__proto.getUint8=function(){
		if (this._pos_+1 > this._length)throw "getUint8 error - Out of bounds";
		return this._d_.getUint8(this._pos_++);
	}

	/**
	*在字节流的当前字节偏移量位置处写入指定的 Uint8 值。
	*@param value 需要写入的 Uint8 值。
	*/
	__proto.writeUint8=function(value){
		this.ensureWrite(this._pos_+1);
		this._d_.setUint8(this._pos_,value);
		this._pos_++;
	}

	/**
	*@private
	*从字节流的指定字节偏移量位置处读取一个 Uint8 值。
	*@param pos 字节读取位置。
	*@return Uint8 值。
	*/
	__proto._getUInt8=function(pos){
		return this._d_.getUint8(pos);
	}

	/**
	*@private
	*从字节流的指定字节偏移量位置处读取一个 Uint16 值。
	*@param pos 字节读取位置。
	*@return Uint16 值。
	*/
	__proto._getUint16=function(pos){
		return this._d_.getUint16(pos,this._xd_);
	}

	/**
	*@private
	*读取指定长度的 UTF 型字符串。
	*@param len 需要读取的长度。
	*@return 读取的字符串。
	*/
	__proto.rUTF=function(len){
		var v="",max=this._pos_+len,c=0,c2=0,c3=0,f=String.fromCharCode;
		var u=this._u8d_,i=0;
		while (this._pos_ < max){
			c=u[this._pos_++];
			if (c < 0x80){
				if (c !=0){
					v+=f(c);
				}
				}else if (c < 0xE0){
				v+=f(((c & 0x3F)<< 6)| (u[this._pos_++] & 0x7F));
				}else if (c < 0xF0){
				c2=u[this._pos_++];
				v+=f(((c & 0x1F)<< 12)| ((c2 & 0x7F)<< 6)| (u[this._pos_++] & 0x7F));
				}else {
				c2=u[this._pos_++];
				c3=u[this._pos_++];
				v+=f(((c & 0x0F)<< 18)| ((c2 & 0x7F)<< 12)| ((c3 << 6)& 0x7F)| (u[this._pos_++] & 0x7F));
			}
			i++;
		}
		return v;
	}

	/**
	*@private
	*读取 <code>len</code> 参数指定的长度的字符串。
	*@param len 要读取的字符串的长度。
	*@return 指定长度的字符串。
	*/
	__proto.getCustomString=function(len){
		var v="",ulen=0,c=0,c2=0,f=String.fromCharCode;
		var u=this._u8d_,i=0;
		while (len > 0){
			c=u[this._pos_];
			if (c < 0x80){
				v+=f(c);
				this._pos_++;
				len--;
				}else {
				ulen=c-0x80;
				this._pos_++;
				len-=ulen;
				while (ulen > 0){
					c=u[this._pos_++];
					c2=u[this._pos_++];
					v+=f((c2 << 8)| c);
					ulen--;
				}
			}
		}
		return v;
	}

	/**
	*清除字节数组的内容，并将 length 和 pos 属性重置为 0。调用此方法将释放 Byte 实例占用的内存。
	*/
	__proto.clear=function(){
		this._pos_=0;
		this.length=0;
	}

	/**
	*@private
	*获取此对象的 ArrayBuffer 引用。
	*@return
	*/
	__proto.__getBuffer=function(){
		return this._d_.buffer;
	}

	/**
	*<p>将 UTF-8 字符串写入字节流。类似于 writeUTF()方法，但 writeUTFBytes()不使用 16 位长度的字为字符串添加前缀。</p>
	*<p>对应的读取方法为： getUTFBytes 。</p>
	*@param value 要写入的字符串。
	*/
	__proto.writeUTFBytes=function(value){
		value=value+"";
		for (var i=0,sz=value.length;i < sz;i++){
			var c=value.charCodeAt(i);
			if (c <=0x7F){
				this.writeByte(c);
				}else if (c <=0x7FF){
				this.ensureWrite(this._pos_+2);
				this._u8d_.set([0xC0 | (c >> 6),0x80 | (c & 0x3F)],this._pos_);
				this._pos_+=2;
				}else if (c <=0xFFFF){
				this.ensureWrite(this._pos_+3);
				this._u8d_.set([0xE0 | (c >> 12),0x80 | ((c >> 6)& 0x3F),0x80 | (c & 0x3F)],this._pos_);
				this._pos_+=3;
				}else {
				this.ensureWrite(this._pos_+4);
				this._u8d_.set([0xF0 | (c >> 18),0x80 | ((c >> 12)& 0x3F),0x80 | ((c >> 6)& 0x3F),0x80 | (c & 0x3F)],this._pos_);
				this._pos_+=4;
			}
		}
	}

	/**
	*<p>将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节。</p>
	*<p>对应的读取方法为： getUTFString 。</p>
	*@param value 要写入的字符串值。
	*/
	__proto.writeUTFString=function(value){
		var tPos=this.pos;
		this.writeUint16(1);
		this.writeUTFBytes(value);
		var dPos=this.pos-tPos-2;
		if (dPos >=65536){
			throw "writeUTFString byte len more than 65536";
		}
		this._d_.setUint16(tPos,dPos,this._xd_);
	}

	/**
	*@private
	*读取 UTF-8 字符串。
	*@return 读取的字符串。
	*/
	__proto.readUTFString=function(){
		return this.readUTFBytes(this.getUint16());
	}

	/**
	*<p>从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是一个无符号的短整型（以此字节表示要读取的长度）。</p>
	*<p>对应的写入方法为： writeUTFString 。</p>
	*@return 读取的字符串。
	*/
	__proto.getUTFString=function(){
		return this.readUTFString();
	}

	/**
	*@private
	*读字符串，必须是 writeUTFBytes 方法写入的字符串。
	*@param len 要读的buffer长度，默认将读取缓冲区全部数据。
	*@return 读取的字符串。
	*/
	__proto.readUTFBytes=function(len){
		(len===void 0)&& (len=-1);
		if (len==0)return "";
		var lastBytes=this.bytesAvailable;
		if (len > lastBytes)throw "readUTFBytes error - Out of bounds";
		len=len > 0 ? len :lastBytes;
		return this.rUTF(len);
	}

	/**
	*<p>从字节流中读取一个由 length 参数指定的长度的 UTF-8 字节序列，并返回一个字符串。</p>
	*<p>一般读取的是由 writeUTFBytes 方法写入的字符串。</p>
	*@param len 要读的buffer长度，默认将读取缓冲区全部数据。
	*@return 读取的字符串。
	*/
	__proto.getUTFBytes=function(len){
		(len===void 0)&& (len=-1);
		return this.readUTFBytes(len);
	}

	/**
	*<p>在字节流中写入一个字节。</p>
	*<p>使用参数的低 8 位。忽略高 24 位。</p>
	*@param value
	*/
	__proto.writeByte=function(value){
		this.ensureWrite(this._pos_+1);
		this._d_.setInt8(this._pos_,value);
		this._pos_+=1;
	}

	/**
	*@private
	*从字节流中读取带符号的字节。
	*/
	__proto.readByte=function(){
		if (this._pos_+1 > this._length)throw "readByte error - Out of bounds";
		return this._d_.getInt8(this._pos_++);
	}

	/**
	*<p>从字节流中读取带符号的字节。</p>
	*<p>返回值的范围是从-128 到 127。</p>
	*@return 介于-128 和 127 之间的整数。
	*/
	__proto.getByte=function(){
		return this.readByte();
	}

	/**
	*<p>保证该字节流的可用长度不小于 <code>lengthToEnsure</code> 参数指定的值。</p>
	*@param lengthToEnsure 指定的长度。
	*/
	__proto.ensureWrite=function(lengthToEnsure){
		if (this._length < lengthToEnsure)this._length=lengthToEnsure;
		if (this._allocated_ < lengthToEnsure)this.length=lengthToEnsure;
	}

	/**
	*<p>将指定 arraybuffer 对象中的以 offset 为起始偏移量， length 为长度的字节序列写入字节流。</p>
	*<p>如果省略 length 参数，则使用默认长度 0，该方法将从 offset 开始写入整个缓冲区；如果还省略了 offset 参数，则写入整个缓冲区。</p>
	*<p>如果 offset 或 length 小于0，本函数将抛出异常。</p>
	*$NEXTBIG 由于没有判断length和arraybuffer的合法性，当开发者填写了错误的length值时，会导致写入多余的空白数据甚至内存溢出，为了避免影响开发者正在使用此方法的功能，下个重大版本会修复这些问题。
	*@param arraybuffer 需要写入的 Arraybuffer 对象。
	*@param offset Arraybuffer 对象的索引的偏移量（以字节为单位）
	*@param length 从 Arraybuffer 对象写入到 Byte 对象的长度（以字节为单位）
	*/
	__proto.writeArrayBuffer=function(arraybuffer,offset,length){
		(offset===void 0)&& (offset=0);
		(length===void 0)&& (length=0);
		if (offset < 0 || length < 0)throw "writeArrayBuffer error - Out of bounds";
		if (length==0)length=arraybuffer.byteLength-offset;
		this.ensureWrite(this._pos_+length);
		var uint8array=new Uint8Array(arraybuffer);
		this._u8d_.set(uint8array.subarray(offset,offset+length),this._pos_);
		this._pos_+=length;
	}

	/**
	*获取此对象的 ArrayBuffer 数据，数据只包含有效数据部分。
	*/
	__getset(0,__proto,'buffer',function(){
		var rstBuffer=this._d_.buffer;
		if (rstBuffer.byteLength==this.length)return rstBuffer;
		return rstBuffer.slice(0,this.length);
	});

	/**
	*<p> <code>Byte</code> 实例的字节序。取值为：<code>BIG_ENDIAN</code> 或 <code>BIG_ENDIAN</code> 。</p>
	*<p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。通过 <code>getSystemEndian</code> 可以获取当前系统的字节序。</p>
	*<p> <code>BIG_ENDIAN</code> ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。有时也称之为网络字节序。<br/>
	*<code>LITTLE_ENDIAN</code> ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。</p>
	*/
	__getset(0,__proto,'endian',function(){
		return this._xd_ ? "littleEndian" :"bigEndian";
		},function(endianStr){
		this._xd_=(endianStr=="littleEndian");
	});

	/**
	*<p> <code>Byte</code> 对象的长度（以字节为单位）。</p>
	*<p>如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧；如果将长度设置为小于当前长度的值，将会截断该字节数组。</p>
	*<p>如果要设置的长度大于当前已分配的内存空间的字节长度，则重新分配内存空间，大小为以下两者较大者：要设置的长度、当前已分配的长度的2倍，并将原有数据拷贝到新的内存空间中；如果要设置的长度小于当前已分配的内存空间的字节长度，也会重新分配内存空间，大小为要设置的长度，并将原有数据从头截断为要设置的长度存入新的内存空间中。</p>
	*/
	__getset(0,__proto,'length',function(){
		return this._length;
		},function(value){
		if (this._allocated_ < value)
			this.___resizeBuffer(this._allocated_=Math.floor(Math.max(value,this._allocated_ *2)));
		else if (this._allocated_ > value)
		this.___resizeBuffer(this._allocated_=value);
		this._length=value;
	});

	/**
	*移动或返回 Byte 对象的读写指针的当前位置（以字节为单位）。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
	*/
	__getset(0,__proto,'pos',function(){
		return this._pos_;
		},function(value){
		this._pos_=value;
	});

	/**
	*可从字节流的当前位置到末尾读取的数据的字节数。
	*/
	__getset(0,__proto,'bytesAvailable',function(){
		return this._length-this._pos_;
	});

	Byte.getSystemEndian=function(){
		if (!Byte._sysEndian){
			var buffer=new ArrayBuffer(2);
			new DataView(buffer).setInt16(0,256,true);
			Byte._sysEndian=(new Int16Array(buffer))[0]===256 ? "littleEndian" :"bigEndian";
		}
		return Byte._sysEndian;
	}

	Byte.BIG_ENDIAN="bigEndian";
	Byte.LITTLE_ENDIAN="littleEndian";
	Byte._sysEndian=null;
	return Byte;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/utils/ClassUtils.as=======199.999969/199.999969
/**
*<code>ClassUtils</code> 是一个类工具类。
*/
//class laya.utils.ClassUtils
var ClassUtils=(function(){
	function ClassUtils(){}
	__class(ClassUtils,'laya.utils.ClassUtils');
	ClassUtils.regClass=function(className,classDef){
		ClassUtils._classMap[className]=classDef;
	}

	ClassUtils.getRegClass=function(className){
		return ClassUtils._classMap[className];
	}

	ClassUtils.getInstance=function(className){
		var compClass=ClassUtils.getClass(className);
		if (compClass)
			return new compClass();
		else
		console.warn("[error] Undefined class:",className);
		return null;
	}

	ClassUtils._classMap={};
	ClassUtils.getClass=function(className){
		var classObject=ClassUtils._classMap[className] || className;
		if ((typeof classObject=='string'))
			return Laya["__classmap"][classObject];
		return classObject;
	}

	return ClassUtils;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/utils/Pool.as=======199.999967/199.999967
/**
*<code>Pool</code> 是对象池类，用于对象的存贮、重复使用。
*/
//class laya.utils.Pool
var Pool=(function(){
	function Pool(){}
	__class(Pool,'laya.utils.Pool');
	Pool.getPoolBySign=function(sign){
		return Pool._poolDic[sign] || (Pool._poolDic[sign]=[]);
	}

	Pool.clearBySign=function(sign){
		if (Pool._poolDic[sign])Pool._poolDic[sign].length=0;
	}

	Pool.recover=function(sign,item){
		if (item["__InPool"])return;
		item["__InPool"]=true;
		Pool.getPoolBySign(sign).push(item);
	}

	Pool.getItemByClass=function(sign,cls){
		var pool=Pool.getPoolBySign(sign);
		var rst=pool.length ? pool.pop():new cls();
		rst["__InPool"]=false;
		return rst;
	}

	Pool.getItemByCreateFun=function(sign,createFun){
		var pool=Pool.getPoolBySign(sign);
		var rst=pool.length ? pool.pop():createFun();
		rst["__InPool"]=false;
		return rst;
	}

	Pool.getItem=function(sign){
		var pool=Pool.getPoolBySign(sign);
		var rst=pool.length ? pool.pop():null;
		if (rst){
			rst["__InPool"]=false;
		}
		return rst;
	}

	Pool._poolDic={};
	Pool.InPoolSign="__InPool";
	return Pool;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/utils/Timer.as=======199.999966/199.999966
/**
*<code>Timer</code> 是时钟管理类。它是一个单例，可以通过 Laya.timer 访问。
*/
//class laya.utils.Timer
var Timer=(function(){
	var TimerHandler;
	function Timer(){
		/**两帧之间的时间间隔,单位毫秒。*/
		this._delta=0;
		/**时针缩放。*/
		this.scale=1;
		/**当前的帧数。*/
		this.currFrame=0;
		/**@private */
		this._mid=1;
		/**@private */
		this._map=[];
		/**@private */
		this._laters=[];
		/**@private */
		this._handlers=[];
		/**@private */
		this._temp=[];
		/**@private */
		this._count=0;
		this.currTimer=Date.now();
		this._lastTimer=Date.now();
		Laya.timer && Laya.timer.frameLoop(1,this,this._update);
	}

	__class(Timer,'laya.utils.Timer');
	var __proto=Timer.prototype;
	/**
	*@private
	*帧循环处理函数。
	*/
	__proto._update=function(){
		if (this.scale <=0){
			this._lastTimer=Date.now();
			return;
		};
		var frame=this.currFrame=this.currFrame+this.scale;
		var now=Date.now();
		this._delta=(now-this._lastTimer)*this.scale;
		var timer=this.currTimer=this.currTimer+this._delta;
		this._lastTimer=now;
		var handlers=this._handlers;
		this._count=0;
		for (i=0,n=handlers.length;i < n;i++){
			handler=handlers[i];
			if (handler.method!==null){
				var t=handler.userFrame ? frame :timer;
				if (t >=handler.exeTime){
					if (handler.repeat){
						if (t > handler.exeTime){
							handler.exeTime+=handler.delay;
							handler.run(false);
							if (t > handler.exeTime){
								handler.exeTime+=Math.ceil((t-handler.exeTime)/ handler.delay)*handler.delay;
							}
						}
						}else {
						handler.run(true);
					}
				}
				}else {
				this._count++;
			}
		}
		if (this._count > 30 || frame % 200===0)this._clearHandlers();
		var laters=this._laters;
		for (var i=0,n=laters.length-1;i <=n;i++){
			var handler=laters[i];
			handler.method!==null && handler.run(false);
			this._recoverHandler(handler);
			i===n && (n=laters.length-1);
		}
		laters.length=0;
	}

	/**@private */
	__proto._clearHandlers=function(){
		var handlers=this._handlers;
		for (var i=0,n=handlers.length;i < n;i++){
			var handler=handlers[i];
			if (handler.method!==null)this._temp.push(handler);
			else this._recoverHandler(handler);
		}
		this._handlers=this._temp;
		this._temp=handlers;
		this._temp.length=0;
	}

	/**@private */
	__proto._recoverHandler=function(handler){
		this._map[handler.key]=null;
		handler.clear();
		Timer._pool.push(handler);
	}

	/**@private */
	__proto._create=function(useFrame,repeat,delay,caller,method,args,coverBefore){
		if (!delay){
			method.apply(caller,args);
			return;
		}
		if (coverBefore){
			var handler=this._getHandler(caller,method);
			if (handler){
				handler.repeat=repeat;
				handler.userFrame=useFrame;
				handler.delay=delay;
				handler.caller=caller;
				handler.method=method;
				handler.args=args;
				handler.exeTime=delay+(useFrame ? this.currFrame :Date.now());
				return;
			}
		}
		handler=Timer._pool.length > 0 ? Timer._pool.pop():new TimerHandler();
		handler.repeat=repeat;
		handler.userFrame=useFrame;
		handler.delay=delay;
		handler.caller=caller;
		handler.method=method;
		handler.args=args;
		handler.exeTime=delay+(useFrame ? this.currFrame :Date.now());
		this._indexHandler(handler);
		this._handlers.push(handler);
	}

	/**@private */
	__proto._indexHandler=function(handler){
		var caller=handler.caller;
		var method=handler.method;
		var cid=caller ? caller.$_GID || (caller.$_GID=Utils.getGID()):0;
		var mid=method.$_TID || (method.$_TID=(this._mid++)*100000);
		handler.key=cid+mid;
		this._map[handler.key]=handler;
	}

	/**
	*定时执行一次。
	*@param delay 延迟时间(单位为毫秒)。
	*@param caller 执行域(this)。
	*@param method 定时器回调函数。
	*@param args 回调参数。
	*@param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
	*/
	__proto.once=function(delay,caller,method,args,coverBefore){
		(coverBefore===void 0)&& (coverBefore=true);
		this._create(false,false,delay,caller,method,args,coverBefore);
	}

	/**
	*定时重复执行。
	*@param delay 间隔时间(单位毫秒)。
	*@param caller 执行域(this)。
	*@param method 定时器回调函数。
	*@param args 回调参数。
	*@param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
	*/
	__proto.loop=function(delay,caller,method,args,coverBefore){
		(coverBefore===void 0)&& (coverBefore=true);
		this._create(false,true,delay,caller,method,args,coverBefore);
	}

	/**
	*定时执行一次(基于帧率)。
	*@param delay 延迟几帧(单位为帧)。
	*@param caller 执行域(this)。
	*@param method 定时器回调函数。
	*@param args 回调参数。
	*@param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
	*/
	__proto.frameOnce=function(delay,caller,method,args,coverBefore){
		(coverBefore===void 0)&& (coverBefore=true);
		this._create(true,false,delay,caller,method,args,coverBefore);
	}

	/**
	*定时重复执行(基于帧率)。
	*@param delay 间隔几帧(单位为帧)。
	*@param caller 执行域(this)。
	*@param method 定时器回调函数。
	*@param args 回调参数。
	*@param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
	*/
	__proto.frameLoop=function(delay,caller,method,args,coverBefore){
		(coverBefore===void 0)&& (coverBefore=true);
		this._create(true,true,delay,caller,method,args,coverBefore);
	}

	/**返回统计信息。*/
	__proto.toString=function(){
		return "callLater:"+this._laters.length+" handlers:"+this._handlers.length+" pool:"+Timer._pool.length;
	}

	/**
	*清理定时器。
	*@param caller 执行域(this)。
	*@param method 定时器回调函数。
	*/
	__proto.clear=function(caller,method){
		var handler=this._getHandler(caller,method);
		if (handler){
			this._map[handler.key]=null;
			handler.key=0;
			handler.clear();
		}
	}

	/**
	*清理对象身上的所有定时器。
	*@param caller 执行域(this)。
	*/
	__proto.clearAll=function(caller){
		if (!caller)return;
		for (var i=0,n=this._handlers.length;i < n;i++){
			var handler=this._handlers[i];
			if (handler.caller===caller){
				this._map[handler.key]=null;
				handler.key=0;
				handler.clear();
			}
		}
	}

	/**@private */
	__proto._getHandler=function(caller,method){
		var cid=caller ? caller.$_GID || (caller.$_GID=Utils.getGID()):0;
		var mid=method.$_TID || (method.$_TID=(this._mid++)*100000);
		return this._map[cid+mid];
	}

	/**
	*延迟执行。
	*@param caller 执行域(this)。
	*@param method 定时器回调函数。
	*@param args 回调参数。
	*/
	__proto.callLater=function(caller,method,args){
		if (this._getHandler(caller,method)==null){
			if (Timer._pool.length)
				var handler=Timer._pool.pop();
			else handler=new TimerHandler();
			handler.caller=caller;
			handler.method=method;
			handler.args=args;
			this._indexHandler(handler);
			this._laters.push(handler);
		}
	}

	/**
	*立即执行 callLater 。
	*@param caller 执行域(this)。
	*@param method 定时器回调函数。
	*/
	__proto.runCallLater=function(caller,method){
		var handler=this._getHandler(caller,method);
		if (handler && handler.method !=null){
			this._map[handler.key]=null;
			handler.run(true);
		}
	}

	/**
	*两帧之间的时间间隔,单位毫秒。
	*/
	__getset(0,__proto,'delta',function(){
		return this._delta;
	});

	Timer._pool=[];
	Timer.__init$=function(){
		/**@private */
		//class TimerHandler
		TimerHandler=(function(){
			function TimerHandler(){
				this.key=0;
				this.repeat=false;
				this.delay=0;
				this.userFrame=false;
				this.exeTime=0;
				this.caller=null;
				this.method=null;
				this.args=null;
			}
			__class(TimerHandler,'');
			var __proto=TimerHandler.prototype;
			__proto.clear=function(){
				this.caller=null;
				this.method=null;
				this.args=null;
			}
			__proto.run=function(widthClear){
				var caller=this.caller;
				if (caller && caller.destroyed)return this.clear();
				var method=this.method;
				var args=this.args;
				widthClear && this.clear();
				if (method==null)return;
				args ? method.apply(caller,args):method.call(caller);
			}
			return TimerHandler;
		})()
	}

	return Timer;
})()


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/utils/Utils.as=======199.999963/199.999963
/**
*<code>Utils</code> 是工具类。
*/
//class laya.utils.Utils
var Utils=(function(){
	function Utils(){}
	__class(Utils,'laya.utils.Utils');
	Utils.toRadian=function(angle){
		return angle *Utils._pi2;
	}

	Utils.toAngle=function(radian){
		return radian *Utils._pi;
	}

	Utils.getGID=function(){
		return Utils._gid++;
	}

	Utils.bind=function(fun,scope){
		var rst=fun;
		rst=fun.bind(scope);;
		return rst;
	}

	Utils.updateOrder=function(array){
		if (!array || array.length < 2)return false;
		var i=1,j=0,len=array.length,key=NaN,c;
		while (i < len){
			j=i;
			c=array[j];
			key=array[j]._zOrder;
			while (--j >-1){
				if (array[j]._zOrder > key)array[j+1]=array[j];
				else break ;
			}
			array[j+1]=c;
			i++;
		}
		return true;
	}

	Utils.getFileExtension=function(path){
		Utils._extReg.lastIndex=path.lastIndexOf(".");
		var result=Utils._extReg.exec(path);
		if (result && result.length > 1){
			return result[1].toLowerCase();
		}
		return null;
	}

	Utils._gid=1;
	Utils._pi=180 / Math.PI;
	Utils._pi2=Math.PI / 180;
	Utils._extReg=/\.(\w+)\??/g;
	return Utils;
})()


	//file:///E:/git/layaair-dev/plugins/auto/msgs/MessageInit.as=======199.999959/199.999959
/**
*初始化消息列表
*/
//class MessageInit
var MessageInit=(function(){
	function MessageInit(){}
	__class(MessageInit,'MessageInit');
	MessageInit.init=function(){
		var regMsgs=[DataMessage,ErrorMessage,WelcomeSM,BuyItemCM,UseItemCM,BagData,UserData,AchievementCountData,AchievementData];
		MessageUtils.regMessageList(regMsgs);
		MessageUtils.setMessagesKey(regMsgs);
	}

	MessageInit.__init$=function(){
		MessageInit.init();
	}

	return MessageInit;
})()


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/Actuator.as=======199.999956/199.999956
/**
*数据库，原子数据操作，失败回滚
*/
//class laya.data.Actuator
var Actuator=(function(){
	function Actuator(){
		this._cmds=[];
		/**错误信息*/
		this.error=null;
	}

	__class(Actuator,'laya.data.Actuator');
	var __proto=Actuator.prototype;
	/**
	*添加一条数据
	*@param sheetName 表名称
	*@param data 数据结构
	*@param reason 原因
	*/
	__proto.add=function(sheetName,data){
		var msg=new DataMessage();
		msg.type=DataMessage.TYPE_ADD;
		msg.sheetName=sheetName;
		msg.data=data;
		this._cmds.push(msg);
	}

	/**
	*删除一条数据
	*@param sheetName 表名称
	*@param index 数据结构
	*@param reason 原因
	*/
	__proto.del=function(sheetName,index){
		var msg=new DataMessage();
		msg.type=DataMessage.TYPE_DEL;
		msg.sheetName=sheetName;
		msg.index=index;
		this._cmds.push(msg);
	}

	/**
	*更改数据
	*@param sheetName 表名称
	*@param key 字段名称
	*@param changeValue 更改值，只能是加减操作
	*@param reason 原因
	*@param index 行索引，默认为0
	*/
	__proto.change=function(sheetName,key,changeValue,index){
		(index===void 0)&& (index=0);
		var msg=new DataMessage();
		msg.type=DataMessage.TYPE_CHANGE;
		msg.sheetName=sheetName;
		msg.index=index;
		msg.key=key;
		msg.value=changeValue;
		this._cmds.push(msg);
	}

	/**
	*更改数据
	*@param sheetName 表名称
	*@param key 字段名称
	*@param changeValue 更改值，只能是加减操作
	*@param reason 原因
	*@param index 行索引，默认为0
	*/
	__proto.update=function(sheetName,key,value,index){
		(index===void 0)&& (index=0);
		var msg=new DataMessage();
		msg.type=DataMessage.TYPE_UPDATE;
		msg.sheetName=sheetName;
		msg.index=index;
		msg.key=key;
		msg.value=value;
		this._cmds.push(msg);
	}

	/**
	*执行操作
	*@return 返回成功或者失败信息
	*/
	__proto.run=function(operation,player){
		console.log("------start:",operation,"------");
		Actuator.main=this;
		for (var i=0;i < this._cmds.length;i++){
			(this._cmds[i]).run(operation,player.table);
			if (this.error){
				this._rollBack(i);
				break ;
			}
		}
		if (this.error){
			ErrorMessage.I.error=this.error;
			if (player)player.send(ErrorMessage.I);
			}else {
			if (player){
				for (var j=0,n=this._cmds.length;j < n;j++){
					player.send(this._cmds[j]);
				}
			}
		}
		this._clear();
		return this.error==null;
	}

	__proto._clear=function(){
		this.error=null;
		this._cmds.length=0;
	}

	//TODO：复用
	__proto._rollBack=function(index){
		console.log("------rollback("+this.error+")------");
		for (var i=index;i >-1;i--){
			(this._cmds[i]).rollBack();
		}
	}

	Actuator.create=function(){
		return new Actuator();
	}

	Actuator.stop=function(reason){
		console.log(reason);
		if(Actuator.main)Actuator.main.error=reason;
	}

	Actuator.main=null;
	Actuator.SUCCESS="success";
	return Actuator;
})()


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/DataDecoder.as=======199.999955/199.999955
/**
*@private 数据表解析
*/
//class laya.data.DataDecoder
var DataDecoder=(function(){
	function DataDecoder(){}
	__class(DataDecoder,'laya.data.DataDecoder');
	DataDecoder.init=function(){
		DataDecoder._map["string"]=["String","string"];
		DataDecoder._map["number"]=["Number","number"];
		DataDecoder._map["int"]=["Number","int32"];
		DataDecoder._map["int8"]=["Number","int8"];
		DataDecoder._map["uint8"]=["Number","uint8"];
		DataDecoder._map["int16"]=["Number","int16"];
		DataDecoder._map["uint16"]=["Number","uint16"];
		DataDecoder._map["int32"]=["Number","int32"];
		DataDecoder._map["uint32"]=["Number","uint32"];
		DataDecoder._map["float32"]=["Number","float32"];
		DataDecoder._map["float64"]=["Number","float64"];
		DataDecoder._map["boolean"]=["Boolean","boolean"];
		DataDecoder._map["s"]=["String","string"];
		DataDecoder._map["n"]=["Number","number"];
		DataDecoder._map["i"]=["Number","int32"];
		DataDecoder._map["b"]=["Boolean","boolean"];
	}

	DataDecoder.getCodeType=function(type){
		if (DataDecoder._map[type])return DataDecoder._map[type][0];
		return type;
	}

	DataDecoder.getStoreType=function(type){
		if (DataDecoder._map[type])return DataDecoder._map[type][1];
		return "string";
	}

	DataDecoder.readTypeFromByte=function(byte,type){
		var rst;
		switch (DataDecoder.getStoreType(type)){
			case "string":
				rst=byte.getUTFString();
				break ;
			case "number":
				rst=byte.getFloat32();
				break ;
			case "int8":
				rst=byte.readByte();
				break ;
			case "uint8":
				rst=byte.getUint8();
				break ;
			case "int16":
				rst=byte.getInt16();
				break ;
			case "uint16":
				rst=byte.getUint16();
				break ;
			case "int32":
				rst=byte.getInt32();
				break ;
			case "uint32":
				rst=byte.getUint32();
				break ;
			case "float32":
				rst=byte.getFloat32();
				break ;
			case "float64":
				rst=byte.getFloat64();
				break ;
			case "boolean":
				rst=byte.readByte()==1;
				break ;
			}
		return rst;
	}

	DataDecoder.decodeData=function(byte,name){
		var className;
		className=byte.readUTFString();
		var dataType;
		dataType=byte.readUTFString();
		var typeLen=byte.getInt32();
		var i=0,len=0;
		len=typeLen;
		var keys=[];
		for (i=0;i < len;i++){
			keys.push(byte.readUTFString());
		};
		var types=[];
		for (i=0;i < len;i++){
			types.push(byte.readUTFString());
		};
		var dataLen=byte.getInt32();
		len=dataLen;
		var tData;
		var j=0,jLen=0;
		jLen=typeLen;
		if (dataType=="objecttable"){
			var rst={};
			rst.key=keys;
			var dataO={};
			rst.data=dataO;
			for (i=0;i < len;i++){
				tData=[];
				for (j=0;j < jLen;j++){
					tData[j]=DataDecoder.readTypeFromByte(byte,types[j]);
				}
				dataO[tData[0]]=tData;
			}
			return rst;
		};
		var datas=new Sheet(name);
		var classZ=ClassUtils.getClass(className);
		for (i=0;i < len;i++){
			if (classZ)tData=new classZ();
			else tData={};
			for (j=0;j < jLen;j++){
				tData[keys[j]]=DataDecoder.readTypeFromByte(byte,types[j]);
			}
			datas.add(tData);
		}
		return datas;
	}

	DataDecoder._map={};
	DataDecoder.STRING="string";
	DataDecoder.NUMBER="number";
	DataDecoder.BOOLEAN="boolean";
	DataDecoder.INT8="int8";
	DataDecoder.UINT8="uint8";
	DataDecoder.INT16="int16";
	DataDecoder.UINT16="uint16";
	DataDecoder.INT32="int32";
	DataDecoder.UINT32="uint32";
	DataDecoder.FLOAT32="float32";
	DataDecoder.FLOAT64="float64";
	DataDecoder.__init$=function(){
		DataDecoder.init();
	}

	return DataDecoder;
})()


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/MessageUtils.as=======199.999950/199.999950
/**
*@private 消息工具类
*/
//class laya.data.MessageUtils
var MessageUtils=(function(){
	function MessageUtils(){}
	__class(MessageUtils,'laya.data.MessageUtils');
	MessageUtils.regMessage=function(clz){
		if (!clz["__MID"]){
			clz["__MID"]=MessageUtils.msgID;
			MessageUtils._msgDic[MessageUtils.msgID]=clz;
			MessageUtils._desDic[MessageUtils.msgID]=clz["DES"];
			MessageUtils.msgID++;
		}
	}

	MessageUtils.regMessageList=function(msgList){
		var i=0,len=msgList.length;
		for (i=0;i < len;i++){
			laya.data.MessageUtils.regMessage(msgList[i]);
		}
	}

	MessageUtils.setMessagesKey=function(msgList){
		var i=0,len=msgList.length;
		for (i=0;i < len;i++){
			MessageUtils.setMessageKey(msgList[i]);
		}
	}

	MessageUtils.setMessageKey=function(msg,key){
		if (!key)key=msg["name"];
		msg["KEY"]=key;
	}

	MessageUtils.replaceClass=function(newClz,oldClz){
		var id=0;
		id=MessageUtils.getClassID(oldClz);
		newClz["__MID"]=id;
		MessageUtils._msgDic[id]=newClz;
	}

	MessageUtils.getDesByObject=function(obj){
		return MessageUtils._desDic[MessageUtils.getObjectClassID(obj)];
	}

	MessageUtils.getClassByID=function(id){
		return MessageUtils._msgDic[id];
	}

	MessageUtils.getClassID=function(clz){
		return clz["__MID"];
	}

	MessageUtils.getClassKey=function(clz){
		return clz["KEY"];
	}

	MessageUtils.getObjectClassID=function(obj){
		return MessageUtils.getClassID(obj["__proto__"]["constructor"]);
	}

	MessageUtils.getObjectClass=function(obj){
		return obj["__proto__"]["constructor"];
	}

	MessageUtils.readMessageFromByte=function(byte){
		var clz=MessageUtils.getClassByID(byte.getInt32());
		var rst=new clz();
		rst.read(byte);
		return rst;
	}

	MessageUtils.writeMessageToByte=function(byte,message){
		byte.endian="littleEndian";
		byte.writeInt32(MessageUtils.getObjectClassID(message));
		message.write(byte);
	}

	MessageUtils._msgDic={};
	MessageUtils._desDic={};
	MessageUtils.msgID=1;
	MessageUtils.IDSign="__MID";
	MessageUtils.KEYSign="KEY";
	return MessageUtils;
})()


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/Table.as=======199.999948/199.999948
/**
*数据表
*/
//class laya.data.Table
var Table=(function(){
	function Table(){
		/**@private */
		this._notifies={};
		/**@private */
		this._notifyCont=0;
		/**@private */
		this._sheets={};
		this.notifer=new EventDispatcher();
	}

	__class(Table,'laya.data.Table');
	var __proto=Table.prototype;
	/**
	*增加一张数据表
	*@param key 表名称
	*@param sheet 表对象
	*/
	__proto.add=function(key,sheet){
		this._sheets[key]=sheet;
		sheet._table=this;
		this.notify(key);
	}

	/**
	*删除表
	*@param key 表名称
	*/
	__proto.del=function(key){
		delete this._sheets[key];
	}

	/**
	*加载数据表，可以加载单独的地址或者地址数组
	*@param url 表url路径或者路径数组，加载完成后，将使用文件名作为表名索引存储
	*@param complete 加载完成回调
	*/
	__proto.load=function(url,complete){
		var loads=[];
		if ((url instanceof Array)){
			var i=0,len=0;
			len=url.length;
			for (i=0;i < len;i++){
				loads.push({url:url[i],type:"arraybuffer"});
			}
			}else if ((typeof url=='string')){
			loads.push({url:url,type:"arraybuffer"});
		}
		Laya.loader.load(loads,Handler.create(this,this._dataLoaded,[url,complete]));
	}

	/**@private */
	__proto._dataLoaded=function(url,complete){
		if ((url instanceof Array)){
			var i=0,len=0;
			len=url.length;
			for (i=0;i < len;i++){
				this._dealLoadedData(url[i]);
			}
			}else if ((typeof url=='string')){
			this._dealLoadedData(url);
		}
		if (complete)complete.run();
	}

	/**@private */
	__proto._dealLoadedData=function(url){
		var fileName=URL.getFileName(url).split(".")[0];
		if (this._sheets[fileName])return;
		var buffer=Loader.getRes(url);
		if (buffer){
			var byte=new Byte(buffer);
			var data=DataDecoder.decodeData(byte,fileName);
			this.add(fileName,data);
		}
	}

	/**
	*根据表名获取整张表
	*@param sheetName 表名
	*@return 返回数据表集合
	*/
	__proto.get=function(sheetName){
		return this._sheets[sheetName];
	}

	/**
	*是否存在某张表（表是否加载）
	*@param sheetName 表名
	*@return 返回是否存在
	*/
	__proto.has=function(sheetName){
		return this._sheets[sheetName] !=null;
	}

	/**
	*根据表名及索引获取表中某条数据
	*@param sheetName 表名
	*@param index 数组索引
	*@return 返回具体的模型数据
	*/
	__proto.getData=function(sheetName,index){
		var sheet=this._sheets[sheetName];
		if (!sheet)return null;
		return sheet.get(index);
	}

	/**
	*根据表名及ID获取表中某条数据
	*@param sheetName 表名
	*@param id id索引
	*@return 返回具体的模型数据
	*/
	__proto.getByID=function(sheetName,id){
		var sheet=this._sheets[sheetName];
		if (!sheet)return null;
		return sheet.getByID(id);
	}

	/**
	*通知表数据发生变化，相同的key会被过滤，只派发一次
	*/
	__proto.notify=function(key){
		this._notifies[key]=true;
		Laya.timer.callLater(this,this._sendNotify);
	}

	__proto._sendNotify=function(){
		this._notifyCont++;
		for (var key in this._notifies){
			if (this._notifies[key]){
				this._notifies[key]=null;
				this.notifer.event(key);
			}
		}
		if (this._notifyCont > 50)this._notifies={};
	}

	/**@private */
	__proto.createByID=function(sheetName,id){
		var keys=this._sheets[sheetName].key;
		var values=this._sheets[sheetName].data[id];
		var box;
		var comp;
		for (var i=0,n=keys.length;i < n;i++){
			var key=keys[i];
			var value=values[i];
			if (key==="ClassName"){
				comp=Pool.getItemByClass(value,ClassUtils.getClass(value));
				if (!box)box=comp;
				else box.addPlugin(null,comp);
				}else if (key==="var"){
				box && (box[key]=comp);
				}else if (comp){
				if (comp.hasOwnProperty(key))comp[key]=value;
			}
		}
		box.init || box.init();
		return box;
	}

	Table.addTrigger=function(name,sheetName,type,fun){
		var sheet=Table._triggers[sheetName];
		if (!sheet){
			sheet=[[],[],[]];
			Table._triggers[sheetName]=sheet;
		};
		var arr=sheet[type];
		arr.push(name,fun);
	}

	Table.runTrigger=function(sheetName,type,data,key){
		var sheet=Table._triggers[sheetName];
		if (sheet){
			var arr=sheet[type];
			if (arr && arr.length > 0){
				for (var i=0,n=arr.length;i < n;i++){
					var name=arr[i++];
					var fun=arr[i];
					console.log("runTrigger",name);
					fun(data,key);
				}
			}
		}
	}

	Table._triggers={};
	__static(Table,
	['I',function(){return this.I=new Table();}
	]);
	return Table;
})()


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/Sheet.as=======99.999949/99.999949
/**
*数据表，由excel导出的表数据，以数组方式存储，可以通过add，del，update增加删除更新
*如果excel里面有id字段，则会用ID作为key索引，通过getByID(id)查询，否则可以通过get(index)查询
*/
//class laya.data.Sheet extends Array
var Sheet=(function(_super){
	function Sheet(name){
		/**表名称*/
		this.name=null;
		/**@private */
		this._table=null;
		/**@private ID索引*/
		this._map={};
		Sheet.__super.call(this);
		this.name=name;
	}

	__class(Sheet,'laya.data.Sheet',Array);
	var __proto=Sheet.prototype;
	/**
	*向表里面增加一条数据
	*@param data 数据
	*/
	__proto.add=function(data){
		this.push(data);
		if (data.id)this._map[data.id]=data;
		this.notify(this.name);
		Table.runTrigger(this.name,Sheet.TYPE_ADD,data);
	}

	/**
	*根据索引删除一条数据
	*/
	__proto.del=function(index){
		var data=this[index];
		this.splice(index,1);
		if (data && this._map[data.id])this._map[data.id]=null;
		this.notify(this.name);
		Table.runTrigger(this.name,Sheet.TYPE_DEL,data);
		return data;
	}

	/**派发一个事件*/
	__proto.notify=function(key){
		this._table && this._table.notify(key);
	}

	/**
	*增量更改表数据，接受参数为changeValue
	*/
	__proto.change=function(index,key,changeValue){
		var data=this[index];
		if (data && data.hasOwnProperty(key)){
			if ((typeof changeValue=='number')){
				data[key]+=changeValue;
				}else {
				data[key]=changeValue;
			}
			this.notify(this.name);
			Table.runTrigger(this.name,Sheet.TYPE_CHANGE,data,key);
		}
	}

	/**
	*更新表数据，接受参数为value
	*/
	__proto.update=function(index,key,value){
		var data=this[index];
		if (data && data.hasOwnProperty(key)){
			data[key]=value;
			this.notify(this.name);
			Table.runTrigger(this.name,Sheet.TYPE_CHANGE,data,key);
		}
	}

	/**
	*根据索引获取一条数据
	*/
	__proto.get=function(index){
		return this[index];
	}

	/**
	*根据ID获取一条数据，如果没找到，则返回为空
	*/
	__proto.getByID=function(id){
		return this._map[id];
	}

	Sheet.load=function(url,complete){
		Table.I.load(url,complete);
	}

	Sheet.get=function(sheetName){
		return Table.I.get(sheetName);
	}

	Sheet.has=function(sheetName){
		return Table.I.has(sheetName);
	}

	Sheet.getData=function(sheetName,index){
		return Table.I.getData(sheetName,index);
	}

	Sheet.getByID=function(sheetName,id){
		return Table.I.getByID(sheetName,id);
	}

	Sheet.createByID=function(sheetName,id){
		return Table.I.createByID(sheetName,id);
	}

	Sheet.notify=function(key){
		Table.I.notify(key);
	}

	Sheet.TYPE_ADD=0;
	Sheet.TYPE_DEL=1;
	Sheet.TYPE_CHANGE=2;
	return Sheet;
})(Array)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/src/db/AchievementCountData.as=======98.999997/98.999997
//class db.AchievementCountData extends laya.data.MessageBase
var AchievementCountData=(function(_super){
	function AchievementCountData(){
		this._gold=NaN;
		this._price=NaN;
		AchievementCountData.__super.call(this);
	}

	__class(AchievementCountData,'db.AchievementCountData',_super);
	var __proto=AchievementCountData.prototype;
	__proto.notify=function(prop){
		Sheet.notify("AchievementCount."+prop);
		Sheet.notify("AchievementCount");
	}

	__getset(0,__proto,'gold',function(){
		return this._gold;
		},function(value){
		this._gold=value;
		this.notify("gold");
	});

	__getset(0,__proto,'price',function(){
		return this._price;
		},function(value){
		this._price=value;
		this.notify("price");
	});

	AchievementCountData.sheet=function(){
		return Sheet.get("AchievementCount");
	}

	AchievementCountData.getData=function(id){
		return Sheet.getData("AchievementCount",id);
	}

	AchievementCountData.getByID=function(id){
		return Sheet.getByID("AchievementCount",id);
	}

	__static(AchievementCountData,
	['DES',function(){return this.DES=[
		["gold",6],
		["price",6]];}
	]);
	return AchievementCountData;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/src/db/AchievementData.as=======98.999995/98.999995
//class db.AchievementData extends laya.data.MessageBase
var AchievementData=(function(_super){
	function AchievementData(){
		this._id=NaN;
		this._type=null;
		this._num=NaN;
		this._desc=null;
		this._success=false;
		AchievementData.__super.call(this);
	}

	__class(AchievementData,'db.AchievementData',_super);
	var __proto=AchievementData.prototype;
	__proto.notify=function(prop){
		Sheet.notify("Achievement."+prop);
		Sheet.notify("Achievement");
	}

	__getset(0,__proto,'success',function(){
		return this._success;
		},function(value){
		this._success=value;
		this.notify("success");
	});

	__getset(0,__proto,'desc',function(){
		return this._desc;
		},function(value){
		this._desc=value;
		this.notify("desc");
	});

	__getset(0,__proto,'id',function(){
		return this._id;
		},function(value){
		this._id=value;
		this.notify("id");
	});

	__getset(0,__proto,'type',function(){
		return this._type;
		},function(value){
		this._type=value;
		this.notify("type");
	});

	__getset(0,__proto,'num',function(){
		return this._num;
		},function(value){
		this._num=value;
		this.notify("num");
	});

	AchievementData.sheet=function(){
		return Sheet.get("Achievement");
	}

	AchievementData.getData=function(id){
		return Sheet.getData("Achievement",id);
	}

	AchievementData.getByID=function(id){
		return Sheet.getByID("Achievement",id);
	}

	__static(AchievementData,
	['DES',function(){return this.DES=[
		["id",4],
		["type",9],
		["num",4],
		["desc",9],
		["success",0]];}
	]);
	return AchievementData;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/src/db/BagData.as=======98.999994/98.999994
//class db.BagData extends laya.data.MessageBase
var BagData=(function(_super){
	function BagData(){
		this._id=NaN;
		this._num=NaN;
		this._type=NaN;
		BagData.__super.call(this);
	}

	__class(BagData,'db.BagData',_super);
	var __proto=BagData.prototype;
	__proto.notify=function(prop){
		Sheet.notify("Bag."+prop);
		Sheet.notify("Bag");
	}

	__proto.init=function(id,num,type){
		this._id=id;
		this._num=num;
		this._type=type;
		return this;
	}

	__getset(0,__proto,'id',function(){
		return this._id;
		},function(value){
		this._id=value;
		this.notify("id");
	});

	__getset(0,__proto,'name',function(){
		return ItemData.sheet().getByID(this.id).name;
	});

	__getset(0,__proto,'num',function(){
		return this._num;
		},function(value){
		this._num=value;
		this.notify("num");
	});

	__getset(0,__proto,'type',function(){
		return this._type;
		},function(value){
		this._type=value;
		this.notify("type");
	});

	BagData.sheet=function(){
		return Sheet.get("Bag");
	}

	BagData.getData=function(id){
		return Sheet.getData("Bag",id);
	}

	BagData.getByID=function(id){
		return Sheet.getByID("Bag",id);
	}

	__static(BagData,
	['DES',function(){return this.DES=[["id",6],["num",4],["type",2]];}
	]);
	return BagData;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/src/db/UserData.as=======98.999991/98.999991
//class db.UserData extends laya.data.MessageBase
var UserData=(function(_super){
	function UserData(){
		this._username=null;
		this._isVip=false;
		this._gold=NaN;
		UserData.__super.call(this);
	}

	__class(UserData,'db.UserData',_super);
	var __proto=UserData.prototype;
	__proto.notify=function(prop){
		Sheet.notify("User."+prop);
		Sheet.notify("User");
	}

	__getset(0,__proto,'username',function(){
		return this._username;
		},function(value){
		this._username=value;
		this.notify("username");
	});

	__getset(0,__proto,'isVip',function(){
		return this._isVip;
		},function(value){
		this._isVip=value;
		this.notify("isVip");
	});

	__getset(0,__proto,'gold',function(){
		return this._gold;
		},function(value){
		this._gold=value;
		this.notify("gold");
	});

	UserData.sheet=function(){
		return Sheet.get("User");
	}

	UserData.getData=function(id){
		return Sheet.getData("User",id);
	}

	UserData.getByID=function(id){
		return Sheet.getByID("User",id);
	}

	__static(UserData,
	['DES',function(){return this.DES=[
		["username",9],
		["isVip",0],
		["gold",6]];}
	]);
	return UserData;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/src/MyCSCommunicator.as=======98.999981/98.999981
/**
*...
*@author yung
*/
//class MyCSCommunicator extends laya.server.net.CSCommunicator
var MyCSCommunicator=(function(_super){
	function MyCSCommunicator(){
		this.welcomeSM=null;
		MyCSCommunicator.__super.call(this);
		this.welcomeSM=new WelcomeSM();
	}

	__class(MyCSCommunicator,'MyCSCommunicator',_super);
	var __proto=MyCSCommunicator.prototype;
	__proto.clientConnected=function(player){
		this.sendWelcomeMessage(player);
	}

	__proto.sendWelcomeMessage=function(player){
		player.table=new Table();
		player.table.load(["data/User.bd","data/Bag.bd","data/Achievement.bd","data/AchievementCount.bd"],Handler.create(this,this.onDataLoaded,[player]));
		this.welcomeSM.time=Date.now();
		CSCommunicator.sendMessage(player,this.welcomeSM);
	}

	__proto.onDataLoaded=function(player){
		var obj={};
		var arr=player.table.get("Achievement");
		for (var i=0,n=arr.length;i <n;i++){
			var achi=arr[i];
			var a=obj[achi.type] || (obj[achi.type]=[]);
			a.push(achi);
		}
		Table.addTrigger("checkAchievement","AchievementCount",2,checkGold3);
		function checkGold3 (data,key){
			arr=obj[key];
			var value=data[key];
			if (value==null)return;
			for (var i=0,n=arr.length;i <n;i++){
				var achi=arr[i];
				if (!achi.success && value>=achi.num){
					Actuator.main.change("Achievement","success",true,achi.id);
				}
			}
		}
	}

	__proto.processMessage=function(message,player){
		console.log("Receive",message.msgKey);
		switch (message.msgId){
			case BuyItemCM["__MID"]:
				this.buyItem(message,player);
				break ;
			case UseItemCM["__MID"]:
				this.useItem(message,player);
				break ;
			}
	}

	__proto.useItem=function(msg,player){
		var actuator=Actuator.create();
		actuator.del("Bag",msg.index);
		actuator.change("User","gold",10);
		actuator.run("userItem",player);
	}

	__proto.buyItem=function(msg,player){
		var actuator=Actuator.create();
		actuator.change("User","gold",-100);
		actuator.add("Bag",new BagData().init(msg.id,100,2));
		actuator.change("AchievementCount","gold",100);
		actuator.run("buyItem",player);
	}

	return MyCSCommunicator;
})(CSCommunicator)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/net/Loader.as=======98.999970/98.999970
/**
*<code>Loader</code> 类可用来加载文本、JSON、XML、二进制、图像等资源。
*/
//class laya.net.Loader extends laya.events.EventDispatcher
var Loader=(function(_super){
	function Loader(){
		/**@private 加载后的数据对象，只读*/
		this._data=null;
		/**@private */
		this._url=null;
		/**@private */
		this._type=null;
		/**@private */
		this._cache=false;
		/**@private */
		this._fs=null;
		Loader.__super.call(this);
	}

	__class(Loader,'laya.net.Loader',_super);
	var __proto=Loader.prototype;
	/**
	*加载资源。加载错误会派发 Event.ERROR 事件，参数为错误信息。
	*@param url 资源地址。
	*@param type (default=null)资源类型。可选值为：Loader.TEXT、Loader.JSON、Loader.XML、Loader.BUFFER、Loader.IMAGE、Loader.SOUND、Loader.ATLAS、Loader.FONT。如果为null，则根据文件后缀分析类型。
	*@param cache (default=true)是否缓存数据。
	*@param group (default=null)分组名称。
	*@param ignoreCache (default=false)是否忽略缓存，强制重新加载。
	*/
	__proto.load=function(url,type,cache,group,ignoreCache){
		var _$this=this;
		(cache===void 0)&& (cache=true);
		(ignoreCache===void 0)&& (ignoreCache=false);
		this._url=url;
		this._type=type || (type=this.getTypeFromUrl(url));
		this._cache=cache;
		this._data=null;
		url=URL.formatURL(url);
		if (!ignoreCache && Loader.loadedMap[url]){
			this._data=Loader.loadedMap[url];
			this.event("progress",1);
			this.event("complete",this._data);
			return;
		}
		if (group)Loader.setGroup(url,group);
		this._fs=this._fs || require("fs");
		this._fs.readFile(url,function(err,data){
			if (err)_$this.onError(err.message)
				else _$this.complete(data);
		});
	}

	/**
	*获取指定资源地址的数据类型。
	*@param url 资源地址。
	*@return 数据类型。
	*/
	__proto.getTypeFromUrl=function(url){
		var type=Utils.getFileExtension(url);
		if (type)return Loader.typeMap[type];
		console.warn("Not recognize the resources suffix",url);
		return "text";
	}

	/**@private */
	__proto.onError=function(message){
		console.log(message);
		this.event("error",message);
	}

	/**
	*加载完成。
	*@param data 加载的数据。
	*/
	__proto.complete=function(data){
		this._data=data;
		Loader._loaders.push(this);
		if (!Loader._isWorking)Loader.checkNext();
	}

	/**
	*结束加载，处理是否缓存及派发完成事件 <code>Event.COMPLETE</code> 。
	*@param content 加载后的数据
	*/
	__proto.endLoad=function(content){
		content && (this._data=content);
		if (this._cache)Loader.cacheRes(this._url,this._data);
		this.event("progress",1);
		this.event("complete",(this.data instanceof Array)? [this.data] :this.data);
	}

	/**加载地址。*/
	__getset(0,__proto,'url',function(){
		return this._url;
	});

	/**返回的数据。*/
	__getset(0,__proto,'data',function(){
		return this._data;
	});

	/**是否缓存。*/
	__getset(0,__proto,'cache',function(){
		return this._cache;
	});

	/**加载类型。*/
	__getset(0,__proto,'type',function(){
		return this._type;
	});

	Loader.checkNext=function(){
		Loader._isWorking=true;
		var startTimer=Date.now();
		var thisTimer=startTimer;
		while (Loader._startIndex < Loader._loaders.length){
			thisTimer=Date.now();
			Loader._loaders[Loader._startIndex].endLoad();
			Loader._startIndex++;
			if (Date.now()-startTimer > Loader.maxTimeOut){
				console.warn("loader callback cost a long time:"+(Date.now()-startTimer)+" url="+Loader._loaders[Loader._startIndex-1].url);
				Laya.timer.frameOnce(1,null,Loader.checkNext);
				return;
			}
		}
		Loader._loaders.length=0;
		Loader._startIndex=0;
		Loader._isWorking=false;
	}

	Loader.clearRes=function(url,forceDispose){
		(forceDispose===void 0)&& (forceDispose=false);
		url=URL.formatURL(url);
	}

	Loader.getRes=function(url){
		return Loader.loadedMap[URL.formatURL(url)];
	}

	Loader.cacheRes=function(url,data){
		url=URL.formatURL(url);
		if (Loader.loadedMap[url] !=null){
			console.warn("Resources already exist,is repeated loading:",url);
			}else {
			Loader.loadedMap[url]=data;
		}
	}

	Loader.setGroup=function(url,group){
		if (!Loader.groupMap[group])Loader.groupMap[group]=[];
		Loader.groupMap[group].push(url);
	}

	Loader.clearResByGroup=function(group){
		if (!Loader.groupMap[group])return;
		var arr=Loader.groupMap[group],i=0,len=arr.length;
		for (i=0;i < len;i++){
			Loader.clearRes(arr[i]);
		}
		arr.length=0;
	}

	Loader.TEXT="text";
	Loader.JSON="json";
	Loader.XML="xml";
	Loader.BUFFER="arraybuffer";
	Loader.typeMap={"txt":"text","json":"json","xml":"xml"};
	Loader.groupMap={};
	Loader.maxTimeOut=100;
	Loader.loadedMap={};
	Loader._loaders=[];
	Loader._isWorking=false;
	Loader._startIndex=0;
	return Loader;
})(EventDispatcher)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/net/LoaderManager.as=======98.999969/98.999969
/**
*<p> <code>LoaderManager</code> 类用于用于批量加载资源。此类是单例，不要手动实例化此类，请通过Laya.loader访问。</p>
*<p>全部队列加载完成，会派发 Event.COMPLETE 事件；如果队列中任意一个加载失败，会派发 Event.ERROR 事件，事件回调参数值为加载出错的资源地址。</p>
*<p> <code>LoaderManager</code> 类提供了以下几种功能：<br/>
*多线程：默认5个加载线程，可以通过maxLoader属性修改线程数量；<br/>
*多优先级：有0-4共5个优先级，优先级高的优先加载。0最高，4最低；<br/>
*重复过滤：自动过滤重复加载（不会有多个相同地址的资源同时加载）以及复用缓存资源，防止重复加载；<br/>
*错误重试：资源加载失败后，会重试加载（以最低优先级插入加载队列），retryNum设定加载失败后重试次数，retryDelay设定加载重试的时间间隔。</p>
*@see laya.net.Loader
*/
//class laya.net.LoaderManager extends laya.events.EventDispatcher
var LoaderManager=(function(_super){
	var ResInfo;
	function LoaderManager(){
		/**加载出错后的重试次数，默认重试一次*/
		this.retryNum=1;
		/**延迟时间多久再进行错误重试，默认立即重试*/
		this.retryDelay=0;
		/**最大下载线程，默认为5个*/
		this.maxLoader=5;
		/**@private */
		this._loaders=[];
		/**@private */
		this._loaderCount=0;
		/**@private */
		this._resInfos=[];
		/**@private */
		this._infoPool=[];
		/**@private */
		this._maxPriority=5;
		/**@private */
		this._failRes={};
		LoaderManager.__super.call(this);
		for (var i=0;i < this._maxPriority;i++)this._resInfos[i]=[];
	}

	__class(LoaderManager,'laya.net.LoaderManager',_super);
	var __proto=LoaderManager.prototype;
	/**
	*<p>加载资源。资源加载错误时，本对象会派发 Event.ERROR 事件，事件回调参数值为加载出错的资源地址。</p>
	*<p>因为返回值为 LoaderManager 对象本身，所以可以使用如下语法：Laya.loader.load(...).load(...);</p>
	*@param url 要加载的单个资源地址或资源信息数组。比如：简单数组：["a.png","b.png"]；复杂数组[{url:"a.png",type:Loader.IMAGE,size:100,priority:1},{url:"b.json",type:Loader.JSON,size:50,priority:1}]。
	*@param complete 加载结束回调。根据url类型不同分为2种情况：1. url为String类型，也就是单个资源地址，如果加载成功，则回调参数值为加载完成的资源，否则为null；2. url为数组类型，指定了一组要加载的资源，如果全部加载成功，则回调参数值为true，否则为false。
	*@param progress 加载进度回调。回调参数值为当前资源的加载进度信息(0-1)。
	*@param type 资源类型。比如：Loader.IMAGE。
	*@param priority (default=1)加载的优先级，优先级高的优先加载。有0-4共5个优先级，0最高，4最低。
	*@param cache 是否缓存加载结果。
	*@param group 分组，方便对资源进行管理。
	*@param ignoreCache 是否忽略缓存，强制重新加载。
	*@return 此 LoaderManager 对象本身。
	*/
	__proto.load=function(url,complete,progress,type,priority,cache,group,ignoreCache){
		var _$this=this;
		(priority===void 0)&& (priority=1);
		(cache===void 0)&& (cache=true);
		(ignoreCache===void 0)&& (ignoreCache=false);
		if ((url instanceof Array))return this._loadAssets(url,complete,progress,type,priority,cache,group);
		var content=Loader.getRes(url);
		if (content !=null){
			Laya.timer.frameOnce(1,null,function(){
				progress && progress.runWith(1);
				complete && complete.runWith(content);
				_$this._loaderCount || _$this.event("complete");
			});
			}else {
			var info=LoaderManager._resMap[url];
			if (!info){
				info=this._infoPool.length ? this._infoPool.pop():new ResInfo();
				info.url=url;
				info.type=type;
				info.cache=cache;
				info.group=group;
				info.ignoreCache=ignoreCache;
				complete && info.on("complete",complete.caller,complete.method,complete.args);
				progress && info.on("progress",progress.caller,progress.method,progress.args);
				LoaderManager._resMap[url]=info;
				priority=priority < this._maxPriority ? priority :this._maxPriority-1;
				this._resInfos[priority].push(info);
				this._next();
				}else {
				complete && info._createListener("complete",complete.caller,complete.method,complete.args,false,false);
				progress && info._createListener("progress",progress.caller,progress.method,progress.args,false,false);
			}
		}
		return this;
	}

	__proto._next=function(){
		if (this._loaderCount >=this.maxLoader)return;
		for (var i=0;i < this._maxPriority;i++){
			var infos=this._resInfos[i];
			while (infos.length > 0){
				var info=infos.shift();
				if (info)return this._doLoad(info);
			}
		}
		this._loaderCount || this.event("complete");
	}

	__proto._doLoad=function(resInfo){
		this._loaderCount++;
		var loader=this._loaders.length ? this._loaders.pop():new Loader();
		loader.on("complete",null,onLoaded);
		loader.on("progress",null,function(num){
			resInfo.event("progress",num);
		});
		loader.on("error",null,function(msg){
			onLoaded(null);
		});
		var _this_=this;
		function onLoaded (data){
			loader.offAll();
			loader._data=null;
			_this_._loaders.push(loader);
			_this_._endLoad(resInfo,(data instanceof Array)? [data] :data);
			_this_._loaderCount--;
			_this_._next();
		}
		loader.load(resInfo.url,resInfo.type,resInfo.cache,resInfo.group,resInfo.ignoreCache);
	}

	__proto._endLoad=function(resInfo,content){
		var url=resInfo.url;
		if (content==null){
			var errorCount=this._failRes[url] || 0;
			if (errorCount < this.retryNum){
				console.warn("[warn]Retry to load:",url);
				this._failRes[url]=errorCount+1;
				Laya.timer.once(this.retryDelay,this,this._addReTry,[resInfo],false);
				return;
				}else {
				console.warn("[error]Failed to load:",url);
				this.event("error",url);
			}
		}
		if (this._failRes[url])this._failRes[url]=0;
		delete LoaderManager._resMap[url];
		resInfo.event("complete",content);
		resInfo.offAll();
		this._infoPool.push(resInfo);
	}

	__proto._addReTry=function(resInfo){
		this._resInfos[this._maxPriority-1].push(resInfo);
		this._next();
	}

	/**
	*清理指定资源地址缓存。
	*@param url 资源地址。
	*@param forceDispose 是否强制销毁，有些资源是采用引用计数方式销毁，如果forceDispose=true，则忽略引用计数，直接销毁，比如Texture，默认为false
	*/
	__proto.clearRes=function(url,forceDispose){
		(forceDispose===void 0)&& (forceDispose=false);
		Loader.clearRes(url,forceDispose);
	}

	/**
	*获取指定资源地址的资源。
	*@param url 资源地址。
	*@return 返回资源。
	*/
	__proto.getRes=function(url){
		return Loader.getRes(url);
	}

	/**
	*缓存资源。
	*@param url 资源地址。
	*@param data 要缓存的内容。
	*/
	__proto.cacheRes=function(url,data){
		Loader.cacheRes(url,data);
	}

	/**
	*设置资源分组。
	*@param url 资源地址。
	*@param group 分组名
	*/
	__proto.setGroup=function(url,group){
		Loader.setGroup(url,group);
	}

	/**
	*根据分组清理资源。
	*@param group 分组名
	*/
	__proto.clearResByGroup=function(group){
		Loader.clearResByGroup(group);
	}

	/**清理当前未完成的加载，所有未加载的内容全部停止加载。*/
	__proto.clearUnLoaded=function(){
		for (var i=0;i < this._maxPriority;i++){
			var infos=this._resInfos[i];
			for (var j=infos.length-1;j >-1;j--){
				var info=infos[j];
				if (info){
					info.offAll();
					this._infoPool.push(info);
				}
			}
			infos.length=0;
		}
		this._loaderCount=0;
		LoaderManager._resMap={};
	}

	/**
	*根据地址集合清理掉未加载的内容
	*@param urls 资源地址集合
	*/
	__proto.cancelLoadByUrls=function(urls){
		if (!urls)return;
		for (var i=0,n=urls.length;i < n;i++){
			this.cancelLoadByUrl(urls[i]);
		}
	}

	/**
	*根据地址清理掉未加载的内容
	*@param url 资源地址
	*/
	__proto.cancelLoadByUrl=function(url){
		for (var i=0;i < this._maxPriority;i++){
			var infos=this._resInfos[i];
			for (var j=infos.length-1;j >-1;j--){
				var info=infos[j];
				if (info && info.url===url){
					infos[j]=null;
					info.offAll();
					this._infoPool.push(info);
				}
			}
		}
		if (LoaderManager._resMap[url])delete LoaderManager._resMap[url];
	}

	/**
	*@private
	*加载数组里面的资源。
	*@param arr 简单：["a.png","b.png"]，复杂[{url:"a.png",type:Loader.IMAGE,size:100,priority:1},{url:"b.json",type:Loader.JSON,size:50,priority:1}]*/
	__proto._loadAssets=function(arr,complete,progress,type,priority,cache,group){
		(priority===void 0)&& (priority=1);
		(cache===void 0)&& (cache=true);
		var itemCount=arr.length;
		var loadedCount=0;
		var totalSize=0;
		var items=[];
		var success=true;
		function loadComplete (item,content){
			loadedCount++;
			item.progress=1;
			if (!content)success=false;
			if (loadedCount===itemCount && complete){
				complete.runWith(success);
			}
		}
		function loadProgress (item,value){
			if (progress !=null){
				item.progress=value;
				var num=0;
				for (var j=0;j < items.length;j++){
					var item1=items[j];
					num+=item1.size *item1.progress;
				};
				var v=num / totalSize;
				progress.runWith(v);
			}
		}
		for (var i=0;i < itemCount;i++){
			var item=arr[i];
			if ((typeof item=='string'))item={url:item,type:type,size:1,priority:priority};
			if (!item.size)item.size=1;
			item.progress=0;
			totalSize+=item.size;
			items.push(item);
			var progressHandler=progress ? Handler.create(null,loadProgress,[item],false):null;
			var completeHandler=(complete || progress)? Handler.create(null,loadComplete,[item]):null;
			this.load(item.url,completeHandler,progressHandler,item.type,item.priority || 1,cache,item.group || group);
		}
		return this;
	}

	LoaderManager.cacheRes=function(url,data){
		Loader.cacheRes(url,data);
	}

	LoaderManager._resMap={};
	LoaderManager.__init$=function(){
		//class ResInfo extends laya.events.EventDispatcher
		ResInfo=(function(_super){
			function ResInfo(){
				this.url=null;
				this.type=null;
				this.cache=false;
				this.group=null;
				this.ignoreCache=false;
				ResInfo.__super.call(this);
			}
			__class(ResInfo,'',_super);
			return ResInfo;
		})(EventDispatcher)
	}

	return LoaderManager;
})(EventDispatcher)


	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/net/GameServer.as=======98.999965/98.999965
/**
*GameServer是游戏服务器核心类。管理Socket服务器、房间以及分配房间。
*/
//class laya.server.net.GameServer extends laya.events.EventDispatcher
var GameServer=(function(_super){
	function GameServer(){
		// Socket服务器 & 主服务器
		this.socketServer=null;
		/**所有拥有id的（除了room）对象都会保存在这里 */
		this.idMap=[];
		/**所有玩家都被保存在这里 */
		this.players=[];
		/**所有房间都被保存在这里 */
		this.rooms=[];
		// 在连接Platform时，Platform会通知有客户端连接，这时平台带着key属性，用这个属性验证客户端合法性
		this.userKeys=[];
		GameServer.__super.call(this);
	}

	__class(GameServer,'laya.server.net.GameServer',_super);
	var __proto=GameServer.prototype;
	/**
	*分配玩家的房间。
	*
	*@param player 待分配的玩家
	*@param roomId roomId
	*
	*/
	__proto.assignPlayerToRoom=function(player,roomId){
		if(GameServer.debug){
			this.addRoom(roomId,"Debug Room");
		}
		this.rooms[roomId].addPlayer(player);
		console.log("assign player "+player.id+" to room "+roomId);
	}

	/**
	*添加一个房间。
	*在游戏服务器收到来自主服务器的消息后被调用。
	*
	*@param id id
	*@param name name
	*
	*/
	__proto.addRoom=function(id,name,type){
		(type===void 0)&& (type=0);
		if(this.rooms[id])
			return;
		var room=Pool.getItemByClass("r",GameServer.roomClass);
		this.rooms[id]=room;
		room.init(id,name,type);
		console.log("create room "+name+", id:"+id);
		this.event("addRoom",[room]);
	}

	/**
	*根据id移除room。
	*如果room不存在，则忽略。
	*/
	__proto.removeRoom=function(id){
		if(!this.rooms[id])
			return;
		var room=this.rooms[id];
		this.event("removeRoom",[room]);
		Pool.recover("r",room);
		room.id=0;
		this.rooms.splice(id,1);
	}

	/**
	*根据id，获取room
	*/
	__proto.getRoom=function(id){
		return this.rooms[id];
	}

	GameServer.runServer=function(socketServerClass,csCommunicatorClass,platformClass,playerClass,roomClass,debug){
		SocketServer.runTimeClass=socketServerClass;
		laya.server.net.GameServer.I=new GameServer();
		CSCommunicator.I=new csCommunicatorClass();
		Platform.I=new platformClass();
		laya.server.net.GameServer.playerClass=playerClass;
		laya.server.net.GameServer.roomClass=roomClass;
		laya.server.net.GameServer.debug=debug;
		if(debug)
			SocketServer.runServer();
		else
		Platform.I.connectToPlatform();
	}

	GameServer.ADD_ROOM="addRoom";
	GameServer.REMOVE_ROOM="removeRoom";
	GameServer.POOL_SIGN_ROOM="r";
	GameServer.POOL_SIGN_PLAYER="p";
	GameServer.I=null;
	GameServer.roomClass=null;
	GameServer.playerClass=null;
	GameServer.debug=false;
	return GameServer;
})(EventDispatcher)


laya.server.collisions || (laya.server.collisions={});
laya.server.collisions.quadtree || (laya.server.collisions.quadtree={});
laya.server.collisions.quadtree.QuadTree={};
laya.server.collisions.quadtree.QuadTree.enable=function(){
	var modual;
	if(process.argv[0].indexOf("electron")!=-1)
		modual="quad_tree/quad_tree_electron";
	else
	modual="quad_tree/quad_tree";
	var QTree=require(modual);
	laya.server.collisions.quadtree.QuadTree=QTree.QuadTree;
	laya.server.collisions.quadtree.Rect=QTree.Rect;
}


;
	//file:///E:/git/layaair-dev/plugins/auto/AutoServer/libs/laya/server/rpg/RoomBase.as=======98.999959/98.999959
/**
*Room负责房间用户管理，广播及房间逻辑。
*<p>
*继承自RoomBase实现针对游戏的逻辑处理。
*</p>
*<p>
*RoomBase实例不需要手动创建，在GameServer.addRoom中会自动被对象池分配；在GameServer.removeRoom中会自动回收Room
*</p>
*/
//class laya.server.rpg.RoomBase extends laya.events.EventDispatcher
var RoomBase=(function(_super){
	function RoomBase(){
		/**
		*标识房间是否在激活状态
		*在调用active后，isActived为true；
		*调用deactive后，isActived为false；
		*/
		this.isActived=false;
		/**房间id */
		this.id=0;
		/**房间内的玩家 */
		this.players=[];
		/**房间名字 */
		this.name=null;
		/**房间类型*/
		this.type=NaN;
		RoomBase.__super.call(this);
	}

	__class(RoomBase,'laya.server.rpg.RoomBase',_super);
	var __proto=RoomBase.prototype;
	/**
	*初始化房间
	*@param id
	*@param name
	*@param type
	*
	*/
	__proto.init=function(id,name,type){
		this.id=id;
		this.name=name;
		this.type=type;
	}

	/**
	*在房间内广播消息。
	*
	*@param message message
	*@param exclude 排除指定的玩家，不向他发送消息
	*/
	__proto.broadcast=function(message,exclude){
		var player;
		for(var i=0,len=this.players.length;i < len;i++){
			player=this.players[i];
			if(player !=exclude)
				CSCommunicator.sendMessage(this.players[i],message);
		}
	}

	/**
	*往房间添加玩家
	*@param player
	*/
	__proto.addPlayer=function(player){
		player.room=this;
		this.players.push(player);
		this.event("roomAddPlayer",[player]);
	}

	/**
	*移除房间内的指定玩家
	*@param player
	*
	*/
	__proto.removePlayer=function(player){
		var idx=this.players.indexOf(player);
		if(idx !=-1){
			this.players.splice(idx,1);
			this.event("roomRemovePlayer",[player]);
		}
	}

	/**
	*判断房间内是否有玩家。
	*/
	__proto.isEmpty=function(){
		return this.players.length==0;
	}

	/**
	*激活房间，开始执行loop函数。
	*/
	__proto.active=function(){
		this.isActived=true;
		Laya.timer.frameLoop(1,this,this.loop);
	}

	/**
	*停止房间活动，停止执行loop函数。
	*/
	__proto.deactive=function(){
		this.isActived=false;
		Laya.timer.clear(this,this.loop);
	}

	/**
	*房间循环。在active()后开始，deactive()后停止。
	*<p>在子类重写实现游戏逻辑。</p>
	*/
	__proto.loop=function(){}
	RoomBase.ADD_PLAYER="roomAddPlayer";
	RoomBase.REMOVE_PLAYER="roomRemovePlayer";
	return RoomBase;
})(EventDispatcher)


	//file:///E:/git/layaair-dev/plugins/auto/msgs/BuyItemCM.as=======98.999958/98.999958
/**
*...
*@author yung
*/
//class BuyItemCM extends laya.data.MessageBase
var BuyItemCM=(function(_super){
	function BuyItemCM(){
		this.id=0;
		BuyItemCM.__super.call(this);
	}

	__class(BuyItemCM,'BuyItemCM',_super);
	var __proto=BuyItemCM.prototype;
	__proto.init=function(id){
		this.id=id;
		return this;
	}

	__static(BuyItemCM,
	['I',function(){return this.I=new BuyItemCM();},'DES',function(){return this.DES=[
		["id",2]];}
	]);
	return BuyItemCM;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/auto/msgs/UseItemCM.as=======98.999956/98.999956
/**
*...
*@author yung
*/
//class UseItemCM extends laya.data.MessageBase
var UseItemCM=(function(_super){
	function UseItemCM(){
		this.index=0;
		UseItemCM.__super.call(this);
	}

	__class(UseItemCM,'UseItemCM',_super);
	var __proto=UseItemCM.prototype;
	__proto.init=function(index){
		this.index=index;
		return this;
	}

	__static(UseItemCM,
	['I',function(){return this.I=new UseItemCM();},'DES',function(){return this.DES=[
		["index",2]];}
	]);
	return UseItemCM;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/auto/msgs/WelcomeSM.as=======98.999955/98.999955
/**
*欢迎信息
*/
//class WelcomeSM extends laya.data.MessageBase
var WelcomeSM=(function(_super){
	function WelcomeSM(){
		this.time=NaN;
		WelcomeSM.__super.call(this);
	}

	__class(WelcomeSM,'WelcomeSM',_super);
	__static(WelcomeSM,
	['DES',function(){return this.DES=
		[
		["time",8]];}
	]);
	return WelcomeSM;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/DataMessage.as=======98.999952/98.999952
/**
*数据更改消息
*/
//class laya.data.DataMessage extends laya.data.MessageBase
var DataMessage=(function(_super){
	function DataMessage(){
		this.type=0;
		this.sheetName=null;
		this.data=null;
		this.index=0;
		this.key=null;
		this.value=null;
		this.oldValue=null;
		this._operation=null;
		this._table=null;
		DataMessage.__super.call(this);
	}

	__class(DataMessage,'laya.data.DataMessage',_super);
	var __proto=DataMessage.prototype;
	/**@private */
	__proto.getClass=function(field){
		return ClassUtils.getClass("db."+this.sheetName+"Data");
	}

	/**@private */
	__proto.run=function(operation,table){
		this._table=table || Table.I;
		console.log(operation,this.sheetName,this.type==0 ? "add" :this.type==1 ? "del" :"update");
		this._operation=operation;
		var sheet=this._table.get(this.sheetName);
		if (!sheet){
			if (Actuator.main)Actuator.stop("can not find sheet "+this.sheetName);
			return false;
		}
		switch (this.type){
			case DataMessage.TYPE_ADD:
				sheet.add(this.data);
				break ;
			case DataMessage.TYPE_DEL:
				if (this.index >-1 && this.index < sheet.length){
					this.data=sheet.del(this.index);
					}else {
					Actuator.stop("Cannot delete sheet "+this.sheetName+" by index "+this.index);
				}
				break ;
			case DataMessage.TYPE_CHANGE:;
				var data=sheet[this.index];
				if (data && data.hasOwnProperty(this.key)){
					this.oldValue=data[this.key];
					if (this.value==null){
						sheet.change(this.index,this.key,this.data[this.key]-this.oldValue);
						}else {
						sheet.change(this.index,this.key,this.value);
					}
					this.data=data;
					}else {
					Actuator.stop("Cannot modify key that does not exist");
				}
				break ;
			case DataMessage.TYPE_UPDATE:
				data=sheet[this.index];
				if (data && data.hasOwnProperty(this.key)){
					this.oldValue=data[this.key];
					if (this.value==null){
						sheet.update(this.index,this.key,this.data[this.key]);
						}else {
						sheet.update(this.index,this.key,this.value);
					}
					this.data=data;
					}else {
					Actuator.stop("Cannot modify key that does not exist");
				}
				break ;
			}
		return true;
	}

	/**@private */
	__proto.rollBack=function(){
		var sheet=this._table.get(this.sheetName);
		switch (this.type){
			case DataMessage.TYPE_ADD:
				sheet.pop();
				break ;
			case DataMessage.TYPE_DEL:
				sheet.splice(this.index,0,data);
				break ;
			case DataMessage.TYPE_CHANGE:
			case DataMessage.TYPE_UPDATE:;
				var data=sheet[this.index];
				if (data && data.hasOwnProperty(this.key)){
					data[this.key]=this.oldValue;
				}
				break ;
			}
		console.log("roll back:",this._operation);
		return true;
	}

	/**
	*设置同步的数据
	*@param sheetName 表名称
	*@param type 操作类型：0:添加数据，1:删除数据 2:增量更改数据，3:更新数据
	*@param index 索引位置
	*@param key 如果是更新，则为更新的字段名称，否则不用填写
	*@param data 一条数据实例，必须是sheetName对应的类的实例，删除操作时，data可以为空，其他情况data不能为空
	*/
	__proto.setData=function(sheetName,type,index,key,data){
		this.sheetName=sheetName;
		this.type=type;
		this.index=index;
		this.key=key;
		this.data=data;
		if (type!==1 && data==null){
			throw "data is null!";
		}
	}

	DataMessage.TYPE_ADD=0;
	DataMessage.TYPE_DEL=1;
	DataMessage.TYPE_CHANGE=2;
	DataMessage.TYPE_UPDATE=3;
	__static(DataMessage,
	['I',function(){return this.I=new DataMessage();},'DES',function(){return this.DES=[["type",2],["index",6],["sheetName",9],["key",9],["data",12]];}
	]);
	return DataMessage;
})(MessageBase)


	//file:///E:/git/layaair-dev/plugins/data/src/laya/data/ErrorMessage.as=======98.999951/98.999951
/**
*...
*@author yung
*/
//class laya.data.ErrorMessage extends laya.data.MessageBase
var ErrorMessage=(function(_super){
	function ErrorMessage(){
		this.type=0;
		this.error=null;
		ErrorMessage.__super.call(this);
	}

	__class(ErrorMessage,'laya.data.ErrorMessage',_super);
	__static(ErrorMessage,
	['I',function(){return this.I=new ErrorMessage();},'DES',function(){return this.DES=[
		["type",2],
		["error",9]];}
	]);
	return ErrorMessage;
})(MessageBase)


	Laya.__init([Timer,LoaderManager,DataDecoder,EventDispatcher,MessageInit]);
	new Main();

})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}