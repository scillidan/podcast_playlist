var minMaxFilterEditor = function (cell, onRendered, success, cancel, editorParams) {
    var end;
    var container = document.createElement("span");
    var start = document.createElement("input");
    start.setAttribute("type", "number");
    start.setAttribute("placeholder", "Min");
    start.setAttribute("min", 0);
    start.setAttribute("max", 100);
    start.style.padding = "4px";
    start.style.width = "50%";
    start.style.boxSizing = "border-box";
    start.value = cell.getValue();
    function buildValues() {
        success({
            start: start.value,
            end: end.value,
        });
    }
    function keypress(e) {
        if (e.keyCode == 13) {
            buildValues();
        }

        if (e.keyCode == 27) {
            cancel();
        }
    }
    end = start.cloneNode();
    end.setAttribute("placeholder", "Max");
    start.addEventListener("change", buildValues);
    start.addEventListener("blur", buildValues);
    start.addEventListener("keydown", keypress);
    end.addEventListener("change", buildValues);
    end.addEventListener("blur", buildValues);
    end.addEventListener("keydown", keypress);
    container.appendChild(start);
    container.appendChild(end);
    return container;
};
function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams) {
    if (rowValue) {
        if (headerValue.start != "") {
            if (headerValue.end != "") {
                return rowValue >= headerValue.start && rowValue <= headerValue.end;
            } else {
                return rowValue >= headerValue.start;
            }
        } else {
            if (headerValue.end != "") {
                return rowValue <= headerValue.end;
            }
        }
    }
    return true;
}

var table = [
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/beiwanglu_159.ogg \"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/772244974\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"贝望录", ep:"159", tit:"用5000粉丝也可以撬动百万GMV？又一个经典的小而美事业"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/beiwanglu_153.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/753841766\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"贝望录", ep:"153", tit:"用户体验设计是品牌增长的制胜法宝吗？"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/beiwanglu_131.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/695946420\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"贝望录", ep:"131", tit:"“预制菜”的江湖，和你想的不一样"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/wuhoupianjian_032.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/695900385\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右(午后偏见)", ep:"032", tit:"与自然科普达人何鑫聊流浪动物问题与野生动物保护"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_257.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/647823762\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"257", tit:"小麦、海洋与热浪：土摩托谈人类面对的地球危机"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_14.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrjfinale\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p14", tit:"汉水日记终章：捕鸽行动"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_13.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrjdpl2\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p13", tit:"汉水日记读评论之二"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_12.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrjdpl1\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p12", tit:"汉水日记读评论之一"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_11.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj11\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p11", tit:"汉水日记之十一：行到水穷处"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_10.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj10\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p10", tit:"汉水日记之十：石泉到汉中"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_09.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj9\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p09", tit:"汉水日记之九：紫阳到石泉"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_08.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj8\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p08", tit:"汉水日记之八：旬阳到紫阳"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_07.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj7\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p07", tit:"汉水日记之七：郧阳到旬阳"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_06.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj6\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p06", tit:"汉水日记之六：从老河口到郧阳"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_05.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj5\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p05", tit:"汉水日记之五：坝上坝下"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_04.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj4\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p04", tit:"汉江日记之四：宜城到老河口"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_03.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj3\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p03", tit:"汉江日记之三：潜江到宜城"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_02.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj2\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p02", tit:"汉水日记之二：汉口到潜江"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bowuzhi_hsrj_01.ogg\"></audio>", stdby:"<a href=\"https://bowuzhi.fm/episodes/hsrj1\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"博物志", ep:"p01", tit:"汉水日记之一：汉口"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/shijiemomingqimiaowuyu_153.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/738246011\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"世界莫名其妙物语", ep:"153", tit:"选这专业你后悔吗？"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/shijiemomingqimiaowuyu_020.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/346783215\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"世界莫名其妙物语", ep:"020", tit:"露营真人秀，主播捡树枝"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/tiandiwuyong_20200226.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/259348752\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"天地无用", ep:"\\", tit:"《电脑线圈》，5G小战争"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bbpark_360.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/413653901\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"日谈公园", ep:"360", tit:"大阪网吧纵火案"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_109.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/344705229\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"109", tit:"徐英瑾：《白色巨塔》其实是一部哲学剧"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_20220913.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/568936862\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"\\", tit:"线下录音｜与郭玉洁、btr漫谈冯内古特"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_015.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/335613543\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"015", tit:"陆大鹏谈当代德奥君主复辟运动"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_096.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/318659137\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"096", tit:"战斗机器哈贝马斯和战后德国公共讨论的形成"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_162.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/474954673\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"162", tit:"漫谈「美好年代」：普鲁斯特与第三共和国"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_085.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/292041868\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"085", tit:"19世纪欧洲军队的鄙视链"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_132.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/400207525\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"132", tit:"被发明的「海军传统」"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_075.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/255418363\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"075", tit:"拿破仑、睡狮论和师编制的诞生"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/wuhoupianjian_014.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/493367461\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右(午后偏见)", ep:"014", tit:"串台《世界莫名其妙物语》，聊德国文化八卦"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_098.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/321055608\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"098", tit:"「漫长的十九世纪」和被它淹没的人们"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_179.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/523041004\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"179", tit:"高林漫谈十九世纪「四大发明」"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_106.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/334403038\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"106", tit:"与高林漫谈19世纪法国文学兴衰"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_136.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/411685636\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"136", tit:"与高林漫谈法国大革命前夕的阅读世界"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/wuhoupianjian_017.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/561603161\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右(午后偏见)", ep:"017", tit:"从贝多芬和莫扎特看德意志世界"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_155.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/453144474\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"155", tit:"彼得布朗与他的古代晚期世界"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_013.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/86433371\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"013", tit:"被现代日本「冷落」的明治维新"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_105.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/333550500\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"105", tit:"四行仓库其实就是缩小版的中国抗战"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_330.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/732916527\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"330", tit:"许知远：每一代人都需要积极的智力的回应者"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_365.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/778416254\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"365", tit:"黄龙旗为何陨落：与陈悦漫谈甲午战争130周年"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_205.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/578824638\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"205", tit:"近代亚洲城际之争"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_060.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/219447018\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"060", tit:"右翼思潮在东亚的全盛时代"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_004.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/73056339\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"004", tit:"「昭和维新」背后的浪漫与黑暗"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_125.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/376108689\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"125", tit:"明治天皇与旁观者睦仁"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_123.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/373703425\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"123", tit:"北条时宗的挑战：从《对马岛之魂》聊历史上的元日战争"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_167.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/488972268\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"167", tit:"平家与源氏：从2021年的一部番剧聊起"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_201.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/572600312\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"201", tit:"与郭建龙漫谈唐玄宗与开天盛世的崩溃"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_206.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/579926641\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"206", tit:"西非的衰落与周天子的礼物"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/left-right_143.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/426653146\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"忽左忽右", ep:"143", tit:"春秋人的失败与伟大"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/tianshuguangbo_064.ogg\"></audio>", stdby:"<a href=\"https://www.tianshuguangbo.com/blog/2021/1/30/lxiv-\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"天书广播", ep:"064", tit:"伊朗核协议"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/bbpark_321.ogg\"></audio>", stdby:"<a href=\"https://www.ximalaya.com/sound/358007130\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"日谈公园", ep:"321", tit:"送别哈佛大博士，最后一次聊伊朗"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/tianshuguangbo_068.ogg\"></audio>", stdby:"<a href=\"https://www.tianshuguangbo.com/blog/2021/3/20/lxviii-\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"天书广播", ep:"068", tit:"赫梯"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/tianshuguangbo_065.ogg\"></audio>", stdby:"<a href=\"https://www.tianshuguangbo.com/blog/2021/2/12/lxv-\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"天书广播", ep:"065", tit:"圣经咋读？"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/tianshuguangbo_040.ogg\"></audio>", stdby:"<a href=\"https://www.tianshuguangbo.com/blog/2018/8/7/xl-\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"天书广播", ep:"040", tit:"古波斯历史迷思"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/tianshuguangbo_002.ogg\"></audio>", stdby:"<a href=\"https://www.tianshuguangbo.com/blog/2015/7/29/ii-1\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"天书广播", ep:"002", tit:"从亚述到伊比利亚"},
    {aud:"<audio controls preload=\"none\" src=\"https://raw.githubusercontent.com/scillidan/media_podcast/main/tianshuguangbo_016.ogg\"></audio>", stdby:"<a href=\"https://www.tianshuguangbo.com/blog/15\" target=\"_blank\" rel=\"noopener\">Standby</a>", pod:"天书广播", ep:"016", tit:"破译线形文字B"}
];

var table = new Tabulator("#cumaean", {
    layout:"fitColumns",
    // pagination:"local",
    // paginationSize:20,
    // paginationSizeSelector:[10, 15, 20],
    movableColumns:true,
    paginationCounter:"rows",
    data:table,
    columns:[
        {title:"audio", field:"aud", width:500, formatter:"html"},
        // {title:"standby", field:"stdby", width:180, formatter:"html"},
        {title:"podcast", field:"pod", width:170, formatter:"html", headerFilter:"input"},
        {title:"episode", field:"ep", width:100, formatter:"html", headerFilter:"input"},
        {title:"title", field:"tit", width:460, formatter:"html", headerFilter:"input"},
    ],
});

// https://stackoverflow.com/questions/19790506/multiple-audio-html-auto-stop-other-when-current-is-playing-with-javascript

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);