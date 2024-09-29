package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/hello/:name", func(c *fiber.Ctx) error {
		name := c.Params("name")

		return c.JSON(fiber.Map{
			"message": fmt.Sprintf("Hello %s", name),
		})
	})

	log.Fatal(app.Listen(":9090"))
}
