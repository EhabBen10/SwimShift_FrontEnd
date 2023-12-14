import { Label } from '@radix-ui/react-label'
import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card'

type ShiftGridItemProps = {
  Date: string
  Hours: string
  Time: string
  Description: string
}

export function ShiftGridItem({
  Date,
  Hours,
  Time,
  Description,
}: ShiftGridItemProps) {
  return (
    <Card className="flex flex-col gap-2 rounded-xl">
      <CardHeader>
        <CardTitle>Du skal arbejde denne dag</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{Date}</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">{Time}</Label>
              <Label htmlFor="framework">{Hours}</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardDescription>{Description}</CardDescription>
    </Card>
  )
}
