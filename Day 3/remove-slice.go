package main

import"fmt"

func main(){
	var num int
	fmt.Print("Enter thr size:")
	fmt.Scan(&num)

even:=make([]int, num)
fmt.Println("Enter the", num ,"elements:")

for i:=0;i<num;i++{
	fmt.Scan(&even[i])

}
fmt.Println("The Even Numbers are:", even)

var remove int
fmt.Println("Enter index to remove:")
fmt.Scan(&remove)

even = append(even[:remove], even[remove+1:]...) //Removing an element from Slice

fmt.Println("The Even Numbers after removing are:", even)

start, end := 0, 0
fmt.Println("Enter start and end of the index to remove:")
fmt.Scan(&start, &end)

even = append(even[:start], even[end:]...) //Removing an element from Slice

fmt.Println("The Even Numbers after removing are:", even)
}