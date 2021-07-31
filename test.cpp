#include<stdio.h>
#include<stdlib.h>
#include<malloc.h>

struct node{
	int data;
	struct node *prev;
	struct node *next;
};
typedef struct node Nodetype;
Nodetype *head = 0, *temp, *newnode;


void insertatfront(){
	newnode = (Nodetype*)malloc(sizeof(Nodetype));
	printf("Enter a data to be inserted \n");
	scanf("%d", &newnode->data);
	if(head == 0)
	printf("List is empty \n");
	else{
		head->prev = newnode;
		newnode->next = head;
		newnode->prev = 0;
		head = newnode;
	}
	
}

void insertatend(){
	newnode = (Nodetype*)malloc(sizeof(Nodetype));
	printf("Enter a data to be inserted \n");
	scanf("%d", &newnode->data);
	if(head == 0)
	printf("List is empty \n");
	else{
		temp = head;
		while(temp->next != 0){
			temp = temp->next;
		}
		temp->next = newnode;
		newnode->prev = temp;
		newnode->next = 0;
		temp = newnode;
	}
	
}

void deletefromfront(){
	temp = head;
	head = head->next;
	free(temp);
	
}

void deletefromend(){
	temp = head;
	while(temp->next->next != 0){
		temp = temp->next;
	}
	temp->next = 0;
}
void display(){
	temp = head;
	while(temp!= 0){
		printf("%d \t", temp->data);
		temp = temp->next;
	}
	printf("\n");
	
}

int main(){
	int n,i, choice;
	printf("Enter the size of linked list \n");
	scanf("%d", &n);
	for(i = 0; i<n; i++){
		printf("Enter a linked list data \n");
		newnode = (Nodetype*)malloc(sizeof(Nodetype));
		scanf("%d",&newnode->data);
		if(head == 0){
			newnode->next = newnode->prev = 0;
			head = newnode;
		}
		else{
			temp = head;
			while(temp->next != 0){
				temp = temp->next;
			}
			temp->next = newnode;
			newnode->next = 0;
			newnode->prev = temp;
			temp = newnode;
		}
	}
	do{
		printf("MENU for operation \n");
		printf(" 1: Insert at front \n 2: Insert at end \n 3: Delete from front \n 4: Delete from End \n 5: Display \n 6: Exit \n");
  		scanf("%d", &choice);
		  switch(choice){
		  	case 1:
		  		insertatfront();
		  		break;
		  		case 2:
		  			insertatend();
		  			break;
		  			case 3:
		  				deletefromfront();
		  				break;
		  				case 4:
		  					deletefromend();
		  					break;
		  					case 5:
		  						display();
		  						break;
		  						case 6:
		  							exit;
		  }	
	}
	while(choice!= 6);
}


