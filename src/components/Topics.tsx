import React from "react";
import { speechTopic } from "~/utils/SpeechTopic";
import { Card, CardContent } from "~/components/ui/Card";

const Topics = () => {
  return (
    <Card>
      <CardContent className="px-4 py-4">
        {speechTopic.map((topic) => {
          return (
            <div
              className="my-2 rounded-lg px-4 py-1 duration-100 ease-linear hover:bg-slate-200"
              key={topic.key}
            >
              {topic.title}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Topics;
