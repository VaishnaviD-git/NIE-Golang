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
fmt.Println("The Even Numbersare:", even)
}