import {
  Checkbox,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function ToDoList() {
  const { t } = useTranslation("common");
  const [tasks, setTasks] = useState([
    { id: 1, text: t("Design_a_poster_for_a_company"), completed: true },
    { id: 2, text: t("Analyze_Data"), completed: false },
    { id: 3, text: t("YouTube_campaign"), completed: false },
    { id: 4, text: t("Assign_employee"), completed: false },
  ]);
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = (completedTasks / tasks.length) * 100;
  return (
    <div>
      <p className="h4">{t("To-do_list")}</p>
      <div className="d-flex gap-2 jstify-content-center align-items-center">
        <span style={{ width: "15%" }}> {progress}%</span>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            width: "85%",
            height: 10,
            borderRadius: 5,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#6950e8",
            },
          }}
        />
      </div>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} disablePadding>
            <ListItemIcon>
              <Checkbox
                edge="end"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                sx={{
                  "&.Mui-checked": {
                    color: "#6950e8",
                  },
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={task.text}
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "inherit",
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
