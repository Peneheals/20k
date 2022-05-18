import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import cookieCutter from 'cookie-cutter'
import Banner from "../components/Banner"
import Button from '../components/Button'

const CookieBannerContainer = () => {
  const [cookieBannerVisible, setCookeBannerVisible] = useState(false)

  useEffect(() => {
    const isConsent = cookieCutter.get('consent')
    
    if (!isConsent){
      setTimeout(() => setCookeBannerVisible(true), 3000)
    }
  }, [])

  const handleConsent = useCallback(() => {
    setCookeBannerVisible(false)
    cookieCutter.set('consent', 'true')
  }, [])

  return (
    <Banner visible={cookieBannerVisible}>
      <p>Kedves Látogató! Tájékoztatjuk, hogy honlapunkon sütiket alkalmazunk, további részletekért kattintson a <Link href="/suti-szabalyzat">Sütiszabályzatunkra</Link>. A honlapunk további használatával Ön hozzájárul a sütik használatához.</p>
      <Button
        negative
        small
        onClick={handleConsent}
        >
        Összes süti elfogadása
      </Button>
    </Banner>
  )
}

export default CookieBannerContainer
