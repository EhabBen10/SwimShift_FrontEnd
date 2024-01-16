
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from "@apollo/react-hooks"
import { uploadWaterSamples } from "../Mutations"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UploadToDbInput } from "@/gql/graphql"

const FormSchema = z.object({
    autoFritKlor: z.string().refine(value => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue)
    }, {
        message: "Intast venligest et tal",
    }),
    autoPh: z.string().refine(value => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue)
    }, {
        message: "Intast venligest et tal",
    }),
    fritKlor: z.string().refine(value => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue)
    }, {
        message: "Intast venligest et tal",
    }),
    bundklor: z.string().refine(value => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue)
    }, {
        message: "Intast venligest et tal",
    }),
    differace: z.string().refine(value => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue)
    }, {
        message: "Intast venligest et tal",
    }),
    ph: z.string().refine(value => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue)
    }, {
        message: "Intast venligest et tal",
    }),
    name: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    date: z.string(),
})

export function WaterSampleCard() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            autoFritKlor: "",
            autoPh: "",
            fritKlor: "",
            bundklor: "",
            differace: "",
            ph: "",
            date: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
        },
    })



    const [uploadToDB] = useMutation(uploadWaterSamples);


    function onSubmit(data: z.infer<typeof FormSchema>) {
        var now = new Date();
        var nowUtc = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
        var dataToUpload: UploadToDbInput = {
            autoFritKlor: parseFloat(data.autoFritKlor),
            autoPh: parseFloat(data.autoPh),
            fritKlor: parseFloat(data.fritKlor),
            bundklor: parseFloat(data.bundklor),
            differace: parseFloat(data.differace),
            ph: parseFloat(data.ph),
            name: data.name,
            imgUrl: "",
            waterSampleTime: nowUtc.toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
        };
        uploadToDB({ variables: { input: dataToUpload } });
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onReset={() => form.reset()}>
                <Card className="lg:w-full">
                    <CardHeader>
                        <CardTitle>Vand prøve</CardTitle>
                        <CardDescription>Her kan du skrive de forskellige vand prøver værdier</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full gap-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
                            <FormField
                                control={form.control}
                                name="autoFritKlor"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="AutoFritKlor" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="autoPh"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="AutoPH" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fritKlor"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="FritKlor" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="bundklor"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="Bundklor" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="differace"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="Differace" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ph"
                                rules={{
                                    required: 'This field is required',
                                    validate: value => {
                                        const numberValue = parseFloat(value);
                                        return !isNaN(numberValue) || 'Venligst indtast et tal';
                                    }
                                }}
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="Ph" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="Navn" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input placeholder="date" {...field} disabled />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button type="reset">Reset</Button>
                        <Button type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}