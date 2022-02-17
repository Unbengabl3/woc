var app = new Vue({
	el:"#app",
	data:{
		city:"",
		weatherlist:[],
		imgg:""
	},
	methods:{
		seacherWeather:function(){
			var that = this;
			axios.get("https://yiketianqi.com/api?unescape=1&version=v1&appid=76395713&appsecret=jxQm14PE&vue=1&city="+this.city)
			.then(function(response){
				console.log(response.data.data);
				that.weatherlist = response.data.data;
			}
            )
            .catch(function(error){
                console.log(error);
            })
			axios.get("https://jiaotong.baidu.com/trafficindex/city/list")
				.then(function(response){
						console.log(response.data.data);
						that.weatherlist = response.data.data;
					}
				)
				.catch(function(error){
					console.log(error);
				})

		},
        changeCity:function(city){
            this.city=city;
            this.seacherWeather();
        },

		bing:function (){
			var that=this;
			axios.get("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN")
				.then(function(response){
						console.log(response.data.data.forecast);
						that.imgg = response.data.data.forecast;
					}
				)
		}
	},
	  
})
