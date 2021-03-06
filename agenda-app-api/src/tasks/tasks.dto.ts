class CreateTaskDTO {
    public color: string;
    public date: string;
    public details: string;
    public resume: string;
}

class EditTaskDTO {
    public id?: number;
    public color: string;
    public date: string;
    public details: string;
    public resume: string;
    public done: boolean;
}

export { CreateTaskDTO, EditTaskDTO };
