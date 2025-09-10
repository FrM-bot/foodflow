import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Typography } from '@/components/ui/typography'
import { IconEdit, IconPhoto, IconPlus, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'

const ImageInput = ({ onChange }: { onChange?: (file?: File) => void }) => {
  const [imagePreview, setImagePreview] = useState<{
    file?: File
    preview?: string
  } | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview({
          file: file,
          preview: e.target?.result as string,
        })
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
    onChange?.(file)
  }
  return (
    <div>
      <Label className="block text-sm font-medium mb-2">Fondo</Label>
      <div className="space-y-2">
        {imagePreview ? (
          <picture className="relative shadow-lg">
            <img
              src={imagePreview.preview || '/placeholder.svg'}
              alt="Preview"
              className="w-full aspect-video object-cover rounded-md border"
            />
            <Button
              type="button"
              onClick={() => {
                setImagePreview(null)
                const input = document.getElementById('image-upload') as HTMLInputElement
                if (input) input.value = ''
              }}
              variant="destructive"
              className="absolute top-2 right-2 p-1 transition-colors"
              aria-label="Remove image"
              size="icon"
            >
              <IconTrash />
            </Button>
          </picture>
        ) : (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="image-upload"
            />
            <div className="border-2 border-dashed rounded-md flex items-center justify-center transition-colors aspect-video">
              <IconPhoto className="size-7" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function DialogEditCategory() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost">
            <IconEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar categoría</DialogTitle>
            <DialogDescription>Modifica los detalles de la categoría.</DialogDescription>
          </DialogHeader>
          <form className="max-w-xl mx-auto w-full" id="edit-category-form">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Nombre de la categoría
                </label>
                <Input type="text" id="name" placeholder="Ej: Bebidas" />
              </div>
              <ImageInput />
            </div>
          </form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit" form="edit-category-form">
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

const AddCategoryForm = () => {
  return (
    <Card>
      <form className="max-w-xl mx-auto w-full">
        <div className="mb-6">
          <Typography size="subtitle">Agregar categoría</Typography>
          <p className="text-sm text-muted-foreground">Complete todos los campos para agregar una nueva categoría.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre de la categoría
            </label>
            <Input type="text" id="name" placeholder="Ej: Bebidas" />
          </div>
          <ImageInput />
        </div>
        <Button type="submit" className="mt-6">
          <IconPlus className="mr-2" />
          Agregar categoría
        </Button>
      </form>
    </Card>
  )
}

const useMenu = () => {
  const [products, setProducts] = useState<
    Array<{ id: number; name: string; image: string; categoryId: number; price: number; description: string }>
  >([
    {
      id: 1,
      name: 'Vodka Absolut',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoryId: 1,
      price: 10,
      description: 'Bebidas refrescantes riquísimas',
    },
    {
      id: 1,
      name: 'Vodka Absolut',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoryId: 1,
      price: 10,
      description: 'Bebidas refrescantes riquísimas',
    },
    {
      id: 1,
      name: 'Hamburguesa Clásica',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categoryId: 2,
      price: 10,
      description: 'Bebidas refrescantes riquísimas',
    },
  ])

  const addProduct = (name: string, image: string, categoryId: number, price: number, description: string) => {
    const newProduct = { id: Date.now(), name, image, categoryId, price, description }
    setProducts((prev) => [...prev, newProduct])
  }

  return { products, setProducts, addProduct }
}

const useCategories = () => {
  const [categories, setCategories] = useState<Array<{ id: number; name: string; image: string }>>([
    {
      id: 1,
      name: 'Bebidas',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Comida',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ])

  const addCategory = (name: string, image: string) => {
    const newCategory = { id: Date.now(), name, image }
    setCategories((prev) => [...prev, newCategory])
  }

  return { categories, setCategories, addCategory }
}

export default function MenuPage() {
  const { categories } = useCategories()
  const { products } = useMenu()

  return (
    <div>
      <SiteHeader title="Categorías" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <AddCategoryForm />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <Typography as="h2" size="title">
                Categorías
              </Typography>
              <div className="grid grid-cols-1 gap-4">
                {categories.map((category) => (
                  <Card
                    key={category.id}
                    className="border rounded-md hover:shadow-lg transition-shadow cursor-pointer p-0 relative gap-0"
                  >
                    <picture className="relative h-fit">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-32 object-cover rounded-md rounded-b-none border-b"
                      />
                      <div className="absolute w-full h-full inset-0 grid place-content-center bg-background/50">
                        <Typography size="title">{category.name}</Typography>
                      </div>
                      <div className="absolute top-2 right-2">
                        <DialogEditCategory />
                      </div>
                    </picture>
                    <div className="">
                      <div className="flex justify-between items-center pb-2 p-4">
                        <Typography size="subtitle" className="">
                          Productos
                        </Typography>
                        {/* <DialogAddProduct /> */}
                      </div>
                      <ul className="flex flex-col pb-2">
                        {products
                          .filter((p) => p.categoryId === category.id)
                          .map((product) => (
                            <li
                              key={product.id}
                              className="gap-2 border-t w-full py-2 px-4 grid grid-cols-[120px_1fr] hover:bg-background transition-colors duration-200"
                            >
                              <picture>
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="aspect-square object-cover rounded-md h-full"
                                />
                              </picture>
                              <div>
                                <h3 className="font-medium">{product.name}</h3>
                                <p className="text-sm text-muted-foreground">{product.description}</p>
                                <p className="mt-1 font-medium">${product.price.toFixed(2)}</p>
                              </div>
                              {/* <div>
                                                            <Button variant="destructive" size="icon">
                                                                <IconTrash />

                                                            </Button>
                                                        </div> */}
                              {/* <CardHeader>
                                                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-2" />
                                                        </CardHeader>
                                                        <CardContent>
                                                            <CardTitle>{product.name}</CardTitle>
                                                            <CardDescription>{product.description}</CardDescription>
                                                        </CardContent>
                                                        <CardFooter>
                                                            <p className="mt-1 font-medium">${product.price.toFixed(2)}</p>
                                                        </CardFooter> */}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
