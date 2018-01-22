/**
 * Created by seelee on 2018/1/12.
 */
var adminApp = angular.module("myApp", ["ui.router", "oc.lazyLoad", "ngCookies"]);

adminApp.config(function ($stateProvider, $urlRouterProvider) {

    //配置懒加载
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "view/home.html",
            controller: "homeCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    'script/controller/home.js',
                    'style/home.css'
                ])
            }
        })
        // //签到
        // .state("sign", {
        //     url: "/sign",
        //     templateUrl: "view/template/sign/sign.html",
        //     controller: "signCtrl",
        //     resolve: {
        //         loadMyFile: _lazyLoad([
        //             'script/controller/sign.js'
        //         ])
        //     }
        // })
        //学生证
        .state("card", {
            url: "/card",
            templateUrl: "view/template/card/card.html",
            controller: "cardCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    "script/controller/card/card.js",
                    "style/template/card/card.css"
                ])
            }
        })
        //学生证编辑
        .state("cardEdit", {
            url: "/cardEdit",
            templateUrl: "view/template/card/cardEdit.html",
            controller: "editCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    "script/controller/card/cardEdit.js",
                    "style/template/card/card.css",
                    "libs/iscroll.js"
                ])
            }
        })
        //我的收藏
        .state("collection", {
            url: "/collection",
            templateUrl: "view/template/card/cardCollection.html",
            controller: "collectionCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    "script/controller/card/collection.js"
                ])
            }
        })
        //文学部
        .state("article", {
            url: "/article",
            templateUrl: "view/template/article/articleList.html",
            controller: "articleCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    "script/controller/article/article.js",
                    "style/template/card/card.css"
                ])
            }
        })
        //影视部
        .state("video", {
            url: "/video",
            templateUrl: "view/template/video/videoList.html",
            controller: "videoCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    "script/controller/video/video.js"
                ])
            }
        })
});