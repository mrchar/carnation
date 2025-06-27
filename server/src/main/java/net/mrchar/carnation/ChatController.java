package net.mrchar.carnation;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
  @MessageMapping("/chat/send")
  @SendTo("/topic/message")
  public Message send(Message message) {
    return message;
  }
}
