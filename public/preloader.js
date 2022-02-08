let  images = document.images,
    imagesTotalCount = images.length,
    imagesLoadCount = 0;
    percDisplay = document.getElementById('load_perc');

for( let i =0; i <imagesTotalCount; i++)
{
    imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
}


function imageLoaded()
{
    imagesLoadCount++;

    percDisplay.innerHTML = (( (100/imagesTotalCount)* imagesLoadCount) << 0) + '%';

    if( imagesLoadCount >= imagesTotalCount)
    {
        setTimeout(function() {
            let preloader = document.getElementById('page_preloader');
    
            if ( !preloader.classList.contains('done'))
            {
                preloader.classList.add('done');
            }
    
        }, 1000);
    }

}



