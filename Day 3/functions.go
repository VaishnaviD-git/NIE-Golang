package main
import "fmt"

func add(a int, b int) int{
	return a + b
}

func swap(a , b string) (string, string){
	return b, a
}
func main() {
	x, y:=0, 0
	fmt.Println("Enter any 2 elements:")
	fmt.Scan(&x,&y)
	sum:=add(x,y)
	fmt.Println("The sum is:", sum)

first, last:= swap("Namaste", "America")
fmt.Println("Swapped:", first, last)


}