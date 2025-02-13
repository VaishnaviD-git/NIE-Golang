package main

import "fmt"

func main(){
	slice:=[]int{3,6,9}
	fmt.Println("Slice Elements before appending:", slice)
	
	slice=append(slice, 12)
	slice=append(slice, 15, 18, 21)

	fmt.Println("Slice Elments after appending:", slice)      //Appending Elements to Slice
	fmt.Print("\n")
	fmt.Println("Length of Slice:", len(slice))           // Length of Slice

//Copy the Slice
new:=make([]int, 5)
copy:=copy(new, slice)

fmt.Println("Slice Elements:", slice)
fmt.Println("New Slice:", new)
fmt.Println("Number of copied elements:", copy)

//Clear all elements
new=nil
fmt.Println("The New Slice is empty:", new)
}