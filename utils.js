class utils{
    static sanitizer(url){
        if(url[0]=='/'){
            return url.substr(1)
        }else return url
    }

}
module.exports = utils