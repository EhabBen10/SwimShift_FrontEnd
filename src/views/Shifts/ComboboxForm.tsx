'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ChevronsUpDown, Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const names = [
  { label: 'Ehab' },
  { label: 'Signe' },
  { label: 'Jonas' },
  { label: 'Jakob B' },
  { label: 'Cecilie' },
  { label: 'Mikkel' },
  { label: 'Torben' },
  { label: 'Mads' },
  { label: 'Rasmus' },
  { label: 'Kira' },
  { label: 'Camilla' },
  { label: 'Christina M' },
  { label: 'Jakob M' },
  { label: 'Linea' },
] as const

const FormSchema = z.object({
  name: z.string({
    required_error: 'Please choose your name',
  }),
})
interface ComboboxFormProps {
  onSubmit: (employeeName: string) => void;
}

export function ComboboxForm(prop: ComboboxFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    prop.onSubmit(data.name);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-4 flex-grow justify-center flex mt-7 lg:mt-1">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className=" grow max-w-[600px]">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <FormLabel
                      role="combobox"
                      className={cn(
                        'rounded-full border border-secondary-border shadow-inner flex shadow-secondary py-1 px-4 w-full text-lg',
                        !field.value && 'text-muted-foreground',
                      )}>
                      {field.value
                        ? names.find((name) => name.label === field.value)
                          ?.label
                        : 'Select name'}
                      <ChevronsUpDown className="ml-auto" />
                    </FormLabel>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=" w-[200px] p-0">
                  <Command>
                    <CommandGroup>
                      {names.map((name) => (
                        <CommandItem
                          value={name.label}
                          key={name.label}
                          onSelect={() => {
                            form.setValue('name', name.label)
                          }}>
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              name.label === field.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {name.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={'ghost'}
          size={'icon'}
          className="flex-shrink-0">
          <Search className="text-gray-700" />
        </Button>
      </form>
    </Form >
  )
}
