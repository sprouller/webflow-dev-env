(()=>{$(".calc-checkbox-item").on("change",function(){$(this).toggleClass("active"),$(this).find(".form-checkbox-label").toggleClass("cl-checked")});$(document).ready(function(){$("#income").keyup(function(l){l.which>=37&&l.which<=40||$(this).val(function(t,a){return a.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")})}),$("#monthly-saving").attr({max:150,min:10}),$("#dmGo").click(function(){let l=$("input[name='period']:checked").val(),t=Number($("#monthly-saving").val()),a=t*2,e=$("#income").val().split(",").join(""),i=12570;$("#monthly-saving").val()<10||$("#monthly-saving").val()>150?($("#savingError").show(),$("#result").hide()):($("#savingError").hide(),$("#result").show()),e<i?$("#incomeMin").show():($("#incomeMin").hide(),$("#result").show());let C=0,n=33.25,o=43.25,s=48.25,v=0,r=32.25,m=33.25,h=34.25,f=54.25,g=44.25,u=49.25;l=="eng"?e>15e4?taxCalc=t*(1-s/100):e>50270&&e<=15e4?taxCalc=t*(1-o/100):e>12570&&e<=50270?taxCalc=t*(1-n/100):e<=12570?taxCalc=t:taxCalc="Error":l=="scot"&&(e>15e4?taxCalc=t*(1-u/100):e>50270&&e<=15e4?taxCalc=t*(1-g/100):e>43662&&e<=50270?taxCalc=t*(1-f/100):e>25688&&e<=43662?taxCalc=t*(1-h/100):e>14732&&e<=25688?taxCalc=t*(1-m/100):e>12570&&e<=14732?taxCalc=t*(1-r/100):e<=12570?taxCalc=t:taxCalc="Error");let x=Math.round(taxCalc*100)/100;$("#dmShareCost").text(c(x)),$("#dmShareValue").text(c(a))});function c(l){return new Intl.NumberFormat().format(l)}});})();
//# sourceMappingURL=index.js.map
