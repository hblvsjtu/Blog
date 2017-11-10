function fibonacci(n){
    if (n<2){
        return n;
    }else{
        return arguments.callee(n-1)+arguments.callee(n-2);
    }
};
onmessage=function (e) {
    var N=parseInt(e.data,10);
    postMessage(fibonacci(N));
}