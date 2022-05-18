import Button from "../../components/Button"
import * as gtag from '../../lib/gtag'
import * as fbq from '../../lib/fpixel'
import { useEffect, useState } from "react";

const getRegUrl = ({ refId, role }) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_REG_DOMAIN}/regisztracio`);

  const params = {
    ...(refId ? { ref_cd: refId } : {}),
    ...(role ? { role: 'r106' } : {}),
  }

  url.search = new URLSearchParams(params)
  return url.toString()
}

const RegButton = ({
  refId,
  role,
  children = 'Regisztrálok',
  ...rest
}) => {
  const [refIdFromSS, setRefIdFromSS] = useState()

  useEffect(() => {
    const refId = sessionStorage.getItem('refId')

    if (refId){
      setRefIdFromSS(refId)
    }
  }, [])

  const handleClick = () => {
    gtag.event('click_registration_button', {
      category: 'Jelentkezz',
    })
    fbq.event('Lead', { parameters: { refId, role }})
  }

  return (
    <a
      onClick={handleClick}
      href={getRegUrl({
        refId: refId || refIdFromSS,
        role
      })}
      target="_blank"
      rel="noopener"
      {...rest}
      >
      <Button submit>
        {children}
      </Button>
    </a>    
  )
}

export default RegButton
