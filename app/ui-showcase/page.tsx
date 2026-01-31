"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, ChevronRight, ChevronsUpDown, Plus, Search, Settings, User, Bell, Calendar as CalendarIcon, CreditCard, Mail, MessageSquare, Moon, Sun, Terminal, Trash, Upload } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function UIShowcasePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [progress, setProgress] = useState(60)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">UI Component Showcase</h1>
              <p className="text-muted-foreground">All shadcn/ui components available in this project</p>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Buttons */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Buttons</h2>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> With Icon
                </Button>
              </div>
            </section>

            {/* Badges */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Badges</h2>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>

            {/* Avatar */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Avatar</h2>
              <div className="flex flex-wrap gap-4 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>RA</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </section>

            {/* Cards */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Cards</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">Card content with some example text.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>You have 3 unread messages</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">New comment on your post</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">Reply from team member</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Inputs & Form Elements */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Inputs & Forms</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled</Label>
                  <Input id="disabled" disabled placeholder="Disabled input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here" />
                </div>
                <div className="space-y-2">
                  <Label>Select Option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Checkbox, Radio, Switch */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Checkbox, Radio & Switch</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Checkboxes</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Radio Group</h3>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Option Two</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Switch</h3>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="dark-mode" defaultChecked />
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                  </div>
                </div>
              </div>
            </section>

            {/* Slider & Progress */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Slider & Progress</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label>Slider: {progress}%</Label>
                  <Slider
                    value={[progress]}
                    onValueChange={(value) => setProgress(value[0])}
                    max={100}
                    step={1}
                  />
                </div>
                <div className="space-y-4">
                  <Label>Progress: {progress}%</Label>
                  <Progress value={progress} />
                </div>
              </div>
            </section>

            {/* Accordion */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Accordion</h2>
              <Accordion type="single" collapsible className="w-full max-w-lg">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles using Tailwind CSS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Smooth animations are included by default.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Tabs */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Tabs</h2>
              <Tabs defaultValue="account" className="w-full max-w-lg">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="p-4 border border-border rounded-md mt-2">
                  <p className="text-foreground">Manage your account settings and preferences.</p>
                </TabsContent>
                <TabsContent value="password" className="p-4 border border-border rounded-md mt-2">
                  <p className="text-foreground">Change your password and security settings.</p>
                </TabsContent>
                <TabsContent value="settings" className="p-4 border border-border rounded-md mt-2">
                  <p className="text-foreground">Configure application settings.</p>
                </TabsContent>
              </Tabs>
            </section>

            {/* Alerts */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Alerts</h2>
              <div className="space-y-4 max-w-lg">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the CLI.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            {/* Dialog & Alert Dialog */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Dialog & Alert Dialog</h2>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Rackan Abughazal" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@rackan" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Item</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your data.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>

            {/* Dropdown Menu */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Dropdown Menu</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Open Menu
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete Account
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </section>

            {/* Popover & Hover Card */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Popover & Hover Card</h2>
              <div className="flex flex-wrap gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none text-foreground">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2 pt-4">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Height</Label>
                        <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@rackan</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback>RA</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-foreground">@rackan</h4>
                        <p className="text-sm text-muted-foreground">
                          Mechatronics Engineering student at McMaster University.
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Joined December 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </section>

            {/* Calendar */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-border"
              />
            </section>

            {/* Table */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Table</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Tesla CyberCab Fixtures</TableCell>
                    <TableCell><Badge>Active</Badge></TableCell>
                    <TableCell>85%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">C# Scheduling Platform</TableCell>
                    <TableCell><Badge variant="secondary">Completed</Badge></TableCell>
                    <TableCell>100%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PLC Automation</TableCell>
                    <TableCell><Badge>Active</Badge></TableCell>
                    <TableCell>60%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>

            {/* Skeleton */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Skeleton</h2>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </section>

            {/* Tooltip */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Tooltip</h2>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add new item</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>

            {/* Toggle */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Toggle</h2>
              <div className="flex gap-4">
                <Toggle aria-label="Toggle italic">
                  <Sun className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle bold" defaultPressed>
                  <Moon className="h-4 w-4" />
                </Toggle>
              </div>
            </section>

            {/* Collapsible */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Collapsible</h2>
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full max-w-lg space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    @peduarte starred 3 repositories
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">
                  @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Scroll Area */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Scroll Area</h2>
              <ScrollArea className="h-72 w-full max-w-lg rounded-md border border-border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm text-foreground">
                      Scrollable content item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </section>

            {/* Separator */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b border-border pb-2 text-foreground">Separator</h2>
              <div className="max-w-lg">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none text-foreground">Radix Primitives</h4>
                  <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div className="text-foreground">Blog</div>
                  <Separator orientation="vertical" />
                  <div className="text-foreground">Docs</div>
                  <Separator orientation="vertical" />
                  <div className="text-foreground">Source</div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
