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
			axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
			.then(function(response){
				console.log(response.data.data.forecast);
				that.weatherlist = response.data.data.forecast;
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
