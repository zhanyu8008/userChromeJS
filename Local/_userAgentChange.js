//2014.12.11 22:00 調整圖標

DISPLAY_TYPE =1; // 0显示列表为radiobox, 1显示为ua图标列表

SITE_LIST =[
{url : "http:\/\/vod\.kankan\.com/",Name : "Safari - Mac"}, //直接可以看kankan视频，无需高清组件
{url : "http:\/\/wap\.*",Name : "UCBrowser"}, //WAP用UC浏览器
{url : "http:\/\/browser\.qq\.com\/*",Name : "Chrome - Win7"}, 
{url : "http://www\\.google\\.co\\.jp\\m/",Name : "iPhone"},
{url : "http://wapp\\.baidu\\.com/",Name : "iPhone"},
{url : "http://wappass\\.baidu\\.com/",Name : "iPhone"},
{url : "http://wapbaike\\.baidu\\.com/",Name : "iPhone"},
{url : "http://weibo\\.cn/",Name : "iPhone"},
{url : "http://m\\.hao123\\.com/",Name : "iPhone"},
{url : "http://m\\.mail\\.163\\.com/",Name : "iPhone"},
{url : "http://w\\.mail\\.qq\\.com//",Name : "iPhone"},
{url : "http:\/\/m\\.qzone\\.com/",Name : "iPhone"},
{url : "http://wap\\.58\\.com/",Name : "iPhone"},
{url : "http://i\\.jandan\\.net/",Name : "iPhone"},
{url : "http://www\\.tianya\\.com\\m/",Name : "iPhone"},
{url : "http://m\\.xianguo\\.com\\wap/",Name : "iPhone"},
{url : "http:\/\/ti\\.3g\\.qq\\.com/",Name : "iPhone"},
{url : "http:\/\/[a-zA-Z0-9]*\\.z\\.qq\\.com/",Name : "iPhone"},
{url : "https?://(?:mybank|mybank1?|b2c1)\\.icbc\\.com\\.cn/",Name : "Firefox10.0"},//工商銀行
{url : "http://(.*?)n\\.baidu\\.com/",Name : "BaiduYunGuanJia"},//百度云


],

UA_LIST=[
{name : "分隔线",},
{  name: "IE8 - Win7",//此处文字显示在右键菜单上，中文字符请转换成javascript编码，否则乱码(推荐http://rishida.net/tools/conversion/)
ua: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)",
label: "IE8",//此处文字显示在状态栏上，如果你设置状态栏不显示图标
img: "data:image/png;base64,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"},

{  
		  name: "IE6 - XP",
		  ua: "Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
		  label: "IE6",
		  img: "data:image/png;base64,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"},

{name: "分隔线",},

{  name: "Chrome - Win7",
ua: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1623.0 Safari/537.36",
label: "Chrome Win7",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADEklEQVQ4ja2TfUzUBRzGv/MNj7sOma60tsw1p5tvG0YtyZZbTWjFfAEEvQt3HRcGviAVnRo4sNSJjB3GBJsEh4eeogc2RR0OcucQg3g5gWHE8KQz9DJI7gX58ekPN/+x+qvn7+ezPXv2PCL/t66tnldXGx0VqEhKpMJkwp76CVd1a8c6EyIbb4lM+3fwPU180ZL5yvnMnfx6xk6grYWJ3m7GulwM1l/hevG3XI77UBlYOSflGfjUelWC+fmZNOzNJlhyBH9mGr6P4vElb8C31Ugg/2senz9He0U5JzYl0Rv1Yu5TuKBAVDGGMKXKbKDzrUh6IpcylJfDHwf24T20H29hPg+LLQx9rGc4L5ufjxZje3cV98MkQkREtueH1xkLoznetBjHbC1t29Lx1DoIPrgPgP/3e3guXqD30EFa13xAT1I81elpXI2Y3S4iItHm8ODnNcvJa51Hw6VUblfZ8IxMUHp9nMIGBVuLwkMf4LaDKwfq38BlWY11zSuDIiKyzDiDLxtfJqd5LtV9O3jk9fBVzQg7Tvsx1wTI/iFAqTMIo/3QuRMuv8oD61wOL39hXEREFujCMDtfIvfGQhx9WYwGxok9eIv1FjeJx4bRHx/GUD4MEwp0mKBOy+Oa6TjjpoBdJstiQxjG6llkNc7hZHc6fwYG0ec3EZX1I2/vucmqXBcZlXfhUTd06OCC4LcJzRvlSYKV2zTB9wu1mBzh2FxbuPlbFf2eETbur2eJ6Swplmbuev0wcATadFArDBUIrk/lSQfJu0MvvpbxHHFlajaf1mLtSMV5p4yh0T4A7v3Vw1i/BVp14BA4K3RtFX4xS5GIiGRkiCrCpFHe3KUmtkRFklXDd80plLWY+L7VhLPFADd0YBc4Jbj3Cj/pxYddJj8dU/ruaRsWbdby+hehxBSFsK5URWJ5KPoTatyVk8AqUCkMmIWmBFH698g7z8w5MyskJtKoGV+WpiYqZzqJh6fyTclUgkWCd5/QlSq0GWTQvUuW/ucbdZ+F1K7Yog7UxQvXYoWmOFHak8XTu10O/JP/b0GL++9dNq8KAAAAAElFTkSuQmCC"},

/*{  name: "Chrome - Mac",
ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
label: "Chrome Mac",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB7UlEQVQ4jWNgoDYwZmBgXaqjGPvIWnfdCzv96y/tDG4/s9Xfuc1ApcBTiIEPr+YmJXHd57Z6117aGfzHhl/Y6r9cqavkhVVzkoiI1Etb/Xe4NCPh3+t1lQPQ9TM/sNb1fG6jdxrNxnsv7AxOv7AzOP3S1uAMDL+w1d/ry8DABdc9Q10u5IWt/ssnVjreL231/72w039x00LL84ChauRyLaWkCjl+wV2GqpF7DFWbYHilrgLCFTcsdBa/tDP4/9RWr+u5jf6qm5a6AciueWGr/+immZbtSzuD30hiV+AGvLAzOPXSzuD/Czv9H9dMNe126KkGo/v9iJFG1XMbveNwMVuDX8gGwG17YK23dpmOYhi6ASdMNepeIBtgZ/CHgYGBEeoF7RUIk/X/PbLW83tpq38D7lw7gzd3rLSdkL3w0lb/JtwFs7XkYtDj+5mtbsA5U628kybqZbNVpGXuW+utRVZzwUyzD26ANgMD2wtb/dsozrbV//fSzuDWS1v9nQ8tdXygfKiL9L+kSQnKoSSENgUZ8xe2Bl/R/f7ESjfhha3eJWSDtxuoxWNNjf3KUtYv7fQfI7yid+yprX4uwkD9z1v1VWKxaoYBBwYGng26SoXPbPQO3zPXcX1hq3/vpZ3+uSMmaq1JIiJSeDWTAwBf3VAlT96iJAAAAABJRU5ErkJggg=="},

{  name: "Chrome - linux",
ua: "Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.462.0 Safari/534.3",
label: "Chrome linux",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB50lEQVQ4jWNgoD4wZlWLWBVrWvVinXndh+vmdR9um9W83amZtLdASMWTD69WGZcOXbOad9fM6z78x4FfqkVt8MKqWcQwScq89sM7PJph+LdmwrYAdP3MJuXPPU1r3p9GVmxW+/6eWd2H02Z1H06b1344A8Nmte/3Mkj5csF1KwbNCzGv+/DSuOq1t1nth3/mtR9eGBY/8NROPxapErEmid+mQlA75UCkdtqhJhhWi1yDcIVRyb3F5nUf/pvVvO0yq327yrjsfgCya8xq3z8yKr1na1734TeS2BW4AWa1H05BBD/8MCy+ZaedtC8Y3e962aerzGreHkcY8OEXwoC6D3DbTCqfr1WPXBOGboB+9rk6s5p3cAPMaz/8YWBgYIR4ofT+CiST/5lUvvAzq/1wA0nsjVHFEycUL9R9uAl3gUrwwhj0+DaueRNgmH85TzfnbJl00GwZk8pna5HVGORf60OKRW02s9r3t1Gj8MM/89oPt8xqP+w0qnzhY1b74R9SAH4RNM6XQ02Fbt3mZnXvv6L73bTqVYJpzbtLyAZrJ++Jx5oa5fwmW5vVvX8M11z77phZzatchIHvP2sm7IrFqhkORB14NOO3F5rVvDtsUvbQ1az2/T2z2vfndDJPtooYJknh10wGAACB6IAc8VaKWAAAAABJRU5ErkJggg=="},*/


// 伪装 Android Droid
/*{  name: "Android Droid",
ua: "Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17",
label: "Android Droid",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASElEQVQ4jWNgQANLjln+RxcjRg5D4apTrv+XHLNEwURrhtHomgkagq4JF6adAWQBdD8S6wI4e9SA/1gDdODTAbpCkhMQXQ0AAEsuZja4+pi7AAAAAElFTkSuQmCC"},*/

//伪装 Google 爬虫
/*{ name: "Googlebot",
ua: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
label:"Googlebot",
img:  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACxklEQVQ4jb2TW0hTARjHj1j0kiXdL/YSCdJDF4qECsGSQJOeWgVFrCItug260LrASaY2llvbWm6i6damZbZZbEuns9Uu7tY2d87Z2c7Z2XrxIaiwl6DA/j1Uq4guT/1fvpf///d9H3wfQfwHFfWYTK4Rt2fS5XKVK5XK5X90kyRZo9Foyq4rFAdUqtsrT5yRViYoBrzwcspqtS6SyWQbfwldukSuEYslpSRJrhoYsJ3xj4dedXUHIWsdmNq2XTe1ZasdbTeHPvb32zaYzGZJa6ty1Y8dZ5AkOc/nD5k9Xh8diSffmSyJt3v2qcDyOQSjHErmWmDoegp/KPomwWQQo1mtSCQqbmw8XU5YLJaV32CO4RFlRngJydkg6uo1YLN5sNk8anYM4NzFW2D4PBguj2Q6+2nY/cwh12qXEcbe3jVGo6Var++s6uq5a0tl89B1+DGntAlDYwnQXA519So8fOwClckhmckhmRbeaDTOWYU1RCJRscM1xtJcDjSXB83lcEPdB/ERNXbu6oWm/R4mWAETaQGJtIAEK+CJ61ldAaDW3VYEY9T09w45TKQFBOMcFiy+ioOH+xClecTYLGKpLF6ksgjEaDQ3q5YSBEEU9w/aJ3+kO0YYSM514FqLGRcu67BoyTEcONSBKMMjyvCIfKl0YQL70Gh1OMlGYqksnodZrFt/Eg63txC4/8iHshX74YsxCFM8QhQ/7XtBnf/pFrQGQ4V91Bt/aA9jdsleDA4FEKZ5hKjMa3eAel9bfwr+OItQkhO6u22l+k5LlVwuLykApNKWhQ8eDw+HKA6Np+SoWC3C8dMqyBRmtfjwlaNmq1Pmjafehhle+tszbmhomGkw9VU6PYGwJ0J9eDTqg30s0EQQBNGsUi1t0+jXEgRR9Mdf+Kqiuw8GN7uej2+5Z3PWtncaN+nvmHffMhrn/0v4J9DfDJ8BKCTDLoGbeskAAAAASUVORK5CYII="},*/

{name: "分隔线",},



//伪装 Opera 10.60
{  name: "Opera",
ua: "Opera/9.80 (Windows NT 6.1; U) Presto/2.6.30 Version/10.60",
label: "Opera",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADU0lEQVQ4jW2Te0xTBxTGT2If3Esf9+ptKXBb6i1KW2zVltnqKBbBiWtFnTRZBUGLwwVnhtIAkSAYA1GiW3yGskTjIzJBokTjI2FlgywbooTEaLRGka0jkkHWtLiYLnr2h7lEiN+/33d+f5zzHYA56nPatc+KChvHfduGJ3wlsVdfbZ+e+GbX8PPSLxv7nHbt3PwsBbNt1pdbNgajO0rj0xXlGC4r+felrywaral+N11fGx+r8AUHXLnWjw5ftSwxh1wFg1GvB6MlXhwpyH/UtcxYfEm/yD1QkD8Qq/PjmwP1+MfXOwdvO2zmWcOVCpD86rB3TBa6MbplM44Vut5eNy/x8/5Fg8H1rLQ4Gq+vxde11ThStLmjSQGSGcBZPed+smZ1ZNK1DqcKXfgo3xm5tJjL4/1WRaLqt8/yRmLfVuIbfxWGy8siXSuWunlf2LPUGBjNzcHx/Fx8tW4t3vvUPhHgWBMfqAAgf85Z2T3l24axXeU45SvFYG52wAogBC8Ac9Nk6H+RbcdRx0occzpwIGv5X9+rVDMb9wCI7tgs58aLNuHUVg9ObvXgL87s/goABooJgr2awYUeZy3Hx59Y8InNir0m49h37ILUDwDzbi4zBZ6vz8PwhvUY3vA53rVZQjsJgoVigmAvc5rQkFGPQ5l6fGAy4i19+p/HUlLUPMAJIOjJ1Lc/dNjw6epVGHKuwhtm43uAVyplzqmT+3sXavAnToN9Oi32cGnjbSy7iAfsARBfM+gu/G4x4X2rGYcsZuwy6Pq9UmDACiA8nqwMdKqU2K1SYneyEn9kk/9uU6uzeMARhpF26tJu3c3gsDdDh3cyOPxBq3m/RACAJoZ2n6apSJtMgu2UFNuVC163pbFf8IB2jSbzvCYlfCVVhZ2pKrygVkUOJTEzZ4RKBUiaaVnH4cQEbEkQYauUxJNJyosBjpOfSE8XB9JSG04q6P9OzZfhGYbGo0lMhwc+KBIAwH6aNh+QkoN1IiHWCAXYQIqnW5V0z7Ek5nILJfvnYGICNktJbJkvH9xP07OrzKtaLrfWSIhglVAQ3y2Yh3tEAtwrEuI+kRBrSXG8gZIE6xj5x5+JVxVFaf0ysnFfIjlcSYhjuwlxzC8jh2soSWMVRWnn5v8H1UdFzNmdWS0AAAAASUVORK5CYII="},

{name: "分隔线",},

//伪装 Safari - Mac OS X
{  name: "Safari - Mac",
ua: "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; ja-jp) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16",
label: "Safari",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADWElEQVQ4jXVTW0ybBRj9zGZMXEh4MY43ZwwaNRpRBMma6EhMjGOTGegykazLplvFQpPBFkkpBWopBRmGFVqxTEvbWQq9rrS0/WsvdL1x35gbc7rJH9mg0DHGMhw5vuHU7Tydh++c5Hw5h+gfPPEQp6Kioh0CobC4Uig8UFFR8RYRbaHHgcPhZEUiEaNOp6vkcrmvXro41jEaDcxEQ76/4hEfYmHfn1PjMTPDMB8/0qCwsPBlm93OhoKh9dnp2HxwJIzWniFIlG40dg9DonRgwMng8sXExuWZSUMJj/fM/0y+PXWq/cbsNCTdFhxti0FtYaF1L8DgXUafOwVxzwwEzSZMTyUxFo949hw6lLEplkqlObNT0bk6lRVfyqLwjNxG//gD9DM3offcgi2chju2CoU5BZ7MikuTcVhMxpObz/O57GomGMKR7guw+G4iWVWLXlUEDd4HsCVWUK+dg9IyB1MgjZo+Fh16F877Xb+/m5u7nUoOHtzuthuvynU+yB0pKBNAlVCLZN5OmBr70HT2GgQ6FjXmBbTYb+FM4C5qzpyH02FGq0z2CVVVV+f4HMb7wp4QPtWkILItotR2D5LdfCx9kAeFwow9mutomViDKrGKRs9d7OscQ4AZRldHez3xjvALGKtu45h6BE/yWTxf+yvkzgW0nLuK1q+7cCd1A+1Dc+jS/4YDBhbblEt4QzaBZNiLb5qbZMTllmebf1AtNhv9IOki6CQLOnEFr7lXUGy+hgF3EncW0sj76gpIyYIcayjWjCJo70e9qLaCiGhbZ5ucCXideP3H6yD1fVB3CsTcBiecxvG+X/B5Zxz28Xk867qHrQNL0A4F8ZPm9Oo7nF1vExHRsS8Ehx36Xnzv8CDLsgIa3ACF1/C0dRkv9C+D1CnkGP7AS5ZFVDouIOqyQCQS2R6u/1NicYPHP2iAbvhnvOedR4Z3DRRcB/nXsSW0gSznEiTDo0i4rWhrkaff//CjN//VxPz8/Odq6+pGBnu/g99hRq8/jmpmEpW+aXQEJsD4GfhMerQ2y+b3lewvfuQmMjMzMz/j8+VSsZhVK2SwaVQY0mqg72yHoqkhLRAI7bkFBbmPXeVmnoyMF3fv3csrKytrKy8vP11auv94dvYrO4lo639v/wYCax87ws5wXwAAAABJRU5ErkJggg=="},

/*// 伪装 Safari - Windows7
{  name: "Safari - Win7",
ua: "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16",
label: "Safari",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABd0lEQVQ4jYXTv0vWURQG8I9lvP4oCQvRIRN/VkPSlLzkJCRBUoJkiP+DDg3iKNTQkC01qKBCSLw1NBoRQaENLREILQ0RlIODhGIgosM9wtc3Xz1w4d5zz/Pcc55zLkdbNc7ixDFxoAMPcBu9eIRlfMUrDON8KXAZRtGPd9jBFr7hM35jN863SpEM4WMELuAmzuEMLmMEq0F85zCCqQCPoTx8tWjLxFzHd/xBu6KLLbxwULAcGmJ/D63owjaeZgke4h9uFGU1jAk8jpUL/xv8xEWoxKdIrT5erMN9Sdj3WMEltEitfYJN5OE0vkgK16MGFRgM0hlM4kqsqgxBt6h5XlK4JVJsxkvMRnnXikqbw1907jvuSh0YifM4BmLf4KA1Sl1YzGiiBkvSwPREmnASTRlwDoV47L9ZyGMDv9CXIamWJrUVrwP8rBi8b71Se3bxAdOSiAWshf+5JHxJa5ZU/iEpvYl1vJX+StlR4KxdkKYuj6s4dVjQHmMlTZu/PHeoAAAAAElFTkSuQmCC"},*/


 //伪装 iPhone，查询http://www.zytrax.com/tech/web/mobile_ids.html
{  name: "iPhone",
ua: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16",
label: "iPhone",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADLSURBVCiRddA/C0FRGMfxc4UyGdQNpQzIKzDhFViNZvKn7y5loow3Ay/AaLQpeQUMkkWhjBbFonQM13X9efRM5/l9zjlPj9Lqu4hSJeycfuMUKy5E/wB8TNEM3I4beTHxE+HIiBjBD4BBhSVH1lj0mbDlwJgMhlZKKzw00ULNMG2Q4yzEOxLPL2iL91uvGRiKoOSCjggsFxS5C+BCAY8NYizFN26UnT3URHAi74AAcwE03lZNkg0azZ4F168hnyRNjypxQmTpUsdr9x/STR736IkaIQAAAABJRU5ErkJggg=="},

//伪装 Apple iPad 2
{  name: "Apple iPad 2",
ua: "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
label: "Apple iPad 2",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADG0lEQVQ4jW3R708TdxwH8HPGB0fLj0TguN5dCxkLiUSDOrLExDAXf8RHOjKJmTEKrcUftKUdlLrVWQwI18QZ2Nwsa7vatBRaaHtnqdIqFIzgZtzOLtb4wGV/h7lv33uwLIuh7z/glc/7/aGof7Otq6vrF4NeX2rmeaVFEIoCpyt+fuJE0Ts5WbzmdhfdV13FEeeQ4rDbSy6XK+LxeD6g/ks8Ht8ucFyplmHR1L4bDR+1YeeHbdhz8FOM3boN9/gEnNc9sLu/Rb/FAqPR+Nbn8+14D+B1uj+Omy6VZ5Zy6mg0UZ7KyGVvMlWOrq2XpY2NsvT8RTn/8pU65vOXu0+eLG0BdCyrfNl/GbnlHAnML2JubgaR2D3IhSyevVhB/skaXhafk/Hb0/js0KHXWwCWZRXboAOp5QKJLspISmkkMzIyS6tYX/sN+fVNFH4tkQnRi086O7cCDMsqww47Ftb/JDG5gHQijGQ6hmxiBfn5x5BWn2Jh8y8yNjqKXe3tlQBGcdhHUHgYJXImguXlVeTyjyDJElL37yObXMTjWJhc99xAc7OhUgVGGfpqBIn4PJEWQ0iml5B9kMXcXByhcBSZRAKZoJ98/c018DxfeQPLgAW53ApJxFOQ0hLSqRRkWYaUlrCQTCFfeEJs1kFwlQCdTqcY+0y4e9dHfvj+DkKhewgGgwgEAggEgpiZ+Rmz0RgxGk2VL+A4Tunu/gI/3vmJTEyK8Hq9EEUvRFHEpOjFzfEJTE1Nk1OneqDX6ysDhw8fgcvpJDarDVaLBTabFTbbICwWKwasVjiGRsjRI8dgMFQYURAEZW9HBy5ZnaTn9Bn0mi7iXJ8ZvefPwnShD2dO92BooJ907N0HQ6UvcBz/+8cde9SLwdy73uFRdco/q96YDqk3x4dV8TuP6nGcU1dD5nf7Ow+oer3wagvQ0tLyRqvVoJFtAtPEgGEY8IIAXtBjZ0MjGpkGsLpGVFdXo7W19W+z2fw/QFEUpdVqr9TW1vo1VVV+mqbDNE1HampqonV1dRENTUdoWhOuqtL4NRqNv76+3k5R1DaKoqh/AOus3HSfnM0iAAAAAElFTkSuQmCC"},

{name: "iOS/微信浏览器",
ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X)AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B350MicroMessenger/4.5",
label: "iOS-MM",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAgAAAAIAAAl543UAAADwSURBVCjPtdFNK8MBAMDhZ5vkvV30D62m5fUiB681H0EpB19gpebiS3ARF3dxcOPgZlrIhYMrIVm0MKN5STGZg8+w3/m5/ah6EVNa5NFoxKhmRT+I6JWUUKZoU1hgw7N7L1a1IOVOwZNlpo1hwad53VZ8mxW4dGjQsH72Lepw4UAT4nJ29bm1rwPCRnRp0+bMBx7lxL1aNyZjTrTGPwv5BRUVlC24lLZkgE/bOuXsaUDMtax6EDjyFUZIXsa4Ge1SYnZUTEgI1Hrj3ZawLlklN0rWRCWcyXtwJx0yqeBERaukwJVjH+oM6VF26rz6r/wBo5JJ0SVt+rYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMDQtMDNUMTc6MTg6MDErMDg6MDDSRxDeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTAyLTI4VDE5OjU0OjU1KzA4OjAwXI2twAAAAE10RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi44LjgtNyBRMTYgeDg2XzY0IDIwMTQtMDItMjggaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmdZpF9/AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA1MTKPjVOBAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADUxMhx8A9wAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTM2MjA1MjQ5Nd0ggmMAAAATdEVYdFRodW1iOjpTaXplADEyLjdLQkJCclMLAAAAYnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vaG9tZS9mdHAvMTUyMC9lYXN5aWNvbi5jbi9lYXN5aWNvbi5jbi9jZG4taW1nLmVhc3lpY29uLmNuL3BuZy8xMDk3MS8xMDk3MTUwLnBuZ9oIJJMAAAAASUVORK5CYII="},

{name: "分隔线",},

/*//  伪装 Nokia E72
{  name: "Nokia",
ua: "Mozilla/5.0 (SymbianOS/9.3; Series60/3.2 NokiaE72-1/021.021; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.1.16352",
label: "Nokia",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/UlEQVQ4jaXTTUzTdwDG8e6ymO0wjdE5rPZf+f/+f0p9x2haeVkt4EsDCMqLOkAgWFGIOxg1MwozzrEpFCxvFYpS0FCoSGs0S8BNtxBFUEzIdBU06RZC0gU1btnFw9db1cRdtsNzeC6f0/NogA/+TzRvF9fAk0/sLSMlOTVD7rRTt4YtlTeC1sofgylVP41lnxnq3e28c8Decke8F+j5JRRnOTrwq1oWINruR7b7UfcFEGUB1LIAyl4/8l4/5kM/zGw9eTP/HSAUejHHVjkQXFzow2jvR190Gbm4D32RD22+F6nQR8yeKxjt/ailfawqv/oq88SgKQIcbBku0X/hxVDsQ93dQ0H1ILYjVyn8bpC26w8pd95CLvBiKO7FUOIjpqiXdeX+zgiws2rw/JK8SxgKupFyPNx/+JS//n5JeCbM71NTwD80+O4i5XSh5nej5ncTV+p7FAE+3+8bETmdqHldSJnnGR6f5PnLZ2yuuMiCTY10XhshPBMmdocHJfciSm4XKwovTUWAVbs8E0rWBWK2dyCltTL26ClXbtxnfmozC21uDpy+znR4muV57chZHajbOjDmembeANnuCTXDjZrhRtrUzOh4EE//baKSm9FudFFxKkDojxBLs84h0tyIDDexWe1vgOXpzjHZ1opic6FLdnJ7dJz23p9ZaHGitTay/+s+Hk8+Zml6M/JmF8LmIja9bToCGCxVXpHqQkltYlFSHXdHH+Dpucln8XVoE+upON7Dk8nfMG5xEm1tQk5pwrilJRgB5kXbKmJSWhGWsyxJdFB68ALZ9lZ0CXXok85iyW6g/CsP6gYHssWJYm1CWV/ljQAazSydMJ/8UyQ1IBJq0a6pRrv2e0SCA5HgQDKdISquGjm+FpFYj5pUz3x528Z3pvzRbDUjet03z9X4RpT19cgmB4qpBsVUgzDXIsx1qPENCHMNn+ozj773TJoP5xrmRCV/qzXuG9KtOByUVh8LSauPh3Qrj0wsWvblvXm6rY2zPl5s/dc3/pe8BiACa2LAfOYnAAAAAElFTkSuQmCC"},

//伪装 日本DoCoMo手机
{  name: "DoCoMo",
ua: "DoCoMo/1.0/P502i/c10 (Google CHTML Proxy/1.0)",
label: "DoCoMo",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXElEQVQ4jWM4w2D8nxLMMGoAwoCXk1f+P8Ng/P//////X05c/v+2Zy5pBvz//598F7ycuPw/DMDY14xjUPjYaLgBMHDbMxcrfcsDuzhRLoApRKYxXDA4onEEGwAAOydBL6/POBgAAAAASUVORK5CYII="},*/

{name: "UCBrowser",
ua: "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; Desktop) AppleWebKit/534.13 (KHTML, like Gecko) UCBrowser/8.9.0.251",
label: "UCBrowser",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVQ4jc2TsWoCQRCG9w0sgqX4CHZpfQrxGkOwC1jZKDY2NhIUUgTsghDBQgsLW21EqyuuEeGuMQge6+7tDcT6t7hweuqdB7GwGGaHYT6Y/59ljDFGRAjE7/72mwjs6nCMwdM6HBAz7gQQNlxjGmyaOmhjHevtGmrSgxp3QMv5GWC1AM8/gYTt7yiqWajRB4gIatIDf0lBfr7BGb5DtotngOU8HGAZ4FoS7mIUIaKphwKcfgO7UubSicgViI6Abg2i/HxDRFMHzyVAPyu/sStloMYduLMhuJYEWUa0jaKahWxqcI0pnK8K+Gvad0G2Ch5wNgCZupcv7kDYvsLOdz1o4Z8TslWAbGpe/8Eu8T+AyB8ZY/gAY1aTwt2Ru2IAAAAASUVORK5CYII="},

{name: "分隔线",},
{name : "BaiduYunGuanJia",
ua : "netdisk;4.4.0.6;PC;PC-Windows;6.2.9200;WindowsBaiduYunGuanJia",
label : "BaiduYunGuanJia",
img : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHElEQVR42p2UT2jTYADFPy8KbaUHD+JF7x48TBDFgR489bCBDgRFEQR31VEPUxT8j39wAxUU22oVNNNWFEQRYc0GG3MoznUZc6y21nZb0nZJviRNIoNnvoS4biqTBX6Q9773Xi4fIcFgMJxMJjlKqe08+B9YlnVCoVCYsBfLsrASWJeoqmovF/wXrEtM08JSqGGhR/iJM/3zuDAwDz5v4285hjNgopF63cTFPhP7nls4/s7Gsdc22lIWXo4vzvkQVmhEKBtovjuH6zx1dB2qXsfRlIqWpOzqpXnimR5GeRrDz3oRifYj/Wnut3/qlYSmLhFDRROKtpBnEMNwig7pUQ37H0kYaz0Cedce5Ns7IEyK4L+q2MtRRJ7oLgdf6Bgp6fB7zoCB7A+KrbdnceCphFLvICo3ulFo2onO1svYfHMazfdEcJ9VpL+o2H1fQuShCKqxEQNE1w3c6pOw4XwOwzkZuq67DLUcxvYTGWy69A3vxxf8bt7LjnxXwbpEc5bu8DNYHRWQ+iiC6apMsSOawZqTAh4Mep5PtiijnStCrFFXuwOFWRXrTgtY2zmGQ4/z2HJtAqQji3NvSk5IW0RB0hD7QFFTNG+AUg2MgakatsUKWHVlCuu7criamWF3Hv65z9vRKjaencBkWXE1qVSqdmNAUahzRf8sNuKfsy6Jx+McM1ZCIpHoIYFAIByLxTlJqtjLFXxYln2Y/Qp+AYT/fmUuqWWGAAAAAElFTkSuQmCC"
                    },

{name: "分隔线",},
// 伪装Firefox10.0
{  name: "Firefox10.0",
ua: "Mozilla/5.0 (Windows NT 6.1; rv:10.0.6) Gecko/20120716 Firefox/10.0.6",
label: "Firefox10.0",
img: "data:image/png;base64,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"},

/*{  name: "Firefox3.6-Linux",
ua: "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.8) Gecko/20100723 Ubuntu/10.04 (lucid) Firefox/3.6.8",
label: "Firefox-Linux",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAADUUlEQVQ4jc3SXUxScRjH8X9ZN23V1mpWd7a1VpFJByw00Cy0BlqtHZNKpYCDAvIumXD0oBw4iuABESUgTY/aWOvN3ldbbxdtXbW21tZNq81q666X7Rxe/t3EBbnWVVu/6+8+N88DwD/YkmMW3yap1rUZAAAAgi2vPONYidRja/MBgmKreQ3qYoCiRX9UOkcn1teZh94Q03cbEYVtbekxw2V5V/iVM3G1PN8k7r3kNXaPXOY1mowIhi1fhKAoWnTUHqBqzsXTaHcoVq0nn8k9c1BJJiO/t+5Lj7X7LMNQaqQcGBYrxIjY/IqqDmqhyh7NSmyjsOZsHB5yJr8o3eepilZLbcl+RfGvdGmzy1/imHnySNY7+dVEM/ICaDB1v0yk93NiywgnsY5y++wRttoe5SS2cYiSM596EvP1AAAgUlnWaL3j2+zxm31VjhhUBuYSBVB37NoJkSGQqTTRnNhCsxJrmBVbI7l65/h7V3Jen+/I2QfFXfHruLyTflnvnsqgXuZDAaSnZ84KOwLZPYYhrtIYZMVmOi3rji3o6DkLAACsQOo28NHT6wAAIHTj+WGpfSRzAJ+EDb3JbAGkIhNeRDeQLW8fYPfohrhK0zB7qj9+pyM8W7WpoV225UjbQ6mOCAEAQFf8Rs3Bc9GvB/ApKHPGYQFkCDJdfA2VE2A+VthGsbt1g2mh1vcDUbo+CzASNvQx382x+V4AANirdtn2O8ZgjTMJ5Xg8XXjSyZuy0lZ3DsG8HKIhWYGWYsvb/ZlqK/1NQU4+wRPXm6oJYlmJXKOps4c/SjqjWbEtChXU9OsCKJy6va4C6/tcqvbm+Op+FsF8HIJRnNQWfKcPzQaa8JETO5vMUwKNB+61RqDYGk6LjDQ0jV0L/v5nwDg8Q/BaemCpuj9bpupjd6lIlq/2ZnhKAvKUbrjbEIQVZjorMgZZoT4Aj/Scfxu6+hRZBIWZ26ua8LErvNYeuK2FgGUqT4avJjkE86YFWiot1A5wSNtgjo9RsNYe/uhhHhxfhOQ3MHd/o5qaiNRahxd2tOBwy0kX3NqMw+0tvZCnJGCF3g8V/ckX7ov3/ozkh6ZSRSaakesCjEfpu5g6SV642+yduIP5Z6fbhhgbPnFrx1+R/2I/AbJCenEQqVoaAAAAAElFTkSuQmCC"},

{  name: "Firefox3.6-Mac",
ua: "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.5; en-US; rv:1.9.2.8) Gecko/20100724 Firefox/3.6.8",
label: "Firefox-Mac",
img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADlElEQVQ4jW2TfVDTdQCHv1dd2Da2cMCGbxgshqPmXvhtv7Ht9zZ5VVeC44CBCHdJJ5r4R4BRRp3eefSmeXVUd3qeCUhKBxmYbJIYbMPxolididoVeWd3HSrINpZ8+q/TO5//n+e/h5BHaG4mT93/SasODaW/FvKlHA0Niz2hoRhvyLf6RNiXvnNuUK3t7CRPkyfxoD9Tv/BjwnDowpLF8MUYRHzPIhIQIRIQIexfgn/9MUAgBpELS6+EvAbhcbk7WX+vT353pk8G+GKB4FKE/EkIX0pCdDQJ4RElRjteQN9nqZg5J8PigCQ617067/9AtE8+NHg4GU3bs3C5XYOugzq0f2wEJtWIjqchOqZCsD0NJYUCqt0OXG9TItIrn/q7M0NC5k+r6MXv4tCxNxVGSy4YLg86yoF9dTpcO2NAeMyAhaAOMwPpCB5ZhcoiE7YWc5jtSsT8adVmMtu+sjZ8Uo6GKjNoKw+WZcGwLKxMDpp2sJgdNiPiNyF80YB7vWp8uUcL3pGHX1pXINyxooU8OJZ8eLpViU3redgZDjzPw2rnUOEScLVNj7teGrPnacx7jHh4ToPWBjPYnCJ8sycFkbZlJ8nsF4offm5ZhnUCA44TYDJbYMnMwPf703G/R4fwWQpzZ4yY71mLv46/jB1lVlj4DTiyaw1CXyV6yD+HFP2T7ymQw1vAcgJMZjMoisK+GhOOvkVjd7UDgU9NeNipxshHOjhyN4LPLkDPmy9i5mCil9w+sLz19/flqM5/CbSNB8dxsNsZGIwU8q1aNBWrce2DVPx5SIV3KgzgswvgLt4EX70Cdw4oT5HpZkXdH3vj8XnZcuhNNnAcD5blwLEMGl0anN29EufrU7HVmQWThUGeswg7X9Xjt8Y4TL+b9Am51ajkbjTEw789Di57GtZSVthsNtgZBlZGQM46AYLDAdrKwsoKyM524Gt3Am7Wy3GzPrGCDHDkmald8Zcna+PQVfo8CukUaLQGaI0mUHQWKNqKTIsNmVkMchgzWjYoMPG6DFN18tu/1sbKCSGE3KiROa5sky0EqmTocUnwtpCAQloFgdJAoDLgtKzBG/wqHHNK4dsSi6vb4nC9Rlr+2A8TVdLc8UrpLX+5FF6XGF1OEU6sF+N4gRinnM+hf7MII+WxmNgSe2e8Uup+4pHBjUQ0USbhR0sk+y+VSr7tfUXsGSwSe0ZKJN1jpeIPx9yifL+bSB91/gMKvPB030hdHgAAAABJRU5ErkJggg=="},*/
]