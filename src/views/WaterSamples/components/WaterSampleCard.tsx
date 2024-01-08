import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function WaterSampleCard() {
    return (
        <Card className="lg:w-full">
            <CardHeader>
                <CardTitle>Vand prøve</CardTitle>
                <CardDescription>Her kan du skrive de forskellige vand prøver værdier</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full gap-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                        <Input id="AutoFritKlor" placeholder="AutoFritKlor" />
                        <Input id="AutoPH" placeholder="AutoPH" />
                        <Input id="FritKlor" placeholder="FritKlor" />
                        <Input id="Bundklor" placeholder="Bundklor" />
                        <Input id="Differace" placeholder="Differace" />
                        <Input id="Ph" placeholder="Ph" />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )

}