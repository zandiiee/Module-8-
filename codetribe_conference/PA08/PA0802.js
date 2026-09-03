//This creates a name for our cache

// PA0802 AND PA0803
const CACHE_NAME ="Tech conference"

// this is the list of files that should be cached

const filesToCache = [
    "index.html",
    "style.css",
    "app.js" 
]


// save important files in the cache

self.addEventListener("inatall", function(event){
    event.waitUntil(
        
        cache.open(CACHE_NAME)
        .then(function(cache){
            console.log("CACHING WEBSITE FILE...." + cache)

                return cache.addAll(filesToCache)

        })

    )


})