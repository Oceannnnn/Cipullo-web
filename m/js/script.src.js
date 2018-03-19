new Vue({
	el: '#app',
	data: {
		"index": {
			"banner": [{
				"img": "img/banner1.png",
				"title": "style",
				"text": "秉承 [爱] 与 [美学] 的设计理念的同时，展现对珠宝设计及美学融合的不懈追求和独到见解"
			}, {
				"img": "img/banner2.png",
				"title": "style",
				"text": "秉承 [爱] 与 [美学] 的设计理念的同时，展现对珠宝设计及美学融合的不懈追求和独到见解"
			}],
			"brand": [{
				"img": "img/home_设计师.png",
				"text": "Aldo Cipullo 国际顶级珠宝设计师",
				"url": "designer.html"
			}, {
				"img": "img/home_背景.png",
				"text": "维琪奥桥诉说着一段段凄美动人的爱情故事",
				"url": "background.html"
			}, {
				"img": "img/home_诞生.png", 
				"text": "神秘浪漫  爱的气息 ",
				"url": "born.html"
			}, {
				"img": "img/home_诠释.png",
				"text": "传递爱  分享爱",
				"url": "interpretation.html"
			}],
			"series": {
				"img": "img/home_进入系列.png",
				"url": "series01.html"
			},
			"nav": [{
				"head": {
					"text": "首页/HOME",
					"url": "./"
				}
			}, {
				"head": {
					"text": "产品系列/SERIES",
					"url": "#series",
					"open": false
				},
				"sub": [ {
					"text": "LOVE Bridge(爱桥)",
					"url": "series02.html"
				}, {
					"text": "V-LOVE(相爱)",
					"url": "series03.html"
				}, {
					"text": "Starry(星座)",
					"url": "series04.html"
				}, {
					"text": "Pure(纯真)",
					"url": "series05.html"
				}, {
					"text": "Rainbow(彩虹)",
					"url": "series06.html"
				}, {
					"text": "Embracing(萦绕)",
					"url": "series09.html"
				}, {
					"text": "Collection(三色碧玺)",
					"url": "series11.html"
				}]
			}, {
				"head": {
					"text": "品牌世界/BRAND",
					"url": "#",
					"open": true
				},
				"sub": [{
					"text": "Designer(设计师介绍)",
					"url": "designer.html"
				}, {
					"text": "Background(品牌背景)",
					"url": "background.html"
				}, {
					"text": "Born(品牌诞生)",
					"url": "born.html"
				}, {
					"text": "InterPretation(品牌诠释)",
					"url": "interpretation.html"
				}]
			}]
		},
		"series": {
			"endless": {
				"img": ["时空1.png", "时空2.png", "时空3.png"],
				"text":"游走于现代都市，珠宝的魅力除了在于它的昂贵，还在于它的炫目感。独特的意大利工艺，利用发散性的几何空间线条，以流畅的延展性赋予无限的想象空间。"
			},
			"lovebridge": {
				"img": ["爱侨1.png", "爱侨2.png", "爱侨3.png", "爱侨4.png"],
				"text":"Cipullo LOVE Bridge 系列，带你重返中世纪的佛罗伦萨小镇，为爱扬帆。中古经典碰撞现代时尚，塑造柏拉图式的 “臻爱永恒”。"
			},
			"vLove": {
				"img": ["相爱1.png", "相爱2.png", "相爱3.png"],
				"text":"V-LOVE，源自于 Ponte Vecchio’s Love，与“We-Love”同音。体现平等、信任、和崇尚永恒的爱情观，同时也为眷侣佳偶们纪念专属的爱情时光。"
			},
			"starry": {
				"img": ["星座1.png", "星座2.png", "星座3.png", "星座4.png"],
				"text":"十二星座、天文符号、欧洲古神话中等梦幻星空元素赋予了Cipullo Starry 系列无限的寓意。与瑞典波基塔公主的结缘，更使得Cipullo这颗爱的恒星更加闪耀。"
			},
			"pure": {
				"img": ["纯真1.png", "纯真2.png", "纯真3.png"],
				"text":"Cipullo Pure系列采用来自意大利的珍珠母贝环绕着镂空雕花设计，柔和的色泽与天然纹路就像平静的大洋一般，浩瀚温润。精致小巧不失典雅，更凸显出女性的婉约之美。"
			},
			"rainbow": {
				"img": ["彩虹1.png", "彩虹2.png", "彩虹3.png", "彩虹4.png"],
				"text":"维琪奥桥的远古爱情之温馨、激情、甜蜜、浪漫、动人、凄美和永恒汇聚迷人的七色彩虹，每一道颜色都是爱情的痕迹。不灭的天然之光寄寓对美好的向往。"
			},
			"bloom": {
				"img": ["绽放1.png", "绽放2.png", "绽放3.png", "绽放4.png"],
				"text":"金属质感的花卉与藤蔓缠绕，灵动的蝴蝶旋舞于花间，荡漾出玲珑婉转。多元的材质，拉丝，喷砂，镶嵌等多种处理方式，带来个性化的视觉效果。"
			},
			"lace": {
				"img": ["蕾丝1.png", "蕾丝2.png"],
				"text":"精致而不繁复，丝丝紧扣地呈现蕾丝轻盈贴覆的复古质感，重现16世纪欧洲女性风韵。娇巧而又飘逸，将都市女神气质演绎到极致。"
			},
			"embracing": {
				"img": ["萦绕1.png", "萦绕2.png", "萦绕3.png", "萦绕4.png"],
				"text":"简约之中彰显气派，妩媚优雅的姿态。这是缘系一生和心灵交汇的呼应，在呈现迷人的意式风情、深厚的传统底蕴和精湛的制作工艺的同时，寓意幸福美满萦绕一生。"
			},
			"light": {
				"img": ["小清新1.png", "小清新2.png", "小清新3.png"],
				"text":"精致纤丽之余，又带点复古味。清新可人的外貌，绝对养眼，用完美的S型曲线表现流畅而又自然的“美”。"
			},
			"collect": {
				"img": ["收藏品.png"],
				"text":"碧玺又称愿望石，自身具有微弱的能量，是倾向吸收性的宝石。因为“碧玺”与“避邪”谐音，常被人们看作是纳福驱邪的主要宝石。"
			}
		},
		"brand": {
			"background": {
				"img": "品牌背景.png",
				"text": "<p>“Ponte Vecchio (维琪奥桥)”,被称为著名的欧洲三桥之一； 从古罗马时代开始就横跨在阿诺河河道最狭窄的地方；见证了文艺复兴时期伟大诗人但丁与其柏拉图式爱情对象贝特丽斯的凄美爱情故事，诗人倾注了一生时间将这纯粹的精神的爱埋藏于心中，也因此激发了其无限创作灵感，他把她写进《神曲》升华成为最圣洁的女神，然后他们终于永远在一起。</p><p>所幸的是，历经几次洪水冲毁，在战争的破坏和社会冲突中，Ponte Vecchio 仍然能被保存下来；现已称为当地的地标之一。在桥的岸边以及桥上仍有一些具传统特色的金饰和珠宝店；热恋中的情侣还会相约来到桥上, 锁上一把写着二人姓名的锁，祈求爱情终老，据说只要锁上挂锁，把钥匙丢入河里，这样情侣就可以永远在一起。</p><p>厚重神圣的Ponte Vecchio (维琪奥桥)，诉说着一段段凄美动人的爱情故事，更赋予了CIPULLO璀璨臻美的品牌情怀及生生不息的创作灵感！</p>"
			},
			"born": {
				"img": "品牌诞生.png",
				"text": "<p>桥拱、倒影、小船、扬帆、船帆映在水面……这美好的情景，完美的汇结成为一个真诚的笑脸和一对情侣的侧面，他们深情望，眼中只有彼此，只待轻轻一吻……</p>"
			},
			"designer": {
				"img": "设计师介绍.png",
				"text": "<p>1935年 ，Aldo Cipullo 出生于意大利那不勒斯，青少年时期就曾在父亲Giuseppe Cipullo 罗马的首饰珠宝店工作。就读于佛罗伦萨设计学院期间，Aldo Cipullo 深受欧洲古典文化的熏陶，尤其是这座“建了毁，毁了建”见证着无数动人故事的维琪奥桥(Ponte Vecchio)，深深地撼动着他灵魂的最深处，他深信：人世间至真至诚的爱无需畏惧时间的洗礼，甚至因此而升华和永恒。</p><p>1959年，Aldo Cipullo 前往美国并定居纽约发展，并逐渐活跃在当时纽约的时尚界、艺术界和文化界;在定居纽约期间，进入全球顶级奢侈品品牌公司，成为炙手可热的奢侈品设计师。</p><p>1970年，其跨时代的经典之作“Love”系列面世后，很快广受推崇，成为业界享负盛名的设计师，此后便一直被视为世界珠宝设计和潮流的风向标。同年，因设计海星钻石手环（Starfish Bracelet）一系列高级珠宝作品而荣获业界大奖。</p><p>1974年, Aldo Cipullo 获颁 Coty Award 时尚奖，同时自立门户，成立 Aldo Cipullo 独立工作室，施普洛品牌华丽诞生！他将自己对爱和美学的理解完美地融入珠宝作品当中。Aldo Cipullo 秉承 [爱] 与 [美学] 的设计理念的同时，展现对珠宝设计及美学融合的不懈追求和独到见解，继全球首发“LOVE”系列之后，再一次以“爱”为主题创立了融非凡设计与精湛工艺为一体的珠宝臻品施普洛Cipullo。藉此诠释、缅怀和传颂源自维琪奥桥上伟大的诗人但丁和贝特丽斯动人、美丽的爱情故事。Cipullo专属定制摩羯座项链获瑞典皇室成员波基塔公主钟爱，璀璨奢侈品瑰宝闪耀国际舞台,开启了Cipullo品牌的又一个传奇之旅。</p><p>时至今天，Cipullo不断引领奢侈品时尚潮流，Aldo Cipullo和Cipullo两条产品线分别为广大消费者提供了高端优雅和轻奢时尚的购物选择，开创奢华而不奢侈的购物体验。</p>"
			},
			"pretation": {
				"img": "品牌诠释.png",
				"text": "<p>核心文化：臻爱永恒</p><p>品牌理念：传递爱、分享爱</p><p>核心价值：源自欧洲文艺复兴时期的古老爱情故事 国际顶级珠宝设计师的传奇之作</p><p>独创、时尚、简约、格调非凡、引领风潮的优质品牌形象 对 [爱] 及 [美学] 的不懈追求和独到见解</p>"
			}
		},
		isShow: false,
		sno: false
	},
	ready: function(){
		var seriesSwiper = new Swiper('.series-container', {
			loop: true,
			autoplay : 3000,
		})
	},
	methods: {
		showSilde: function() {
			this.isShow = true
		},
		hideSilde: function() {
			this.isShow = false
		},
		sn_ts: function(index) {
			var el = document.querySelectorAll('.series-ul-open li');
			for(var i = 0; i < el.length; i += 1) {
				el[i].className = ''
			}
			var cn = 'ts';
			if(el.classList) {
				el[index].classList.add(cn)
			} else {
				el[index].className += ' ' + cn
			}
		},
		sn_te: function(index) {
			var el = document.querySelectorAll('.series-nav li');
			for(var i = 0; i < el.length; i += 1) {
				el[i].className = ''
			}
		}
	}
});