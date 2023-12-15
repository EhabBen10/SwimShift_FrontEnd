import { Home, Menu, Search, User } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ComboboxForm } from '@/views/eventsPage/ComboboxForm'
import { useSidebarContext } from '@/context/SideBarcontext'

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
  const { toggle } = useSidebarContext()

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 item-center flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex'
          }`}>
        <Button onClick={toggle} variant={'ghost'} size={'icon'} className="bg-transparent">
          <Menu className="text-black" />
        </Button>
        <a href="/" className="pt-2.5">
          <Home className="h-4"></Home>
        </a>
      </div>
      <ComboboxForm
        showFullWidthSearch={showFullWidthSearch}
        setShowFullWidthSearch={setShowFullWidthSearch}
      />
      <div
        className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? 'hidden' : 'flex'
          }`}>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="md:hidden bg-transparent"
          onClick={() => setShowFullWidthSearch(true)}>
          <Search className="text-black" />
        </Button>
        <Button variant={'ghost'} size={'icon'} className="bg-transparent">
          <User className="text-gray-700" />
        </Button>
      </div>
    </div>
  )
}
