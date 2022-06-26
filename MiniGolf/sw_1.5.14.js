self.addEventListener('install',function(){
    console.log('SW installed...');
});

self.addEventListener('activate',function(){
    console.log('SW Activated....');
});
self.addEventListener('fetch', function(event) {
    event.respondWith(async function() {
       try{
         var res = await fetch(event.request);
         return res;
       }
       catch(error){
         return null;
        }
      }());
  });