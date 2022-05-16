var minEatingSpeed = function(piles, h) {
    /*
        find maxPile
        hours per pile = Maht.ceil(h/piles.length)
        find maxK = (maxPile)/hours per pile
        
        binarySearch for minK from 1 to maxK
            low = 1
            high = maxK
            
            while (low <= high) {
                calculate mid
                
                if (kokoCanEat(piles, h, mid)) {
                    if (mid < minK) update minK
                    high = mid - 1
                } else {
                    low = mid + 1
                }
            }
        
        return minK

        function kokoCanEat(piles, h, k)
            i = 0 
            p = piles.slice()
            
            while (i < piles.length && h>=0)
                p[i] = p[i] - k  
                h--
                if (p[i] <=0) i++
            
            if i === piles.length
                return true
            
            else 
                return false
    */   
};